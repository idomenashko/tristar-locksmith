import type { Metadata } from "next";

export const SITE = {
  url: "https://tristarlocksmith.com",
  name: "Tristar Locksmith",
  phone: "(865) 381-3931",
  phoneHref: "tel:8653813931",
  description:
    "Tristar Locksmith — trusted 24/7 locksmith serving Knoxville, TN and surrounding areas. Car lockout, house lockout, rekey, lock change, and more.",
  ogImage: "/og-image.jpg",
  twitterHandle: "@tristarlocksmith",
} as const;

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: `${title} | ${SITE.name} — Knoxville, TN`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [SITE.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
