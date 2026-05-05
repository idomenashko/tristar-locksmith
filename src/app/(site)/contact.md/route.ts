import { NextResponse } from 'next/server';
import { getBusiness, getServiceAreas } from '@/lib/queries';
import { SITE } from '@/lib/seo';

export async function GET() {
  const [business, areas] = await Promise.all([getBusiness(), getServiceAreas()]);

  const phoneDigitsOnly = business.phone.replace(/\D/g, '');

  const areaList = areas.map((area) => `- ${area.name}, TN`).join('\n');

  const content = `# Contact Tristar Locksmith — Knoxville, TN

> [View HTML version](${SITE.url}/contact)

## Contact Information

📞 **Phone:** [${business.phone}](tel:${phoneDigitsOnly})
🕒 **Hours:** ${business.hours}
🚨 **Emergency:** ${business.emergencyHours ?? '24/7 Emergency Service'}
📍 **Address:** ${business.address}, ${business.city}, ${business.state}

Call us anytime — no online booking form needed.

---

## Service Area

We serve the following cities in East Tennessee:

${areaList}

---

📞 **Call now:** [${business.phone}](tel:${phoneDigitsOnly})
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
