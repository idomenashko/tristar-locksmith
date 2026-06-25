import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LANDING_PAGES, LANDING_SLUGS } from "@/lib/landing-pages";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrustBar } from "@/components/landing/LandingTrustBar";
import { LandingSteps } from "@/components/landing/LandingSteps";
import { LandingBenefits } from "@/components/landing/LandingBenefits";
import { LandingCovered } from "@/components/landing/LandingCovered";
import { LandingReviews } from "@/components/landing/LandingReviews";
import { LandingCoverage } from "@/components/landing/LandingCoverage";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingFinalCta } from "@/components/landing/LandingFinalCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = LANDING_PAGES[slug];
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    robots: { index: false, follow: false },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
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

  const formSource = `ppc:${slug}`;

  return (
    <>
      <LandingHero
        heroVariants={page.heroVariants}
        sub={page.heroSub}
        heroImage={page.heroImage}
        heroImageAlt={page.heroImageAlt}
        badges={page.badges}
        formSource={formSource}
      />

      <LandingTrustBar />

      <LandingSteps steps={page.steps} />

      <LandingBenefits benefits={page.benefits} />

      <LandingCovered heading={page.coveredHeading} items={page.covered} />

      <LandingReviews reviews={page.reviews} />

      <LandingCoverage />

      <LandingFaq faqs={page.faqs} />

      <LandingFinalCta
        heading={page.finalCtaHeading}
        sub={page.finalCtaSub}
        formSource={formSource}
      />
    </>
  );
}
