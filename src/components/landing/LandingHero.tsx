"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { firePhoneConversion } from "@/lib/conversion";
import { useExperiment } from "@/hooks/useExperiment";
import type { LandingHeroVariant } from "@/lib/landing-pages";

interface LandingHeroProps {
  heroVariants: { A: LandingHeroVariant; B: LandingHeroVariant };
  sub: string;
  heroImage: string;
  heroImageAlt: string;
  badges: string[];
  /** City name — already interpolated into h1/sub by page.tsx; kept for future use */
  city?: string;
}

const ease = [0.16, 1, 0.3, 1] as const; // expo out

const STAR_FILLED = (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.049 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

export function LandingHero({
  heroVariants,
  sub,
  heroImage,
  heroImageAlt,
  badges,
}: LandingHeroProps) {
  const variant = useExperiment("lp_hero");
  const { h1, ctaLabel } = heroVariants[variant];

  return (
    <section className="relative bg-navy-dark text-white overflow-hidden min-h-[580px] md:min-h-[640px] flex items-center">
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient: heavy dark on left/bottom, shows photo on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(18,38,64,0.97) 0%, rgba(18,38,64,0.90) 50%, rgba(18,38,64,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">

        {/* Proof pill — above the H1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
        >
          <span className="flex">{STAR_FILLED}{STAR_FILLED}{STAR_FILLED}{STAR_FILLED}{STAR_FILLED}</span>
          <span className="text-white font-semibold text-sm">5.0</span>
          <span className="text-white/60 text-sm">·</span>
          <span className="text-white/80 text-sm">127 verified reviews</span>
          <span className="text-white/60 text-sm">·</span>
          <span className="text-white/80 text-sm">Knoxville, TN</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.08 }}
          className="font-black text-white leading-tight mb-4"
          style={{
            fontSize: "clamp(26px, 4.5vw, 52px)",
            letterSpacing: "-0.025em",
            textWrap: "balance",
            fontFamily: "var(--font-display)",
          }}
        >
          {h1}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.16 }}
          className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
        >
          {sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          {/* Primary: phone call */}
          <a
            href="tel:8653813931"
            onClick={firePhoneConversion}
            className="pulse-emergency flex items-center justify-center gap-2.5 bg-emergency text-white font-bold text-lg px-7 py-4 rounded-xl hover:bg-emergency-dark transition-colors shadow-lg shadow-emergency/30 w-full sm:w-auto"
            aria-label="Call Tristar Locksmith at (865) 381-3931"
          >
            <PhoneIcon />
            (865) 381-3931 — Call Now
          </a>

          {/* Secondary: scroll to form */}
          <a
            href="#quote"
            className="flex items-center justify-center gap-2 border-2 border-gold/70 text-gold font-semibold text-base px-6 py-4 rounded-xl hover:bg-gold/10 transition-colors w-full sm:w-auto"
          >
            {ctaLabel}
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.34 }}
          className="flex flex-wrap gap-2"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 text-white/70 text-sm bg-white/8 border border-white/15 px-3 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
