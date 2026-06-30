/**
 * Tristar Locksmith — middleware
 *
 * Reads the visitor's city from Vercel's IP-geolocation headers and:
 * 1. Sets `x-tl-city` request header so the PAGE can read it on the SAME request.
 * 2. Sets `tl_city` response cookie (30 min TTL) for client-side use.
 *
 * Runs only on /lp/* routes (paid landing pages).
 *
 * Why both header + cookie?
 * - Header: available immediately on first visit (page reads from incoming request).
 * - Cookie: persists in the browser for client components if ever needed.
 *
 * Fallback: "Knoxville" for unknown or out-of-area cities.
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveCity } from "@/lib/geo-city";

const COOKIE = "tl_city";
const HEADER = "x-tl-city";
const TTL_SECONDS = 30 * 60; // 30 minutes

export function middleware(request: NextRequest) {
  // Only run on landing pages
  if (!request.nextUrl.pathname.startsWith("/lp/")) {
    return NextResponse.next();
  }

  // Resolve city from Vercel IP-geo header.
  // In local dev this header is absent → resolveCity(null) → "Knoxville".
  const rawCity = request.headers.get("x-vercel-ip-city");
  const city = resolveCity(rawCity);

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
