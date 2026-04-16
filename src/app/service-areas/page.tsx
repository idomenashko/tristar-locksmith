import { SERVICE_AREAS } from "@/lib/data";
import { AreaCard } from "@/components/area/AreaCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas",
  description:
    "Tristar Locksmith serves Knoxville, Farragut, Powell, Maryville, Oak Ridge, and 22 more cities in East Tennessee. Fast 24/7 locksmith service throughout the Knoxville area.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <div className="bg-navy text-white py-16">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Locksmith Service Areas
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Serving Knoxville, TN and 26 surrounding communities. Fast 15-30 minute response times.
          </p>
        </Container>
      </div>
      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_AREAS.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted mb-4">Not in the list? Give us a call — we may still serve your area.</p>
            <Button href="tel:8653813931" variant="primary" size="lg">
              📞 Call (865) 381-3931
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
