import type { LandingStep } from "@/lib/landing-pages";

interface LandingStepsProps {
  steps: LandingStep[];
}

export function LandingSteps({ steps }: LandingStepsProps) {
  return (
    <section className="bg-warm-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-12">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-navy text-white text-xl font-bold flex items-center justify-center mb-4 shrink-0">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
