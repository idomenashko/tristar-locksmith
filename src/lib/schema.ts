import { getBusiness, getServiceAreas } from "@/lib/queries";

export async function buildLocalBusinessSchema() {
  const [business, serviceAreas] = await Promise.all([
    getBusiness(),
    getServiceAreas(),
  ]);

  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: business.name,
    telephone: business.phone,
    url: "https://tristarlocksmith.com",
    image: "https://tristarlocksmith.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.state,
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
    areaServed: serviceAreas.map((area) => ({
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

