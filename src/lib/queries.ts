import type { Business, Service, ServiceArea, Testimonial, FaqItem, Advantage } from "./types";
import { BUSINESS, SERVICES, SERVICE_AREAS, TESTIMONIALS, FAQ, ADVANTAGES } from "./data";

export function getBusiness(): Business {
  return BUSINESS;
}

export function getServices(): Service[] {
  return SERVICES;
}

export function getService(slug: string): Service | null {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getServiceAreas(): ServiceArea[] {
  return SERVICE_AREAS;
}

export function getServiceArea(slug: string): ServiceArea | null {
  return SERVICE_AREAS.find((a) => a.slug === slug) ?? null;
}

export function getTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}

export function getFaqs(): FaqItem[] {
  return FAQ;
}

export function getAdvantages(): Advantage[] {
  return ADVANTAGES;
}
