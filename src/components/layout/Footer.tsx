import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-plum text-cream/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-semibold text-cream mb-2">
              {SITE.name}
            </h3>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Hair & Beauty
            </p>
            <p className="text-sm leading-relaxed text-cream/60">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Navigazione</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={SITE.phoneLink}
                  className="text-sm hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={SITE.emailLink}
                  className="text-sm hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Orari</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lunedì</span>
                <span className="text-gold">Chiuso</span>
              </li>
              <li className="flex justify-between">
                <span>Martedì</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Mercoledì</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Giovedì</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Venerdì</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span>08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span className="text-gold">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
