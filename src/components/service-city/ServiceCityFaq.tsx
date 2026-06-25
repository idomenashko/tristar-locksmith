interface ServiceCityFaqProps {
  faqs: { question: string; answer: string }[];
  serviceName: string;
  cityName: string;
}

export function ServiceCityFaq({ faqs, serviceName, cityName }: ServiceCityFaqProps) {
  if (!faqs.length) return null;
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy mb-6 font-display">
        Frequently Asked Questions: {serviceName} in {cityName}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
            <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
            <p className="text-muted leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
