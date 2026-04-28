export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  description: string;
  nearbyAreas: string[];
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface HomepageContent {
  heroHeadline: string;
  heroSubheadline: string;
  heroImage?: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  category: 'automotive' | 'residential' | 'commercial' | 'safes';
  date: string;
  location: string;
  description: string;
}

export interface Business {
  name: string;
  phone: string;
  phoneHref: string;
  hours: string;
  emergencyHours?: string;
  city: string;
  state: string;
  address: string;
  email?: string;
  logo?: string;
}
