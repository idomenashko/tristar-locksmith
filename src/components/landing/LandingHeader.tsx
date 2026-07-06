"use client";

import { firePhoneConversion } from "@/lib/conversion";
import { TristarLogo } from "@/components/brand/TristarLogo";

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-navy h-16 flex items-center px-4 md:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo — links back to main site */}
        <a href="https://tristarlocksmith.com" aria-label="Tristar Locksmith Home">
          <TristarLogo height={44} />
        </a>

        {/* Click-to-call — the only CTA in the header, no nav links */}
        <a
          href="tel:8653463573"
          onClick={firePhoneConversion}
          className="flex items-center gap-2 bg-emergency text-white font-bold px-4 py-2 rounded-lg text-sm md:text-base hover:bg-red-700 transition-colors"
        >
          <PhoneIcon className="h-4 w-4" />
          (865) 346-3573
        </a>
      </div>
    </header>
  );
}
