import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
    template: "%s | Tristar Locksmith, Knoxville, TN",
  },
  description:
    "Tristar Locksmith: trusted 24/7 locksmith serving Knoxville, TN and surrounding areas. Car lockout, house lockout, rekey, lock change, and more. Call (865) 381-3931.",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {clarityId && (
        <Script id="ms-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}</Script>
      )}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18165468053"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18165468053');
      `}</Script>
    </html>
  );
}
