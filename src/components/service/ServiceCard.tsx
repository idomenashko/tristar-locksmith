import Link from "next/link";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-gold hover:shadow-lg transition-all"
    >
      <div className="text-4xl mb-3">{service.icon}</div>
      <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors font-display">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed line-clamp-3">
        {service.shortDescription}
      </p>
      <span className="inline-block mt-4 text-gold text-sm font-semibold">
        Learn More →
      </span>
    </Link>
  );
}
