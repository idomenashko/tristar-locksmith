import { NextResponse } from 'next/server';
import { getTestimonials } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const testimonials = await getTestimonials();

  const testimonialBlocks = testimonials
    .map(
      (t) => `### ${t.name} — ${t.location}

⭐ **Rating:** ${t.rating}/5 stars

> "${t.text}"`
    )
    .join('\n\n');

  const content = `# Customer Reviews — Tristar Locksmith, Knoxville TN

> [View HTML version](${SITE.url}/reviews)

Read what our customers say about Tristar Locksmith.

## Customer Testimonials

${testimonialBlocks}

---

📞 **Ready to experience great service?** Call [${SITE.phone}](${SITE.phoneHref})
🌐 [tristarlocksmith.com/reviews](${SITE.url}/reviews)
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
