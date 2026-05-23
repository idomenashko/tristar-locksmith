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
      opens: "07:00",
      closes: "23:30",
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

export function buildProjectsSchema(projects: { title: string; description: string; image: string; location: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recent Locksmith Projects — Tristar Locksmith",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: project.title,
        description: project.description,
        image: `https://tristarlocksmith.com${project.image}`,
        provider: {
          "@type": "Locksmith",
          name: "Tristar Locksmith",
          telephone: "(865) 381-3931",
          url: "https://tristarlocksmith.com",
        },
        areaServed: project.location,
        datePublished: project.date,
      },
    })),
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://tristarlocksmith.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Locksmith",
      name: "Tristar Locksmith",
      telephone: "(865) 381-3931",
      url: "https://tristarlocksmith.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tristarlocksmith.com/blog/${post.slug}`,
    },
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

export function buildLocksmithServiceSchema(opts: {
  serviceType: string;
  description: string;
  cityName: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${opts.serviceType} — ${opts.cityName}, TN`,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: {
      "@type": "Locksmith",
      name: "Tristar Locksmith",
      telephone: "(865) 381-3931",
      url: "https://tristarlocksmith.com",
    },
    areaServed: {
      "@type": "City",
      name: opts.cityName,
      containedInPlace: {
        "@type": "State",
        name: "Tennessee",
      },
    },
    url: `https://tristarlocksmith.com/${opts.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: opts.cityName,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tristar Locksmith",
    url: "https://tristarlocksmith.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tristarlocksmith.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

