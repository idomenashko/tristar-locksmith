import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Stars } from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <Section className="bg-navy text-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#fff" }}
          >
            What Our Customers Say
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)" }} className="max-w-xl mx-auto">
            Real reviews from real Knoxville-area customers who counted on us
            when it mattered most.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <Stars rating={testimonial.rating} />

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed text-ink flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer className="flex items-center gap-3 pt-2 border-t border-warm-white-dark">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: "#1B3A5C" }}
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">{testimonial.location}</div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
