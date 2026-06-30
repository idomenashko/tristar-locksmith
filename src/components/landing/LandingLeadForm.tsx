"use client";

/**
 * LandingLeadForm — low-friction lead form for PPC landing pages.
 *
 * Conversion design:
 * - Above the fold shows only Name + Phone (required)
 * - "More details" progressively expands to service/address/note
 * - Phone call CTA sits directly below as the primary escape hatch
 * - Fires fireLeadConversion on success, preserves full /api/lead plumbing
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fireLeadConversion, firePhoneConversion } from "@/lib/conversion";
import { getAttribution } from "@/lib/attribution";

interface Props {
  formSource: string;
}

const SERVICES = [
  "Car Lockout",
  "House Lockout",
  "Car Key Replacement",
  "Emergency Locksmith",
  "Safe Lockout",
  "Commercial Locksmith",
  "Lock Change / Rekey",
  "Other",
];

const ease = [0.16, 1, 0.3, 1] as const;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

export function LandingLeadForm({ formSource }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const data = new FormData(e.currentTarget);

    // Honeypot check
    if (data.get("_hp")) return;

    setStatus("loading");
    setErrorMsg("");

    const attribution = getAttribution();
    const body = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      serviceNeeded: (data.get("serviceNeeded") as string) || "",
      address: (data.get("address") as string) || "",
      note: (data.get("note") as string) || "",
      source: formSource,
      ...(attribution ?? {}),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      fireLeadConversion();
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us directly.");
    }
  }

  if (status === "success") {
    return (
      <section id="quote" className="bg-warm-white py-12 px-5">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease }}
            className="bg-white rounded-2xl border border-forest/30 shadow-lg p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-7 h-7 text-forest">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-navy font-black text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
              We received your request!
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-5">
              We&apos;ll call you right back. For the fastest response, tap Call below.
            </p>
            <a
              href="tel:8653813931"
              onClick={firePhoneConversion}
              className="pulse-emergency inline-flex items-center gap-2 bg-emergency text-white font-bold px-6 py-3.5 rounded-xl hover:bg-emergency-dark transition-colors shadow-md"
            >
              <PhoneIcon />
              (865) 381-3931
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-warm-white py-12 px-5">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2
            className="text-navy font-black text-2xl md:text-3xl mb-2"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            Get a Free Quote
          </h2>
          <p className="text-muted text-sm">
            We&apos;ll call you right back with an upfront price.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <input name="_hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="bg-white rounded-2xl shadow-md border border-warm-white-dark p-6 space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="lf-name" className="block text-sm font-semibold text-navy mb-1.5">
                Your name <span className="text-emergency">*</span>
              </label>
              <input
                id="lf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-warm-white-dark rounded-lg px-4 py-3 text-ink text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="lf-phone" className="block text-sm font-semibold text-navy mb-1.5">
                Phone number <span className="text-emergency">*</span>
              </label>
              <input
                id="lf-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(865) 555-0100"
                className="w-full border border-warm-white-dark rounded-lg px-4 py-3 text-ink text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
              />
            </div>

            {/* Progressive expand toggle */}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-sm text-navy/70 hover:text-navy font-medium transition-colors"
            >
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6l4 4 4-4" />
                </svg>
              </motion.span>
              {expanded ? "Hide details" : "Add details (optional)"}
            </button>

            {/* Optional fields */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="expanded"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden space-y-4"
                >
                  {/* Service */}
                  <div>
                    <label htmlFor="lf-service" className="block text-sm font-semibold text-navy mb-1.5">
                      Service needed
                    </label>
                    <select
                      id="lf-service"
                      name="serviceNeeded"
                      className="w-full border border-warm-white-dark rounded-lg px-4 py-3 text-ink text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="lf-address" className="block text-sm font-semibold text-navy mb-1.5">
                      Your location
                    </label>
                    <input
                      id="lf-address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="Street address or neighborhood"
                      className="w-full border border-warm-white-dark rounded-lg px-4 py-3 text-ink text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition"
                    />
                  </div>

                  {/* Note */}
                  <div>
                    <label htmlFor="lf-note" className="block text-sm font-semibold text-navy mb-1.5">
                      Additional details
                    </label>
                    <textarea
                      id="lf-note"
                      name="note"
                      rows={2}
                      placeholder="Vehicle type, lock brand, anything helpful…"
                      className="w-full border border-warm-white-dark rounded-lg px-4 py-3 text-ink text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition resize-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error message */}
            {status === "error" && (
              <p className="text-emergency text-sm font-medium">{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-navy text-white font-bold text-base py-3.5 rounded-xl hover:bg-navy-light disabled:opacity-60 transition-colors shadow-sm"
            >
              {status === "loading" ? "Sending…" : "Get a Free Quote"}
            </button>
          </div>
        </form>

        {/* Phone escape hatch */}
        <div className="text-center mt-5">
          <p className="text-muted text-sm mb-2">Need faster help?</p>
          <a
            href="tel:8653813931"
            onClick={firePhoneConversion}
            className="inline-flex items-center gap-2 text-emergency font-bold text-base hover:underline"
          >
            <PhoneIcon />
            Call (865) 381-3931
          </a>
        </div>
      </div>
    </section>
  );
}
