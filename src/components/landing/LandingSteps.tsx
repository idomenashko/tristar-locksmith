"use client";

import { motion } from "motion/react";
import type { LandingStep } from "@/lib/landing-pages";

interface LandingStepsProps {
  steps: LandingStep[];
}

const ease = [0.16, 1, 0.3, 1] as const;

export function LandingSteps({ steps }: LandingStepsProps) {
  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="text-center mb-12"
        >
          <h2
            className="text-navy font-black text-2xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            How It Works
          </h2>
          <p className="text-muted text-lg">Three steps. We handle everything.</p>
        </motion.div>

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-10 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.5%+0.5rem)] right-[calc(16.5%+0.5rem)] h-px bg-warm-white-dark"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center"
            >
              {/* Number badge */}
              <div
                className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-xl text-white shadow-md ${
                  i === 0 ? "bg-emergency shadow-emergency/30" : "bg-navy"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.number}
              </div>

              {/* Text */}
              <div className="md:mt-5">
                <h3 className="text-navy font-bold text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
