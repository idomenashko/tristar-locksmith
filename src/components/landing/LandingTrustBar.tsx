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
        <span>Licensed &amp; Insured</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Upfront Pricing</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>Non-Destructive Entry</span>
        <span className="hidden sm:inline text-white/40">·</span>
        <span>
          Serving <CountUp target={27} suffix="+" /> East TN Cities
        </span>
      </div>
    </div>
  );
}
