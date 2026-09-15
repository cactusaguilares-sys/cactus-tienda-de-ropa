import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const [newsRef, isNewsVisible] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  const [colsRef, isColsVisible] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  return (
    <footer id="footer" className="bg-cactus-charcoal text-stone-300 font-sans border-t border-stone-800 overflow-hidden">
      
      {/* Upper Newsletter / Highlights Banner with Scroll Reveal */}
      <div className="border-b border-stone-800 py-10 px-4 sm:px-6 lg:px-8">
        <div 
          ref={newsRef}
          className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-0 ${
            isNewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-cactus-sand/70 font-semibold block mb-1">
              Comunidad Exclusiva
            </span>
            <p className="font-serif text-xl sm:text-2xl text-white font-light">
              Recibí primero los ingresos de temporada y promociones bancarias
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5493865633336?text=Hola%20Cactus%2C%20quiero%20suscribirme%20a%20su%20lista%20VIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-cactus-olive hover:bg-cactus-olive-light text-white px-6 py-3.5 text-xs tracking-widest uppercase font-semibold transition-colors touch-manipulation"
            >
              <MessageCircle size={16} />
              <span>Suscribirme por WhatsApp</span>
            </a>
            
            <a
              href="#kids"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-6 py-3.5 text-xs tracking-widest uppercase font-medium border border-stone-700 transition-colors touch-manipulation"
            >
              <span>Conocé también CACTUS KIDS</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main 3 Columns Footer with Staggered Scroll Reveal */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div 
          ref={colsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          
          {/* Columna 1: Logo CACTUS y redes sociales */}
          <div 
            className={`space-y-6 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-0 ${
              isColsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div>
              <h3 className="font-serif text-3xl tracking-[0.18em] font-semibold text-white">
                CACTUS
              </h3>
              <p className="text-[10px] tracking-[0.45em] uppercase text-stone-400 font-sans mt-0.5">
                Boutique
              </p>
            </div>

            <p className="text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Espacio de moda femenina contemporánea de alta costura, calzado y accesorios seleccionados con dedicación en Aguilares, Tucumán.
            </p>

            <div>
              <span className="text-[10px] tracking-widest uppercase text-stone-400 font-semibold block mb-3">
                Seguinos en nuestras redes
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Cactus Boutique"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-cactus-olive hover:bg-cactus-olive transition-all touch-manipulation"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Cactus Boutique"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-cactus-olive hover:bg-cactus-olive transition-all touch-manipulation"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://wa.me/5493865633336"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp directo"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#25D366] hover:bg-[#25D366] transition-all touch-manipulation"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: "Visítanos" -> Dirección y WhatsApp */}
          <div 
            id="sucursales"
            className={`space-y-6 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-150 ${
              isColsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h4 className="font-serif text-lg text-white font-medium tracking-wide border-b border-stone-800 pb-3">
              Visítanos
            </h4>

            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cactus-olive flex-shrink-0 mt-1" />
                <div>
                  <span className="text-white font-normal block">Dirección</span>
                  <span className="text-stone-300">Vélez Sarsfield 948</span>
                  <span className="block text-stone-400 text-xs">Aguilares, Tucumán</span>
                  <a
                    href="https://maps.google.com/?q=Velez+Sarsfield+948+Aguilares+Tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cactus-olive hover:underline mt-1 font-medium"
                  >
                    <span>Ver en Google Maps</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3 pt-2">
                <Phone size={18} className="text-[#25D366] flex-shrink-0 mt-1" />
                <div>
                  <span className="text-white font-normal block">WhatsApp Directo</span>
                  <a
                    href="https://wa.me/5493865633336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-200 hover:text-[#25D366] font-medium transition-colors"
                  >
                    3865 633336
                  </a>
                  <span className="block text-stone-400 text-xs mt-0.5">Asesoramiento personalizado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div 
            id="horarios"
            className={`space-y-6 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-300 ${
              isColsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h4 className="font-serif text-lg text-white font-medium tracking-wide border-b border-stone-800 pb-3">
              Horarios de Atención
            </h4>

            <div className="space-y-4 text-sm font-light">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-cactus-olive flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <div>
                    <span className="text-white font-medium block">Lunes a Viernes</span>
                    <span className="text-stone-300 block text-xs sm:text-sm">Mañanas: 9:00 a 12:30 hs</span>
                    <span className="text-stone-300 block text-xs sm:text-sm">Tardes: 18:00 a 21:30 hs</span>
                  </div>

                  <div>
                    <span className="text-white font-medium block">Sábados</span>
                    <span className="text-stone-300 block text-xs sm:text-sm">Mañanas: 9:30 a 13:00 hs</span>
                    <span className="text-stone-300 block text-xs sm:text-sm">Tardes: 18:00 a 21:30 hs</span>
                  </div>

                  <p className="text-[11px] text-stone-400 italic">
                    * Domingos y feriados cerrado para descanso del equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-footer bottom bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-stone-500 font-light">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CACTUS Boutique. Todos los derechos reservados. Aguilares, Tucumán.</p>
          <div className="flex items-center space-x-6">
            <a href="#kids" className="text-cactus-sand hover:text-white font-medium transition-colors">
              Conocé también CACTUS KIDS
            </a>
            <span>•</span>
            <span className="text-stone-400">Diseño Editorial Inspiración Equus</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
