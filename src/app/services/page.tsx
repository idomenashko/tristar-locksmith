import { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_DETAILS, BUSINESS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Locksmith Services in Knoxville, TN',
  description: 'Professional locksmith services in Knoxville, TN: car lockout, house lockout, rekey, lock change, car key replacement, ignition repair, commercial, emergency, and safe lockout.',
}

export default function ServicesPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Locksmith Services</h1>
          <p className="text-blue-100 text-lg">Professional solutions for cars, homes, and businesses across Knoxville, TN</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_DETAILS.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h2 className="text-xl font-bold mb-2" style={{ color: '#1B3A5C' }}>{s.name}</h2>
                <p className="text-gray-600 mb-4">{s.shortDesc}</p>
                <span style={{ color: '#D4A03C' }} className="font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-12 px-4 text-center text-white">
        <a href={BUSINESS.phoneHref} style={{ backgroundColor: '#D4A03C' }} className="inline-block text-white font-bold px-10 py-4 rounded-lg text-xl hover:opacity-90 transition">
          📞 Call {BUSINESS.phone} — Available 24/7
        </a>
      </section>
    </div>
  )
}
