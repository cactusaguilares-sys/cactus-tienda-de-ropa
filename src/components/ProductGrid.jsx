import React, { useState } from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ProductCard({ product, index, onOrderWhatsApp, isFavorite, onToggleFavorite }) {
  // Trigger cuando el elemento asoma 10%-15% en viewport, optimizado para celulares
  const [cardRef, isVisible] = useScrollReveal({ 
    threshold: 0.15, 
    rootMargin: '0px 0px -50px 0px' 
  });

  // Stagger en móvil (2 columnas) y desktop (4 columnas)
  // Móvil: Columna izquierda 0ms, Columna derecha 100ms (0.1s de diferencia secuencial)
  // Desktop: 0ms, 100ms, 200ms, 300ms secuenciales
  const isRightColMobile = index % 2 === 1;
  const desktopCol = index % 4;

  const mobileDelayClass = isRightColMobile ? 'delay-100' : 'delay-0';
  const desktopDelayClass = 
    desktopCol === 0 ? 'md:delay-0' :
    desktopCol === 1 ? 'md:delay-100' :
    desktopCol === 2 ? 'md:delay-200' :
    'md:delay-300';

  return (
    <div 
      ref={cardRef}
      onClick={() => onOrderWhatsApp(product)}
      className={`group flex flex-col cursor-pointer bg-white transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] ${mobileDelayClass} ${desktopDelayClass} motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Contenedor de Imagen con Aspect Ratio fijo [3/4] para moda y bg-gray-100 */}
      <div className="w-full aspect-[3/4] relative overflow-hidden bg-gray-100 border border-stone-200/70 mb-3 sm:mb-4">
        
        {/* Product Badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20">
          <span className="bg-white/95 backdrop-blur-sm text-stone-900 text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 border border-stone-200 shadow-sm">
            {product.tag}
          </span>
        </div>

        {/* Wishlist Button (Touch target táctil) */}
        <button
          onClick={(e) => onToggleFavorite(product.id, e)}
          aria-label="Guardar en favoritos"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-700 hover:text-red-500 hover:bg-white transition-all shadow-sm touch-manipulation"
        >
          <Heart 
            size={15} 
            className={isFavorite ? "fill-red-500 text-red-500" : "stroke-current"} 
          />
        </button>

        {/* Imagen con w-full h-full object-cover object-center */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Soft overlay on hover (desktop) */}
        <div className="hidden sm:block absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Botón hover 'PEDIR POR WHATSAPP' en verde para Desktop */}
        <div className="hidden sm:block absolute inset-x-3 bottom-3 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOrderWhatsApp(product);
            }}
            className="w-full min-h-[44px] py-3 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs tracking-[0.18em] uppercase font-semibold flex items-center justify-center gap-2 shadow-xl transition-all duration-300 border border-white/30"
          >
            <MessageCircle size={17} fill="white" />
            <span>Pedir por WhatsApp</span>
          </button>
        </div>

      </div>

      {/* Product Info (Alineación perfecta uniforme en toda la fila) */}
      <div className="flex flex-col flex-1 text-left">
        <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-stone-400 mb-0.5 sm:mb-1">
          {product.category}
        </span>
        
        <h3 className="font-sans text-xs sm:text-[15px] font-medium text-stone-900 group-hover:text-cactus-olive transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Price & Installments */}
        <div className="pt-0.5">
          <div className="text-sm sm:text-lg font-bold text-stone-900 tracking-tight">
            {product.priceFormatted}
          </div>
          <div className="text-[10px] sm:text-xs text-stone-500 font-light mt-0.5 leading-snug">
            {product.installments}
          </div>
        </div>

        {/* Mobile: Full-width touch button en verde (min 44px) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOrderWhatsApp(product);
          }}
          className="sm:hidden w-full min-h-[44px] mt-2.5 py-2.5 px-2 bg-[#25D366] active:bg-[#20ba5a] text-white text-[11px] tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5 shadow-sm rounded-none border border-green-700/20 transition-colors touch-manipulation"
        >
          <MessageCircle size={15} fill="white" />
          <span>Pedir WhatsApp</span>
        </button>

        {/* Available sizes (desktop) */}
        <div className="hidden sm:flex items-center gap-1.5 mt-3 pt-2 border-t border-stone-100 text-[11px] text-stone-400">
          <span>Talles:</span>
          <span className="font-medium text-stone-600">
            {product.sizes.join(' · ')}
          </span>
        </div>
      </div>

    </div>
  );
}

export default function ProductGrid({ onOrderWhatsApp }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [favorites, setFavorites] = useState({});

  // Scroll reveal hook para el encabezado con threshold mobile-first (0.15 y -50px)
  const [headerRef, isHeaderVisible] = useScrollReveal({ threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  const categories = ['Todos', 'Blazers', 'Vestidos', 'Abrigos', 'Pantalones', 'Blusas', 'Accesorios'];

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="destacados" className="py-14 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header Section with Fade In Up (animando únicamente opacity y transform translate-y) */}
      <div 
        ref={headerRef} 
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
      >
        <span 
          className={`text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-cactus-olive mb-2 sm:mb-3 inline-block transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-0 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Colección Otoño / Invierno 2026
        </span>

        <h2 
          className={`font-serif text-2xl sm:text-4xl md:text-5xl font-light text-stone-900 tracking-tight mb-3 sm:mb-4 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-100 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Los más elegidos
        </h2>

        <div 
          className={`w-10 sm:w-12 h-[1.5px] bg-cactus-olive mx-auto mb-4 sm:mb-6 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-150 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        />

        <p 
          className={`font-sans text-stone-600 text-xs sm:text-base font-light max-w-xl mx-auto leading-relaxed px-2 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-200 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Piezas atemporales confeccionadas con hilados nobles y sastrería de autor. Diseñadas para vestir con distinción y confort.
        </p>

        {/* Category Filters */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mt-6 sm:mt-8 transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] delay-300 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-[44px] px-3.5 sm:px-5 py-2 text-[11px] sm:text-xs tracking-wider sm:tracking-widest uppercase transition-all duration-200 border flex items-center justify-center touch-manipulation ${
                activeCategory === category
                  ? 'bg-cactus-olive text-white border-cactus-olive shadow-sm font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Responsiva: 2 columnas en móvil (gap-x-4 gap-y-8) y 4 columnas en desktop (md:grid-cols-4 md:gap-x-6 md:gap-y-12) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onOrderWhatsApp={onOrderWhatsApp}
            isFavorite={!!favorites[product.id]}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 sm:mt-20 text-center">
        <a
          href="#kids"
          className="inline-flex min-h-[44px] items-center justify-center text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-stone-900 hover:text-cactus-olive border-b-2 border-stone-900 hover:border-cactus-olive pb-1 transition-all touch-manipulation"
        >
          Conocer más novedades en boutique &rarr;
        </a>
      </div>

    </section>
  );
}
