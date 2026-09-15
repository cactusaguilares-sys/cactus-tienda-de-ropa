import React, { useEffect } from 'react';
import { X, ChevronRight, MapPin, Clock, CreditCard } from 'lucide-react';

const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.15c-.24.68-1.21 1.29-1.68 1.34-.46.06-1.04.09-3.32-.85-2.73-1.13-4.48-3.92-4.62-4.1-.14-.19-1.12-1.49-1.12-2.85 0-1.36.71-2.03.96-2.31.25-.28.55-.35.73-.35.18 0 .37.002.53.01.17.01.4-.06.63.48.24.55.82 1.99.89 2.14.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.32.39-.46.52-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.6.35.08.13.08.73-.16 1.41z"/>
  </svg>
);

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

export default function DrawerMenu({ isOpen, onClose, onOpenInfoModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavigate = (e, targetId) => {
    if (e) e.preventDefault();
    onClose();

    // Scroll suave con offset para no quedar oculto bajo el header sticky
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const handleOpenModal = (modalType) => {
    // 1. Cierra suavemente el drawer primero
    onClose();

    // 2. Abre el modal correspondiente tras iniciar el cierre
    setTimeout(() => {
      if (onOpenInfoModal) {
        onOpenInfoModal(modalType);
      }
    }, 200);
  };

  const collectionLinks = [
    { label: 'Nueva Colección Otoño / Invierno', targetId: 'destacados' },
    { label: 'Blazers & Sastrería', targetId: 'destacados' },
    { label: 'Pantalones & Denim', targetId: 'destacados' },
    { label: 'Blusas & Camisería', targetId: 'destacados' },
  ];

  const storeInfoLinks = [
    {
      title: 'Medios de Pago & Cuotas',
      subtitle: '3 cuotas sin interés, 10% OFF contado',
      modalType: 'pagos',
      icon: CreditCard,
    },
    {
      title: 'Horarios de Atención',
      subtitle: 'Lunes a Sábados',
      modalType: 'horarios',
      icon: Clock,
    },
    {
      title: 'Dónde Encontrarnos / Sucursales',
      subtitle: 'Vélez Sarsfield 948, Aguilares',
      modalType: 'sucursales',
      icon: MapPin,
    },
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 flex ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen ? '' : undefined}
    >
      {/* Fondo con desvanecimiento (Backdrop fade) */}
      <div 
        onClick={onClose}
        aria-label="Cerrar menú"
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out cursor-pointer ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer panel: Efecto de deslizamiento (Slide-in / Slide-out) */}
      <div 
        className={`relative w-full sm:max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-white sticky top-0 z-20">
          <div>
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] font-semibold text-stone-900">CACTUS</span>
            <span className="block text-[10px] tracking-[0.4em] uppercase text-stone-400 font-sans mt-0.5">Boutique</span>
          </div>

          {/* Botón de Cerrar (X) táctil y accesible */}
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-stone-100 hover:bg-stone-200 active:bg-stone-300 text-stone-800 flex items-center justify-center transition-colors touch-manipulation shadow-sm cursor-pointer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content Area */}
        <div className="py-6 px-5 sm:px-8 flex-1">
          
          {/* Bloque 1: Catálogo y Colecciones */}
          <div className="mb-6">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold text-cactus-olive block mb-3">
              COLECCIÓN
            </span>
            
            <ul className="space-y-1">
              {collectionLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.targetId}`}
                    onClick={(e) => handleNavigate(e, link.targetId)}
                    className="min-h-[44px] flex items-center justify-between py-2.5 text-sm sm:text-base font-sans tracking-wide text-stone-800 hover:text-cactus-olive active:text-cactus-olive transition-colors border-b border-stone-100/80 touch-manipulation group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                    <ChevronRight size={16} className="text-stone-300 group-hover:text-cactus-olive transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Destacado Especial (Cactus Kids) */}
            <a
              href="#kids"
              onClick={(e) => handleNavigate(e, 'kids')}
              className="mt-4 p-4 rounded-sm bg-[#F9F6F0] border border-[#EFEAE1] hover:border-cactus-olive/40 hover:bg-[#f4efe5] transition-all cursor-pointer block group shadow-xs touch-manipulation"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 bg-cactus-olive text-white text-[9px] uppercase tracking-widest font-semibold rounded-none">
                  Línea Niños
                </span>
                <ChevronRight size={16} className="text-cactus-olive group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-serif text-base font-medium text-[#4A5D23] group-hover:text-cactus-olive-dark transition-colors flex items-center gap-1.5">
                <span>Catálogo Cactus Kids 🌵</span>
              </div>
              <p className="text-xs text-stone-600 font-light mt-1 leading-snug">
                Prendas nobles, tejidos artesanales y calzado premium para los más pequeños.
              </p>
            </a>
          </div>

          {/* Divisor sutil */}
          <div className="border-t border-gray-100 my-5" />

          {/* Bloque 2: Información del Local */}
          <div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold text-cactus-olive block mb-3">
              INFORMACIÓN & LOCAL
            </span>

            <ul className="space-y-1.5">
              {storeInfoLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(item.modalType)}
                      className="w-full min-h-[48px] flex items-center justify-between p-2.5 rounded-sm hover:bg-stone-50 active:bg-stone-100 border border-transparent hover:border-stone-200 transition-all touch-manipulation group text-left cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-cactus-sand border border-stone-200 flex items-center justify-center text-cactus-olive flex-shrink-0 mt-0.5 group-hover:bg-cactus-olive group-hover:text-white transition-colors">
                          <IconComponent size={16} />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-stone-900 group-hover:text-cactus-olive transition-colors leading-snug">
                            {item.title}
                          </div>
                          <div className="text-xs text-stone-500 font-light mt-0.5 leading-snug">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <ChevronRight size={17} className="text-stone-400 group-hover:text-cactus-olive group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* 3. Pie del Menú (Footer del Drawer - Fijo abajo con mt-auto) */}
        <div className="mt-auto p-5 sm:p-6 border-t border-stone-200 bg-stone-50/90 space-y-3.5">
          
          {/* Botón directo: Atención por WhatsApp */}
          <a
            href="https://wa.me/5493865633336?text=Hola%20Cactus%2C%20quisiera%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 touch-manipulation"
          >
            <WhatsAppIcon size={18} className="text-white" />
            <span>Atención por WhatsApp</span>
          </a>

          {/* Redes Sociales: Instagram (@cactusboutiqueaccesorios) y Facebook */}
          <div className="flex items-center justify-between pt-1">
            <a
              href="https://instagram.com/cactusboutiqueaccesorios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @cactusboutiqueaccesorios"
              className="inline-flex items-center gap-2 min-h-[44px] px-2 py-1 text-stone-600 hover:text-cactus-olive transition-colors touch-manipulation group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 group-hover:text-white group-hover:bg-cactus-olive group-hover:border-cactus-olive transition-all shadow-2xs">
                <InstagramIcon size={15} />
              </div>
              <span className="text-[11px] font-medium tracking-wide">@cactusboutiqueaccesorios</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Cactus Boutique"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-white hover:bg-cactus-olive hover:border-cactus-olive transition-all shadow-2xs touch-manipulation"
            >
              <FacebookIcon size={16} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
