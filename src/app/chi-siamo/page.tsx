import Image from "next/image";
import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Award, Heart, Users, Sparkles } from "lucide-react";

export default function ChiSiamo() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-plum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Chi Siamo
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-cream font-semibold max-w-3xl">
              La Storia di ClaraPerClara
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
                <Image
                  src="/images/salon-interior.jpg"
                  alt="ClaraPerClara Salon Interior"
                  width={600}
                  height={500}
                  className="relative rounded-2xl object-cover w-full h-[500px]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-serif text-4xl font-semibold text-text-primary mb-6">
                  Un&apos;Amore per la Bellezza <br />
                  <span className="text-plum">dal 1985</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Tutto è iniziato con un sogno: creare uno spazio dove ogni donna potesse
                  riscoprire la propria bellezza, guidata da mani esperte e da un cuore
                  sensibile. Clara Lombardi ha trasformato questa visione in realtà,
                  fondando ClaraPerClara come un atelier di stile e creatività.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Le mode passano, ma ciò che rimane è lo stile, l&apos;arte guidata dalla
                  disciplina, la tecnica che consiste nell&apos;incanalare la creatività.
                  Questa filosofia ha guidato il salone per oltre quarant&apos;anni.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Oggi, il team di ClaraPerClara continua a portare avanti questa tradizione,
                  combinando tecniche all&apos;avanguardia con la calura e l&apos;attenzione
                  che ha reso famoso questo angolo di bellezza a Brescia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                I Nostri Valori
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary">
                In Cosa Crediamo
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-7 h-7" />,
                title: "Creatività",
                text: "Ogni look è un'opera d'arte unica, creata con passione e immaginazione.",
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Eccellenza",
                text: "Tecniche all'avanguardia e prodotti di alta qualità per risultati impeccabili.",
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: "Passione",
                text: "Amo creare guidata dalla mia sensibilità, trasformando in immagine i miei sogni.",
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: "Accoglienza",
                text: "Un ambiente caldo e familiare dove ogni cliente si sente a casa.",
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-plum/5 flex items-center justify-center text-plum mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-plum">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <blockquote className="font-serif text-3xl md:text-4xl text-cream italic leading-relaxed mb-8">
              &ldquo;{SITE.quote}&rdquo;
            </blockquote>
            <p className="text-gold tracking-widest uppercase text-sm">
              &mdash; Clara Lombardi, Fondatrice
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Book */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  La Biografia
                </p>
                <h2 className="font-serif text-4xl font-semibold text-text-primary mb-6">
                  Clara Legge Clara
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Il sogno di una vita. Una biografia semplice che racconta la storia
                  di Clara, della sua visione e del percorso che ha dato vita a
                  ClaraPerClara.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Disponibile in salone. Via Dante 13, Brescia.
                </p>
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-plum text-cream font-semibold rounded-full hover:bg-plum-light transition-all duration-300 cursor-pointer"
                >
                  Richiedi una Copia
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl" />
                <Image
                  src="/images/beauty-makeup.jpg"
                  alt="Clara Legge Clara - Biografia"
                  width={500}
                  height={400}
                  className="relative rounded-2xl object-cover w-full h-[400px]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
