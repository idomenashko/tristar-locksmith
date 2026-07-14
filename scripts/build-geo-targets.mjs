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
 * uses.
 *
 * Also covers a Chattanooga, TN ad-radius border band that spills into Georgia
 * and Alabama (Ringgold, Fort Oglethorpe, Chickamauga, Bridgeport, etc.) — see
 * scripts/data/chattanooga-border-zip-city.json below. The county allowlist
 * used to build that seed (GA: Catoosa, Walker, Dade, Whitfield, Murray,
 * Chattooga; AL: Jackson, DeKalb) lives in the one-off script that built it,
 * not here — this generator just consumes the resulting ZIP->city seed.
 *
 * Inputs:
 *   1. Google's geotargets CSV (23MB, NOT committed — download fresh):
 *        https://developers.google.com/google-ads/api/data/geotargets
 *      Pass its path as the first CLI argument.
 *   2. scripts/data/tn-zip-city.json — a COMMITTED ZIP->city seed (~800 rows)
 *      used to name Postal Code rows, whose CSV `Name` is just a 5-digit ZIP.
 *      Derived from a public US ZIP/city/county dataset; the one Google-CSV gap
 *      (37934, Farragut) is patched into the seed directly.
 *   3. scripts/data/chattanooga-border-zip-city.json — a COMMITTED ZIP->city
 *      seed (~54 rows) for the GA/AL counties bordering Chattanooga (GA:
 *      Catoosa, Walker, Dade, Whitfield, Murray, Chattooga; AL: Jackson,
 *      DeKalb — the county allowlist lives in the one-off script that built
 *      this seed, not in this file). Built from scpike/us-state-county-zip
 *      (ZIP+county+city), preferring Google's own canonical City name where
 *      one exists (guarantees the page matches the ad's {LOCATION(City)}
 *      text) and falling back to a title-cased real place name otherwise —
 *      every real ZIP in the band is included (junk Census "Zcta …"
 *      placeholder rows are the only rows dropped), matching the same
 *      never-silently-drop philosophy as the TN seed.
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

// --- Load ZIP -> city seeds ---
const zipSeedPath = path.join(REPO_ROOT, "scripts/data/tn-zip-city.json");
const zipCity = JSON.parse(readFileSync(zipSeedPath, "utf8"));

const borderSeedPath = path.join(REPO_ROOT, "scripts/data/chattanooga-border-zip-city.json");
const borderZipCity = JSON.parse(readFileSync(borderSeedPath, "utf8"));
// Only GA/AL City/Neighborhood rows whose name is one of OUR border towns get
// included — this keeps the border band scoped to the Chattanooga radius
// instead of echoing all of Georgia/Alabama.
const borderCityNames = new Set(Object.values(borderZipCity));

