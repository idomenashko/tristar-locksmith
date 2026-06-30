"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { LandingFaq } from "@/lib/landing-pages";

interface LandingFaqProps {
  faqs: LandingFaq[];
}

const ease = [0.16, 1, 0.3, 1] as const;

function FaqItem({ faq, isOpen, onToggle }: {
  faq: LandingFaq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-warm-white-dark last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-navy text-base leading-snug pr-2">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-navy/50 mt-0.5"
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" d="M8 3v10M3 8h10" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-5">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LandingFaq({ faqs }: LandingFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-10"
        >
          <h2
            className="text-navy font-black text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Common Questions
          </h2>
          <p className="text-muted">Straight answers. No runaround.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="bg-warm-white rounded-2xl border border-warm-white-dark divide-y-0 px-6"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
