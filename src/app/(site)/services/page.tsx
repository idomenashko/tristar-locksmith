import { getServices } from "@/sanity/queries";
import { ServiceCard } from "@/components/service/ServiceCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Locksmith Services",
  description:
    "Tristar Locksmith offers car lockout, house lockout, rekey, lock change, car key replacement, ignition repair, commercial locksmith, and safe opening services in Knoxville, TN.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <div className="bg-navy text-white py-16">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Our Locksmith Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Professional locksmith services for residential, automotive, and commercial needs. Available 24/7 in Knoxville, TN.
          </p>
        </Container>
      </div>
      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted mb-4">Not sure which service you need?</p>
            <Button href="tel:8653813931" variant="primary" size="lg">
              📞 Call (865) 381-3931
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
