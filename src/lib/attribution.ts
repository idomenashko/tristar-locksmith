/**
 * Ad-click attribution capture — Tristar Locksmith
 *
 * On the first landing from a paid click, we read the GCLID + UTM params from the
 * URL and pin them to a cookie (first-touch, 90-day TTL). When a visitor later
 * submits the lead form, we attach this data to the lead email so each lead shows
 * exactly which campaign / keyword / ad produced it.
 *
 * Cookie: tl_attr (JSON). Client-side only.
 */

const COOKIE = "tl_attr";
const TTL_DAYS = 90;

export interface Attribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing?: string;
  ts?: string;
}

const PARAM_KEYS: (keyof Attribution)[] = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((r) => r.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
}

function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Capture attribution from the current URL into the cookie if not already set
 * (first-touch). Safe to call on every page load. No-op when no ad params present
 * and no existing cookie.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  // First-touch: keep the original click's attribution.
  if (readCookie(COOKIE)) return;

  const params = new URLSearchParams(window.location.search);
  const data: Attribution = {};
  let hasAdSignal = false;

  for (const key of PARAM_KEYS) {
    const val = params.get(key);
    if (val) {
      data[key] = val.slice(0, 200);
      if (key === "gclid" || key === "gbraid" || key === "wbraid" || key === "utm_source") {
        hasAdSignal = true;
      }
    }
  }

  if (!hasAdSignal) return; // organic visit — don't write a cookie

  data.landing = window.location.pathname.slice(0, 200);
  data.ts = new Date().toISOString();
  writeCookie(COOKIE, JSON.stringify(data), TTL_DAYS);
}

/** Read the stored attribution. Returns null if none. */
export function getAttribution(): Attribution | null {
  const raw = readCookie(COOKIE);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return null;
  }
}
