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
