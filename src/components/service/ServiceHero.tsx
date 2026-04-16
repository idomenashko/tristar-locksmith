import type { Service } from "@/lib/types";
import { Button } from "@/components/ui/Button";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <div className="bg-navy text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
          {service.title}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mb-8">
          {service.shortDescription}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="tel:8653813931" variant="primary" size="lg">
            📞 Call (865) 381-3931
          </Button>
          <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
            ← All Services
          </Button>
        </div>
      </div>
    </div>
  );
}
