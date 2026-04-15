'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#1B3A5C' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-headline text-xl font-bold text-white"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          <span aria-hidden="true">&#9733;</span>
          TriStar Locksmith
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:8653813931"
          className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-opacity hover:opacity-90 md:flex"
          style={{ backgroundColor: '#D4A03C', color: '#1B3A5C' }}
        >
          <span aria-hidden="true">📞</span>
          (865) 381-3931
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? (
            /* X icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t md:hidden"
          style={{ backgroundColor: '#1B3A5C', borderColor: '#2a5480' }}
        >
          <div className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8653813931"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold"
              style={{ backgroundColor: '#D4A03C', color: '#1B3A5C' }}
              onClick={() => setMobileOpen(false)}
            >
              <span aria-hidden="true">📞</span>
              (865) 381-3931
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
