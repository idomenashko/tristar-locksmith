import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { getTestimonials, getBusiness } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description:
    "Read reviews from Tristar Locksmith customers in Knoxville, TN. 5-star rated locksmith service for car lockout, house lockout, rekey, and more.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const [testimonials, business] = await Promise.all([getTestimonials(), getBusiness()]);
  return (
    <>
      <div className="bg-navy text-white py-16">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
            Customer Reviews
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <Stars rating={5} />
            <span className="text-white/80">5.0 — 127+ reviews</span>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Don&apos;t take our word for it — here&apos;s what our customers in the Knoxville area say about Tristar Locksmith.
          </p>
        </Container>
      </div>

      <Section className="bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <Stars rating={testimonial.rating} className="mb-3" />
                <blockquote className="text-ink leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                    <p className="text-muted text-xs">{testimonial.location}</p>
                  </div>
                </footer>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-navy rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-2 font-display">Experience the Tristar Difference</h2>
              <p className="text-white/80 mb-6">Join hundreds of satisfied customers across the Knoxville area.</p>
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
