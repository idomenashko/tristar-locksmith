"use client";

import { LeadForm } from "@/components/forms/LeadForm";
import { firePhoneConversion } from "@/lib/conversion";

interface LandingFinalCtaProps {
  heading: string;
  sub: string;
  formSource: string;
}

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function GreenCheck() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#2E7D4F" />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LandingFinalCta({ heading, sub, formSource }: LandingFinalCtaProps) {
  return (
    <section className="bg-navy py-20 px-4 md:px-8" id="quote">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — copy + call button */}
          <div>
            <h2 className="text-white font-black text-3xl md:text-4xl mb-5 leading-tight">
              {heading}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{sub}</p>

            <a
              href="tel:8653813931"
              onClick={firePhoneConversion}
              className="inline-flex items-center gap-3 bg-emergency text-white font-bold text-xl px-10 py-5 rounded-xl hover:bg-red-700 transition-colors shadow-lg mb-10"
            >
              <PhoneIcon />
              Call (865) 381-3931
            </a>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GreenCheck />
                <span className="text-white/90 font-medium">Non-destructive entry, no damage</span>
              </div>
              <div className="flex items-center gap-3">
                <GreenCheck />
                <span className="text-white/90 font-medium">Licensed &amp; insured technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <GreenCheck />
                <span className="text-white/90 font-medium">Serving Knoxville + 27 surrounding areas</span>
              </div>
            </div>
          </div>

          {/* Right — second form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-navy font-bold text-2xl mb-1">Request Service</h3>
            <p className="text-muted text-sm mb-6">We&apos;ll confirm your request and reach out.</p>
            <LeadForm source={`${formSource}-bottom`} />
          </div>

        </div>
      </div>
    </section>
  );
}
