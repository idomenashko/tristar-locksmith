/**
 * Sanity seed script — one-time migration from src/lib/data.ts
 *
 * Run with:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Safe to run multiple times (uses createOrReplace).
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { resolve } from "path";

// Load .env.local before anything else
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
  FAQ,
  ADVANTAGES,
} from "../src/lib/data";

// ---------------------------------------------------------------------------
// Sanity client (write access)
// ---------------------------------------------------------------------------

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-04-16",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Lowercase + hyphens, strip non-alphanumeric-hyphen characters */
function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

/** Build a Sanity document _id for a service area by its display name */
function areaId(name: string): string {
  return `area-${slugify(name)}`;
}

// ---------------------------------------------------------------------------
// 1. Business
// ---------------------------------------------------------------------------

async function seedBusiness(): Promise<void> {
  console.log("\n--- Seeding business ---");

  const doc = {
    _id: "business",
    _type: "business",
    name: BUSINESS.name,
    phone: BUSINESS.phone,
    phoneHref: BUSINESS.phoneHref,
    hours: BUSINESS.hours,
    city: BUSINESS.city,
    state: BUSINESS.state,
    address: BUSINESS.address,
  };

  await client.createOrReplace(doc);
  console.log(`  ✓ business`);
}

// ---------------------------------------------------------------------------
// 2. Services
// ---------------------------------------------------------------------------

async function seedServices(): Promise<void> {
  console.log("\n--- Seeding services ---");

  for (const service of SERVICES) {
    const id = `service-${service.slug}`;

    const doc = {
      _id: id,
      _type: "service",
      slug: { _type: "slug" as const, current: service.slug },
      title: service.title,
      icon: service.icon,
      shortDescription: service.shortDescription,
      longDescription: service.longDescription,
      features: service.features,
      faqs: service.faqs.map((faq, i) => ({
        _key: `faq-${i}`,
        question: faq.question,
        answer: faq.answer,
      })),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ service: ${service.title} (${id})`);
  }
}

// ---------------------------------------------------------------------------
// 3. Service areas — Pass 1: create docs with empty nearbyAreas
// ---------------------------------------------------------------------------

async function seedServiceAreasPass1(): Promise<void> {
  console.log("\n--- Seeding service areas (pass 1 — create docs) ---");

  for (const area of SERVICE_AREAS) {
    const id = areaId(area.name);

    const doc = {
      _id: id,
      _type: "serviceArea",
      slug: { _type: "slug" as const, current: area.slug },
      name: area.name,
      region: area.region,
      description: area.description,
      nearbyAreas: [] as { _type: "reference"; _ref: string; _key: string }[],
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ serviceArea: ${area.name} (${id})`);
  }
}

// ---------------------------------------------------------------------------
// 3. Service areas — Pass 2: resolve nearbyAreas references and patch
// ---------------------------------------------------------------------------

async function seedServiceAreasPass2(): Promise<void> {
  console.log(
    "\n--- Seeding service areas (pass 2 — resolve nearbyAreas refs) ---"
  );

  // Build a lookup set of known area IDs so we can warn on missing refs
  const knownAreaIds = new Set(SERVICE_AREAS.map((a) => areaId(a.name)));

  for (const area of SERVICE_AREAS) {
    const id = areaId(area.name);

    const resolvedRefs: { _type: "reference"; _ref: string; _key: string }[] =
      [];

    for (const nearbyName of area.nearbyAreas) {
      const refId = areaId(nearbyName);

      if (knownAreaIds.has(refId)) {
        resolvedRefs.push({
          _type: "reference",
          _ref: refId,
          _key: refId,
        });
      } else {
        console.warn(
          `    ⚠  ${area.name}: nearby area "${nearbyName}" (${refId}) not found in SERVICE_AREAS — skipping reference`
        );
      }
    }

    await client.patch(id).set({ nearbyAreas: resolvedRefs }).commit();
    console.log(
      `  ✓ patched nearbyAreas for: ${area.name} (${resolvedRefs.length} refs)`
    );
  }
}

// ---------------------------------------------------------------------------
// 4. Testimonials
// ---------------------------------------------------------------------------

async function seedTestimonials(): Promise<void> {
  console.log("\n--- Seeding testimonials ---");

  for (let i = 0; i < TESTIMONIALS.length; i++) {
    const testimonial = TESTIMONIALS[i];
    const id = `testimonial-${i}`;

    const doc = {
      _id: id,
      _type: "testimonial",
      name: testimonial.name,
      rating: testimonial.rating,
      text: testimonial.text,
      location: testimonial.location,
      order: i + 1,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ testimonial-${i}: ${testimonial.name}`);
  }
}

// ---------------------------------------------------------------------------
// 5. FAQ items
// ---------------------------------------------------------------------------

async function seedFaq(): Promise<void> {
  console.log("\n--- Seeding FAQ items ---");

  for (let i = 0; i < FAQ.length; i++) {
    const item = FAQ[i];
    const id = `faq-${i}`;

    const doc = {
      _id: id,
      _type: "faqItem",
      question: item.question,
      answer: item.answer,
      order: i + 1,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ faq-${i}: ${item.question.slice(0, 60)}…`);
  }
}

// ---------------------------------------------------------------------------
// 6. Advantages
// ---------------------------------------------------------------------------

async function seedAdvantages(): Promise<void> {
  console.log("\n--- Seeding advantages ---");

  for (let i = 0; i < ADVANTAGES.length; i++) {
    const advantage = ADVANTAGES[i];
    const id = `advantage-${i}`;

    const doc = {
      _id: id,
      _type: "advantage",
      icon: advantage.icon,
      title: advantage.title,
      description: advantage.description,
      order: i + 1,
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ advantage-${i}: ${advantage.title}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("=== Tristar Locksmith — Sanity seed ===");
  console.log(
    `Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "(not set)"}`
  );
  console.log(
    `Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"}`
  );

  await seedBusiness();
  await seedServices();
  await seedServiceAreasPass1();
  await seedServiceAreasPass2();
  await seedTestimonials();
  await seedFaq();
  await seedAdvantages();

  console.log("\n=== Seed complete ===");
}

main().catch((err: unknown) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
