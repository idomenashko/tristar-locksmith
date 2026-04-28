import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getBusiness } from "@/lib/queries";
import type { HomepageContent } from "@/lib/types";

export async function Hero({ heroHeadline, heroSubheadline, heroImage }: HomepageContent) {
  const business = await getBusiness();
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Background image with gradient overlay */}
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent" />
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl text-center mx-auto md:text-left md:mx-0">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
              ⚡ 15-30 Min Response
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
              🏆 Licensed &amp; Insured
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
              ⭐ 5-Star Rated
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            {heroHeadline}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
            {heroSubheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="tel:8653813931" variant="primary" size="lg">
              📞 Call (865) 381-3931
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              View Services
            </Button>
          </div>

          {/* Quick stat row */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold" style={{ color: "#D4A03C" }}>7AM–11:30PM</div>
              <div className="text-sm text-white/70 mt-0.5">{business.emergencyHours ?? "24/7 Emergency"}</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: "#D4A03C" }}>27+</div>
              <div className="text-sm text-white/70 mt-0.5">Cities Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: "#D4A03C" }}>5★</div>
              <div className="text-sm text-white/70 mt-0.5">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
