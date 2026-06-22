import { NextResponse } from 'next/server';
import {
  getBusiness,
  getServices,
  getServiceAreas,
  getTestimonials,
  getFaqs,
  getAdvantages,
} from '@/lib/queries';
import { getAllPosts } from '@/lib/blog';
import { SITE } from '@/lib/seo';

export async function GET() {
  const [business, services, areas, testimonials, faqs, advantages] =
    await Promise.all([
      getBusiness(),
      getServices(),
      getServiceAreas(),
      getTestimonials(),
      getFaqs(),
      getAdvantages(),
    ]);
  const posts = getAllPosts();

  const servicesSection = services
    .map((service) => {
      const features = service.features.map((f) => `- ${f}`).join('\n');
      const serviceFaqs = service.faqs
        .map((faq) => `**Q: ${faq.question}**\nA: ${faq.answer}`)
        .join('\n\n');

      return `### ${service.title}

${service.longDescription}

**Key Features:**
${features}

**Frequently Asked Questions:**
${serviceFaqs}

---`;
    })
    .join('\n\n');

  const areasSection = areas
    .map((area) => {
      const nearby =
        area.nearbyAreas && area.nearbyAreas.length > 0
          ? area.nearbyAreas.join(', ')
          : 'N/A';

      return `### ${area.name}, TN

**Region:** ${area.region}

${area.description}

**Nearby Areas:** ${nearby}

---`;
    })
    .join('\n\n');

  const faqsSection = faqs
    .map((faq) => `**Q: ${faq.question}**\nA: ${faq.answer}`)
    .join('\n\n');

  const advantagesSection = advantages
    .map(
      (advantage) => `### ${advantage.title}

${advantage.description}`
    )
    .join('\n\n');

  const testimonialsSection = testimonials
    .map(
      (testimonial) =>
        `**${testimonial.name}** (${testimonial.location}) — ${testimonial.rating}/5 stars

"${testimonial.text}"`
    )
    .join('\n\n');

  const content = `# Tristar Locksmith — Complete Site Content

> This file contains all content from the Tristar Locksmith website for AI indexing.
> Website: ${SITE.url}

---

## Business Information

**Name:** ${business.name}
**Phone:** ${business.phone}
**Hours:** ${business.hours}
**Emergency:** ${business.emergencyHours ?? '24/7 Emergency Available'}
**Address:** ${business.address}
**City:** ${business.city}, ${business.state}

---

## Services

${servicesSection}

## Service Areas

${areasSection}

## Frequently Asked Questions

${faqsSection}

---

## Why Choose Tristar Locksmith

${advantagesSection}

---

## Customer Reviews

${testimonialsSection}
${posts.length > 0 ? `
---

## Blog Posts

${posts.map((p) => `### [${p.title}](${SITE.url}/blog/${p.slug})\n\nPublished: ${p.date}\n\n${p.description}`).join('\n\n')}
` : ''}`;


  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
