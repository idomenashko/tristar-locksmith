"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl font-display">
            <span className="text-gold text-2xl">⭐</span>
            <span>Tristar Locksmith</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="tel:8653813931" variant="primary" size="sm">
              📞 Call Now
            </Button>
          </div>

          {/* Mobile: Call + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:8653813931"
              className="bg-gold text-navy font-bold text-sm px-3 py-2 rounded-md uppercase tracking-wide"
            >
              Call
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-gold hover:bg-white/10 transition-colors px-4 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:8653813931"
                className="mt-2 bg-gold text-navy font-bold text-sm px-4 py-3 rounded-md uppercase tracking-wide text-center"
              >
                📞 (865) 381-3931 — Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
