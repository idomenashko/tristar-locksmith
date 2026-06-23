import type { LandingCoveredItem } from "@/lib/landing-pages";

interface LandingCoveredProps {
  heading: string;
  items: LandingCoveredItem[];
}

export function LandingCovered({ heading, items }: LandingCoveredProps) {
  return (
    <section className="bg-navy text-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            {heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3 text-left"
              >
                <svg
                  className="w-5 h-5 text-gold shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-white/90 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
