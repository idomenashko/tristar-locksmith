import Link from 'next/link'
import { BUSINESS, SERVICES, SERVICE_AREAS, TESTIMONIALS, FAQ, ADVANTAGES } from '@/lib/data'
import FaqAccordion from '@/components/home/FaqAccordion'

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section style={{ backgroundColor: '#1B3A5C' }} className="relative overflow-hidden">
      {/* Subtle diagonal overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Pre-headline badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold" style={{ backgroundColor: 'rgba(212,160,60,0.15)', color: '#D4A03C', border: '1px solid rgba(212,160,60,0.3)' }}>
            <span aria-hidden="true">★★★</span>
            Knoxville&apos;s #1 Rated Local Locksmith
          </div>

          {/* H1 */}
          <h1
            className="mb-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: '#ffffff', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Knoxville&apos;s Trusted Locksmith —{' '}
            <span style={{ color: '#D4A03C' }}>Available 24/7</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg leading-relaxed sm:text-xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Fast, professional locksmith service for cars, homes, and businesses across{' '}
            <span className="font-semibold text-white">Knoxville, TN</span> and surrounding areas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-bold shadow-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              style={{ backgroundColor: '#D4A03C', color: '#1B3A5C' }}
            >
              <span aria-hidden="true">📞</span>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
              View Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { icon: '⭐', label: '5-Star Rated' },
              { icon: '⏱', label: '15–30 Min Response' },
              { icon: '🔒', label: 'Licensed & Insured' },
              { icon: '📅', label: '24/7 Available' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">{badge.icon}</span>
                <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 2: Emergency Banner ─────────────────────────────────────────────

function EmergencyBanner() {
  return (
    <section
      className="py-4"
      style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #C0392B 50%, #b91c1c 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-base font-bold text-white sm:text-lg">
          <span aria-hidden="true">🚨</span>{' '}
          LOCKED OUT? Call{' '}
          <a
            href={BUSINESS.phoneHref}
            className="underline underline-offset-2 transition-opacity hover:opacity-80"
          >
            {BUSINESS.phone}
          </a>{' '}
          — We Arrive in 15–30 Minutes!
        </p>
      </div>
    </section>
  )
}

// ─── Section 3: Services Grid ─────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Our Locksmith Services
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            Professional locksmith solutions for every need
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2"
              style={{ borderColor: '#e5e7eb' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <h3
                  className="text-lg font-bold"
                  style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
                >
                  {service.name}
                </h3>
              </div>
              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {service.shortDesc}
              </p>
              <span
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold transition-colors group-hover:opacity-80"
                style={{ color: '#D4A03C' }}
                aria-hidden="true"
              >
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Why Choose Us ────────────────────────────────────────────────

function WhyChooseUsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Why Knoxville Trusts TriStar Locksmith
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            Local expertise, honest pricing, and fast response — every time
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-3xl"
                style={{ backgroundColor: 'rgba(27,58,92,0.08)' }}
                aria-hidden="true"
              >
                {adv.icon}
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
              >
                {adv.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Service Areas ─────────────────────────────────────────────────

function ServiceAreasSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2
            className="mb-3 text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Serving Knoxville &amp; Surrounding Areas
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            We come to you anywhere in the greater Knoxville area
          </p>
        </div>

        {/* Area chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area}
              href={`/service-areas/${toSlug(area)}`}
              className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150 hover:shadow-md"
              style={{
                borderColor: '#1B3A5C',
                color: '#1B3A5C',
                backgroundColor: '#ffffff',
              }}
              onMouseEnter={undefined}
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: Testimonials ──────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            What Our Customers Say
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            Real reviews from real Knoxville customers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm"
              style={{ borderColor: '#e5e7eb' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-lg" style={{ color: '#D4A03C' }} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#374151' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <div>
                <p className="text-sm font-bold" style={{ color: '#1B3A5C' }}>
                  {t.name}
                </p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 7: FAQ ───────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2
            className="mb-3 text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1B3A5C', fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: '#6b7280' }}>
            Everything you need to know before calling
          </p>
        </div>

        {/* Accordion (client component) */}
        <div className="rounded-2xl bg-white p-6 shadow-sm" style={{ border: '1px solid #e5e7eb' }}>
          <FaqAccordion items={FAQ} />
        </div>
      </div>
    </section>
  )
}

// ─── Section 8: Final CTA ─────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#1B3A5C' }}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="mb-4 text-3xl font-extrabold text-white sm:text-4xl"
          style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
        >
          Ready to Help — 24 Hours a Day, 7 Days a Week
        </h2>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Don&apos;t stay locked out. Our professional technicians are standing by.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-bold shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#D4A03C', color: '#1B3A5C' }}
          >
            <span aria-hidden="true">📞</span>
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.5)' }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <EmergencyBanner />
      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
