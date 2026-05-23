import matrix from "../../content/service-city.json";

export const ACTIVE_PHASE = 3;

export const RESERVED_ROUTES = new Set([
  "about",
  "blog",
  "contact",
  "reviews",
  "services",
  "service-areas",
  "api",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
  "llms-full.txt",
  "index.md",
  "about.md",
  "contact.md",
  "services.md",
  "service-areas.md",
  "reviews.md",
]);

export type CityKey = keyof typeof matrix.cities;
export type ServiceKey = keyof typeof matrix.services;

const CITY_KEYS = Object.keys(matrix.cities) as CityKey[];
const SERVICE_KEYS = Object.keys(matrix.services) as ServiceKey[];

export function renderTemplate(template: string, city: CityKey): string {
  const c = matrix.cities[city] as (typeof matrix.cities)[CityKey];
  return template
    .replace(/\{cityName\}/g, c.name)
    .replace(/\{responseBand\}/g, c.responseBand)
    .replace(/\{landmark1\}/g, c.landmark1)
    .replace(/\{landmark2\}/g, c.landmark2)
    .replace(/\{neighborhood1\}/g, c.neighborhoods[0] ?? c.name)
    .replace(/\{neighborhood2\}/g, c.neighborhoods[1] ?? c.name)
    .replace(/\{zips\}/g, c.zips.join(", "));
}

export function parseServiceCity(
  slug: string
): { service: ServiceKey; city: CityKey } | null {
  if (RESERVED_ROUTES.has(slug)) return null;

  // Try longest city slug first to avoid partial matches
  const sortedCities = [...CITY_KEYS].sort(
    (a, b) => b.length - a.length
  );

  for (const city of sortedCities) {
    const suffix = `-${city}`;
    if (slug.endsWith(suffix)) {
      const servicePart = slug.slice(0, slug.length - suffix.length);
      if (SERVICE_KEYS.includes(servicePart as ServiceKey)) {
        return { service: servicePart as ServiceKey, city };
      }
    }
  }
  return null;
}

export interface ComboData {
  slug: string;
  service: ServiceKey;
  city: CityKey;
  cityMeta: (typeof matrix.cities)[CityKey];
  serviceMeta: (typeof matrix.services)[ServiceKey];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answerCapsule: string;
  whatWeDo: string;
  scenarioText: string;
  faqs: { question: string; answer: string }[];
}

export function getCombo(
  service: ServiceKey,
  city: CityKey
): ComboData {
  const cityMeta = matrix.cities[city] as (typeof matrix.cities)[CityKey];
  const serviceMeta = matrix.services[service] as (typeof matrix.services)[ServiceKey];
  const slug = `${service}-${city}`;

  const render = (str: string) => renderTemplate(str, city);

  const baseFaqs = serviceMeta.faqs.map((faq) => ({
    question: render(faq.question),
    answer: render(faq.answer),
  }));

  const overrideKey = slug as keyof typeof matrix.combos;
  const override = matrix.combos[overrideKey] as
    | { uniqueIntro?: string; extraFaqs?: { question: string; answer: string }[] }
    | undefined;
  const extraFaqs = override?.extraFaqs?.map((faq) => ({
    question: render(faq.question),
    answer: render(faq.answer),
  })) ?? [];

  return {
    slug,
    service,
    city,
    cityMeta,
    serviceMeta,
    h1: render(serviceMeta.h1Template),
    metaTitle: render(serviceMeta.metaTitle),
    metaDescription: render(serviceMeta.metaDescription),
    answerCapsule: render(serviceMeta.answerCapsule),
    whatWeDo: render(serviceMeta.whatWeDo),
    scenarioText: render(serviceMeta.scenarioTemplate),
    faqs: [...baseFaqs, ...extraFaqs],
  };
}

export interface ActiveCombo {
  slug: string;
  service: ServiceKey;
  city: CityKey;
}

export function getActiveCombos(): ActiveCombo[] {
  const combos: ActiveCombo[] = [];
  for (const city of CITY_KEYS) {
    const cityMeta = matrix.cities[city] as (typeof matrix.cities)[CityKey];
    if (cityMeta.phase > ACTIVE_PHASE) continue;
    for (const service of SERVICE_KEYS) {
      combos.push({ slug: `${service}-${city}`, service, city });
    }
  }
  return combos;
}

export function getCityMeta(city: CityKey) {
  return matrix.cities[city] as (typeof matrix.cities)[CityKey];
}

export function getServiceMeta(service: ServiceKey) {
  return matrix.services[service] as (typeof matrix.services)[ServiceKey];
}

export function getSiblingServices(
  currentService: ServiceKey,
  city: CityKey
): { slug: string; label: string }[] {
  return SERVICE_KEYS.filter((s) => s !== currentService).map((s) => ({
    slug: `${s}-${city}`,
    label: (matrix.services[s] as (typeof matrix.services)[ServiceKey]).label,
  }));
}

export function getNearbyCityLinks(
  service: ServiceKey,
  city: CityKey
): { slug: string; cityName: string }[] {
  const cityMeta = matrix.cities[city] as (typeof matrix.cities)[CityKey];
  return (cityMeta.nearbyAreas as string[])
    .filter((a) => CITY_KEYS.includes(a as CityKey))
    .slice(0, 3)
    .map((a) => {
      const nearbyCity = a as CityKey;
      const nearbyMeta = matrix.cities[nearbyCity] as (typeof matrix.cities)[CityKey];
      return {
        slug: `${service}-${nearbyCity}`,
        cityName: nearbyMeta.name,
      };
    });
}
