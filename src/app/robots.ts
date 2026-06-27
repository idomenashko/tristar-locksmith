import type { MetadataRoute } from "next";

// Must live at the app root (NOT inside the (site) route group). When this
// file was under src/app/(site)/, the (site)/[serviceCity] catch-all route
// intercepted /robots.txt and returned a 404. Keeping it here guarantees
// Next.js registers it as the /robots.txt handler.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tristarlocksmith.com/sitemap.xml",
    host: "https://tristarlocksmith.com",
  };
}
