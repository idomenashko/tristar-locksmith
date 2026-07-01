"use client";
// "use client" is required: CountUp uses useState for SSR-safe animation.

import { motion } from "motion/react";
import { CountUp } from "@/components/landing/CountUp";

const ease = [0.16, 1, 0.3, 1] as const;

export function LandingTrustBar() {
  return (
    <section className="bg-navy-dark text-white py-4 overflow-x-auto">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease, delay: 0.1 }}
        className="flex items-center justify-start md:justify-center gap-0 min-w-max md:min-w-0 px-5 md:px-8"
      >
        {/* Star rating */}
        <span className="flex items-center gap-1.5 text-sm font-semibold shrink-0 pr-5">
          <span>⭐</span>
          <CountUp target={5.0} decimals={1} />{" "}
          Stars ({<CountUp target={428} />} Reviews)
        </span>

        <Divider />

        <span className="text-sm font-medium text-white/80 shrink-0 px-5">
          Insured &amp; Background-Checked
        </span>

        <Divider />

        <span className="text-sm font-medium text-white/80 shrink-0 px-5">
          Non-Destructive Entry
        </span>

        <Divider />

        <span className="text-sm font-medium text-white/80 shrink-0 px-5">
          Upfront Pricing
        </span>

        <Divider />

        <span className="text-sm font-medium text-white/80 shrink-0 px-5">
          Emergency Line Available
        </span>

        <Divider />

        <span className="text-sm font-medium text-white/80 shrink-0 pl-5">
          Serving <CountUp target={27} suffix="+" /> East TN Cities
        </span>
      </motion.div>
    </section>
  );
}

function Divider() {
  return <span className="text-white/20 text-lg select-none shrink-0">·</span>;
}
