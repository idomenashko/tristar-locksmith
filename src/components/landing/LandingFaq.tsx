import type { LandingFaq } from "@/lib/landing-pages";

interface LandingFaqProps {
  faqs: LandingFaq[];
}

export function LandingFaq({ faqs }: LandingFaqProps) {
  return (
    <section className="bg-warm-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-3">Common Questions</h2>
          <p className="text-muted text-lg">Straight answers. No runaround.</p>
        </div>
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-navy font-bold text-lg mb-3">{faq.question}</h3>
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
