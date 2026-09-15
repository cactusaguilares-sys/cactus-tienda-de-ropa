import React, { useEffect } from 'react';
import { X, CreditCard, Banknote, Smartphone, Clock, MapPin, Navigation, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export default function InfoModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white shadow-2xl border border-stone-200 overflow-hidden transform animate-modal-in rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 pb-0 flex items-start justify-between">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-cactus-olive block mb-1">
              INFORMACIÓN BOUTIQUE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-stone-900 tracking-tight">
              {type === 'pagos' && 'Medios de Pago'}
              {type === 'horarios' && 'Nuestros Horarios'}
              {type === 'sucursales' && 'Visítanos'}
            </h3>
          </div>

          {/* Botón X de cierre minimalista y táctil (44x44px) */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full hover:bg-stone-100 active:bg-stone-200 text-stone-400 hover:text-stone-900 flex items-center justify-center transition-colors touch-manipulation -mr-2 -mt-2"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        {/* Separador sutil */}
        <div className="w-10 h-[1.5px] bg-cactus-olive mx-5 sm:mx-6 mt-3 mb-5" />

        {/* Modal Body Content */}
        <div className="px-5 sm:px-6 pb-6 text-stone-700 font-sans">
          
          {/* ========================================================
              MODAL 1: MEDIOS DE PAGO & CUOTAS
             ======================================================== */}
          {type === 'pagos' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed mb-4">
                Ofrecemos opciones de financiación transparentes y beneficios en efectivo para que adquieras tus prendas con total comodidad.
              </p>

              <div className="space-y-3">
                {/* 3 Cuotas sin Interés */}
                <div className="p-3.5 sm:p-4 rounded-sm bg-cactus-sand/60 border border-stone-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cactus-olive flex-shrink-0 mt-0.5 shadow-2xs">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-stone-900 text-sm">
                      3 Cuotas sin Interés con Visa y Mastercard
                    </h4>
                    <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
                      Válido con todas las tarjetas de crédito bancarias en todo el catálogo de la boutique.
                    </p>
                  </div>
                </div>

                {/* 10% OFF Efectivo */}
                <div className="p-3.5 sm:p-4 rounded-sm bg-cactus-sand/60 border border-stone-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#25D366] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Banknote size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-stone-900 text-sm">
                      10% OFF abonando en efectivo (al contado)
                    </h4>
                    <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
                      Descuento inmediato aplicado al abonar en caja en nuestro local comercial.
                    </p>
                  </div>
                </div>

                {/* Transferencia Bancaria */}
                <div className="p-3.5 sm:p-4 rounded-sm bg-cactus-sand/60 border border-stone-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cactus-olive flex-shrink-0 mt-0.5 shadow-2xs">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-stone-900 text-sm">
                      Transferencia Bancaria
                    </h4>
                    <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">
                      Consultanos por WhatsApp para recibir los datos de CBU y Alias y acreditar tu compra de inmediato.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón secundario para WhatsApp */}
              <div className="pt-2">
                <a
                  href="https://wa.me/5493865633336?text=Hola%20Cactus%2C%20quisiera%20consultar%20los%20datos%20de%20CBU%20para%20transferencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-medium text-cactus-olive hover:text-cactus-olive-dark bg-cactus-olive/5 hover:bg-cactus-olive/10 border border-cactus-olive/20 transition-colors touch-manipulation"
                >
                  <MessageCircle size={15} />
                  <span>Consultar datos de CBU / Alias por WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* ========================================================
              MODAL 2: HORARIOS DE ATENCIÓN
             ======================================================== */}
          {type === 'horarios' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed mb-4">
                Te esperamos en nuestra boutique de Aguilares en los siguientes horarios comerciales:
              </p>

              <div className="space-y-3">
                {/* Lunes a Viernes */}
                <div className="p-4 rounded-sm bg-cactus-sand/60 border border-stone-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={16} className="text-cactus-olive" />
                    <h4 className="font-sans font-semibold text-stone-900 text-sm">
                      Lunes a Viernes
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 font-light pl-6">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Mañana</span>
                      <span className="font-medium text-stone-900 text-sm">9:00 - 12:30 hs</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Tarde</span>
                      <span className="font-medium text-stone-900 text-sm">18:00 - 21:30 hs</span>
                    </div>
                  </div>
                </div>

                {/* Sábados */}
                <div className="p-4 rounded-sm bg-cactus-sand/60 border border-stone-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={16} className="text-cactus-olive" />
                    <h4 className="font-sans font-semibold text-stone-900 text-sm">
                      Sábados
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 font-light pl-6">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Mañana</span>
                      <span className="font-medium text-stone-900 text-sm">9:30 - 13:00 hs</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Tarde</span>
                      <span className="font-medium text-stone-900 text-sm">18:00 - 21:30 hs</span>
                    </div>
                  </div>
                </div>

                {/* Domingos y Feriados */}
                <div className="p-3.5 rounded-sm bg-stone-50 border border-stone-200 text-xs text-stone-500 font-light italic flex items-center gap-2">
                  <span>* Domingos y feriados cerrado para descanso de nuestro equipo.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5493865633336?text=Hola%20Cactus%2C%20quisiera%20coordinar%20una%20visita%20o%20asesoramiento%20personalizado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-medium text-cactus-olive hover:text-cactus-olive-dark bg-cactus-olive/5 hover:bg-cactus-olive/10 border border-cactus-olive/20 transition-colors touch-manipulation"
                >
                  <MessageCircle size={15} />
                  <span>Coordinar visita o cita personalizada por WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* ========================================================
              MODAL 3: DÓNDE ENCONTRARNOS / SUCURSALES
             ======================================================== */}
          {type === 'sucursales' && (
            <div className="space-y-4">
              
              {/* Boutique info */}
              <div className="p-4 rounded-sm bg-cactus-sand/70 border border-stone-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cactus-olive flex-shrink-0 mt-0.5 shadow-2xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-cactus-olive font-semibold block">
                      Local Exclusivo
                    </span>
                    <h4 className="font-serif text-lg font-medium text-stone-900 mt-0.5">
                      Cactus Boutique (Aguilares)
                    </h4>
                    <p className="text-sm font-medium text-stone-800 mt-1">
                      Vélez Sarsfield 948, Aguilares, Tucumán.
                    </p>
                    <p className="text-xs text-stone-500 font-light mt-0.5">
                      A pocas cuadras del centro comercial de Aguilares. Estacionamiento accesible en la zona.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta Visual de Mapa (Estilo Editorial con botón 'Cómo llegar') */}
              <div className="border border-stone-200 rounded-sm overflow-hidden bg-stone-100 relative">
                <div className="h-32 bg-stone-200 flex items-center justify-center relative overflow-hidden">
                  {/* Patrón estilizado de mapa */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4A5D23_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center gap-1.5 text-center px-4">
                    <div className="w-10 h-10 rounded-full bg-cactus-olive text-white flex items-center justify-center shadow-md animate-bounce">
                      <MapPin size={20} />
                    </div>
                    <span className="text-xs font-semibold text-stone-800">Vélez Sarsfield 948</span>
                    <span className="text-[10px] text-stone-500 font-light">Aguilares, Tucumán</span>
                  </div>
                </div>

                <div className="p-3 bg-white flex items-center justify-between border-t border-stone-200">
                  <div className="text-xs text-stone-600 font-light">
                    Abrir ubicación exacta en tu GPS
                  </div>
                  <a
                    href="https://maps.google.com/?q=Velez+Sarsfield+948+Aguilares+Tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cactus-olive text-white text-xs font-medium uppercase tracking-wider hover:bg-cactus-olive-dark transition-colors shadow-xs touch-manipulation"
                  >
                    <Navigation size={13} />
                    <span>Cómo llegar</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Contact Note */}
              <div className="text-xs text-stone-500 font-light flex items-center justify-between pt-1">
                <span>¿Dudas sobre cómo llegar?</span>
                <a
                  href="https://wa.me/5493865633336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cactus-olive font-medium hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle size={13} />
                  <span>3865 633336</span>
                </a>
              </div>

            </div>
          )}

          {/* ========================================================
              BOTÓN SÓLIDO INFERIOR PARA PANTALLAS TÁCTILES
             ======================================================== */}
          <div className="mt-6 pt-4 border-t border-stone-200/80">
            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[44px] py-3.5 px-4 bg-stone-950 hover:bg-cactus-olive active:bg-cactus-olive-dark text-white text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 shadow-sm touch-manipulation text-center"
            >
              {type === 'sucursales' ? 'CERRAR' : 'ENTENDIDO'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
