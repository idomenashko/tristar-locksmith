import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceArea, getServiceAreas, getServices, getBusiness } from "@/lib/queries";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const serviceAreas = await getServiceAreas();
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = await getServiceArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `Locksmith ${area.name}, TN`,
    description: `Tristar Locksmith serves ${area.name}, TN with 24/7 locksmith services. Car lockout, house lockout, rekey, and more. Fast response. Call (865) 381-3931.`,
    path: `/service-areas/${slug}`,
  });
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [area, allAreas, services, business] = await Promise.all([
    getServiceArea(slug),
    getServiceAreas(),
    getServices(),
    getBusiness(),
  ]);
  if (!area) notFound();

  return (
    <>
      <div className="bg-navy text-white py-16 lg:py-24">
        <Container>
          <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
            📍 {area.region}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Locksmith in {area.name}, TN
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            {area.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="tel:8653813931" variant="primary" size="lg">
              📞 Call (865) 381-3931
            </Button>
            <Button href="/service-areas" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              ← All Areas
            </Button>
          </div>
        </Container>
      </div>

      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6 font-display">
                Locksmith Services in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gold hover:shadow-sm transition-all group"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-navy font-medium group-hover:text-gold transition-colors text-sm">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-navy rounded-lg p-6 text-white sticky top-24">
                <h3 className="text-xl font-bold mb-2 font-display">
                  Need a Locksmith in {area.name}?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Available 24/7 — fast 15-30 minute response.
                </p>
                <Button href="tel:8653813931" variant="primary" size="lg" className="w-full justify-center">
                  📞 {business.phone}
                </Button>
              </div>

              {area.nearbyAreas.length > 0 && (
                <div className="mt-6 p-5 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-bold text-navy mb-3 font-display">Nearby Areas We Serve</h3>
                  <ul className="space-y-2">
                    {area.nearbyAreas.map((nearbyName) => {
                      const nearbyArea = allAreas.find((a) => a.name === nearbyName);
                      return nearbyArea ? (
                        <li key={nearbyName}>
                          <Link
                            href={`/service-areas/${nearbyArea.slug}`}
                            className="text-gold hover:text-gold-dark text-sm font-medium"
                          >
                            → {nearbyName}
                          </Link>
                        </li>
                      ) : (
                        <li key={nearbyName} className="text-muted text-sm">
                          {nearbyName}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
