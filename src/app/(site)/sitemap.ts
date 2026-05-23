import type { MetadataRoute } from "next";
import { getServices, getServiceAreas } from "@/lib/queries";
import { getAllPosts } from "@/lib/blog";
import { getActiveCombos } from "@/lib/service-city";

const BASE_URL = "https://tristarlocksmith.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, serviceAreas] = await Promise.all([
    getServices(),
    getServiceAreas(),
  ]);

  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const aiPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/llms.txt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/llms-full.txt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/index.md`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.4 },
    { url: `${BASE_URL}/services.md`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/service-areas.md`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/about.md`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/contact.md`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/reviews.md`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  const serviceMdPages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}.md`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }));

  const areaMdPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}.md`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  }));

  const blogListPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogMdPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}.md`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const activeCombos = getActiveCombos();
  const comboPages: MetadataRoute.Sitemap = activeCombos.map((combo) => ({
    url: `${BASE_URL}/${combo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...comboPages,
    ...servicePages,
    ...areaPages,
    ...blogListPage,
    ...blogPostPages,
    ...aiPages,
    ...serviceMdPages,
    ...areaMdPages,
    ...blogMdPages,
  ];
}
