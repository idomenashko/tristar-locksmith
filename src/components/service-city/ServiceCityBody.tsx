interface ServiceCityBodyProps {
  whatWeDo: string;
  scenarioText: string;
  cityName: string;
  neighborhoods: string[];
  zips: string[];
  responseBand: string;
  serviceName: string;
}

const WHY_TRISTAR = [
  "5.0 stars from 127 verified reviews",
  "15–30 minute average response time across East Tennessee",
  "Non-destructive techniques — no damage to your property",
  "Upfront pricing quoted before we begin — no surprises",
  "Licensed, insured, and background-checked technicians",
  "7 AM–11:30 PM daily · 24/7 emergency line always open",
];

export function ServiceCityBody({
  whatWeDo,
  scenarioText,
  cityName,
  neighborhoods,
  zips,
  responseBand,
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

      {/* Response Time */}
      <section className="bg-navy/5 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-navy mb-3 font-display">
          Response Time &amp; Pricing in {cityName}
        </h2>
        <p className="text-ink mb-3">
          Our average response time in {cityName} is <strong>{responseBand}</strong>. When you call, we give you an accurate ETA before we dispatch — and a firm price before we touch anything.
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
