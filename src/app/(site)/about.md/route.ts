import { NextResponse } from 'next/server';
import { getBusiness, getAdvantages } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const [business, advantages] = await Promise.all([getBusiness(), getAdvantages()]);

  const phoneDigitsOnly = business.phone.replace(/\D/g, '');

  const advantageBlocks = advantages
    .map(
      (a) => `### ${a.title}

${a.description}`
    )
    .join('\n\n');

  const content = `# About Tristar Locksmith — Knoxville, TN

> [View HTML version](${SITE.url}/about)

Tristar Locksmith is a trusted local locksmith serving Knoxville, TN and 27 surrounding communities in East Tennessee.

## Business Information

- **Phone:** ${business.phone}
- **Hours:** ${business.hours}
- **Emergency:** ${business.emergencyHours ?? '24/7 Emergency Service'}
- **Address:** ${business.address}
- **City:** ${business.city}, ${business.state}

---

## Why Choose Tristar Locksmith

${advantageBlocks}

---

📞 **Contact us:** [${business.phone}](tel:${phoneDigitsOnly})
🌐 **Website:** [tristarlocksmith.com](${SITE.url})
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
