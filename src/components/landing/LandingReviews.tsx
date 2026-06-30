"use client";

import { motion } from "motion/react";
import type { LandingReview } from "@/lib/landing-pages";

interface LandingReviewsProps {
  reviews: LandingReview[];
}

const ease = [0.16, 1, 0.3, 1] as const;

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function LandingReviews({ reviews }: LandingReviewsProps) {
  return (
    <section className="bg-warm-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <h2
            className="text-navy font-black text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-muted text-sm font-medium whitespace-nowrap">
            5.0 ★ · 127 verified reviews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-warm-white-dark p-6 flex flex-col"
            >
              <Stars />
              <p className="text-ink text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="border-t border-warm-white-dark pt-4">
                <p className="font-bold text-navy text-sm">{review.author}</p>
                <p className="text-muted text-xs">{review.location}, TN</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
