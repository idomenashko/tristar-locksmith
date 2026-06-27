"use client";
// "use client" is required: CountUp uses useState(0) for initial render.
// Without this directive the SSR output shows "0.0 Stars (0 Reviews)" in the
// pre-rendered HTML. The layout is noindex, so this doesn't affect Googlebot,
// but it does cause a zero-flash for users before JS hydrates.

import { CountUp } from "@/components/landing/CountUp";

export function LandingTrustBar() {
  return (
    <div className="bg-navy-dark text-white py-4 px-4">
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1 text-sm font-medium">
        <span>
          ⭐{" "}
          <CountUp target={5.0} decimals={1} />{" "}
          Stars (
          <CountUp target={127} />
          {" "}Reviews)
        </span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Insured &amp; Background-Checked</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Upfront Pricing</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Non-Destructive Entry</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Emergency Line Available</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>
          Serving <CountUp target={27} suffix="+" /> East TN Cities
        </span>
      </div>
    </div>
  );
}
