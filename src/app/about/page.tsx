import { Metadata } from 'next'
import { BUSINESS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Tristar Locksmith — Knoxville, TN',
  description: 'Learn about Tristar Locksmith, your trusted local locksmith in Knoxville, TN. Licensed, insured, and available 24/7.',
}

export default function AboutPage() {
  return (
    <div>
      <section style={{ backgroundColor: '#1B3A5C' }} className="py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Tristar Locksmith</h1>
          <p className="text-blue-100 text-lg">Your trusted local locksmith serving Knoxville, TN and surrounding areas</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B3A5C' }}>Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Tristar Locksmith is a locally owned and operated locksmith company serving Knoxville, Tennessee and the surrounding East Tennessee area. Our name is a nod to Tennessee&apos;s proud three-star heritage.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We provide fast, professional, and affordable locksmith services for residential, automotive, and commercial customers. Whether you&apos;re locked out of your car at midnight or need new locks installed for your business, we&apos;re here to help.
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#1B3A5C' }}>Our Promise</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✅ Upfront pricing — no surprises</li>
            <li>✅ Licensed and insured technicians</li>
            <li>✅ 15–30 minute response time</li>
            <li>✅ Available 24 hours a day, 7 days a week</li>
            <li>✅ Non-destructive techniques whenever possible</li>
          </ul>
          <div className="mt-10 text-center">
            <a
              href={BUSINESS.phoneHref}
              style={{ backgroundColor: '#D4A03C' }}
              className="inline-block text-white font-bold px-10 py-4 rounded-lg text-xl hover:opacity-90 transition"
            >
              📞 Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
