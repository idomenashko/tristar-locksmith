#!/usr/bin/env node
/**
 * build-geo-targets.mjs — generates src/lib/geo-targets-tn.generated.ts
 *
 * Why this exists: Google Ads' {loc_physical_ms} / {loc_interest_ms} ValueTrack
 * tags send a numeric geo criteria ID that can point to a City, County,
 * Neighborhood, or (most commonly) a Postal Code. A hand-picked lookup table
 * covering only a subset of these IDs kept leaving gaps that surfaced as real
 * production bugs (paid landing pages defaulting to "Knoxville" for real
 * visitors in Sevierville/Kodak, then Farragut/Karns/Hardin Valley). This
 * script generates a COMPLETE map of every Tennessee geo ID -> Google's real
 * canonical place name, the same approach a competitor (locksmith-dispatch.com)
 * uses. The campaign only targets East TN, so only TN IDs ever arrive.
 *
 * Inputs:
 *   1. Google's geotargets CSV (23MB, NOT committed — download fresh):
 *        https://developers.google.com/google-ads/api/data/geotargets
 *      Pass its path as the first CLI argument.
 *   2. scripts/data/tn-zip-city.json — a COMMITTED ZIP->city seed (~800 rows)
 *      used to name Postal Code rows, whose CSV `Name` is just a 5-digit ZIP.
 *      Derived from a public US ZIP/city/county dataset; the one Google-CSV gap
 *      (37934, Farragut) is patched into the seed directly.
 *
 * Output: src/lib/geo-targets-tn.generated.ts — DO NOT hand-edit that file.
 *
 * Determinism: keys are sorted numerically ascending, so re-running this
 * script against the same inputs produces a byte-identical file.
 *
 * Usage:
 *   node scripts/build-geo-targets.mjs scripts/data/geotargets-2026-06-15.csv
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const csvPath = process.argv[2];
if (!csvPath) {
  console.error(
    "Usage: node scripts/build-geo-targets.mjs <path-to-geotargets.csv>\n" +
      "Download the CSV from https://developers.google.com/google-ads/api/data/geotargets"
  );
  process.exit(1);
}

/**
 * County-level geo IDs, for the 9 East TN counties Tristar serves, mapped to
 * their primary/nearest service city. Rationale: county-level
 * {loc_physical_ms} hits are rare (Google almost always resolves to city or
 * postal-code granularity), and "Knoxville" reads far better on a locksmith
 * headline than "Knox County" while keeping the coverage-section pill
 * highlight working. This is a FIXED 9-entry map applied at generation time —
 * not a hand-edit to the output, and not an ID that can silently go missing —
 * so it does not reintroduce the gap risk that caused the prior bugs. Any
 * other TN county (won't occur under current ad targeting) echoes "X County"
 * verbatim, same as the competitor.
 */
const COUNTY_OVERRIDE = {
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

function parseCsvLine(line) {
  // Simple CSV parser sufficient for this file's format: quoted fields,
  // comma-separated, no embedded commas within a field's own quotes beyond
  // standard doubling ("" -> ").
  const fields = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        fields.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
  }
  fields.push(cur);
  return fields;
}

// --- Load ZIP -> city seed ---
const zipSeedPath = path.join(REPO_ROOT, "scripts/data/tn-zip-city.json");
const zipCity = JSON.parse(readFileSync(zipSeedPath, "utf8"));

// --- Parse the geotargets CSV, collect TN rows ---
const csv = readFileSync(csvPath, "utf8");
const lines = csv.split("\n");
// header: Criteria ID,Name,Canonical Name,Parent ID,Country Code,Target Type,Status
const result = {}; // criteriaId -> display name
let unmatchedPostal = 0;
const unmatchedZips = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  const fields = parseCsvLine(line);
  if (fields.length < 7) continue;
  const [criteriaId, name, canonical, , countryCode, targetType] = fields;
  if (countryCode !== "US") continue;
  if (!canonical.includes(",Tennessee,")) continue;

  if (targetType === "City" || targetType === "Neighborhood") {
    result[criteriaId] = name;
  } else if (targetType === "County") {
    result[criteriaId] = COUNTY_OVERRIDE[criteriaId] ?? name;
  } else if (targetType === "Postal Code") {
    const city = zipCity[name];
    if (city) {
      result[criteriaId] = city;
    } else {
      unmatchedPostal++;
      unmatchedZips.push(name);
    }
  }
  // Other target types (Congressional District, Airport, University,
  // Colloquial Area, State, City Region) are not used for {loc_physical_ms}
  // personalization and are intentionally omitted.
}

// Fail loudly on any unmatched postal code rather than silently dropping it.
// A silently-skipped ID here is exactly the kind of invisible coverage gap
// that caused the production bugs this generator exists to prevent — if a
// future Google CSV adds a TN ZIP the seed doesn't know about, regeneration
// must stop and force the seed to be updated, not ship a new gap.
if (unmatchedPostal > 0) {
  console.error(
    `ERROR: ${unmatchedPostal} TN postal code(s) have no match in scripts/data/tn-zip-city.json:\n` +
      `  ${unmatchedZips.join(", ")}\n` +
      `Add them to the seed file (or an override) and re-run.`
  );
  process.exit(1);
}

const count = Object.keys(result).length;
console.log(`Generated ${count} Tennessee geo-target entries.`);

// --- Emit sorted, deterministic TypeScript output ---
const sortedIds = Object.keys(result).sort((a, b) => Number(a) - Number(b));
const lines2 = sortedIds.map((id) => `  "${id}": ${JSON.stringify(result[id])},`);

const csvBasename = path.basename(csvPath);
const output = `/**
 * AUTO-GENERATED by scripts/build-geo-targets.mjs — DO NOT EDIT BY HAND.
 *
 * Source: ${csvBasename} (Google's official geotargets export) +
 * scripts/data/tn-zip-city.json (ZIP -> city seed).
 *
 * Regenerate: node scripts/build-geo-targets.mjs <path-to-geotargets.csv>
 * Download a fresh CSV from:
 *   https://developers.google.com/google-ads/api/data/geotargets
 *
 * Every Tennessee Google Ads geo-criteria ID (City, County, Neighborhood,
 * Postal Code) mapped to a display name. Values are BARE place names (no
 * ", TN" suffix) — cityWithState()/interpolateCity() in geo-city.ts append
 * the state, same as SERVICE_CITIES. County IDs for Tristar's 9 East TN
 * service counties are mapped to their primary service city (see
 * COUNTY_OVERRIDE in the generator script) rather than echoing "X County".
 * Postal codes echo the real place name Google itself resolves to — this is
 * intentionally the SAME database the ad's {LOCATION(City)} headline uses,
 * so the landing page always matches the ad.
 */
export const GEO_TARGETS_TN: Record<string, string> = {
${lines2.join("\n")}
};
`;

const outPath = path.join(REPO_ROOT, "src/lib/geo-targets-tn.generated.ts");
writeFileSync(outPath, output);
console.log(`Wrote ${outPath}`);
