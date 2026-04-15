import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
