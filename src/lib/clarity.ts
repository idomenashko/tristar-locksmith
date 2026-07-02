/**
 * Microsoft Clarity custom session tagging — Tristar Locksmith
 *
 * Tags each /lp/* Clarity session with campaign/ad-group/keyword/city so
 * heatmaps and recordings can be filtered by traffic source in the Clarity
 * dashboard, not just by landing page URL.
 */

import { getAttribution, readCookie } from "./attribution";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

const CITY_COOKIE = "tl_city";

export function tagClaritySession(): void {
  if (typeof window === "undefined" || typeof window.clarity !== "function") return;

  const attr = getAttribution();
  if (attr) {
    if (attr.utm_campaign) window.clarity("set", "campaign_id", attr.utm_campaign);
    if (attr.utm_content) window.clarity("set", "adgroup_id", attr.utm_content);
    if (attr.utm_term) window.clarity("set", "keyword", attr.utm_term);
    if (attr.gclid) window.clarity("set", "gclid", attr.gclid);
  }

  const city = readCookie(CITY_COOKIE);
  if (city) window.clarity("set", "city", city);
}
