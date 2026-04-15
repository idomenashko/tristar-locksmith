import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyCallButton from '@/components/layout/StickyCallButton'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tristar Locksmith | Knoxville, TN — (865) 381-3931',
    template: '%s | Tristar Locksmith Knoxville',
  },
  description:
    '24/7 locksmith service in Knoxville, TN and surrounding areas. Car lockout, house lockout, rekey, lock change, car key replacement. Call (865) 381-3931.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tristarlocksmith.com',
    siteName: 'Tristar Locksmith',
    title: 'Tristar Locksmith | Knoxville, TN — (865) 381-3931',
    description: '24/7 locksmith service in Knoxville, TN and surrounding areas. Car lockout, house lockout, rekey, lock change, car key replacement. Call (865) 381-3931.',
  },
  twitter: {
    card: 'summary',
    title: 'Tristar Locksmith | Knoxville, TN',
    description: '24/7 locksmith service in Knoxville, TN.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://tristarlocksmith.com',
  name: 'Tristar Locksmith',
  description: '24/7 locksmith service in Knoxville, TN and surrounding areas.',
  telephone: '+18653813931',
  url: 'https://tristarlocksmith.com',
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '$$',
  areaServed: [
    'Knoxville, TN', 'Farragut, TN', 'Powell, TN', 'Maryville, TN',
    'Oak Ridge, TN', 'Alcoa, TN', 'Sevierville, TN', 'Gatlinburg, TN',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Locksmith Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Lockout' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Lockout' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Change' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rekey Locks' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Locksmith' } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
