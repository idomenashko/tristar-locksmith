import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SERVICE_DETAILS, BUSINESS } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_DETAILS.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} in Knoxville, TN`,
    description: `${service.longDesc.slice(0, 155)}`,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICE_DETAILS.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-20 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-4">{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name} in Knoxville, TN</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{service.shortDesc}</p>
          <a
            href={BUSINESS.phoneHref}
            style={{ backgroundColor: '#D4A03C' }}
            className="inline-block text-white font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition"
          >
            📞 Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1B3A5C' }}>About This Service</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{service.longDesc}</p>
            </div>
            <div style={{ backgroundColor: '#F5F5F0' }} className="rounded-2xl p-8 text-center">
              <div className="text-8xl mb-4">{service.icon}</div>
              <p className="font-bold text-xl mb-2" style={{ color: '#1B3A5C' }}>Need Help Now?</p>
              <a
                href={BUSINESS.phoneHref}
                style={{ backgroundColor: '#D4A03C' }}
                className="inline-block text-white font-bold px-6 py-3 rounded-lg mt-2 hover:opacity-90 transition"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#F5F5F0' }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3A5C' }}>Why Choose TriStar for {service.name}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm"
                  style={{ backgroundColor: '#2E7D4F' }}
                >
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#1B3A5C' }}>{b.title}</h3>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3A5C' }}>How It Works</h2>
          <div className="space-y-6">
            {service.process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                  style={{ backgroundColor: '#1B3A5C' }}
                >
                  {p.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-xl mb-1">{p.title}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#F5F5F0' }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B3A5C' }}>Common Questions</h2>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1B3A5C' }}>{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready When You Are — 24/7</h2>
          <p className="text-blue-100 mb-8">Professional {service.name.toLowerCase()} service in Knoxville and surrounding areas.</p>
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
