import { notFound } from "next/navigation";
import { SERVICES, BUSINESS } from "@/lib/data";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: `${service.shortDescription} Tristar Locksmith serves Knoxville, TN and surrounding areas. Call (865) 381-3931.`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = buildServiceSchema(
    service.title,
    service.longDescription,
    `${SITE.url}/services/${slug}`
  );
  const faqSchema = buildFAQSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero service={service} />
      <Section className="bg-warm-white">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-navy mb-4 font-display">
              About This Service
            </h2>
            <p className="text-ink leading-relaxed text-lg mb-8">
              {service.longDescription}
            </p>

            <h3 className="text-xl font-bold text-navy mb-4 font-display">
              What&apos;s Included
            </h3>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-forest mt-1 font-bold text-lg">✓</span>
                  <span className="text-ink">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-navy rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2 font-display">
                Need {service.title}?
              </h3>
              <p className="text-white/80 mb-4">
                Available 24/7 in Knoxville, TN and surrounding areas.
              </p>
              <Button href="tel:8653813931" variant="primary" size="lg">
                📞 Call {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {service.faqs.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-navy mb-8 font-display">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                  <p className="text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
