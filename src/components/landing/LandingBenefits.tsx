import type { LandingBenefit } from "@/lib/landing-pages";

interface LandingBenefitsProps {
  benefits: LandingBenefit[];
}

export function LandingBenefits({ benefits }: LandingBenefitsProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
          Why customers choose Tristar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-warm-white rounded-xl p-6 border border-gray-100 hover:border-gold hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-navy mb-2 text-base">{benefit.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
