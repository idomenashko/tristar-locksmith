import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/data";

export function ServicesGrid() {
  return (
    <Section className="bg-warm-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Our Locksmith Services
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From car lockouts to commercial lock systems — Tristar Locksmith
            handles it all with speed, care, and upfront pricing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-lg border border-warm-white-dark p-6 hover:shadow-md hover:border-gold transition-all duration-200"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2 group-hover:text-gold transition-colors"
                style={{ color: "#1B3A5C" }}
              >
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                {service.shortDescription}
              </p>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                style={{ color: "#1B3A5C" }}
              >
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
