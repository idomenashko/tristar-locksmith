const SERVICE_AREAS = [
  "Knoxville", "Farragut", "Powell", "Maryville", "Oak Ridge",
  "Alcoa", "Clinton", "Sevierville", "Hardin Valley", "Karns",
  "Lenoir City", "Tellico Village", "Corryton", "Maynardville",
  "Heiskell", "Mascot", "Strawberry Plains", "Seymour", "Rockford",
  "Louisville", "Friendsville", "Greenback", "Walland", "Kodak",
  "Pigeon Forge", "Dandridge", "Jefferson City",
];

export function LandingCoverage() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            We serve Knoxville and surrounding areas
          </h2>
          <p className="text-muted mb-10">
            27+ cities across East Tennessee. Not sure if we cover you? Call us — we likely do.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-warm-white text-navy text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
