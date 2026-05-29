import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, STATS, REVIEWS } from "@/lib/constants";
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
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  ScissorsLineDashed: <ScissorsLineDashed className="w-7 h-7" />,
  Palette: <Palette className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
  Heart: <Heart className="w-7 h-7" />,
  Brush: <Brush className="w-7 h-7" />,
  Gem: <Gem className="w-7 h-7" />,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="ClaraPerClara Salon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum/80 via-plum/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-light">
                Dal {SITE.founded} &middot; Brescia
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-tight mb-6">
                {SITE.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
                {SITE.quote}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-plum font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  Prenota Ora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/servizi"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  I Nostri Servizi
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-plum mb-2">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
                <Image
                  src="/images/salon-interior.jpg"
                  alt="Interni del salone ClaraPerClara"
                  width={600}
                  height={400}
                  className="relative rounded-2xl object-cover w-full h-[400px]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  La Nostra Storia
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-6 leading-tight">
                  Un&apos;Atelier di Bellezza <br />
                  <span className="text-plum">dal 1985</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Da oltre quarant&apos;anni, ClaraPerClara è il punto di riferimento per chi cerca
                  autenticità e stile a Brescia. Un atelier dove trovare il proprio stile con
                  una ricerca sartoriale e all&apos;avanguardia nelle proposte per la cliente.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Clara Lombardi e il suo team offrono un&apos;esperienza personalizzata,
                  dove ogni dettaglio è pensato per valorizzare la tua bellezza naturale.
                </p>
                <Link
                  href="/chi-siamo"
                  className="inline-flex items-center gap-2 text-plum font-semibold hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  Scopri di Più
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                I Nostri Servizi
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary">
                Trasformiamo il Tuo Look
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="bg-warm-white p-8 rounded-2xl card-hover border border-cream-dark group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum mb-6 group-hover:bg-plum group-hover:text-cream transition-all duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/hair-styling.jpg"
          alt="Styling professionale"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-plum/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-6">
              La Tua Bellezza Merita il Meglio
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
              Prenota una consulenza gratuita e scopri come possiamo
              valorizzare il tuo stile unico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-plum font-semibold rounded-full hover:bg-gold-light transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Chiamaci Ora
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream/30 text-cream font-medium rounded-full hover:bg-cream/10 transition-all duration-300 cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Gallery
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary">
                I Nostri Lavori
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/hair-styling.jpg", alt: "Hair Styling" },
              { src: "/images/hair-color.jpg", alt: "Colorazione" },
              { src: "/images/beauty-makeup.jpg", alt: "Make-up" },
              { src: "/images/hair-treatment.jpg", alt: "Trattamenti" },
              { src: "/images/salon-chair.jpg", alt: "Salone" },
              { src: "/images/salon-interior.jpg", alt: "Interni" },
            ].map((img, i) => (
              <ScrollReveal key={img.alt} delay={i * 80}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-plum/0 group-hover:bg-plum/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.alt}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Testimonianze
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary">
                Cosa Dicono di Noi
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 100}>
                <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-serif text-lg font-semibold text-plum">
                    {review.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Map Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                 Vieni a Trovarci
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-8">
                  Dove Siamo
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Indirizzo</h4>
                      <a
                        href={SITE.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-plum transition-colors cursor-pointer"
                      >
                        {SITE.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Telefono</h4>
                      <a
                        href={SITE.phoneLink}
                        className="text-text-secondary hover:text-plum transition-colors cursor-pointer"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Orari</h4>
                      <p className="text-text-secondary">
                        Mar - Sab: 08:30 - 18:00
                      </p>
                      <p className="text-text-muted text-sm">
                        Dom e Lun: Chiuso
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden h-[400px] border border-cream-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d10.2175!3d45.539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzIwLjQiTiAxMMKwMTMnMDMuMCJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClaraPerClara Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
