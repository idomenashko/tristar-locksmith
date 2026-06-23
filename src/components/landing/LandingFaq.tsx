import type { LandingFaq } from "@/lib/landing-pages";

interface LandingFaqProps {
  faqs: LandingFaq[];
}

export function LandingFaq({ faqs }: LandingFaqProps) {
  return (
    <section className="bg-warm-white py-14 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
          Common questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
            >
              <h3 className="font-bold text-navy mb-2 text-base">{faq.question}</h3>
              <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
