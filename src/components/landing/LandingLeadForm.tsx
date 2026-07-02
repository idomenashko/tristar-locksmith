"use client";

/**
 * LandingLeadForm — low-friction lead form for PPC landing pages.
 *
 * Conversion design:
 * - TopRatedStars badge inside the card header (trust before commitment)
 * - Name + Phone first (required), "Add details" progressively expands
 * - Gold submit button (hierarchy: red=call #1, gold=form #2)
 * - Trust row under the button (no-obligation, insured, fast callback)
 * - Phone call escape hatch stays as a clear red inline action
 * - Fires fireLeadConversion on success, preserves full /api/lead plumbing
 */

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { fireLeadConversion, firePhoneConversion } from "@/lib/conversion";
import { getAttribution } from "@/lib/attribution";
import { TopRatedStars } from "./TopRatedStars";

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

const INPUT_CLASS =
  "w-full border border-warm-white-dark rounded-xl px-4 py-3.5 text-ink text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-shadow bg-white";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <motion.svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      variants={{ hover: { x: 4 } }}
      transition={{ duration: 0.2, ease }}
    >
      <path d="M4 10h12M11 4l6 6-6 6" />
    </motion.svg>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 animate-spin">
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0110 10" strokeLinecap="round" />
    </svg>
  );
}

const TRUST_ITEMS = [
  { icon: "✓", text: "No obligation" },
  { icon: "🛡", text: "Insured & licensed" },
  { icon: "⚡", text: "Fast callback" },
];

export function LandingLeadForm({ formSource }: Props) {
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
      _source: formSource,
      _attr: attribution ?? undefined,
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
      <section id="quote" className="bg-warm-white py-14 px-5">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease }}
            className="bg-white rounded-2xl border border-gold/30 shadow-xl shadow-gold/10 p-8 text-center"
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
              href="tel:8653463573"
              onClick={firePhoneConversion}
              className="pulse-emergency inline-flex items-center gap-2 bg-emergency text-white font-bold px-6 py-3.5 rounded-xl hover:bg-emergency-dark transition-colors shadow-md"
            >
              <PhoneIcon />
              (865) 346-3573
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-warm-white py-14 px-5">
      <div className="max-w-lg mx-auto">

        {/* Section header */}
        <div className="text-center mb-7">
          <h2
            className="text-navy font-black text-2xl md:text-3xl mb-2"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em" }}
          >
            Get a Free Quote
          </h2>
          <p className="text-muted text-sm">
            Takes&nbsp;~20&nbsp;seconds&nbsp;·&nbsp;We&apos;ll reach out to confirm your request.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <input name="_hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="bg-white rounded-2xl shadow-xl shadow-navy/8 border border-warm-white-dark overflow-hidden">

            {/* Card header band with TopRatedStars */}
            <div className="bg-navy px-6 py-4 flex items-center justify-center">
              <TopRatedStars
                label="Top Rated Locksmith"
                reviewSummary="5.0 · 428 reviews"
                className="!bg-white/10 !border-white/20"
                variant="dark"
              />
            </div>

            {/* Form fields */}
            <div className="p-6 space-y-4">
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
                  className={INPUT_CLASS}
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
                  className={INPUT_CLASS}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="lf-service" className="block text-sm font-semibold text-navy mb-1.5">
                  Service needed
                </label>
                <select id="lf-service" name="serviceNeeded" className={INPUT_CLASS}>
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
                  className={INPUT_CLASS}
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
                  className={INPUT_CLASS + " resize-none"}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-emergency text-sm font-medium">{errorMsg}</p>
              )}

              {/* Gold submit button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                variants={{ hover: { y: -2 } }}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="w-full flex items-center justify-center gap-2.5 bg-gold text-navy font-bold text-base py-4 rounded-xl hover:bg-gold-dark disabled:opacity-60 transition-colors shadow-lg shadow-gold/25 cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Spinner />
                    Sending…
                  </>
                ) : (
                  <>
                    Get My Free Quote
                    <ArrowRight />
                  </>
                )}
              </motion.button>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-4 pt-1">
                {TRUST_ITEMS.map((item) => (
                  <span key={item.text} className="flex items-center gap-1 text-xs text-muted">
                    <span aria-hidden="true">{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </form>

        {/* Phone escape hatch */}
        <div className="text-center mt-5">
          <p className="text-muted text-sm mb-2">Prefer to talk? Call us now:</p>
          <a
            href="tel:8653463573"
            onClick={firePhoneConversion}
            className="inline-flex items-center gap-2 text-emergency font-bold text-base hover:text-emergency-dark transition-colors"
          >
            <PhoneIcon />
            (865) 346-3573
          </a>
        </div>
      </div>
    </section>
  );
}
