import type {
  Business,
  Service,
  ServiceArea,
  Testimonial,
  FaqItem,
  Advantage,
} from "@/lib/types";
import { sanityClient } from "./client";
import {
  BUSINESS,
  SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
  FAQ,
  ADVANTAGES,
} from "@/lib/data";

const revalidate = 60;

export async function getBusiness(): Promise<Business> {
  if (!sanityClient) return BUSINESS;
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
    return result ?? BUSINESS;
  } catch {
    return BUSINESS;
  }
}

export async function getServices(): Promise<Service[]> {
  if (!sanityClient) return SERVICES;
  try {
    const result = await sanityClient.fetch<Service[]>(
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
    return result.length > 0 ? result : SERVICES;
  } catch {
    return SERVICES;
  }
}

export async function getService(slug: string): Promise<Service | null> {
  if (!sanityClient) return SERVICES.find((s) => s.slug === slug) ?? null;
  try {
    const result = await sanityClient.fetch<Service | null>(
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
    return result ?? SERVICES.find((s) => s.slug === slug) ?? null;
  } catch {
    return SERVICES.find((s) => s.slug === slug) ?? null;
  }
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  if (!sanityClient) return SERVICE_AREAS;
  try {
    const result = await sanityClient.fetch<ServiceArea[]>(
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
    return result.length > 0 ? result : SERVICE_AREAS;
  } catch {
    return SERVICE_AREAS;
  }
}

export async function getServiceArea(
  slug: string
): Promise<ServiceArea | null> {
  if (!sanityClient) return SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
  try {
    const result = await sanityClient.fetch<ServiceArea | null>(
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
    return result ?? SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
  } catch {
    return SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) return TESTIMONIALS;
  try {
    const result = await sanityClient.fetch<Testimonial[]>(
      `*[_type == "testimonial"] | order(order asc) {
        name,
        rating,
        text,
        location
      }`,
      {},
      { next: { revalidate, tags: ["testimonial"] } }
    );
    return result.length > 0 ? result : TESTIMONIALS;
  } catch {
    return TESTIMONIALS;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  if (!sanityClient) return FAQ;
  try {
    const result = await sanityClient.fetch<FaqItem[]>(
      `*[_type == "faqItem"] | order(order asc) {
        question,
        answer
      }`,
      {},
      { next: { revalidate, tags: ["faqItem"] } }
    );
    return result.length > 0 ? result : FAQ;
  } catch {
    return FAQ;
  }
}

export async function getAdvantages(): Promise<Advantage[]> {
  if (!sanityClient) return ADVANTAGES;
  try {
    const result = await sanityClient.fetch<Advantage[]>(
      `*[_type == "advantage"] | order(order asc) {
        icon,
        title,
        description
      }`,
      {},
      { next: { revalidate, tags: ["advantage"] } }
    );
    return result.length > 0 ? result : ADVANTAGES;
  } catch {
    return ADVANTAGES;
  }
}
