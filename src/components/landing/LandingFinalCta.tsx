"use client";

import { LeadForm } from "@/components/forms/LeadForm";
import { firePhoneConversion } from "@/lib/conversion";

interface LandingFinalCtaProps {
  heading: string;
  sub: string;
  formSource: string;
}

export function LandingFinalCta({ heading, sub, formSource }: LandingFinalCtaProps) {
  return (
    <section className="bg-navy text-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left — copy + call button */}
          <div className="mb-10 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {heading}
            </h2>
            <p className="text-white/70 text-base mb-8">{sub}</p>

            <a
              href="tel:8653813931"
              onClick={firePhoneConversion}
              className="inline-flex items-center gap-3 bg-gold text-navy font-bold px-8 py-4 rounded-md text-base uppercase tracking-wide hover:bg-amber-400 transition-colors"
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

            <p className="mt-5 text-white/50 text-sm">
              Available 7 AM – 11:30 PM daily · 24/7 emergency line
            </p>

            <div className="mt-8 space-y-2">
              {[
                "Licensed & insured in Tennessee",
                "Upfront pricing — we quote before we start",
                "Serving Knoxville + 27 surrounding areas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg
                    className="w-4 h-4 text-gold shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — second form */}
          <div className="bg-white rounded-xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-navy mb-1 font-display">
              Request a Callback
            </h3>
            <p className="text-muted text-sm mb-5">
              Fill in your details and we&apos;ll call you back with a price.
            </p>
            <LeadForm source={`${formSource}-bottom`} />
          </div>
        </div>
      </div>
    </section>
  );
}
