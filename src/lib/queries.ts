import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import type { Business, Service, ServiceArea, Testimonial, FaqItem, Advantage } from './types';
import { BUSINESS, SERVICES, SERVICE_AREAS, TESTIMONIALS, FAQ, ADVANTAGES } from './data';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getBusiness(): Promise<Business> {
  try {
    const entry = await reader.singletons.business.read();
    if (!entry) return BUSINESS;
    return entry as unknown as Business;
  } catch {
    return BUSINESS;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const all = await reader.collections.services.all();
    if (!all.length) return SERVICES;
    return all.map(({ slug, entry }) => ({
      slug,
      title: (entry.title as unknown as { value: string }).value,
      icon: entry.icon,
      shortDescription: entry.shortDescription,
      longDescription: entry.longDescription,
      features: entry.features as string[],
      faqs: entry.faqs as { question: string; answer: string }[],
    }));
  } catch {
    return SERVICES;
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const entry = await reader.collections.services.read(slug);
    if (!entry) return SERVICES.find((s) => s.slug === slug) ?? null;
    return {
      slug,
      title: (entry.title as unknown as { value: string }).value,
      icon: entry.icon,
      shortDescription: entry.shortDescription,
      longDescription: entry.longDescription,
      features: entry.features as string[],
      faqs: entry.faqs as { question: string; answer: string }[],
    };
  } catch {
    return SERVICES.find((s) => s.slug === slug) ?? null;
  }
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  try {
    const all = await reader.collections.serviceAreas.all();
    if (!all.length) return SERVICE_AREAS;
    return all.map(({ slug, entry }) => ({
      slug,
      name: (entry.name as unknown as { value: string }).value,
      region: entry.region,
      description: entry.description,
      nearbyAreas: entry.nearbyAreas as string[],
    }));
  } catch {
    return SERVICE_AREAS;
  }
}

export async function getServiceArea(slug: string): Promise<ServiceArea | null> {
  try {
    const entry = await reader.collections.serviceAreas.read(slug);
    if (!entry) return SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
    return {
      slug,
      name: (entry.name as unknown as { value: string }).value,
      region: entry.region,
      description: entry.description,
      nearbyAreas: entry.nearbyAreas as string[],
    };
  } catch {
    return SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const all = await reader.collections.testimonials.all();
    if (!all.length) return TESTIMONIALS;
    return all.map(({ entry }) => ({
      name: (entry.name as unknown as { value: string }).value,
      rating: entry.rating ?? 5,
      text: entry.text,
      location: entry.location,
    }));
  } catch {
    return TESTIMONIALS;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const all = await reader.collections.faqs.all();
    if (!all.length) return FAQ;
    return all.map(({ entry }) => ({
      question: (entry.question as unknown as { value: string }).value,
      answer: entry.answer,
    }));
  } catch {
    return FAQ;
  }
}

export async function getAdvantages(): Promise<Advantage[]> {
  try {
    const all = await reader.collections.advantages.all();
    if (!all.length) return ADVANTAGES;
    return all.map(({ entry }) => ({
      title: (entry.title as unknown as { value: string }).value,
      icon: entry.icon,
      description: entry.description,
    }));
  } catch {
    return ADVANTAGES;
  }
}
