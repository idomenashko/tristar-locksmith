import Link from "next/link";
import type { ServiceArea } from "@/lib/types";

interface AreaCardProps {
  area: ServiceArea;
}

export function AreaCard({ area }: AreaCardProps) {
  return (
    <Link
      href={`/service-areas/${area.slug}`}
      className="group block p-5 bg-white rounded-lg border border-gray-200 hover:border-gold hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors font-display">
          {area.name}
        </h3>
        <span className="text-xs text-muted bg-warm-white-dark px-2 py-1 rounded-full">
          {area.region}
        </span>
      </div>
      <p className="text-muted text-sm leading-relaxed line-clamp-2">{area.description}</p>
      <span className="inline-block mt-3 text-gold text-sm font-semibold">
        View Area →
      </span>
    </Link>
  );
}
