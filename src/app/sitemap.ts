import { MetadataRoute } from 'next'
import { SERVICE_DETAILS, AREA_DETAILS } from '@/lib/data'

const BASE_URL = 'https://tristarlocksmith.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICE_DETAILS.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const areaUrls = AREA_DETAILS.map((a) => ({
    url: `${BASE_URL}/service-areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
    ...areaUrls,
  ]
}
