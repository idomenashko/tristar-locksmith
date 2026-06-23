"use client";

import Image from "next/image";
import { firePhoneConversion } from "@/lib/conversion";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo — links back to main site */}
        <a href="https://tristarlocksmith.com" aria-label="Tristar Locksmith — Home">
          <Image
            src="/images/lp/logo-transparent.png"
            alt="Tristar Locksmith"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Click-to-call — the only CTA in the header, no nav links */}
        <a
          href="tel:8653813931"
          onClick={firePhoneConversion}
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-5 py-2.5 rounded-md text-sm uppercase tracking-wide hover:bg-amber-400 transition-colors"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
            />
          </svg>
          <span className="hidden sm:inline">Call&nbsp;</span>(865) 381-3931
        </a>
      </div>
    </header>
  );
}
