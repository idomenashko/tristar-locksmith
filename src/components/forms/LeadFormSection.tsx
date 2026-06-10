import { LeadForm } from "./LeadForm";

interface LeadFormSectionProps {
  variant?: "contact" | "blog" | "sc";
  source?: string;
  heading?: string;
}

const COPY = {
  contact: {
    heading: "Request a Callback",
    sub: "Fill in your details and we'll call you back — usually within minutes.",
  },
  blog: {
    heading: "Need a Locksmith Now?",
    sub: "Leave your number and we'll call you back. Or dial us directly to speak with our team.",
  },
  sc: {
    heading: "Get Help Now",
    sub: "Fill in your info and we'll call you back. For emergencies, call directly.",
  },
};

export function LeadFormSection({
  variant = "sc",
  source,
  heading,
}: LeadFormSectionProps) {
  const copy = COPY[variant];
  return (
    <div id="get-help" className="bg-warm-white border border-gray-200 rounded-xl p-6 lg:p-8">
      <div className="mb-2">
        <a
          href="tel:8653813931"
          className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-5 py-2.5 rounded-md text-sm uppercase tracking-wide hover:bg-amber-400 transition-colors mb-5"
        >
          📞 Call (865) 381-3931 — Available 24/7
        </a>
      </div>
      <h2 className="text-xl font-bold text-navy mb-1 font-display">
        {heading ?? copy.heading}
      </h2>
      <p className="text-muted text-sm mb-5">{copy.sub}</p>
      <LeadForm source={source ?? variant} />
    </div>
  );
}
