import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getBusiness, getAdvantages } from "@/sanity/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Tristar Locksmith",
  description:
    "Learn about Tristar Locksmith — Knoxville's trusted local locksmith. Licensed, insured, and available 24/7 for all your locksmith needs in East Tennessee.",
  path: "/about",
});

export default async function AboutPage() {
  const [business, advantages] = await Promise.all([getBusiness(), getAdvantages()]);
  return (
    <>
      <div className="bg-navy text-white py-16">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            About Tristar Locksmith
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Knoxville&apos;s trusted local locksmith — licensed, insured, and available 24/7.
          </p>
        </Container>
      </div>

      <Section className="bg-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-4 font-display">Our Story</h2>
            <p className="text-ink leading-relaxed text-lg mb-6">
              Tristar Locksmith has been proudly serving the Knoxville, Tennessee community and surrounding East Tennessee areas. The name &quot;Tristar&quot; is inspired by Tennessee&apos;s iconic three-star flag — a symbol of the state&apos;s three grand divisions and a reminder of our deep roots in this community.
            </p>
            <p className="text-ink leading-relaxed text-lg mb-6">
              We started with a simple mission: provide honest, fast, and professional locksmith service to our neighbors in Knoxville and the surrounding areas. Whether you&apos;re locked out of your car at 2 AM, need to rekey your home after moving, or require commercial security upgrades, we&apos;re here to help.
            </p>
            <p className="text-ink leading-relaxed text-lg mb-8">
              Our team is fully licensed and insured, and we&apos;re committed to transparent pricing — no hidden fees, no surprises. When you call Tristar Locksmith, you get a real local expert who knows Knox County and the surrounding communities.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-6 font-display">Why Choose Tristar?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((adv) => (
                <div key={adv.title} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-3xl">{adv.icon}</span>
                  <div>
                    <h3 className="font-bold text-navy mb-1">{adv.title}</h3>
                    <p className="text-muted text-sm">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2 font-display">Ready to Work With Us?</h3>
              <p className="text-white/80 mb-4">Call anytime — we&apos;re available 24 hours a day, 7 days a week.</p>
              <Button href="tel:8653813931" variant="primary" size="lg">
                📞 Call {business.phone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
