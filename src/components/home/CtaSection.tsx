import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <Section className="bg-navy text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "#fff" }}
          >
            Ready for Fast, Reliable{" "}
            <span style={{ color: "#D4A03C" }}>Locksmith Service?</span>
          </h2>

          {/* Subtext */}
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Tristar Locksmith is available every day 7AM–11:30PM across Knoxville
            and East Tennessee, with 24/7 emergency service. One call connects you
            directly with a dispatcher — no call centers, no runaround.
          </p>

          {/* Primary CTA */}
          <Button href="tel:8653813931" variant="primary" size="lg">
            📞 Call (865) 381-3931 Now
          </Button>

          {/* Reassurance line */}
          <p
            className="mt-6 text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Licensed &amp; Insured · Upfront Pricing · 15-30 Min Response
          </p>
        </div>
      </Container>
    </Section>
  );
}
