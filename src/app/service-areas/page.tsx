import { Metadata } from 'next'
import Link from 'next/link'
import { AREA_DETAILS, BUSINESS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Service Areas — Knoxville, TN Region',
  description: '24/7 locksmith service across Knoxville, TN and surrounding areas including Farragut, Maryville, Oak Ridge, Sevierville, Powell, and 20+ more cities.',
}

export default function ServiceAreasPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
          <p className="text-blue-100 text-lg">We serve Knoxville and {AREA_DETAILS.length - 1} surrounding communities across East Tennessee</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AREA_DETAILS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="block bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition hover:-translate-y-1"
              >
                <h2 className="font-bold text-lg" style={{ color: '#1B3A5C' }}>{area.name}</h2>
                <p className="text-gray-500 text-sm">{area.county}</p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{area.description.slice(0, 100)}…</p>
                <span style={{ color: '#D4A03C' }} className="text-sm font-semibold mt-2 block">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-12 px-4 text-center text-white">
        <p className="text-blue-100 mb-4">Don&apos;t see your area? Call us — we likely serve you too!</p>
        <a href={BUSINESS.phoneHref} style={{ backgroundColor: '#D4A03C' }} className="inline-block text-white font-bold px-10 py-4 rounded-lg text-xl hover:opacity-90 transition">
          📞 Call {BUSINESS.phone}
        </a>
      </section>
    </div>
  )
}
