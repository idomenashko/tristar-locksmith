import { NextResponse } from 'next/server';
import { getService, getServices } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<Record<string, string>> }
) {
  const { slug = '' } = await params ?? {};

  if (!slug) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const service = await getService(slug);

  if (!service) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const featureLines = service.features.map((f) => `- ${f}`).join('\n');

  const faqBlocks = service.faqs
    .map((faq) => `**Q: ${faq.question}**\n\nA: ${faq.answer}`)
    .join('\n\n');

  const content = `# ${service.title} — Tristar Locksmith, Knoxville TN

> [View HTML version](${SITE.url}/services/${service.slug})

${service.longDescription}

---

## Key Features

${featureLines}

---

## Frequently Asked Questions

${faqBlocks}

---

📞 **Need ${service.title}?** Call [${SITE.phone}](${SITE.phoneHref})
🌐 **Learn more:** [tristarlocksmith.com/services/${service.slug}](${SITE.url}/services/${service.slug})
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
