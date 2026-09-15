import React from 'react';

export default function TopBar() {
  const MarqueeBlock = () => (
    <div className="flex items-center shrink-0 font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase font-semibold text-white/95">
      <span className="mx-5 sm:mx-8">AGUILARES - VÉLEZ SARSFIELD 948</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">3 CUOTAS SIN INTERÉS</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">10% OFF EN EFECTIVO</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">COLECCIÓN 2026</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">AGUILARES - VÉLEZ SARSFIELD 948</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">3 CUOTAS SIN INTERÉS</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">10% OFF EN EFECTIVO</span>
      <span className="opacity-40">|</span>
      <span className="mx-5 sm:mx-8">COLECCIÓN 2026</span>
      <span className="opacity-40">|</span>
    </div>
  );

  return (
    <aside 
      aria-label="Anuncios de la boutique" 
      className="flex overflow-hidden w-full bg-[#4A5D23] text-white py-2 select-none relative z-50 border-b border-[#38461A]/30"
    >
      {/* Contenedor Animado Hijo (w-max flex-nowrap shrink-0) */}
      <div className="flex w-max flex-nowrap shrink-0 animate-marquee hover:[animation-play-state:paused] cursor-default">
        {/* Bloque 1 */}
        <MarqueeBlock />
        {/* Bloque 2 (Duplicado idéntico para loop infinito gapless al 50%) */}
        <MarqueeBlock />
      </div>
    </aside>
  );
}
