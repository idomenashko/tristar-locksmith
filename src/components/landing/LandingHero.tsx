"use client";

import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";
import { firePhoneConversion } from "@/lib/conversion";

interface LandingHeroProps {
  h1: string;
  sub: string;
  heroImage: string;
  heroImageAlt: string;
  badges: string[];
  formSource: string;
}

export function LandingHero({
  h1,
  sub,
  heroImage,
  heroImageAlt,
  badges,
  formSource,
}: LandingHeroProps) {
  return (
    <section className="relative bg-navy text-white overflow-hidden" style={{ minHeight: "580px" }}>
      {/* Background photo */}
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Gradient overlay — left side fully navy for copy legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">

          {/* LEFT — copy */}
          <div className="max-w-xl mb-10 lg:mb-0">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              {h1}
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">{sub}</p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8653813931"
                onClick={firePhoneConversion}
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-7 py-4 rounded-md text-base uppercase tracking-wide hover:bg-amber-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
                  />
                </svg>
                Call (865) 381-3931
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-7 py-4 rounded-md text-base uppercase tracking-wide hover:bg-white hover:text-navy transition-colors"
              >
                Get a Free Quote
              </a>
            </div>

            <p className="mt-6 text-white/60 text-sm">
              ⭐⭐⭐⭐⭐ 5.0 — 127 verified reviews · Licensed &amp; Insured in Tennessee
            </p>
          </div>

          {/* RIGHT — Lead form card (above the fold on desktop) */}
          <div className="bg-white rounded-xl p-6 shadow-2xl" id="quote">
            <h2 className="text-lg font-bold text-navy mb-1 font-display">
              Get a Free Quote
            </h2>
            <p className="text-muted text-sm mb-5">
              Fill in your details and we&apos;ll call you back with a price.
            </p>
            <LeadForm source={formSource} />
          </div>
        </div>
      </div>
    </section>
  );
}
