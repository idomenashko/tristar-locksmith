/**
 * Geo-city whitelist — Tristar Locksmith
 *
 * Normalizes a Vercel IP-city header value (e.g. "Farragut", "FARRAGUT",
 * "Oak%20Ridge") against the 27 service-area cities we actually serve.
 * Falls back to "Knoxville" for unknown or out-of-area cities.
 *
 * Used by middleware.ts to write the tl_city cookie, and by landing pages
 * to personalize the H1 ("Car Key Replacement in Farragut").
 */

/** Display names for all 27 service cities + neighborhood/suburb aliases */
export const SERVICE_CITIES: Record<string, string> = {
  // --- 27 primary service cities ---
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

  // --- Knoxville neighborhoods & unincorporated communities ---
  bearden: "Knoxville",
  "fountain city": "Knoxville",
  "fountain-city": "Knoxville",
  fountaincity: "Knoxville",
  halls: "Knoxville",
  gibbs: "Knoxville",
  "rocky hill": "Knoxville",
  "rocky-hill": "Knoxville",
  rockyhill: "Knoxville",
  concord: "Knoxville",
  solway: "Knoxville",
  "cedar bluff": "Knoxville",
  "cedar-bluff": "Knoxville",
  cedarbluff: "Knoxville",
  "ball camp": "Knoxville",
  "ball-camp": "Knoxville",
  ballcamp: "Knoxville",
  "west knoxville": "Knoxville",
  "west-knoxville": "Knoxville",
  westknoxville: "Knoxville",
  "north knoxville": "Knoxville",
  "north-knoxville": "Knoxville",
  "south knoxville": "Knoxville",
  "south-knoxville": "Knoxville",
  "east knoxville": "Knoxville",
  "east-knoxville": "Knoxville",

  // --- Hardin Valley / Solway surroundings ---
  "hardin valley area": "Hardin Valley",

  // --- Blount County (Maryville/Alcoa metro) ---
  townsend: "Maryville",
  "blount county": "Maryville",

  // --- Anderson County (Oak Ridge / Clinton area) ---
  norris: "Clinton",
  "anderson county": "Oak Ridge",

  // --- Loudon County (Lenoir City area) ---
  loudon: "Lenoir City",
  vonore: "Lenoir City",
  "loudon county": "Lenoir City",

  // --- Sevier County (Sevierville / Pigeon Forge area) ---
  gatlinburg: "Sevierville",
  "sevier county": "Sevierville",

  // --- Jefferson County (Jefferson City area) ---
  "white pine": "Jefferson City",
  "white-pine": "Jefferson City",
  whitepine: "Jefferson City",
  "new market": "Jefferson City",
  "new-market": "Jefferson City",
  newmarket: "Jefferson City",
  morristown: "Jefferson City",
  "hamblen county": "Jefferson City",

  // --- Union County (Maynardville area) ---
  luttrell: "Maynardville",
  "union county": "Maynardville",
};

export const DEFAULT_CITY = "Knoxville";
export const STATE = "TN";

/**
 * Resolve a raw geo city string (from Vercel header or ?city= URL param) to a
 * display city name. Handles percent-encoding (e.g. "Oak%20Ridge" → "Oak Ridge").
 * Returns the display name if it's a service city, otherwise DEFAULT_CITY.
 */
export function resolveCity(rawCity: string | null | undefined): string {
  if (!rawCity) return DEFAULT_CITY;
  let decoded = rawCity;
  try {
    decoded = decodeURIComponent(rawCity);
  } catch {
    // Malformed percent-encoding — use the raw string as-is.
  }
  const normalized = decoded.toLowerCase().trim();
  return SERVICE_CITIES[normalized] ?? DEFAULT_CITY;
}

/** Returns "City, TN" — e.g. "Farragut, TN" */
export function cityWithState(city: string): string {
  return `${city}, ${STATE}`;
}

/**
 * Interpolate {city} and {cityState} tokens in a string template.
 *   {city}      → "Farragut"
 *   {cityState} → "Farragut, TN"
 *
 * Note: {cityState} is replaced first so {city} inside it isn't partially matched.
 */
export function interpolateCity(template: string, city: string): string {
  const cs = cityWithState(city);
  return template
    .replace(/\{cityState\}/gi, cs)
    .replace(/\{city\}/gi, city);
}
