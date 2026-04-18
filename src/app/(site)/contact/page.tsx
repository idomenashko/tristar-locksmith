import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getBusiness, getServiceAreas } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Tristar Locksmith",
  description:
    "Contact Tristar Locksmith — call (865) 381-3931 for 24/7 locksmith service in Knoxville, TN and surrounding areas. Fast 15-30 minute response.",
  path: "/contact",
});

export default async function ContactPage() {
  const [business, serviceAreas] = await Promise.all([getBusiness(), getServiceAreas()]);
  return (
    <>
      <div className="bg-navy text-white py-16">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The fastest way to reach us is by phone. We&apos;re available 24/7 — no hold times, no automated systems.
          </p>
        </Container>
      </div>

      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 font-display">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone (Preferred)</h3>
                    <a
                      href={business.phoneHref}
                      className="text-gold font-bold text-2xl hover:text-gold-dark transition-colors"
                    >
                      {business.phone}
                    </a>
                    <p className="text-muted text-sm mt-1">Call or text anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200">
                  <span className="text-3xl">🕐</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Hours</h3>
                    <p className="text-ink font-semibold text-lg">24 Hours / 7 Days a Week</p>
                    <p className="text-muted text-sm">Including holidays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Service Location</h3>
                    <p className="text-ink">Knoxville, TN and surrounding East Tennessee areas</p>
                    <p className="text-muted text-sm mt-1">We come to you — no storefront visits needed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Response Time</h3>
                    <p className="text-ink font-semibold">15-30 Minutes</p>
                    <p className="text-muted text-sm mt-1">For most Knoxville area locations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="tel:8653813931" variant="emergency" size="lg" className="w-full justify-center">
                  🚨 Call Now — Available 24/7
                </Button>
              </div>
            </div>

            {/* Areas */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 font-display">Areas We Serve</h2>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <div key={area.slug} className="flex items-center gap-2 text-sm text-ink py-1">
                    <span className="text-forest font-bold">✓</span>
                    {area.name}
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm mt-4">
                Not seeing your area? Call us — we may still be able to help.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
