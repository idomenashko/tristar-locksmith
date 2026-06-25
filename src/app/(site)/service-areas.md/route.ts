import { NextResponse } from 'next/server';
import { getServiceAreas } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const areas = await getServiceAreas();

  const areaBlocks = areas
    .map(
      (area) => `### [${area.name}](${SITE.url}/service-areas/${area.slug})

**Region:** ${area.region}

${area.description}

**Markdown:** [View as markdown](${SITE.url}/service-areas/${area.slug}.md)`
    )
    .join('\n\n');

  const content = `# Service Areas, Tristar Locksmith, Knoxville TN

> [View HTML version](${SITE.url}/service-areas)

Tristar Locksmith serves Knoxville, TN and 27 surrounding cities in East Tennessee.

## Areas We Serve

${areaBlocks}

---

📞 **Need a locksmith in your area?** Call [${SITE.phone}](tel:8653813931)
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
