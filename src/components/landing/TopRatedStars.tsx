"use client";

/**
 * TopRatedStars — animated trust badge for PPC landing pages.
 *
 * 5 gold stars pop in one-by-one (stagger 80ms each), then the 5th star
 * does a subtle continuous twinkle via CSS. The pill renders fully visible
 * by default so it never ships blank if animation doesn't run (reduced-motion,
 * headless, hidden tab).
 *
 * Usage: drop anywhere — form card header, hero, final CTA.
 */

import { motion } from "motion/react";

interface Props {
  /** Label text — defaults to "Top Rated Locksmith" */
  label?: string;
  /** Review summary — defaults to "5.0 · 127 reviews" */
  reviewSummary?: string;
  /** Extra className for the outer pill element */
  className?: string;
}

const ease = [0.16, 1, 0.3, 1] as const; // expo-out

function Star({ delay, twinkle = false }: { delay: number; twinkle?: boolean }) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -30, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease, delay }}
      className={`inline-block${twinkle ? " star-twinkle" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold">
        <path d="M7.234 1.357c.267-.762 1.265-.762 1.532 0l1.22 3.76a.8.8 0 00.76.554h3.952c.796 0 1.127 1.02.484 1.49L12.16 9.124a.8.8 0 00-.29.894l1.22 3.76c.267.762-.623 1.394-1.266.923L8.802 12.22a.8.8 0 00-.94 0l-3.02 2.46c-.644.47-1.534-.16-1.266-.923l1.22-3.76a.8.8 0 00-.291-.894L1.483 7.161c-.643-.47-.311-1.49.485-1.49h3.952a.8.8 0 00.76-.554l1.554-3.76z" />
      </svg>
    </motion.span>
  );
}

export function TopRatedStars({
  label = "Top Rated Locksmith",
  reviewSummary = "5.0 · 127 reviews",
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, ease }}
      className={`inline-flex items-center gap-2.5 bg-gold/10 border border-gold/40 rounded-full px-4 py-2 ${className}`}
    >
      {/* Stars — pop in one by one */}
      <span className="flex items-center gap-0.5">
        <Star delay={0.05} />
        <Star delay={0.13} />
        <Star delay={0.21} />
        <Star delay={0.29} />
        <Star delay={0.37} twinkle />
      </span>

      {/* Label */}
      <span className="text-sm font-bold text-navy leading-none">{label}</span>

      {/* Divider + review count */}
      <span className="text-gold/50 text-xs leading-none">·</span>
      <span className="text-xs text-navy/60 leading-none font-medium">{reviewSummary}</span>
    </motion.div>
  );
}
