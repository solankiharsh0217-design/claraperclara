import { SITE } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Contatti() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-plum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Contatti
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-cream font-semibold max-w-3xl">
              Parlaci del Tuo Look
            </h1>
            <p className="text-cream/70 text-lg mt-6 max-w-2xl">
              Siamo a disposizione per rispondere a tutte le tue domande
              e prenotare il tuo appuntamento.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <ScrollReveal delay={0}>
              <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark text-center">
                <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum mx-auto mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                  Indirizzo
                </h3>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-plum transition-colors cursor-pointer leading-relaxed"
                >
                  {SITE.address}
                </a>
              </div>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal delay={100}>
              <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark text-center">
                <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum mx-auto mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                  Telefono
                </h3>
                <a
                  href={SITE.phoneLink}
                  className="text-text-secondary hover:text-plum transition-colors cursor-pointer block"
                >
                  {SITE.phone}
                </a>
                <a
                  href={SITE.phoneSecondaryLink}
                  className="text-text-muted hover:text-plum transition-colors cursor-pointer text-sm block mt-1"
                >
                  {SITE.phoneSecondary}
                </a>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={200}>
              <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark text-center">
                <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum mx-auto mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-3">
                  Email
                </h3>
                <a
                  href={SITE.emailLink}
                  className="text-text-secondary hover:text-plum transition-colors cursor-pointer"
                >
                  {SITE.email}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Hours & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <ScrollReveal delay={300}>
              <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-plum/5 flex items-center justify-center text-plum">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    Orari di Apertura
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Lunedì", hours: "Chiuso", closed: true },
                    { day: "Martedì", hours: "08:30 - 18:00" },
                    { day: "Mercoledì", hours: "08:30 - 18:00" },
                    { day: "Giovedì", hours: "08:30 - 18:00" },
                    { day: "Venerdì", hours: "08:30 - 18:00" },
                    { day: "Sabato", hours: "08:30 - 18:00" },
                    { day: "Domenica", hours: "Chiuso", closed: true },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-2 border-b border-cream-dark last:border-0">
                      <span className="text-text-secondary">{item.day}</span>
                      <span className={item.closed ? "text-gold font-medium" : "text-text-primary"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-warm-white p-8 rounded-2xl border border-cream-dark">
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-6">
                  Seguici
                </h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Resta aggiornato sui nostri ultimi lavori, promozioni e novità.
                  Seguici sui nostri canali social!
                </p>
                <div className="flex gap-4">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-plum/5 rounded-xl hover:bg-plum hover:text-cream text-plum transition-all duration-300 cursor-pointer"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-plum/5 rounded-xl hover:bg-plum hover:text-cream text-plum transition-all duration-300 cursor-pointer"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>
                <div className="mt-8">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
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
      </section>
    </>
  );
}
