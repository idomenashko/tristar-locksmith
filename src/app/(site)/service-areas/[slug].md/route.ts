import { NextResponse } from 'next/server';
import { getServiceArea, getServices, getServiceAreas } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function generateStaticParams() {
  const areas = await getServiceAreas();
  return areas.map((a) => ({ slug: a.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<Record<string, string>> }
) {
  const { slug = '' } = await params ?? {};

  if (!slug) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const area = await getServiceArea(slug);

  if (!area) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const services = await getServices();

  const serviceLines = services
    .map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}), ${s.shortDescription}`)
    .join('\n');

  const nearbyLines = area.nearbyAreas.map((a) => `- ${a}`).join('\n');

  const content = `# Locksmith Services in ${area.name}, TN, Tristar Locksmith

> [View HTML version](${SITE.url}/service-areas/${area.slug})

**Region:** ${area.region}

${area.description}

---

## Services Available in ${area.name}

${serviceLines}

---

## Nearby Areas

${nearbyLines}

---

📞 **Need a locksmith in ${area.name}?** Call [${SITE.phone}](tel:8653813931)
🌐 [${SITE.url}/service-areas/${area.slug}](${SITE.url}/service-areas/${area.slug})
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
