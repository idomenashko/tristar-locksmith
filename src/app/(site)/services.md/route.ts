import { NextResponse } from 'next/server';
import { getServices } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const services = await getServices();

  const serviceBlocks = services
    .map(
      (s) => `### [${s.title}](${SITE.url}/services/${s.slug})

${s.shortDescription}

**Full details:** [View service page](${SITE.url}/services/${s.slug}) | [Markdown version](${SITE.url}/services/${s.slug}.md)`
    )
    .join('\n\n');

  const content = `# Locksmith Services, Tristar Locksmith, Knoxville TN

> [View HTML version](${SITE.url}/services)

Professional locksmith services available 24/7 in Knoxville, TN and surrounding areas.

## Available Services

${serviceBlocks}

---

📞 **Call for any service:** [${SITE.phone}](${SITE.phoneHref})
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
