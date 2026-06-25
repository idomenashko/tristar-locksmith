import type { LandingCoveredItem } from "@/lib/landing-pages";
import { Reveal } from "@/components/landing/Reveal";

interface LandingCoveredProps {
  heading: string;
  items: LandingCoveredItem[];
}

function GreenCheck() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#2E7D4F" />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LandingCovered({ heading, items }: LandingCoveredProps) {
  return (
    <section className="bg-navy py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-white font-black text-3xl md:text-4xl mb-3">{heading}</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-6 py-4 h-full">
                <GreenCheck />
                <span className="text-white font-medium">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
