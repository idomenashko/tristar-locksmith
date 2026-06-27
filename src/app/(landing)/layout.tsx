import type { Metadata } from "next";
import { LandingHeader, TristarLogo } from "@/components/landing/LandingHeader";
import { LandingStickyCallBar } from "@/components/landing/LandingStickyCallBar";
import { AttributionCapture } from "@/components/landing/AttributionCapture";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function LandingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <div className="flex justify-center">
          <TristarLogo height={52} />
        </div>
        <p className="text-gold font-bold text-xl">
          <a href="tel:8653813931">(865) 381-3931</a>
        </p>
        <p className="text-white/70 text-sm">5825 Pine Needle Ln, Knoxville TN 37921</p>
        <p className="text-white/60 text-sm">
          Insured &amp; Background-Checked · Every day 7 AM–11:30 PM · Emergency service available around the clock
        </p>
        <div className="border-t border-white/10 pt-6 mt-6">
          <p className="text-white/40 text-xs">
            © {year} Tristar Locksmith. All rights reserved.{" "}
            <a href="https://tristarlocksmith.com" className="underline hover:text-white/60">
              tristarlocksmith.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AttributionCapture />
      <LandingHeader />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <LandingFooter />
      <LandingStickyCallBar />
    </div>
  );
}
