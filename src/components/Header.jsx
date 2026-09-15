import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Header({ onOpenDrawer, onOpenSearch, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Hamburger menu & Desktop Links */}
        <div className="flex items-center space-x-2 sm:space-x-6 w-1/3">
          <button
            onClick={onOpenDrawer}
            aria-label="Abrir menú"
            className="w-11 h-11 min-w-[44px] min-h-[44px] -ml-2 text-stone-800 hover:text-cactus-olive transition-colors group flex items-center justify-center gap-2 touch-manipulation"
          >
            <Menu size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline-block text-xs uppercase tracking-widest font-medium text-stone-600 group-hover:text-cactus-olive">
              Menú
            </span>
          </button>

          <nav className="hidden xl:flex items-center space-x-6 text-[13px] tracking-widest uppercase font-medium text-stone-600">
            <a href="#coleccion" className="hover:text-cactus-olive transition-colors py-2">Colección</a>
            <a href="#destacados" className="hover:text-cactus-olive transition-colors py-2">Destacados</a>
            <a href="#kids" className="text-cactus-olive font-semibold hover:opacity-80 transition-opacity py-2">Cactus Kids</a>
          </nav>
        </div>

        {/* Center: Logo CACTUS Boutique */}
        <div className="flex flex-col items-center justify-center w-1/3 text-center">
          <a href="#" className="group flex flex-col items-center py-2">
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.16em] sm:tracking-[0.18em] font-semibold text-stone-900 group-hover:text-cactus-olive transition-colors">
              CACTUS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-sans font-medium text-stone-500 group-hover:text-cactus-olive-light transition-colors -mt-0.5">
              Boutique
            </span>
          </a>
        </div>

        {/* Right: Search & Cart icons */}
        <div className="flex items-center justify-end space-x-1 sm:space-x-3 w-1/3">
          <button
            onClick={onOpenSearch}
            aria-label="Buscar productos"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-800 hover:text-cactus-olive transition-colors group touch-manipulation"
          >
            <Search size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
          </button>

          <a
            href="#destacados"
            aria-label="Bolsa de compras"
            className="w-11 h-11 min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center text-stone-800 hover:text-cactus-olive transition-colors relative group touch-manipulation"
          >
            <ShoppingBag size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span className="absolute top-1.5 right-1.5 bg-cactus-olive text-white text-[10px] font-semibold h-4 w-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              {cartCount > 0 ? cartCount : '0'}
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}
