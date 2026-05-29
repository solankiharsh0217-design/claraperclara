import { SERVICES } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Scissors,
  Sparkles,
  ScissorsLineDashed,
  Palette,
  Droplets,
  Heart,
  Brush,
  Gem,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  ScissorsLineDashed: <ScissorsLineDashed className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Brush: <Brush className="w-8 h-8" />,
  Gem: <Gem className="w-8 h-8" />,
};

export default function Servizi() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-plum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              I Nostri Servizi
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-cream font-semibold max-w-3xl">
              Servizi di Bellezza
            </h1>
            <p className="text-cream/70 text-lg mt-6 max-w-2xl">
              Offriamo una gamma completa di servizi per prenderti cura di te,
              dal taglio ai trattamenti più avanzati.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="bg-warm-white p-10 rounded-2xl border border-cream-dark card-hover group cursor-pointer">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-plum/5 flex items-center justify-center text-plum shrink-0 group-hover:bg-plum group-hover:text-cream transition-all duration-300">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-6">
              Vuoi Saperne di Più?
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Contattaci per una consulenza personalizzata. Il nostro team
              è pronto ad aiutarti a trovare il look perfetto per te.
            </p>
            <a
              href="tel:+393397525666"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-plum text-cream font-semibold rounded-full hover:bg-plum-light transition-all duration-300 cursor-pointer"
            >
              Chiamaci: +39 339 752 5666
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
