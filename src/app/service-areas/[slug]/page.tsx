import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { AREA_DETAILS, SERVICES, BUSINESS } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return AREA_DETAILS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = AREA_DETAILS.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: `Locksmith in ${area.name}, ${area.state} — ${BUSINESS.phone}`,
    description: `24/7 locksmith service in ${area.name}, ${area.state}. Car lockout, house lockout, rekey, lock change, car key replacement. Call ${BUSINESS.phone}.`,
  }
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params
  const area = AREA_DETAILS.find((a) => a.slug === slug)
  if (!area) notFound()

  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-3 text-blue-200">{area.county} · {area.state}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Locksmith in {area.name}, TN</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fast, 24/7 locksmith service for cars, homes, and businesses in {area.name} and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              style={{ backgroundColor: '#D4A03C' }}
              className="inline-block text-white font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition"
            >
              📞 Call {BUSINESS.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-100">
            <span>⭐ 5-Star Rated</span>
            <span>⏱ 15-30 Min Response</span>
            <span>🔒 Licensed &amp; Insured</span>
            <span>24/7 Available</span>
          </div>
        </div>
      </section>

      {/* About area */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1B3A5C' }}>
            Locksmith Services in {area.name}, TN
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">{area.description}</p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Whether you&apos;re locked out of your car, need a lock rekeyed, require emergency service, or need help with a commercial property, TriStar Locksmith is the trusted choice in {area.name}. Call us anytime at{' '}
            <a href={BUSINESS.phoneHref} className="font-bold" style={{ color: '#D4A03C' }}>
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Services in this area */}
      <section style={{ backgroundColor: '#F5F5F0' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1B3A5C' }}>
            Services Available in {area.name}
          </h2>
          <p className="text-center text-gray-600 mb-12">All services available 24/7 throughout {area.name} and {area.county}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: '#1B3A5C' }}>{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3A5C' }}>
            Why {area.name} Residents Choose TriStar Locksmith
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'Fast Response', desc: `We dispatch quickly to ${area.name} — typically 15–30 minute arrival times` },
              { icon: '📞', title: '24/7 Availability', desc: 'Available nights, weekends, and holidays for any locksmith emergency' },
              { icon: '💰', title: 'Upfront Pricing', desc: 'We provide a clear quote before starting — no hidden fees, ever' },
              { icon: '🔒', title: 'Licensed & Insured', desc: 'All our technicians are trained, experienced, and fully insured' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#1B3A5C' }}>{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {area.nearbyAreas.length > 0 && (
        <section style={{ backgroundColor: '#F5F5F0' }} className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B3A5C' }}>Also Serving Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {area.nearbyAreas.map((a) => (
                <Link
                  key={a}
                  href={`/service-areas/${toSlug(a)}`}
                  className="px-4 py-2 border-2 rounded-lg font-medium hover:text-white transition"
                  style={{ borderColor: '#1B3A5C', color: '#1B3A5C' }}
                >
                  {a}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need a Locksmith in {area.name}?</h2>
          <p className="text-blue-100 mb-8">
            Call now for fast, professional service. Available 24/7 throughout {area.name} and {area.county}.
          </p>
          <a
            href={BUSINESS.phoneHref}
            style={{ backgroundColor: '#D4A03C' }}
            className="inline-block text-white font-bold px-10 py-4 rounded-lg text-xl hover:opacity-90 transition"
          >
            📞 Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
