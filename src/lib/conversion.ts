/**
 * Google Ads conversion tracking helpers — Tristar Locksmith
 * Tag: AW-18165468053
 *
 * SETUP INSTRUCTIONS:
 * 1. In Google Ads, go to Goals → Conversions → New conversion action
 * 2. Create "Lead Form Submit" → copy the Conversion Label → paste below
 * 3. Create "Phone Call Click" → copy the Conversion Label → paste below
 * 4. Once labels are filled, conversions fire automatically on form success + call clicks
 */

import { trackConversionWithVariant, peekVariant } from "@/lib/experiment";

// TODO: paste your Google Ads conversion labels here after creating them in your account
const CONVERSION_LABELS = {
  /** Fires when the lead form is submitted successfully */
  leadFormSubmit: "REPLACE_WITH_LABEL", // e.g. "abc123XYZ"
  /** Fires when the click-to-call phone link is clicked */
  phoneCall: "REPLACE_WITH_LABEL", // e.g. "def456ABC"
} as const;

const ADS_ID = "AW-18165468053";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function fireAdsConversion(label: string): void {
  // No-op if label hasn't been filled in yet, or if gtag isn't loaded
  if (
    !label ||
    label === "REPLACE_WITH_LABEL" ||
    typeof window === "undefined" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }
  window.gtag("event", "conversion", {
    send_to: `${ADS_ID}/${label}`,
  });
}

/**
 * Call this when the lead form submits successfully.
 * Fires:
 *   1. GA4 "lead_submit" event with A/B variant attribution — only when the visitor
 *      was actually assigned to the lp_hero experiment (i.e. visited an /lp/* page).
 *      Guards against polluting the experiment with non-landing-page conversions.
 *   2. Google Ads "conversion" send_to (once Ads labels are filled)
 */
export function fireLeadConversion(): void {
  // Only attribute to the experiment if the visitor has an active lp_hero cookie.
  // Without this guard, form submissions from the 162 service-city pages and blog
  // would inflate variant A's count and corrupt the A/B results.
  if (peekVariant("lp_hero") !== null) {
    trackConversionWithVariant("lead_submit", "lp_hero");
  }
  fireAdsConversion(CONVERSION_LABELS.leadFormSubmit);
}

/**
 * Call this when a phone call CTA is clicked.
 * Fires:
 *   1. GA4 "phone_click" event with A/B variant attribution — only for lp_hero
 *      experiment participants (visitors who saw an /lp/* hero variant).
 *   2. Google Ads "conversion" send_to (once Ads labels are filled)
 */
export function firePhoneConversion(): void {
  if (peekVariant("lp_hero") !== null) {
    trackConversionWithVariant("phone_click", "lp_hero");
  }
  fireAdsConversion(CONVERSION_LABELS.phoneCall);
}
