import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animación de entrada inicial suave
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    // Carrusel automático atmosférico cada 5 segundos (5000ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[580px] w-full overflow-hidden bg-stone-950">
      
      {/* 1. Capa Base: Las Imágenes con Crossfade suave (duration-1000 ease-in-out) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {HERO_IMAGES.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Cactus Boutique Colección Otoño/Invierno ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out will-change-transform ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* 2. Capa Intermedia: Overlay oscuro para legibilidad perfecta del texto blanco */}
      <div className="absolute inset-0 bg-black/45 bg-gradient-to-t from-stone-950/90 via-black/40 to-black/30 pointer-events-none z-0" />

      {/* 3. Capa Superior: Contenido fijo (relative z-10) */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-24 text-white">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-3 py-1 bg-cactus-sand/15 backdrop-blur-md border border-white/20 text-cactus-sand text-[11px] font-sans tracking-[0.25em] uppercase mb-4 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Sparkles size={12} className="text-cactus-gold" />
            <span>Temporada Exclusiva 2026</span>
          </div>

          {/* H1 Title */}
          <h1 
            className={`font-serif text-[30px] sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5 text-white transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <span className="block">Nueva Colección</span>
            <span className="block italic font-normal text-stone-100 mt-1 sm:mt-0">Otoño / Invierno</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`font-sans text-xs sm:text-base text-stone-200 font-light tracking-wide max-w-lg mb-6 sm:mb-8 leading-relaxed transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Siluetas depuradas, sastrería de autor y texturas envolventes pensadas para la mujer contemporánea.
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            <a
              href="#destacados"
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center text-center bg-stone-950 hover:bg-cactus-olive text-white px-8 py-3.5 sm:py-4 text-xs tracking-[0.25em] uppercase font-semibold border border-white/20 hover:border-cactus-olive transition-all duration-300 shadow-xl hover:shadow-cactus-olive/30 transform active:scale-[0.98] sm:hover:-translate-y-0.5 touch-manipulation"
            >
              DESCUBRIR
            </a>

            <a
              href="#kids"
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-3.5 sm:py-4 text-xs tracking-[0.2em] uppercase font-medium border border-white/30 transition-all duration-300 active:scale-[0.98] touch-manipulation"
            >
              Línea Cactus Kids
            </a>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <a 
          href="#beneficios" 
          aria-label="Desplazarse hacia abajo"
          className="hidden sm:flex absolute bottom-8 right-8 text-stone-300 hover:text-white transition-colors items-center gap-3 text-[11px] tracking-widest uppercase font-medium group"
        >
          <span>Explorar</span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
}
