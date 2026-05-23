import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/seo";
import {
  parseServiceCity,
  getActiveCombos,
  getCombo,
  getSiblingServices,
  getNearbyCityLinks,
  RESERVED_ROUTES,
} from "@/lib/service-city";
import { buildLocksmithServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { ServiceCityHero } from "@/components/service-city/ServiceCityHero";
import { ServiceCityBody } from "@/components/service-city/ServiceCityBody";
import { ServiceCityFaq } from "@/components/service-city/ServiceCityFaq";
import { InternalLinks } from "@/components/service-city/InternalLinks";
import { LeadFormSection } from "@/components/forms/LeadFormSection";

export async function generateStaticParams() {
  const combos = getActiveCombos();
  return combos.map((c) => ({ serviceCity: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceCity: string }>;
}) {
  const { serviceCity } = await params;
  if (RESERVED_ROUTES.has(serviceCity)) return {};
  const parsed = parseServiceCity(serviceCity);
  if (!parsed) return {};

  const combo = getCombo(parsed.service, parsed.city);
  return buildMetadata({
    title: combo.metaTitle,
    description: combo.metaDescription,
    path: `/${serviceCity}`,
  });
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ serviceCity: string }>;
}) {
  const { serviceCity } = await params;

  if (RESERVED_ROUTES.has(serviceCity)) notFound();

  const parsed = parseServiceCity(serviceCity);
  if (!parsed) notFound();

  const combo = getCombo(parsed.service, parsed.city);
  const siblings = getSiblingServices(parsed.service, parsed.city);
  const nearby = getNearbyCityLinks(parsed.service, parsed.city);

  const locksmithServiceSchema = buildLocksmithServiceSchema({
    serviceType: combo.serviceMeta.schema_serviceType,
    description: combo.metaDescription,
    cityName: combo.cityMeta.name,
    slug: serviceCity,
  });

  const faqSchema = buildFAQSchema(combo.faqs);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
    {
      name: combo.serviceMeta.label,
      url: `${SITE.url}/services/${combo.serviceMeta.parentService}`,
    },
    {
      name: combo.cityMeta.name,
      url: `${SITE.url}/${serviceCity}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locksmithServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceCityHero
        h1={combo.h1}
        answerCapsule={combo.answerCapsule}
        serviceName={combo.serviceMeta.label}
      />

      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <ServiceCityBody
                whatWeDo={combo.whatWeDo}
                scenarioText={combo.scenarioText}
                cityName={combo.cityMeta.name}
                neighborhoods={combo.cityMeta.neighborhoods}
                zips={combo.cityMeta.zips}
                responseBand={combo.cityMeta.responseBand}
                serviceName={combo.serviceMeta.label}
              />

              <ServiceCityFaq
                faqs={combo.faqs}
                serviceName={combo.serviceMeta.label}
                cityName={combo.cityMeta.name}
              />

              <InternalLinks
                parentServiceSlug={combo.serviceMeta.parentService}
                parentServiceName={combo.serviceMeta.label}
                parentCitySlug={parsed.city}
                parentCityName={combo.cityMeta.name}
                siblingServices={siblings}
                nearbyLinks={nearby}
                currentServiceName={combo.serviceMeta.label}
              />
            </div>

            {/* Sticky sidebar form */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-6">
                <LeadFormSection
                  variant="sc"
                  source={`sc:${serviceCity}`}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