// --- Parse the geotargets CSV, collect TN rows + the GA/AL border band ---
const csv = readFileSync(csvPath, "utf8");
const lines = csv.split("\n");
// header: Criteria ID,Name,Canonical Name,Parent ID,Country Code,Target Type,Status
const result = {}; // criteriaId -> display name
// State override, ID-keyed (NOT name-keyed): "Rossville" and "Trenton" each
// also exist as ordinary west-TN towns already present in `result` under
// their own (different) TN geo IDs. Keying state by geo ID rather than by
// display name means those genuine TN visitors keep defaulting to "TN" —
// only the specific GA/AL geo IDs recorded here render with the other state.
const stateOverride = {}; // criteriaId -> "GA" | "AL"
let unmatchedPostal = 0;
const unmatchedZips = [];

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim()) continue;
  const fields = parseCsvLine(line);
  if (fields.length < 7) continue;
  const [criteriaId, name, canonical, , countryCode, targetType] = fields;
  if (countryCode !== "US") continue;

  const isTN = canonical.includes(",Tennessee,");
  const isGA = canonical.includes(",Georgia,");
  const isAL = canonical.includes(",Alabama,");
  if (!isTN && !isGA && !isAL) continue;

  if (targetType === "City" || targetType === "Neighborhood") {
    if (isTN) {
      result[criteriaId] = name;
    } else if ((isGA || isAL) && borderCityNames.has(name)) {
      result[criteriaId] = name;
      stateOverride[criteriaId] = isGA ? "GA" : "AL";
    }
  } else if (targetType === "County") {
    if (isTN) result[criteriaId] = COUNTY_OVERRIDE[criteriaId] ?? name;
    // GA/AL counties intentionally omitted — county-level hits are rare and
    // the border band is meant to stay ZIP/city granular.
  } else if (targetType === "Postal Code") {
    if (isTN) {
      const city = zipCity[name];
      if (city) {
        result[criteriaId] = city;
      } else {
        unmatchedPostal++;
        unmatchedZips.push(name);
      }
    } else if (isGA || isAL) {
      // Intentional allowlist, NOT fail-loud: a GA/AL ZIP outside the border
      // seed is out of the ~40mi Chattanooga radius by design and should just
      // fall through to DEFAULT_CITY, unlike a missing TN ZIP (a real gap).
      const city = borderZipCity[name];
      if (city) {
        result[criteriaId] = city;
        stateOverride[criteriaId] = isGA ? "GA" : "AL";
      }
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

const borderCount = Object.keys(stateOverride).length;
const count = Object.keys(result).length;
console.log(`Generated ${count} geo-target entries (${count - borderCount} Tennessee + ${borderCount} Chattanooga-border GA/AL).`);

// --- Emit sorted, deterministic TypeScript output ---
const sortedIds = Object.keys(result).sort((a, b) => Number(a) - Number(b));
const lines2 = sortedIds.map((id) => `  "${id}": ${JSON.stringify(result[id])},`);

const sortedStateIds = Object.keys(stateOverride).sort((a, b) => Number(a) - Number(b));
const stateLines = sortedStateIds.map((id) => `  "${id}": ${JSON.stringify(stateOverride[id])},`);

const csvBasename = path.basename(csvPath);
const output = `/**
 * AUTO-GENERATED by scripts/build-geo-targets.mjs — DO NOT EDIT BY HAND.
 *
 * Source: ${csvBasename} (Google's official geotargets export) +
 * scripts/data/tn-zip-city.json (ZIP -> city seed) +
 * scripts/data/chattanooga-border-zip-city.json (Chattanooga GA/AL border seed).
 *
 * Regenerate: node scripts/build-geo-targets.mjs <path-to-geotargets.csv>
 * Download a fresh CSV from:
 *   https://developers.google.com/google-ads/api/data/geotargets
 *
 * Every Tennessee Google Ads geo-criteria ID (City, County, Neighborhood,
 * Postal Code), PLUS a Georgia/Alabama border band around Chattanooga (for
 * ads run in that area), mapped to a display name. Values are BARE place
 * names (no state suffix) — cityWithState()/interpolateCity() in geo-city.ts
 * append the state, same as SERVICE_CITIES. GEO_TARGET_STATE below overrides
 * the default "TN" state for the border band's geo IDs specifically — it is
 * keyed by GEO ID, not by city name, because a couple of border town names
 * ("Rossville", "Trenton") collide with unrelated west-TN towns of the same
 * name already in GEO_TARGETS_TN; keying by name would mislabel those
 * genuine TN visitors as GA/AL. County IDs for Tristar's 9 East TN service
 * counties are mapped to their primary service city (see COUNTY_OVERRIDE in
 * the generator script) rather than echoing "X County". Postal codes echo
 * the real place name Google itself resolves to — this is intentionally the
 * SAME database the ad's {LOCATION(City)} headline uses, so the landing page
 * always matches the ad.
 */
export const GEO_TARGETS_TN: Record<string, string> = {
${lines2.join("\n")}
};

export const GEO_TARGET_STATE: Record<string, "GA" | "AL"> = {
${stateLines.join("\n")}
};
`;

const outPath = path.join(REPO_ROOT, "src/lib/geo-targets-tn.generated.ts");
writeFileSync(outPath, output);
console.log(`Wrote ${outPath}`);
