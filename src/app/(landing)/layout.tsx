import type { Metadata } from "next";
import { LandingHeader, TristarLogo } from "@/components/landing/LandingHeader";
import { LandingStickyCallBar } from "@/components/landing/LandingStickyCallBar";
import { AttributionCapture } from "@/components/landing/AttributionCapture";
import { ClarityTagger } from "@/components/landing/ClarityTagger";

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
          <a href="tel:8653463573">(865) 346-3573</a>
        </p>
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

function TopBar() {
  return (
    <div className="bg-navy border-b border-gold/20 py-1.5 px-4 text-center">
      <a
        href="tel:8653463573"
        className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors text-sm font-medium"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        <span>Call Now For Fast Service, Questions or Pricing</span>
        <span className="hidden sm:inline text-white/40">—</span>
        <span className="hidden sm:inline text-gold font-bold">(865) 346-3573</span>
      </a>
    </div>
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
      <ClarityTagger />
      <TopBar />
      <LandingHeader />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <LandingFooter />
      <LandingStickyCallBar />
    </div>
  );
}
