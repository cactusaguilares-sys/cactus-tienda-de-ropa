import React from 'react';
import { CreditCard, Store, Tag } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TrustBadges() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  const badges = [
    {
      icon: CreditCard,
      title: '3 Cuotas sin interés',
      subtitle: 'Con todas las tarjetas bancarias y planes vigentes.',
      badge: 'FINANCIACIÓN'
    },
    {
      icon: Store,
      title: 'Retiro en Local',
      subtitle: 'Sin cargo en Vélez Sarsfield 948, Aguilares.',
      badge: 'INMEDIATO'
    },
    {
      icon: Tag,
      title: '10% OFF al contado',
      subtitle: 'Abonando en efectivo o transferencia bancaria.',
      badge: 'AHORRO'
    }
  ];

  return (
    <section id="beneficios" className="bg-cactus-sand/80 border-y border-stone-200/80 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {badges.map((item, index) => {
            const IconComponent = item.icon;
            const delayClass = index === 0 ? 'delay-0' : index === 1 ? 'delay-100' : 'delay-200';
            return (
              <div 
                key={index}
                className={`flex items-start space-x-4 sm:space-x-5 group p-3.5 sm:p-4 rounded-sm transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${delayClass} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } hover:bg-white/70`}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white border border-stone-200 flex items-center justify-center text-cactus-olive shadow-sm group-hover:scale-105 group-hover:bg-cactus-olive group-hover:text-white transition-all duration-300">
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cactus-olive">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-stone-900 text-base sm:text-lg tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
