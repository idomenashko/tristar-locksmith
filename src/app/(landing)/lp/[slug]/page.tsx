import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { LANDING_PAGES, LANDING_SLUGS } from "@/lib/landing-pages";
import { interpolateCity, cityWithState, DEFAULT_CITY } from "@/lib/geo-city";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrustBar } from "@/components/landing/LandingTrustBar";
import { LandingSteps } from "@/components/landing/LandingSteps";
import { LandingBenefits } from "@/components/landing/LandingBenefits";
import { LandingCovered } from "@/components/landing/LandingCovered";
import { LandingReviews } from "@/components/landing/LandingReviews";
import { LandingCoverage } from "@/components/landing/LandingCoverage";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingFinalCta } from "@/components/landing/LandingFinalCta";
import { LandingLeadForm } from "@/components/landing/LandingLeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Resolve the visitor's city.
 * Reads from the `x-tl-city` header injected by middleware on EVERY request,
 * so the correct city appears on the first visit (not just after a cookie is set).
 */
async function getCity(): Promise<string> {
  const hdrs = await headers();
  return hdrs.get("x-tl-city") ?? DEFAULT_CITY;
}

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }));
}

export const dynamic = "force-dynamic"; // reads cookies → must be dynamic

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = LANDING_PAGES[slug];
  if (!page) return {};

  const city = await getCity();

  return {
    title: interpolateCity(page.metaTitle, city),
    description: interpolateCity(page.metaDescription, city),
    robots: { index: false, follow: false },
    openGraph: {
      title: interpolateCity(page.metaTitle, city),
      description: interpolateCity(page.metaDescription, city),
      type: "website",
      siteName: "Tristar Locksmith",
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = LANDING_PAGES[slug];

  if (!page) {
    notFound();
  }

  const city = await getCity();
  const cs = cityWithState(city); // e.g. "Farragut, TN"
  const formSource = `ppc:${slug}`;

  // Interpolate {city} and {cityState} tokens in all city-aware fields
  const cityPage = {
    ...page,
    metaTitle: interpolateCity(page.metaTitle, city),
    metaDescription: interpolateCity(page.metaDescription, city),
    heroSub: interpolateCity(page.heroSub, city),
    heroImageAlt: interpolateCity(page.heroImageAlt, city),
    heroVariants: {
      A: {
        ...page.heroVariants.A,
        h1: interpolateCity(page.heroVariants.A.h1, city),
      },
      B: {
        ...page.heroVariants.B,
        h1: interpolateCity(page.heroVariants.B.h1, city),
      },
    },
  };

  return (
    <>
      <LandingHero
        heroVariants={cityPage.heroVariants}
        sub={cityPage.heroSub}
        heroImage={page.heroImage}
        heroImageAlt={cityPage.heroImageAlt}
        badges={page.badges}
        city={city}
        cityState={cs}
      />

      <LandingTrustBar />

      {/* Lead form — low friction, name+phone first */}
      <LandingLeadForm formSource={formSource} />

      <LandingSteps steps={page.steps} />

      <LandingBenefits benefits={page.benefits} city={city} />

      <LandingCovered heading={page.coveredHeading} items={page.covered} />

      <LandingReviews reviews={page.reviews} />

      <LandingCoverage city={city} />

      <LandingFaq faqs={page.faqs} />

      <LandingFinalCta
        heading={page.finalCtaHeading}
        sub={page.finalCtaSub}
        formSource={formSource}
        city={city}
      />
    </>
  );
}
