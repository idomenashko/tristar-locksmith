interface ServiceCityBodyProps {
  whatWeDo: string;
  scenarioText: string;
  cityName: string;
  neighborhoods: string[];
  zips: string[];
  serviceName: string;
}

const WHY_TRISTAR = [
  "5.0 stars from 127 verified reviews",
  "Licensed, insured, and background-checked technicians",
  "Non-destructive techniques — no damage to your property",
  "Upfront pricing quoted before we begin — no surprises",
  "Serving Knoxville and 26 surrounding East Tennessee communities",
  "7 AM–11:30 PM daily · 24/7 emergency line always open",
];

export function ServiceCityBody({
  whatWeDo,
  scenarioText,
  cityName,
  neighborhoods,
  zips,
  serviceName,
}: ServiceCityBodyProps) {
  return (
    <div className="space-y-10">
      {/* What We Do */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4 font-display">
          How Tristar Handles {serviceName} in {cityName}
        </h2>
        <p className="text-ink leading-relaxed">{whatWeDo}</p>
      </section>

      {/* Local Coverage */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4 font-display">
          Locksmith Coverage in {cityName}, TN
        </h2>
        <p className="text-ink mb-4">
          Tristar Locksmith serves the full {cityName} area — including these neighborhoods and nearby areas:
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {neighborhoods.map((n) => (
            <li key={n} className="flex items-center gap-2 text-sm text-ink">
              <span className="text-forest font-bold">✓</span>
              {n}
            </li>
          ))}
        </ul>
        {zips.length > 0 && (
          <p className="text-sm text-muted">
            ZIP codes served: <span className="font-medium text-ink">{zips.join(", ")}</span>
          </p>
        )}
      </section>

      {/* Pricing */}
      <section className="bg-navy/5 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-navy mb-3 font-display">
          Transparent Pricing in {cityName}
        </h2>
        <p className="text-ink mb-3">
          When you call Tristar Locksmith in {cityName}, we give you a firm price before we touch anything — no surprises after the job.
        </p>
        <ul className="space-y-2 text-sm text-ink">
          <li className="flex items-start gap-2"><span className="text-forest font-bold">✓</span> Upfront pricing — you approve the cost before we start</li>
          <li className="flex items-start gap-2"><span className="text-forest font-bold">✓</span> No hidden dispatch or service-call fees</li>
          <li className="flex items-start gap-2"><span className="text-forest font-bold">✓</span> Emergency rates disclosed on the call, not after the job</li>
        </ul>
      </section>

      {/* Scenario */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4 font-display">
          Common {serviceName} Situations in {cityName}
        </h2>
        <p className="text-ink leading-relaxed">{scenarioText}</p>
      </section>

      {/* Why Tristar */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-4 font-display">
          Why {cityName} Chooses Tristar Locksmith
        </h2>
        <ul className="space-y-3">
          {WHY_TRISTAR.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="text-forest mt-0.5 font-bold text-lg">✓</span>
              <span className="text-ink">{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
