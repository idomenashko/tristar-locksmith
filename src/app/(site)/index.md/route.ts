import { NextResponse } from 'next/server';
import { getBusiness, getServices, getServiceAreas, getFaqs, getHomepage } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const [business, services, areas, faqs, homepage] = await Promise.all([
    getBusiness(),
    getServices(),
    getServiceAreas(),
    getFaqs(),
    getHomepage(),
  ]);

  const serviceLines = services
    .map((s) => `- **[${s.title}](${SITE.url}/services/${s.slug})**, ${s.shortDescription}`)
    .join('\n');

  const areaLines = areas
    .map((a) => `- **[${a.name}](${SITE.url}/service-areas/${a.slug})**, TN`)
    .join('\n');

  const faqLines = faqs
    .map((f) => `**${f.question}**\n${f.answer}`)
    .join('\n\n');

  const phoneDigits = business.phone.replace(/\D/g, '');

  const content = `# Tristar Locksmith, Knoxville, TN Locksmith

> [View HTML version](${SITE.url}/)

${homepage.heroHeadline}

**Serving Knoxville, TN and 27 surrounding areas.**

📞 Call Now: ${business.phone}
🕒 Hours: ${business.hours}
📍 Location: ${business.address}

---

## Our Services

${serviceLines}

---

## Service Areas

We serve the following cities and surrounding communities in East Tennessee:

${areaLines}

---

## Frequently Asked Questions

${faqLines}

---

## Contact

📞 **Phone:** [${business.phone}](tel:${phoneDigits})
🌐 **Website:** [tristarlocksmith.com](https://tristarlocksmith.com)
📍 **Address:** ${business.address}
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
