import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICE_AREAS } from "@/lib/data";

export function AreasSection() {
  return (
    <Section className="bg-warm-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Serving Knoxville &amp; Surrounding Areas
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Tristar Locksmith covers Knox County and all surrounding communities
            across East Tennessee — 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Area chips */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-warm-white-dark text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-150 shadow-sm"
            >
              {area.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/service-areas" variant="secondary" size="md">
            View All Service Areas
          </Button>
        </div>
      </Container>
    </Section>
  );
}
