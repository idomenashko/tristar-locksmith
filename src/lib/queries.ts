import type { Business, Service, ServiceArea, Testimonial, FaqItem, Advantage, HomepageContent } from './types';
import businessData from '../../content/business.json';
import servicesData from '../../content/services.json';
import serviceAreasData from '../../content/service-areas.json';
import testimonialsData from '../../content/testimonials.json';
import faqData from '../../content/faq.json';
import advantagesData from '../../content/advantages.json';
import homepageData from '../../content/homepage.json';

export async function getHomepage(): Promise<HomepageContent> {
  return homepageData as HomepageContent;
}

export async function getBusiness(): Promise<Business> {
  return businessData as Business;
}

export async function getServices(): Promise<Service[]> {
  return servicesData.items as Service[];
}

export async function getService(slug: string): Promise<Service | null> {
  return (servicesData.items as Service[]).find((s) => s.slug === slug) ?? null;
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  return serviceAreasData.items as ServiceArea[];
}

export async function getServiceArea(slug: string): Promise<ServiceArea | null> {
  return (serviceAreasData.items as ServiceArea[]).find((a) => a.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonialsData.items as Testimonial[];
}

export async function getFaqs(): Promise<FaqItem[]> {
  return faqData.items as FaqItem[];
}

export async function getAdvantages(): Promise<Advantage[]> {
  return advantagesData.items as Advantage[];
}
