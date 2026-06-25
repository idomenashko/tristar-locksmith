/**
 * Lightweight A/B experiment framework — Tristar Locksmith
 *
 * - Cookie-pinned 50/50 assignment (1-year TTL)
 * - GA4 impression events fire on assignment
 * - Conversion events (lead_submit, phone_click) carry variant param
 *   so you can segment in GA4 even before Ads conversion labels are filled in.
 *
 * Cookie name format: tl_exp_<expId>
 * Variants: "A" (default / control) or "B" (challenger)
 */

export type Variant = "A" | "B";

const COOKIE_PREFIX = "tl_exp_";
const COOKIE_TTL_DAYS = 365;

/** Read a cookie by name. Returns null in SSR. */
function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

/** Write a cookie for `days` days. No-op in SSR. */
function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Get (or assign) the visitor's variant for an experiment.
 * Must be called client-side only (reads/writes cookies).
 * Returns "A" for unassigned visitors in SSR.
 */
export function getVariant(expId: string): Variant {
  if (typeof document === "undefined") return "A";

  const cookieName = `${COOKIE_PREFIX}${expId}`;
  const existing = readCookie(cookieName);

  if (existing === "A" || existing === "B") return existing;

  // New visitor — assign 50/50
  const assigned: Variant = Math.random() < 0.5 ? "A" : "B";
  writeCookie(cookieName, assigned, COOKIE_TTL_DAYS);
  return assigned;
}

/** Read the stored variant without re-assigning. Returns null if unassigned. */
export function peekVariant(expId: string): Variant | null {
  if (typeof document === "undefined") return null;
  const val = readCookie(`${COOKIE_PREFIX}${expId}`);
  return val === "A" || val === "B" ? val : null;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Fire a GA4 event recording the experiment impression.
 * Safe to call multiple times — GA4 deduplication handles it.
 */
export function trackExperimentImpression(expId: string, variant: Variant): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "experiment_impression", {
    experiment_id: expId,
    variant_id: variant,
  });
}

/**
 * Fire a GA4 conversion event attributed to a variant.
 * Called from conversion.ts wrappers — do not call directly.
 */
export function trackConversionWithVariant(
  eventName: "lead_submit" | "phone_click",
  expId: string
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const variant = peekVariant(expId) ?? "A";
  window.gtag("event", eventName, {
    experiment_id: expId,
    variant_id: variant,
  });
}
