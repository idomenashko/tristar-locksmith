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

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
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
    <section
      className="relative bg-navy text-white overflow-hidden"
      style={{ minHeight: "660px" }}
    >
      {/* Background photo */}
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />
      {/* Left-to-right gradient overlay — fully navy on left, photo visible on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(27,58,92,0.93) 0%, rgba(27,58,92,0.88) 50%, rgba(18,38,64,0.62) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — copy */}
          <div>
            <h1
              className="text-white font-black leading-tight mb-5"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {h1}
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">{sub}</p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:8653813931"
                onClick={firePhoneConversion}
                className="flex items-center justify-center gap-2 bg-emergency text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 transition-colors shadow-lg"
              >
                <PhoneIcon />
                Call (865) 381-3931
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center gap-2 border-2 border-gold text-gold font-bold text-lg px-8 py-4 rounded-xl hover:bg-gold hover:text-navy transition-colors"
              >
                Request Service ↓
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Lead form card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8" id="quote">
            <h2 className="text-navy font-bold text-2xl mb-1">Request Service</h2>
            <p className="text-muted text-sm mb-6">
              Our technician will be on the way.
            </p>
            <LeadForm source={formSource} />
          </div>

        </div>
      </div>
    </section>
  );
}
