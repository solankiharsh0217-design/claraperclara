"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-scroll ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-plum" : "text-white"
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-300 ${
                scrolled ? "text-gold" : "text-white/70"
              }`}
            >
              Hair & Beauty
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-gold transition-colors duration-300 cursor-pointer ${
                  scrolled ? "text-text-secondary" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneLink}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "bg-plum text-cream hover:bg-plum-light"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-lg border-t border-cream-dark">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-secondary hover:text-plum font-medium transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneLink}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-plum text-cream rounded-full font-medium hover:bg-plum-light transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Chiama Ora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
