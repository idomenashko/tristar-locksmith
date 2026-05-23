import { SITE } from "@/lib/seo";

interface ServiceCityHeroProps {
  h1: string;
  answerCapsule: string;
  serviceName: string;
}

export function ServiceCityHero({ h1, answerCapsule, serviceName }: ServiceCityHeroProps) {
  return (
    <div className="bg-navy text-white py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-white font-display mb-4 leading-tight">
          {h1}
        </h1>
        <p className="text-white/85 text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
          {answerCapsule}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-6 py-3.5 rounded-md text-sm uppercase tracking-wide hover:bg-amber-400 transition-colors"
          >
            📞 Call {SITE.phone}
          </a>
          <a
            href="#get-help"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-md text-sm hover:bg-white/10 transition-colors"
          >
            Request a Callback →
          </a>
        </div>
        <p className="text-white/55 text-xs mt-5">
          5.0 ★ from 127 verified reviews · {serviceName} · Serving East Tennessee
        </p>
      </div>
    </div>
  );
}
