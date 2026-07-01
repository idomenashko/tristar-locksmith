"use client";

import { firePhoneConversion } from "@/lib/conversion";

/**
 * Mobile sticky call bar for /lp pages. Fires the Google Ads phone-call
 * conversion on tap — most lockout calls come from mobile, so this is the
 * highest-volume call conversion on the landing pages.
 */
export function LandingStickyCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-emergency"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href="tel:8653463573"
        onClick={firePhoneConversion}
        className="flex items-center justify-center gap-3 text-white font-bold text-lg h-14"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call (865) 346-3573
      </a>
    </div>
  );
}
