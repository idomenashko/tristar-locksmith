import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { StickyCallButton } from "@/components/layout/StickyCallButton";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function LandingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark text-white/60 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm space-y-2">
        <p className="text-white/80 font-semibold">Tristar Locksmith</p>
        <p>
          <a href="tel:8653813931" className="text-gold hover:text-amber-400 font-bold">
            (865) 381-3931
          </a>{" "}
          · 5825 Pine Needle Ln, Knoxville TN 37921
        </p>
        <p>Licensed &amp; Insured · Every Day 7 AM – 11:30 PM · 24/7 Emergency Line</p>
        <p className="text-white/40">
          © {year} Tristar Locksmith ·{" "}
          <a href="https://tristarlocksmith.com" className="underline hover:text-white/60">
            tristarlocksmith.com
          </a>
        </p>
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
      <LandingHeader />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <LandingFooter />
      <StickyCallButton />
    </div>
  );
}
