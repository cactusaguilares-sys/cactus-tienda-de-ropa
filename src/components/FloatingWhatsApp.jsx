import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5493865633336?text=Hola%20Cactus%20Boutique%2C%20quisiera%20hacerles%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 min-w-[50px] min-h-[50px] bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 sm:hover:scale-105 flex items-center justify-center group touch-manipulation"
    >
      <MessageCircle size={26} fill="white" className="drop-shadow-sm" />
      <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-semibold tracking-wider uppercase pl-0 group-hover:pl-2">
        Chatear con una asesora
      </span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cactus-olive rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
