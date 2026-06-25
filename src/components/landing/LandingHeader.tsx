"use client";

import { firePhoneConversion } from "@/lib/conversion";

/** Inline SVG logo — shield + 3 gold stars + padlock wordmark */
export function TristarLogo({ height = 44 }: { height?: number }) {
  return (
    <svg
      style={{ height, width: "auto", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 212 52"
      fill="none"
      aria-label="Tristar Locksmith"
    >
      {/* Shield */}
      <path
        d="M6,2 Q3,2 3,5 L3,29 Q3,44 25,51 Q47,44 47,29 L47,5 Q47,2 44,2 Z"
        fill="rgba(255,255,255,0.07)"
        stroke="#D4A03C"
        strokeWidth="1.8"
      />
      {/* Top star */}
      <polygon
        fill="#D4A03C"
        points="25,7.5 26.3,11.2 30.2,11.3 27.1,13.7 28.2,17.5 25,15.2 21.8,17.5 22.9,13.7 19.8,11.3 23.7,11.2"
      />
      {/* Bottom-left star */}
      <polygon
        fill="#D4A03C"
        points="16,19.5 17.1,22.5 20.3,22.6 17.7,24.6 18.7,27.6 16,25.8 13.3,27.6 14.3,24.6 11.7,22.6 14.9,22.5"
      />
      {/* Bottom-right star */}
      <polygon
        fill="#D4A03C"
        points="34,19.5 35.1,22.5 38.3,22.6 35.7,24.6 36.7,27.6 34,25.8 31.4,27.6 32.3,24.6 29.7,22.6 32.9,22.5"
      />
      {/* Padlock shackle */}
      <path
        d="M21,34 L21,29.5 Q21,26.5 25,26.5 Q29,26.5 29,29.5 L29,34"
        stroke="#D4A03C"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Padlock body */}
      <rect x="19.5" y="33.5" width="11" height="8.5" rx="2" fill="#D4A03C" />
      {/* Keyhole */}
      <circle cx="25" cy="36.8" r="1.5" fill="#1B3A5C" />
      <rect x="24.35" y="37.5" width="1.3" height="2.5" rx="0.5" fill="#1B3A5C" />
      {/* Divider */}
      <line x1="57" y1="8" x2="57" y2="44" stroke="#D4A03C" strokeWidth="1" opacity="0.4" />
      {/* TRISTAR wordmark */}
      <text
        x="66"
        y="30"
        fontFamily="Inter,'Arial Black',Arial,sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="1"
      >
        TRISTAR
      </text>
      {/* LOCKSMITH wordmark */}
      <text
        x="67.5"
        y="43.5"
        fontFamily="Inter,Arial,Helvetica,sans-serif"
        fontWeight="500"
        fontSize="11"
        fill="#D4A03C"
        letterSpacing="3.2"
      >
        LOCKSMITH
      </text>
    </svg>
  );
}

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
          href="tel:8653813931"
          onClick={firePhoneConversion}
          className="flex items-center gap-2 bg-emergency text-white font-bold px-4 py-2 rounded-lg text-sm md:text-base hover:bg-red-700 transition-colors"
        >
          <PhoneIcon className="h-4 w-4" />
          (865) 381-3931
        </a>
      </div>
    </header>
  );
}
