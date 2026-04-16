import Link from "next/link";
import { SERVICES, SERVICE_AREAS, BUSINESS } from "@/lib/data";

export function Footer() {
  const topAreas = SERVICE_AREAS.slice(0, 12);

  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg font-display mb-3">
              <span className="text-gold text-xl">⭐</span>
              <span>Tristar Locksmith</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Licensed & insured locksmith serving Knoxville, TN and surrounding areas. Available 24/7.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="text-gold font-bold text-lg hover:text-gold-light transition-colors"
            >
              {BUSINESS.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Service Areas</h3>
            <ul className="space-y-2">
              {topAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-gold text-sm hover:text-gold-light transition-colors font-medium">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" },
                { href: "/services", label: "All Services" },
                { href: "/service-areas", label: "All Areas" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-white/10 rounded-lg">
              <p className="text-xs text-white/70 mb-1">Available 24/7</p>
              <a href="tel:8653813931" className="text-gold font-bold hover:text-gold-light transition-colors">
                (865) 381-3931
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tristar Locksmith. All rights reserved.</p>
          <p>Licensed & Insured | Knoxville, TN</p>
        </div>
      </div>
    </footer>
  );
}
