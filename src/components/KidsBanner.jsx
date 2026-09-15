import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function KidsBanner() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="kids" className="bg-cactus-sand py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="relative bg-white border border-stone-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Text Content (7 cols) with Fade In Up */}
          <div className="p-6 sm:p-12 lg:p-16 lg:col-span-7 z-10">
            
            {/* Badges */}
            <div 
              className={`inline-flex flex-wrap items-center gap-2 mb-3 sm:mb-4 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cactus-olive/10 text-cactus-olive text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase font-semibold">
                <Sparkles size={12} />
                <span>Línea Infantil de Autor</span>
              </div>
              <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-[10px] font-sans uppercase tracking-wider font-medium border border-stone-200">
                [Sección Cactus Kids en desarrollo]
              </span>
            </div>

            {/* Title */}
            <h2 
              className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-tight mb-3 sm:mb-4 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Conocé también <br />
              <span className="font-serif italic font-normal text-cactus-olive">CACTUS KIDS</span>
            </h2>

            {/* Description */}
            <p 
              className={`font-sans text-stone-600 text-xs sm:text-base font-light leading-relaxed mb-6 sm:mb-8 max-w-lg transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              La misma delicadeza, calidad de hilados y atención al detalle trasladadas a las prendas de los más pequeños. Conjuntos de algodón pima, tejidos artesanales y calzado premium.
            </p>

            {/* CTA Button */}
            <div 
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="https://wa.me/5493865633336?text=Hola%20Cactus%2C%20quisiera%20conocer%20el%20cat%C3%A1logo%20de%20CACTUS%20KIDS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 bg-cactus-olive hover:bg-cactus-olive-dark active:bg-cactus-olive-dark text-white text-xs tracking-[0.2em] sm:tracking-[0.22em] uppercase font-semibold px-8 py-3.5 sm:py-4 border border-cactus-olive transition-all duration-300 shadow-md touch-manipulation text-center"
              >
                <span>Conocé también CACTUS KIDS</span>
                <ArrowRight size={15} />
              </a>

              <span className="text-xs text-stone-500 font-sans tracking-wide text-center sm:text-left">
                Talles de 0 a 14 años · En Aguilares
              </span>
            </div>
          </div>

          {/* Right Image (5 cols) with subtle reveal */}
          <div 
            className={`lg:col-span-5 h-72 sm:h-96 lg:h-full min-h-[360px] relative overflow-hidden bg-stone-100 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1000&auto=format&fit=crop"
              alt="Cactus Kids Colección Infantil"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-950/10 pointer-events-none" />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-stone-200 text-[10px] tracking-widest uppercase font-semibold text-stone-800">
              Colección Niñas & Niños
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
