import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Import data directly (the TypeScript paths will be resolved by tsx)
import { BUSINESS, SERVICES, SERVICE_AREAS, TESTIMONIALS, FAQ, ADVANTAGES } from '../src/lib/data';

const ROOT = process.cwd();

function write(filePath: string, data: unknown) {
  const fullPath = join(ROOT, filePath);
  const dir = fullPath.substring(0, fullPath.lastIndexOf('/'));
  mkdirSync(dir, { recursive: true });
  writeFileSync(fullPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✓ ${filePath}`);
}

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 60)
    .replace(/-$/, '');
}

// Business singleton
write('content/business/index.json', BUSINESS);

// Services (already have slug property)
for (const service of SERVICES) {
  const { slug, title, icon, shortDescription, longDescription, features, faqs } = service;
  write(`content/services/${slug}/index.json`, {
    title: { value: title },
    icon,
    shortDescription,
    longDescription,
    features,
    faqs,
  });
}

// Service areas (already have slug property)
for (const area of SERVICE_AREAS) {
  const { slug, name, region, description, nearbyAreas } = area;
  write(`content/service-areas/${slug}/index.json`, {
    name: { value: name },
    region,
    description,
    nearbyAreas,
  });
}

// Testimonials (derive slug from name)
for (const t of TESTIMONIALS) {
  const slug = toSlug(t.name);
  write(`content/testimonials/${slug}/index.json`, {
    name: { value: t.name },
    rating: t.rating,
    text: t.text,
    location: t.location,
  });
}

// FAQs (derive slug from question, truncate)
for (const faq of FAQ) {
  const slug = toSlug(faq.question).split('-').slice(0, 6).join('-');
  write(`content/faqs/${slug}/index.json`, {
    question: { value: faq.question },
    answer: faq.answer,
  });
}

// Advantages (derive slug from title)
for (const adv of ADVANTAGES) {
  const slug = toSlug(adv.title);
  write(`content/advantages/${slug}/index.json`, {
    title: { value: adv.title },
    icon: adv.icon,
    description: adv.description,
  });
}

console.log('\n✅ Migration complete!');
