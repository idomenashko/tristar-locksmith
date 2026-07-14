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

import { GEO_TARGETS_TN, GEO_TARGET_STATE } from "./geo-targets-tn.generated";

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
 * Google Ads geo criteria IDs → real place name, for EVERY Tennessee geo ID
 * (City, County, Neighborhood, Postal Code) — not just the 27 marketed
 * service cities. Also covers a Chattanooga-area border band that spills into
 * Georgia/Alabama (for ads run in that radius) — see GEO_TARGET_STATE below.
 *
 * Why: {loc_physical_ms} (searcher's physical location) / {loc_interest_ms}
 * most often resolve to POSTAL-CODE granularity, not city-level. A hand-picked
 * table covering only a subset of IDs kept leaving gaps that surfaced as real
 * production bugs — paid landing pages defaulting to "Knoxville" for real
 * visitors (Sevierville/Kodak, then Farragut/Karns/Hardin Valley incidents).
 *
 * Fix: stop hand-picking. Echo Google's own canonical name for every geo ID we
 * support — the same approach a top competitor (locksmith-dispatch.com) uses,
 * and the same database that drives the ad's {LOCATION(City)} headline, so the
 * landing page always matches the ad. IDs outside our coverage (TN + the
 * Chattanooga GA/AL border band) correctly fall through to DEFAULT_CITY.
 *
 * This map is GENERATED — see scripts/build-geo-targets.mjs and
 * src/lib/geo-targets-tn.generated.ts (GEO_TARGETS_TN, GEO_TARGET_STATE). Do
 * not hand-edit entries there; if an ID is wrong, fix the generator (e.g.
 * COUNTY_OVERRIDE) and regenerate.
 */

/**
 * Resolve a Google Ads geo criteria ID (from {loc_physical_ms} or
 * {loc_interest_ms}) to its city + state. Returns `null` if the ID is missing
 * or not in GEO_TARGETS_TN, so callers can fall through to the next source
 * instead of forcing DEFAULT_CITY. Keeping city+state paired (rather than
 * resolving state separately by city name) matters: a couple of border town
 * names ("Rossville", "Trenton") collide with unrelated west-TN towns of the
 * same name — resolving state from the SAME id that resolved the city avoids
 * mislabeling those genuine TN visitors as GA/AL.
 */
export function resolveGeoIdCity(
  rawId: string | null | undefined
): { city: string; state: string } | null {
  if (!rawId) return null;
  const id = rawId.trim();
  const city = GEO_TARGETS_TN[id];
  if (!city) return null;
  return { city, state: GEO_TARGET_STATE[id] ?? STATE };
}

/**
 * Resolve a Google Ads geo criteria ID to just its place name. Returns `null`
 * if the ID is missing or not in GEO_TARGETS_TN, so callers can fall through
 * to the next source instead of forcing DEFAULT_CITY.
 */
export function cityFromGeoId(rawId: string | null | undefined): string | null {
  return resolveGeoIdCity(rawId)?.city ?? null;
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

/**
 * Returns "City, ST" — e.g. "Farragut, TN", or "Ringgold, GA" for a
 * Chattanooga-border visitor. `state` defaults to "TN" for the ?city=/IP-geo
 * fallback paths (always TN service cities); the geo-ID path passes the
 * state resolved alongside the city (see resolveGeoIdCity) explicitly.
 */
export function cityWithState(city: string, state: string = STATE): string {
  return `${city}, ${state}`;
}

/**
 * Interpolate {city} and {cityState} tokens in a string template.
 *   {city}      → "Farragut"
 *   {cityState} → "Farragut, TN" (or "Ringgold, GA" — see cityWithState)
 *
 * Note: {cityState} is replaced first so {city} inside it isn't partially matched.
 */
export function interpolateCity(template: string, city: string, state: string = STATE): string {
  const cs = cityWithState(city, state);
  return template
    .replace(/\{cityState\}/gi, cs)
    .replace(/\{city\}/gi, city);
}
