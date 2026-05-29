"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 1800);
    const timer2 = setTimeout(() => setLoading(false), 2400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-plum flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Decorative line top */}
        <div className="w-12 h-px bg-gold mx-auto mb-8 animate-fade-in" />

        {/* Brand name */}
        <h1 className="font-serif text-5xl md:text-6xl text-cream font-semibold tracking-wide animate-fade-in-up">
          ClaraPerClara
        </h1>

        {/* Subtitle */}
        <p className="text-gold text-xs tracking-[0.5em] uppercase mt-4 animate-fade-in-up delay-200">
          Hair & Beauty
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 justify-center mt-10">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
