import React, { useEffect } from 'react';
import { X, MessageCircle, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function WhatsAppModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const prefilledMessage = `Hola Cactus, quiero comprar el artículo ${product.name} por ${product.priceFormatted}`;
  const whatsappUrl = `https://wa.me/5493865633336?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white shadow-2xl border border-stone-200 overflow-hidden transform transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-cactus-olive text-white px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-[0.15em] font-medium">CACTUS</span>
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-80">Boutique Demo</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-11 h-11 min-w-[44px] min-h-[44px] text-white/90 hover:text-white rounded-full hover:bg-white/10 flex items-center justify-center transition-colors touch-manipulation"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Selected Product Summary */}
          <div className="flex items-center gap-4 p-3.5 bg-cactus-sand/70 border border-stone-200/80 mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 object-cover object-center border border-stone-300 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] tracking-widest uppercase text-cactus-olive font-semibold block">
                {product.category}
              </span>
              <h4 className="font-sans font-medium text-stone-900 text-sm truncate">
                {product.name}
              </h4>
              <p className="text-base font-bold text-stone-900 mt-0.5">
                {product.priceFormatted}
              </p>
              <p className="text-[11px] text-stone-500 font-light">
                {product.installments}
              </p>
            </div>
          </div>

          {/* User Requested Key Demo Note */}
          <div className="bg-stone-50 border-l-4 border-cactus-olive p-4 sm:p-5 rounded-r-sm mb-6 text-left">
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="text-cactus-olive flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider font-sans">
                  Integración Directa con WhatsApp
                </p>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-sans">
                  En la versión final, este botón redirigirá a tu cliente directamente a tu WhatsApp con el mensaje:
                </p>
                <div className="bg-white p-3 border border-stone-200 text-stone-900 text-xs sm:text-sm font-mono rounded select-all shadow-inner">
                  "{prefilledMessage}"
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white font-sans text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 transition-all transform active:scale-[0.98] touch-manipulation text-center"
            >
              <MessageCircle size={18} fill="white" className="flex-shrink-0" />
              <span>Probar enlace WhatsApp</span>
              <ExternalLink size={14} className="opacity-80 flex-shrink-0" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[48px] py-3 px-4 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-700 font-sans text-xs tracking-widest uppercase font-medium border border-stone-300 transition-colors touch-manipulation text-center"
            >
              Seguir explorando boutique
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-center gap-2 text-[11px] text-stone-500">
            <ShieldCheck size={14} className="text-cactus-olive" />
            <span>Retiro coordinado en Vélez Sarsfield 948, Aguilares</span>
          </div>

        </div>

      </div>
    </div>
  );
}
