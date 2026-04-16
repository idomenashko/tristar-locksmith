import { SERVICE_AREAS, SERVICES } from "./data";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "Tristar Locksmith",
    telephone: "(865) 381-3931",
    url: "https://tristarlocksmith.com",
    image: "https://tristarlocksmith.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Knoxville",
      addressRegion: "TN",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.9606,
      longitude: -83.9207,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
  };
}

export function buildServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Locksmith",
      name: "Tristar Locksmith",
      telephone: "(865) 381-3931",
      url: "https://tristarlocksmith.com",
    },
    areaServed: {
      "@type": "State",
      name: "Tennessee",
    },
    url,
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Re-export SERVICES to allow consumers to import from schema if needed
export { SERVICES };
