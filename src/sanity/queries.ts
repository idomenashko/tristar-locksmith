import type {
  Business,
  Service,
  ServiceArea,
  Testimonial,
  FaqItem,
  Advantage,
} from "@/lib/types";
import { sanityClient } from "./client";

const revalidate = 60;

/** Fallback business data used when Sanity dataset is not yet seeded. */
const FALLBACK_BUSINESS: Business = {
  name: "Tristar Locksmith",
  phone: "(865) 381-3931",
  phoneHref: "tel:8653813931",
  hours: "24/7",
  city: "Knoxville",
  state: "TN",
  address: "Knoxville, TN",
};

export async function getBusiness(): Promise<Business> {
  if (!sanityClient) return FALLBACK_BUSINESS;
  try {
    const result = await sanityClient.fetch<Business | null>(
      `*[_type == "business" && _id == "business"][0]{
        name,
        phone,
        phoneHref,
        hours,
        city,
        state,
        address
      }`,
      {},
      { next: { revalidate, tags: ["business"] } }
    );
    return result ?? FALLBACK_BUSINESS;
  } catch {
    return FALLBACK_BUSINESS;
  }
}

export async function getServices(): Promise<Service[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<Service[]>(
      `*[_type == "service"] | order(order asc) {
        "slug": slug.current,
        title,
        icon,
        shortDescription,
        longDescription,
        features,
        faqs
      }`,
      {},
      { next: { revalidate, tags: ["service"] } }
    );
  } catch {
    return [];
  }
}

export async function getService(slug: string): Promise<Service | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<Service | null>(
      `*[_type == "service" && slug.current == $slug][0]{
        "slug": slug.current,
        title,
        icon,
        shortDescription,
        longDescription,
        features,
        faqs
      }`,
      { slug },
      { next: { revalidate, tags: ["service", `service:${slug}`] } }
    );
  } catch {
    return null;
  }
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<ServiceArea[]>(
      `*[_type == "serviceArea"] | order(order asc) {
        "slug": slug.current,
        name,
        region,
        description,
        "nearbyAreas": nearbyAreas[]->name
      }`,
      {},
      { next: { revalidate, tags: ["serviceArea"] } }
    );
  } catch {
    return [];
  }
}

export async function getServiceArea(
  slug: string
): Promise<ServiceArea | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<ServiceArea | null>(
      `*[_type == "serviceArea" && slug.current == $slug][0]{
        "slug": slug.current,
        name,
        region,
        description,
        "nearbyAreas": nearbyAreas[]->name
      }`,
      { slug },
      { next: { revalidate, tags: ["serviceArea", `serviceArea:${slug}`] } }
    );
  } catch {
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<Testimonial[]>(
      `*[_type == "testimonial"] | order(order asc) {
        name,
        rating,
        text,
        location
      }`,
      {},
      { next: { revalidate, tags: ["testimonial"] } }
    );
  } catch {
    return [];
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<FaqItem[]>(
      `*[_type == "faqItem"] | order(order asc) {
        question,
        answer
      }`,
      {},
      { next: { revalidate, tags: ["faqItem"] } }
    );
  } catch {
    return [];
  }
}

export async function getAdvantages(): Promise<Advantage[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<Advantage[]>(
      `*[_type == "advantage"] | order(order asc) {
        icon,
        title,
        description
      }`,
      {},
      { next: { revalidate, tags: ["advantage"] } }
    );
  } catch {
    return [];
  }
}
