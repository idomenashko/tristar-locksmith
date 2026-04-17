import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/layout/StickyCallButton";
import { buildLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tristar Locksmith | 24/7 Locksmith Knoxville, TN",
    template: "%s | Tristar Locksmith — Knoxville, TN",
  },
  description:
    "Tristar Locksmith — trusted 24/7 locksmith serving Knoxville, TN and surrounding areas. Car lockout, house lockout, rekey, lock change, and more. Call (865) 381-3931.",
  metadataBase: new URL("https://tristarlocksmith.com"),
  keywords: [
    "locksmith Knoxville TN",
    "24/7 locksmith",
    "car lockout Knoxville",
    "house lockout service",
    "rekey locks",
    "emergency locksmith",
  ],
  openGraph: {
    type: "website",
    siteName: "Tristar Locksmith",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = await buildLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
