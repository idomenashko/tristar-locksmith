import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ADVANTAGES } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <Section className="bg-navy text-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#fff" }}
          >
            Why Knoxville Trusts Tristar
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            We&apos;ve built our reputation on one thing: showing up fast,
            being honest, and doing the job right every time.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((advantage) => (
            <div
              key={advantage.title}
              className="flex gap-4 bg-white/10 rounded-lg p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div
                className="text-3xl flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {advantage.icon}
              </div>
              <div>
                <h3
                  className="text-base font-bold mb-1.5"
                  style={{ color: "#D4A03C" }}
                >
                  {advantage.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
