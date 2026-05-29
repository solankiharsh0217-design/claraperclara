"use client";

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top right floating orb */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.03] animate-float"
        style={{
          background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          animationDuration: "8s",
        }}
      />

      {/* Bottom left floating orb */}
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-[0.03] animate-float"
        style={{
          background: "radial-gradient(circle, var(--color-plum) 0%, transparent 70%)",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />

      {/* Mid-right small orb */}
      <div
        className="absolute top-1/2 -right-20 w-40 h-40 rounded-full opacity-[0.04] animate-float"
        style={{
          background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          animationDuration: "7s",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
