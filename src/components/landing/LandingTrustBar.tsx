const TRUST_ITEMS = [
  { icon: "⭐", text: "5.0 — 127 verified reviews" },
  { icon: "🏅", text: "Licensed & Insured" },
  { icon: "💰", text: "Upfront pricing, no surprises" },
  { icon: "📍", text: "Serving 27+ Knoxville-area cities" },
];

export function LandingTrustBar() {
  return (
    <div className="bg-navy-dark text-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2">
          {TRUST_ITEMS.map((item) => (
            <span key={item.text} className="flex items-center gap-2 text-sm text-white/80">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
