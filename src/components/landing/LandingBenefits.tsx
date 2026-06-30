"use client";

import { motion } from "motion/react";
import type { LandingBenefit } from "@/lib/landing-pages";

interface LandingBenefitsProps {
  benefits: LandingBenefit[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export function LandingBenefits({ benefits }: LandingBenefitsProps) {
  return (
    <section className="bg-navy py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-10"
        >
          <h2
            className="text-white font-black text-2xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            Why Knoxville Calls Tristar
          </h2>
          <p className="text-white/60 text-lg">No surprise fees. Real local service.</p>
        </motion.div>

        {/* Feature list — not a card grid */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl border border-white/10">
                {benefit.icon}
              </div>
              {/* Copy */}
              <div>
                <dt className="text-white font-bold text-base mb-1">{benefit.title}</dt>
                <dd className="text-white/65 text-sm leading-relaxed">{benefit.body}</dd>
              </div>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
