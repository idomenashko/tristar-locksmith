import { Reveal } from "@/components/landing/Reveal";

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
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-navy font-black text-3xl md:text-4xl mb-3">
            We Serve 27 East Tennessee Cities
          </h2>
          <p className="text-muted text-lg">
            Wherever you are in East TN, we can come to you.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-3 justify-center">
            {SERVICE_AREAS.map((area, index) => (
              <span
                key={area}
                className={
                  index === 0
                    ? "bg-navy text-white font-semibold px-5 py-2.5 rounded-full text-sm"
                    : "border-2 border-navy text-navy font-medium px-5 py-2.5 rounded-full text-sm hover:bg-navy hover:text-white transition-colors cursor-default"
                }
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
