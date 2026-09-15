import React, { useState, useEffect } from 'react';
import { X, Search, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim() === '' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="w-full max-w-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-200 flex items-center gap-3">
          <Search size={22} className="text-cactus-olive flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por blazer, pantalón, abrigo, camisa..."
            className="w-full font-sans text-stone-900 placeholder-stone-400 text-sm sm:text-base outline-none bg-transparent"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 text-xs uppercase tracking-wider"
            >
              Borrar
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors ml-1 touch-manipulation"
          >
            <X size={22} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-stone-100">
          <p className="text-[11px] tracking-widest uppercase font-semibold text-stone-400 mb-3">
            {query ? `Resultados para "${query}" (${results.length})` : 'Prendas Destacadas'}
          </p>

          {results.length === 0 ? (
            <div className="py-12 text-center text-stone-500 text-sm">
              No encontramos prendas que coincidan con tu búsqueda. Podés consultarnos directamente por WhatsApp.
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 flex items-center justify-between gap-4 group cursor-pointer hover:bg-cactus-sand/50 px-2 transition-colors rounded-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-16 object-cover border border-stone-200"
                  />
                  <div>
                    <span className="text-[9px] tracking-widest uppercase text-cactus-olive font-semibold block">
                      {product.category}
                    </span>
                    <h5 className="font-sans font-medium text-stone-900 text-sm group-hover:text-cactus-olive transition-colors">
                      {product.name}
                    </h5>
                    <p className="text-xs font-bold text-stone-900">{product.priceFormatted}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="p-2 text-stone-400 group-hover:text-cactus-olive transition-colors"
                >
                  <MessageCircle size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-500">
          Presiona <kbd className="px-1.5 py-0.5 bg-white border border-stone-300 rounded text-[10px]">ESC</kbd> para salir
        </div>
      </div>
    </div>
  );
}
