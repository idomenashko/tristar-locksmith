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

function fireConversion(label: string): void {
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

/** Call this when the lead form submits successfully */
export function fireLeadConversion(): void {
  fireConversion(CONVERSION_LABELS.leadFormSubmit);
}

/** Call this when a phone call CTA is clicked */
export function firePhoneConversion(): void {
  fireConversion(CONVERSION_LABELS.phoneCall);
}
