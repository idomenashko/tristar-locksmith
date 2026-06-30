/**
 * Geo-city whitelist — Tristar Locksmith
 *
 * Normalizes a Vercel IP-city header value (e.g. "Farragut", "FARRAGUT",
 * "Oak Ridge") against the 27 service-area cities we actually serve.
 * Falls back to "Knoxville" for unknown or out-of-area cities.
 *
 * Used by middleware.ts to write the tl_city cookie, and by landing pages
 * to personalize the H1 ("Car Key Replacement in Farragut").
 */

/** Display names for all 27 service cities */
export const SERVICE_CITIES: Record<string, string> = {
  alcoa: "Alcoa",
  clinton: "Clinton",
  corryton: "Corryton",
  dandridge: "Dandridge",
  farragut: "Farragut",
  friendsville: "Friendsville",
  greenback: "Greenback",
  "hardin-valley": "Hardin Valley",
  "hardin valley": "Hardin Valley",
  hardinvalley: "Hardin Valley",
  heiskell: "Heiskell",
  "jefferson-city": "Jefferson City",
  "jefferson city": "Jefferson City",
  jeffersoncity: "Jefferson City",
  karns: "Karns",
  knoxville: "Knoxville",
  kodak: "Kodak",
  "lenoir-city": "Lenoir City",
  "lenoir city": "Lenoir City",
  lenoircity: "Lenoir City",
  louisville: "Louisville",
  maryville: "Maryville",
  mascot: "Mascot",
  maynardville: "Maynardville",
  "oak-ridge": "Oak Ridge",
  "oak ridge": "Oak Ridge",
  oakridge: "Oak Ridge",
  "pigeon-forge": "Pigeon Forge",
  "pigeon forge": "Pigeon Forge",
  pigeonforge: "Pigeon Forge",
  powell: "Powell",
  rockford: "Rockford",
  sevierville: "Sevierville",
  seymour: "Seymour",
  "strawberry-plains": "Strawberry Plains",
  "strawberry plains": "Strawberry Plains",
  strawberryplains: "Strawberry Plains",
  "tellico-village": "Tellico Village",
  "tellico village": "Tellico Village",
  tellicovillage: "Tellico Village",
  walland: "Walland",
};

export const DEFAULT_CITY = "Knoxville";

/**
 * Resolve a raw geo city string (from Vercel header) to a display city name.
 * Returns the display name if it's a service city, otherwise "Knoxville".
 */
export function resolveCity(rawCity: string | null | undefined): string {
  if (!rawCity) return DEFAULT_CITY;
  const normalized = rawCity.toLowerCase().trim();
  return SERVICE_CITIES[normalized] ?? DEFAULT_CITY;
}

/**
 * Interpolate {city} tokens in a string template.
 * Example: "Car Key Replacement in {city}" → "Car Key Replacement in Farragut"
 */
export function interpolateCity(template: string, city: string): string {
  return template.replace(/\{city\}/gi, city);
}
