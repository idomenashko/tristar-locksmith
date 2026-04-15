import Link from 'next/link'
import { SERVICES, SERVICE_AREAS } from '@/lib/data'

function toSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, '-')
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const featuredAreas = SERVICE_AREAS.slice(0, 10)

  return (
    <footer style={{ backgroundColor: '#1B3A5C' }} className="text-white">
      {/* Main columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-headline text-xl font-bold text-white"
              style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
            >
              <span aria-hidden="true">&#9733;</span> TriStar Locksmith
            </Link>
            <p className="text-sm text-white/70">
              24/7 Locksmith in Knoxville, TN
            </p>
            <a
              href="tel:8653813931"
              className="inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#D4A03C', color: '#1B3A5C' }}
            >
              <span aria-hidden="true">📞</span>
              (865) 381-3931
            </a>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#D4A03C' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#D4A03C' }}
            >
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2">
              {featuredAreas.map((city) => (
                <li key={city}>
                  <Link
                    href={`/service-areas/${toSlug(city)}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-1 text-sm font-medium transition-colors hover:text-white"
              style={{ color: '#D4A03C' }}
            >
              View All Areas &rarr;
            </Link>
          </div>

          {/* Column 4 — Hours & Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#D4A03C' }}
            >
              Hours &amp; Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <p className="font-semibold text-white">Open 24/7</p>
              <p>Including nights, weekends,<br />and holidays</p>
              <a
                href="tel:8653813931"
                className="mt-1 font-medium text-white transition-colors hover:underline"
              >
                (865) 381-3931
              </a>
              <p className="mt-2 text-xs text-white/50">
                Email inquiries coming soon
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: '#2a5480' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <span>
            &copy; {currentYear} Tristar Locksmith. All rights reserved.
          </span>
          <span>Knoxville, TN</span>
        </div>
      </div>
    </footer>
  )
}
