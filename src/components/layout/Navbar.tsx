"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-scroll ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(74,25,66,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? "text-plum" : "text-white"
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-500 ${
                scrolled ? "text-gold" : "text-white/70"
              }`}
            >
              Hair & Beauty
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? scrolled
                        ? "text-plum"
                        : "text-white"
                      : scrolled
                        ? "text-text-secondary hover:text-plum"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
            <a
              href={SITE.phoneLink}
              className={`ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "bg-plum text-cream hover:bg-plum-light hover:shadow-lg hover:shadow-plum/20"
                  : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20"
              }`}
            >
              <Phone className="w-4 h-4" />
              Chiama
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              scrolled ? "text-plum" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-80 bg-cream/98 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 text-plum hover:text-gold transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav links */}
          <div className="space-y-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 text-lg font-medium transition-colors duration-300 cursor-pointer border-b border-cream-dark/50 ${
                    isActive
                      ? "text-plum font-semibold"
                      : "text-text-secondary hover:text-plum"
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="flex items-center gap-3">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    )}
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-auto space-y-4">
            <a
              href={SITE.phoneLink}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-plum text-cream rounded-2xl font-semibold hover:bg-plum-light transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Chiama Ora
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 text-white rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-plum/20 backdrop-blur-sm z-[-1] animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
