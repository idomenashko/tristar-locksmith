import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getBusiness, getAdvantages } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Tristar Locksmith",
  description:
    "Tristar Locksmith has served Knoxville, TN and East Tennessee for over 15 years. Insured, background-checked technicians, upfront pricing, and no surprises. Call (865) 381-3931.",
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
            Serving Knoxville and East Tennessee for over 15 years. Insured, background-checked, and built on honest pricing.
          </p>
        </Container>
      </div>

      <Section className="bg-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto">

            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: "15+", label: "Years Serving East TN" },
                { value: "5.0★", label: "Average Customer Rating" },
                { value: "27", label: "Communities Served" },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 min-w-[120px] bg-white border border-gray-200 rounded-lg p-5 text-center">
                  <p className="text-3xl font-bold text-navy font-display">{stat.value}</p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4 font-display">Our Story</h2>
            <p className="text-ink leading-relaxed text-lg mb-6">
              Tristar Locksmith was founded in Knoxville with a straightforward goal: give East Tennessee residents and businesses a locksmith they could actually trust. Over 15 years later, we still operate with that same standard on every call, whether it&apos;s a car lockout on Kingston Pike at midnight or a commercial lock installation in downtown Knoxville.
            </p>
            <p className="text-ink leading-relaxed text-lg mb-6">
              The name &quot;Tristar&quot; is a nod to Tennessee&apos;s iconic three-star state flag. Three stars, three grand divisions of the state, and a reminder that we&apos;re rooted here. We know the roads, the neighborhoods, and the communities across Knox, Blount, Anderson, Sevier, and surrounding counties because we&apos;ve been driving them for well over a decade.
            </p>
            <p className="text-ink leading-relaxed text-lg mb-6">
              Tennessee does not require a state locksmith license, and we think transparency matters here. What we do require of every technician on our team is professional training, full liability insurance coverage, and a clean background check. When we show up at your door or your car, you can ask for verification of any of the above.
            </p>
            <p className="text-ink leading-relaxed text-lg mb-8">
              We work on every service we quote with upfront, honest pricing. The amount we say on the phone is the amount you pay. No hidden fees, no fuel surcharges added after the job, no bait-and-switch. That commitment has kept customers calling us back across 27 East Tennessee communities for over 15 years.
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
              <p className="text-white/80 mb-4">
                Available every day 7 AM to 11:30 PM, with emergency service around the clock. Call anytime.
              </p>
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
