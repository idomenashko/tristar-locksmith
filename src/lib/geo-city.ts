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
 * Google Ads geo criteria IDs → service-city display name.
 *
 * These IDs are what the ValueTrack tags {loc_physical_ms} (searcher's physical
 * location) and {loc_interest_ms} (location of interest) expand to when placed
 * in a Final URL suffix — unlike {LOCATION(City)}, which only expands in ad
 * text and arrives unexpanded if placed in a URL (the original bug here).
 *
 * IDs verified against Google's published geotargets-2026-06-15.csv and cross-
 * checked live against a competitor (locksmith-dispatch.com) that uses the same
 * ?loc=/&int= convention — e.g. loc=1026125 renders "Sevierville", loc=1025907
 * renders "Alcoa" on their site.
 *
 * County-level entries are a fallback for when Google can only resolve the
 * visitor to a county (not a specific town) — mapped to the nearest/primary
 * service city rather than defaulting straight to Knoxville.
 *
 * Note: Strawberry Plains and Walland (both in SERVICE_CITIES) have no entry
 * here — Google's geotargets data has no city-level ID for either. Visitors
 * resolved to those areas fall through to the surrounding county ID (Jefferson/
 * Knox for Strawberry Plains, Blount for Walland), which still lands on a real
 * nearby service city rather than the generic Knoxville default.
 */
export const GEO_TARGET_IDS: Record<string, string> = {
  // --- East TN service cities ---
  "1025907": "Alcoa",
  "1025948": "Clinton",
  "1025958": "Corryton",
  "1025967": "Dandridge",
  "1025992": "Friendsville",
  "1026004": "Greenback",
  "1026010": "Heiskell",
  "1026030": "Jefferson City",
  "1026036": "Knoxville",
  "1026037": "Kodak",
  "1026045": "Lenoir City",
  "1026053": "Louisville",
  "1026062": "Maryville",
  "1026063": "Mascot",
  "1026065": "Maynardville",
  "1026089": "Oak Ridge",
  "1026105": "Pigeon Forge",
  "1026111": "Powell",
  "1026116": "Rockford",
  "1026125": "Sevierville",
  "1026127": "Seymour",
  "9051938": "Farragut",
  "9197412": "Karns",
  "9190787": "Tellico Village",
  "9196412": "Hardin Valley",

  // --- Knoxville neighborhoods ---
  "9194498": "Knoxville", // East Knoxville
  "9195302": "Knoxville", // South Knoxville
  "9196494": "Knoxville", // North Knoxville

  // --- County-level fallback → nearest/primary service city ---
  "9059314": "Oak Ridge", // Anderson County
  "9059318": "Maryville", // Blount County
  "9059344": "Jefferson City", // Hamblen County
  "9059357": "Jefferson City", // Jefferson County
  "9059359": "Knoxville", // Knox County
  "9059365": "Lenoir City", // Loudon County
  "9059385": "Oak Ridge", // Roane County
  "9059390": "Sevierville", // Sevier County
  "9059398": "Maynardville", // Union County
};

/**
 * Resolve a Google Ads geo criteria ID (from {loc_physical_ms} or
 * {loc_interest_ms}) to a service-city display name. Returns `null` if the ID
 * is missing or not in GEO_TARGET_IDS, so callers can fall through to the next
 * source instead of forcing DEFAULT_CITY.
 */
export function cityFromGeoId(rawId: string | null | undefined): string | null {
  if (!rawId) return null;
  return GEO_TARGET_IDS[rawId.trim()] ?? null;
}

/**
 * Match a raw geo city string (from Vercel header or ?city= URL param) against
 * the service-city whitelist. Handles percent-encoding (e.g. "Oak%20Ridge" →
 * "Oak Ridge"). Returns the display name if it's a known service city,
 * otherwise `null` — unlike resolveCity, this does NOT fall back to
 * DEFAULT_CITY, so callers can tell "unresolvable" apart from "Knoxville".
 *
 * Use this when you need to try multiple sources in priority order (see
 * middleware.ts) — an unresolvable value (e.g. an unexpanded Google Ads
 * macro like "{LOCATION(City)}") should fall through to the next source
 * instead of forcing Knoxville.
 */
export function matchCity(rawCity: string | null | undefined): string | null {
  if (!rawCity) return null;
  let decoded = rawCity;
  try {
    decoded = decodeURIComponent(rawCity);
  } catch {
    // Malformed percent-encoding — use the raw string as-is.
  }
  const normalized = decoded.toLowerCase().trim();
  return SERVICE_CITIES[normalized] ?? null;
}

/**
 * Resolve a raw geo city string (from Vercel header or ?city= URL param) to a
 * display city name. Returns the display name if it's a service city,
 * otherwise DEFAULT_CITY.
 */
export function resolveCity(rawCity: string | null | undefined): string {
  return matchCity(rawCity) ?? DEFAULT_CITY;
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
