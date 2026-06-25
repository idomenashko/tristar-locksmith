interface InternalLinksProps {
  parentServiceSlug: string;
  parentServiceName: string;
  parentCitySlug: string;
  parentCityName: string;
  siblingServices: { slug: string; label: string }[];
  nearbyLinks: { slug: string; cityName: string }[];
  currentServiceName: string;
}

export function InternalLinks({
  parentServiceSlug,
  parentServiceName,
  parentCitySlug,
  parentCityName,
  siblingServices,
  nearbyLinks,
  currentServiceName,
}: InternalLinksProps) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-sm font-bold text-navy uppercase tracking-wide mb-4">
        Related Pages
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold text-navy mb-2">Parent Pages</p>
          <ul className="space-y-1.5">
            <li>
              <a
                href={`/services/${parentServiceSlug}`}
                className="text-gold hover:underline"
              >
                {parentServiceName}: All Areas
              </a>
            </li>
            <li>
              <a
                href={`/service-areas/${parentCitySlug}`}
                className="text-gold hover:underline"
              >
                Locksmith in {parentCityName}
              </a>
            </li>
          </ul>
        </div>

        {siblingServices.length > 0 && (
          <div>
            <p className="font-semibold text-navy mb-2">
              More Services in {parentCityName}
            </p>
            <ul className="space-y-1.5">
              {siblingServices.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <a href={`/${s.slug}`} className="text-gold hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {nearbyLinks.length > 0 && (
          <div>
            <p className="font-semibold text-navy mb-2">
              {currentServiceName} Near {parentCityName}
            </p>
            <ul className="space-y-1.5">
              {nearbyLinks.map((n) => (
                <li key={n.slug}>
                  <a href={`/${n.slug}`} className="text-gold hover:underline">
                    {currentServiceName} in {n.cityName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
