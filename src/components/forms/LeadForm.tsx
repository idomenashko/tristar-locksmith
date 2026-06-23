"use client";

import { useState } from "react";
import { fireLeadConversion } from "@/lib/conversion";

const SERVICES = [
  "Car Lockout",
  "House Lockout",
  "Car Key Replacement",
  "Safe Lockout",
  "Commercial Lockout / Rekey",
  "Lock Change",
  "Other",
];

interface LeadFormProps {
  source?: string;
}

export function LeadForm({ source = "unknown" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      serviceNeeded: (form.elements.namedItem("serviceNeeded") as HTMLSelectElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value.trim(),
      note: (form.elements.namedItem("note") as HTMLTextAreaElement).value.trim(),
      _hp: (form.elements.namedItem("_hp") as HTMLInputElement).value,
      _source: source,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please call us directly.");
        setStatus("error");
      } else {
        fireLeadConversion();
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="font-bold text-navy text-lg mb-2">Got it — we&apos;ll call you back shortly.</h3>
        <p className="text-muted text-sm mb-4">
          For urgent help, reach us directly right now:
        </p>
        <a
          href="tel:8653813931"
          className="inline-block bg-gold text-navy font-bold px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-amber-400 transition-colors"
        >
          📞 Call (865) 381-3931
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ display: "none" }}
      />

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-md px-4 py-3 text-sm">
          {errorMsg} Or call us directly:{" "}
          <a href="tel:8653813931" className="font-bold underline">
            (865) 381-3931
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-semibold text-navy mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-sm font-semibold text-navy mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(865) 555-0100"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-service" className="block text-sm font-semibold text-navy mb-1">
          What do you need?
        </label>
        <select
          id="lead-service"
          name="serviceNeeded"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
        >
          <option value="">— Select a service —</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-address" className="block text-sm font-semibold text-navy mb-1">
          Address or area
        </label>
        <input
          id="lead-address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Street address or neighborhood"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="lead-note" className="block text-sm font-semibold text-navy mb-1">
          Anything else?
        </label>
        <textarea
          id="lead-note"
          name="note"
          rows={2}
          placeholder="Optional details — vehicle type, lock brand, etc."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-navy text-white font-bold py-3 px-6 rounded-md text-sm uppercase tracking-wide hover:bg-navy/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Request a Callback"}
      </button>

      <p className="text-xs text-muted text-center">
        Prefer to call?{" "}
        <a href="tel:8653813931" className="font-semibold text-gold hover:underline">
          (865) 381-3931
        </a>{" "}
        — available 7 AM–11:30 PM, 24/7 emergency line
      </p>
    </form>
  );
}
