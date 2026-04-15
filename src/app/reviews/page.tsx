import { Metadata } from 'next'
import { TESTIMONIALS, BUSINESS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Customer Reviews — Tristar Locksmith Knoxville, TN',
  description: 'Read 5-star reviews from satisfied Tristar Locksmith customers across Knoxville, TN and surrounding areas.',
}

export default function ReviewsPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-blue-100 text-lg">See what our customers say about Tristar Locksmith</p>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-yellow-400 text-xl mb-3">{'⭐'.repeat(t.rating)}</div>
                <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold" style={{ color: '#1B3A5C' }}>{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-12 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Join Our Satisfied Customers</h2>
        <a href={BUSINESS.phoneHref} style={{ backgroundColor: '#D4A03C' }} className="inline-block text-white font-bold px-10 py-4 rounded-lg text-xl hover:opacity-90 transition">
          📞 Call {BUSINESS.phone}
        </a>
      </section>
    </div>
  )
}
