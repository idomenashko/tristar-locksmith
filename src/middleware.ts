/**
 * Tristar Locksmith — middleware
 *
 * Resolves the visitor's city for paid landing pages and:
 * 1. Sets `x-tl-city` request header so the PAGE can read it on the SAME request.
 * 2. Sets `tl_city` response cookie (30 min TTL) for client-side use.
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
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cityFromGeoId, matchCity, DEFAULT_CITY } from "@/lib/geo-city";

const COOKIE = "tl_city";
const HEADER = "x-tl-city";
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
  const city =
    cityFromGeoId(sp.get("loc")) ??
    cityFromGeoId(sp.get("int")) ??
    matchCity(sp.get("city")) ??
    matchCity(ipCity) ??
    DEFAULT_CITY;

  // Clone + mutate the request headers to inject the resolved city.
  // The page reads `headers().get('x-tl-city')` server-side.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(HEADER, city);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Also set a response cookie so the city is durable across requests.
  response.cookies.set(COOKIE, city, {
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
