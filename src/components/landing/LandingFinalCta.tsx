"use client";

import { motion } from "motion/react";
import { firePhoneConversion } from "@/lib/conversion";

interface LandingFinalCtaProps {
  heading: string;
  sub: string;
  /** Kept for API compatibility — no longer used since bottom form was removed */
  formSource?: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

const TRUST_POINTS = [
  "Emergency service available around the clock",
  "Non-destructive entry, no damage to your lock",
  "Insured & background-checked technicians",
  "Upfront price confirmed before we start",
  "Serving Knoxville + 27 East TN communities",
];

export function LandingFinalCta({ heading, sub }: LandingFinalCtaProps) {
  return (
    <section className="bg-navy-dark py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
        >
          <h2
            className="text-white font-black text-2xl md:text-4xl mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em", textWrap: "balance" }}
          >
            {heading}
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {sub}
          </p>

          {/* Primary CTA */}
          <a
            href="tel:8653813931"
            onClick={firePhoneConversion}
            className="pulse-emergency inline-flex items-center justify-center gap-2.5 bg-emergency text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-emergency-dark transition-colors shadow-lg shadow-emergency/30 mb-4"
            aria-label="Call Tristar Locksmith"
          >
            <PhoneIcon />
            Call (865) 381-3931
          </a>

          <p className="text-white/50 text-sm mb-10">
            Or{" "}
            <a href="#quote" className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors">
              fill out the quote form above
            </a>
          </p>

          {/* Trust points */}
          <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-2 gap-x-6 text-left sm:text-center">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-white/65 text-sm">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-forest flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" className="w-2.5 h-2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 5l2 2 4-4" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
