import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getProjects } from "@/lib/queries";
import { buildProjectsSchema } from "@/lib/schema";
import type { Project } from "@/lib/types";

const categoryConfig: Record<
  Project["category"],
  { variant: "gold" | "navy" | "forest" | "emergency"; label: string }
> = {
  automotive: { variant: "gold", label: "Automotive" },
  residential: { variant: "navy", label: "Residential" },
  commercial: { variant: "forest", label: "Commercial" },
  safes: { variant: "emergency", label: "Safes" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export async function RecentProjects() {
  const projects = await getProjects();
  if (projects.length === 0) return null;

  const schema = buildProjectsSchema(projects);

  return (
    <Section className="bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
            Recent Projects
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real jobs, real results — a look at recent work completed by our
            Knoxville locksmith team.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const cat = categoryConfig[project.category];
            return (
              <article
                key={project.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.description}`}
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <Badge variant={cat.variant}>{cat.label}</Badge>
                  <h3 className="text-base font-bold text-navy leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted">
                    {formatDate(project.date)} &middot; {project.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
