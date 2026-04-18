import { Hero } from "@/components/home/Hero";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AreasSection } from "@/components/home/AreasSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSection } from "@/components/home/CtaSection";
import { buildMetadata } from "@/lib/seo";
import { getFaqs } from "@/lib/queries";

export const metadata = buildMetadata({
  title: "24/7 Locksmith Knoxville, TN",
  description:
    "Tristar Locksmith — trusted 24/7 locksmith in Knoxville, TN. Car lockout, house lockout, rekey, lock change, and emergency services. Fast 15-30 min response. Call (865) 381-3931.",
  path: "/",
});

export default async function HomePage() {
  const faqs = await getFaqs();

  return (
    <>
      <EmergencyBanner />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <AreasSection />
      <Testimonials />
      <FaqAccordion faqs={faqs} />
      <CtaSection />
    </>
  );
}
