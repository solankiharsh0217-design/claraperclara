import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES, STATS, REVIEWS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountingNumber from "@/components/ui/CountingNumber";
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
  Quote,
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
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with parallax-like effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="ClaraPerClara Salon"
            fill
            className="object-cover scale-110"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-plum/85 via-plum/60 to-plum/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />

        {/* Decorative floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-gold/5 blur-2xl animate-float-slow" />

        {/* Decorative dots */}
        <div className="absolute top-32 right-16 hidden lg:flex flex-col gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gold/40 animate-dot-float"
              style={{ animationDelay: `${i * 300}ms` }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Decorative line */}
            <div className="w-16 h-px bg-gold mb-8 animate-clip-reveal" />

            <ScrollReveal delay={200}>
              <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-light">
                Dal {SITE.founded} &middot; Brescia
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white font-semibold leading-[0.95] mb-6">
                <span className="block animate-hero-text-reveal">Clara</span>
                <span className="block animate-hero-text-reveal delay-200">Per</span>
                <span className="block animate-hero-text-reveal delay-400 text-gold">Clara</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                {SITE.quote}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-plum font-semibold rounded-full hover:bg-gold-light transition-all duration-400 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] cursor-pointer"
                >
                  Prenota Ora
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/servizi"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  I Nostri Servizi
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-5 h-8 border border-white/25 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Decorative line */}
        <div className="section-divider absolute top-0 left-0 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center group">
                  <div className="relative inline-block">
                    <p className="font-serif text-5xl md:text-6xl font-bold text-plum mb-2">
                      <CountingNumber
                        target={parseFloat(stat.value.replace(/[^0-9.]/g, ""))}
                        suffix={stat.value.includes("+") ? "+" : ""}
                      />
                    </p>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold/40 rounded-full group-hover:w-12 transition-all duration-300" />
                  </div>
                  <p className="text-text-muted text-sm tracking-wide mt-3">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-28 bg-warm-white relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-plum/[0.02] rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Gold frame */}
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-gold/20 rounded-3xl animate-border-glow" />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/salon-interior.jpg"
                    alt="Interni del salone ClaraPerClara"
                    width={600}
                    height={450}
                    className="relative rounded-2xl object-cover w-full h-[450px]"
                  />
                  {/* Overlay shimmer */}
                  <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="right">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold" />
                  <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                    La Nostra Storia
                  </p>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary mb-8 leading-[1.1]">
                  Un&apos;Atelier di <br />
                  <span className="gradient-text-animated">Bellezza</span> <br />
                  dal 1985
                </h2>
                <div className="space-y-4 mb-10">
                  <p className="text-text-secondary leading-relaxed">
                    Da oltre quarant&apos;anni, ClaraPerClara è il punto di riferimento per chi cerca
                    autenticità e stile a Brescia. Un atelier dove trovare il proprio stile con
                    una ricerca sartoriale e all&apos;avanguardia nelle proposte per la cliente.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Clara Lombardi e il suo team offrono un&apos;esperienza personalizzata,
                    dove ogni dettaglio è pensato per valorizzare la tua bellezza naturale.
                  </p>
                </div>
                <Link
                  href="/chi-siamo"
                  className="group inline-flex items-center gap-3 text-plum font-semibold hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  Scopri di Più
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  I Nostri Servizi
                </p>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary">
                Trasformiamo il Tuo Look
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group bg-warm-white p-8 rounded-2xl border border-cream-dark card-hover cursor-pointer relative overflow-hidden">
                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 via-transparent to-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum mb-6 group-hover:bg-plum group-hover:text-cream group-hover:scale-110 transition-all duration-400">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-text-primary mb-3 group-hover:text-plum transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs font-medium tracking-wide">Scopri</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-warm-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        {/* Background decorative text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[200px] text-plum/[0.02] font-bold whitespace-nowrap select-none pointer-events-none">
          BEAUTY
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary italic leading-snug mb-8 text-balance">
              &ldquo;Le mode passano, ma ciò che rimane è lo stile, l&apos;arte guidata dalla
              disciplina, la tecnica che consiste nell&apos;incanalare la creatività.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gold" />
              <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium">
                Clara Lombardi
              </p>
              <div className="w-12 h-px bg-gold" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/hair-styling.jpg"
          alt="Styling professionale"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-plum/90 via-plum/80 to-plum/70" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 animate-gradient-shift" />

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-gold/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-gold/10 rounded-full animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gold/40 rounded-full animate-dot-float" />
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-gold/30 rounded-full animate-dot-float" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-8 leading-tight">
              La Tua Bellezza <br />
              <span className="text-gold">Merita il Meglio</span>
            </h2>
            <p className="text-cream/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Prenota una consulenza gratuita e scopri come possiamo
              valorizzare il tuo stile unico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE.phoneLink}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-plum font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)] cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Chiamaci Ora
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/20 text-cream font-medium rounded-full hover:bg-cream/10 hover:border-cream/40 transition-all duration-300 cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  Gallery
                </p>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary">
                I Nostri Lavori
              </h2>
            </div>
          </ScrollReveal>

          {/* Masonry-style grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {[
              { src: "/images/hair-styling.jpg", alt: "Hair Styling", tall: true },
              { src: "/images/hair-color.jpg", alt: "Colorazione", tall: false },
              { src: "/images/beauty-makeup.jpg", alt: "Make-up", tall: false },
              { src: "/images/hair-treatment.jpg", alt: "Trattamenti", tall: true },
              { src: "/images/salon-chair.jpg", alt: "Salone", tall: false },
              { src: "/images/salon-interior.jpg", alt: "Interni", tall: true },
            ].map((img, i) => (
              <ScrollReveal key={img.alt} delay={i * 100} className="break-inside-avoid">
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer image-zoom">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={img.tall ? 600 : 400}
                    className={`w-full object-cover ${img.tall ? "h-[400px]" : "h-[280px]"} transition-transform duration-700`}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-white font-serif text-xl">{img.alt}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 bg-cream relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  Testimonianze
                </p>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary">
                Cosa Dicono di Noi
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 120}>
                <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark relative group card-hover">
                  {/* Large decorative quote */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors duration-500" />

                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-8 italic text-[15px]">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-6 border-t border-cream-dark">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-plum/5 flex items-center justify-center">
                      <span className="font-serif text-plum font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-plum">
                        {review.name}
                      </p>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Map Section */}
      <section className="py-28 bg-warm-white relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold" />
                  <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                    Vieni a Trovarci
                  </p>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary mb-10">
                  Dove Siamo
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      label: "Indirizzo",
                      content: (
                        <a
                          href={SITE.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-plum transition-colors cursor-pointer"
                        >
                          {SITE.address}
                        </a>
                      ),
                    },
                    {
                      icon: <Phone className="w-5 h-5" />,
                      label: "Telefono",
                      content: (
                        <a
                          href={SITE.phoneLink}
                          className="text-text-secondary hover:text-plum transition-colors cursor-pointer"
                        >
                          {SITE.phone}
                        </a>
                      ),
                    },
                    {
                      icon: <Clock className="w-5 h-5" />,
                      label: "Orari",
                      content: (
                        <>
                          <p className="text-text-secondary">Mar - Sab: 08:30 - 18:00</p>
                          <p className="text-text-muted text-sm">Dom e Lun: Chiuso</p>
                        </>
                      ),
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 100}>
                      <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-plum/5 flex items-center justify-center text-plum shrink-0 group-hover:bg-plum group-hover:text-cream transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary mb-1">{item.label}</h4>
                          {item.content}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden h-[450px] border border-cream-dark shadow-lg shadow-plum/5">
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
