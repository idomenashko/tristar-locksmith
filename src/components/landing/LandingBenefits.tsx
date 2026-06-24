import type { LandingBenefit } from "@/lib/landing-pages";

interface LandingBenefitsProps {
  benefits: LandingBenefit[];
}

export function LandingBenefits({ benefits }: LandingBenefitsProps) {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-3">
            Why Knoxville Calls Tristar
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We built this business on one principle: do it right the first time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-navy font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
