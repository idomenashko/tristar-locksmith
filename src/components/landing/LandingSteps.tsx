import type { LandingStep } from "@/lib/landing-pages";

interface LandingStepsProps {
  steps: LandingStep[];
}

export function LandingSteps({ steps }: LandingStepsProps) {
  return (
    <section className="bg-warm-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-3">How It Works</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">Three steps. No surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-5 ${
                  index === 0 ? "bg-emergency" : "bg-navy"
                }`}
              >
                {step.number}
              </div>
              <h3 className="text-navy font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
