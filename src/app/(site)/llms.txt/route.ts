import { NextResponse } from 'next/server';
import { getBusiness, getServices, getServiceAreas } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const [business, services, areas] = await Promise.all([
    getBusiness(),
    getServices(),
    getServiceAreas(),
  ]);

  const base = SITE.url;

  const servicePages = services
    .map((s) => `- [${s.title}](${base}/services/${s.slug}): ${s.shortDescription}`)
    .join('\n');

  const areaPages = areas
    .map((a) => `- [${a.name}](${base}/service-areas/${a.slug}): Locksmith services in ${a.name}, TN`)
    .join('\n');

  const serviceMirrors = services
    .map((s) => `- [${s.title}](${base}/services/${s.slug}.md)`)
    .join('\n');

  const areaMirrors = areas
    .map((a) => `- [${a.name}](${base}/service-areas/${a.slug}.md)`)
    .join('\n');

  const content = `# Tristar Locksmith

> Trusted 24/7 locksmith serving Knoxville, TN and 27 surrounding areas.

## Business Info
- Phone: ${business.phone}
- Hours: ${business.hours} | ${business.emergencyHours ?? '24/7 Emergency Service Available'}
- Address: ${business.address}
- Website: ${base}

## Pages

- [Homepage](${base}/): Professional locksmith services in Knoxville, TN
- [Services](${base}/services): All locksmith services we offer
- [Service Areas](${base}/service-areas): Cities and areas we serve
- [About](${base}/about): About Tristar Locksmith
- [Contact](${base}/contact): Contact us for locksmith help
- [Reviews](${base}/reviews): Customer reviews and testimonials
${servicePages}
${areaPages}

## Markdown Mirrors

- [Homepage](${base}/index.md)
- [Services](${base}/services.md)
- [Service Areas](${base}/service-areas.md)
- [About](${base}/about.md)
- [Contact](${base}/contact.md)
- [Reviews](${base}/reviews.md)
${serviceMirrors}
${areaMirrors}

## Full Content
- [Full site content](${base}/llms-full.txt)
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
