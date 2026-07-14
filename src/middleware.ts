/**
 * Tristar Locksmith — middleware
 *
 * Resolves the visitor's city (+ state) for paid landing pages and:
 * 1. Sets `x-tl-city`/`x-tl-state` request headers so the PAGE can read them
 *    on the SAME request.
 * 2. Sets `tl_city`/`tl_state` response cookies (30 min TTL) for client-side use.
 *
 * Runs only on /lp/* routes (paid landing pages).
 *
 * Why both header + cookie?
 * - Header: available immediately on first visit (page reads from incoming request).
 * - Cookie: persists in the browser for client components if ever needed.
 *
 * City resolution tries, in order: Google geo criteria ID (?loc=, ?int=) →
 * explicit ?city= → Vercel IP-geo header → "Knoxville". Each source falls
 * through to the next on a miss rather than forcing Knoxville immediately —
 * see the resolution block below for why that matters.
 *
 * State is resolved ALONGSIDE the city, from the same geo ID (see
 * resolveGeoIdCity in geo-city.ts) — this covers the Chattanooga-area border
 * band that spills into Georgia/Alabama. It's deliberately not derived from
 * the city name after the fact: a couple of border town names ("Rossville",
 * "Trenton") collide with unrelated west-TN towns of the same name, and
 * name-based lookup would mislabel those genuine TN visitors as GA/AL.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveGeoIdCity, matchCity, DEFAULT_CITY, STATE } from "@/lib/geo-city";

const COOKIE = "tl_city";
const STATE_COOKIE = "tl_state";
const HEADER = "x-tl-city";
const STATE_HEADER = "x-tl-state";
const TTL_SECONDS = 30 * 60; // 30 minutes

export function middleware(request: NextRequest) {
  // Only run on landing pages
  if (!request.nextUrl.pathname.startsWith("/lp/")) {
    return NextResponse.next();
  }

  // Resolve city. Priority:
  //   1. ?loc=  — {loc_physical_ms} Google Ads geo criteria ID (searcher's
  //              actual physical location at click time). This is the SAME
  //              signal that correctly drives {LOCATION(City)} in ad headlines
  //              — translating it ourselves means the landing page matches
  //              the ad instead of defaulting to Knoxville.
  //   2. ?int=  — {loc_interest_ms} geo criteria ID (location of interest,
  //              e.g. "locksmith near Alcoa" searched from elsewhere).
  //   3. ?city= — explicit city name (manual test links, hardcoded per-city
  //              ad groups). Must resolve against the service-city whitelist.
  //   4. Vercel IP-geo header — last-resort geolocation.
  //   5. DEFAULT_CITY ("Knoxville").
  //
  // IMPORTANT: every source above falls through on failure rather than
  // defaulting immediately. This matters because Google Ads' {LOCATION(City)}
  // tag only expands inside ad TEXT (headlines/descriptions) — it is NOT a
  // valid ValueTrack parameter for URLs. If it's ever placed in a Final URL
  // suffix (the original bug here), it arrives unexpanded (literally
  // "{LOCATION(City):Knoxville}"), and treating that as a "valid" city would
  // force every paid visitor onto the Knoxville page regardless of where they
  // actually are — even though the ad headline correctly showed their real city.
  const sp = request.nextUrl.searchParams;
  const ipCity = request.headers.get("x-vercel-ip-city");
  // Resolve city+state as a PAIR from whichever geo ID actually matched, so
  // state always reflects the id that produced the city (see the file-level
  // comment on why this can't be done by looking up state from the city name
  // afterward). The ?city=/IP-geo fallback paths only ever match TN service
  // cities, so STATE ("TN") is always correct there.
  const geoMatch = resolveGeoIdCity(sp.get("loc")) ?? resolveGeoIdCity(sp.get("int"));
  const city =
    geoMatch?.city ??
    matchCity(sp.get("city")) ??
    matchCity(ipCity) ??
    DEFAULT_CITY;
  const state = geoMatch?.state ?? STATE;

  // Clone + mutate the request headers to inject the resolved city/state.
  // The page reads `headers().get('x-tl-city' | 'x-tl-state')` server-side.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(HEADER, city);
  requestHeaders.set(STATE_HEADER, state);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Also set response cookies so city/state are durable across requests.
  response.cookies.set(COOKIE, city, {
    maxAge: TTL_SECONDS,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
  });
  response.cookies.set(STATE_COOKIE, state, {
    maxAge: TTL_SECONDS,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
  });

  return response;
}

export const config = {
  matcher: ["/lp/:path*"],
};
