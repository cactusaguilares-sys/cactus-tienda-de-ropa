import { useEffect, useRef, useState } from 'react';

/**
 * Hook optimizado para Scroll Reveal Mobile-First.
 * Dispara la animación cuando el elemento apenas asoma un 10% a 15% en el viewport,
 * garantizando que aparezca antes de llegar al centro de la pantalla sin espacios en blanco.
 * 
 * Configuración estricta Mobile-First:
 * - threshold: 0.15 (15% de visibilidad del elemento)
 * - rootMargin: '0px 0px -50px 0px' (offset de margen para mobile)
 * - once: true (desconecta el observer tras dispararse para máximo rendimiento)
 * 
 * @param {Object} options
 * @param {number} [options.threshold=0.15] - Porcentaje visible para activar (10% a 15%)
 * @param {string} [options.rootMargin='0px 0px -50px 0px'] - Margen del viewport
 * @param {boolean} [options.once=true] - Si solo se anima una vez
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal({ 
  threshold = 0.15, 
  rootMargin = '0px 0px -50px 0px',
  once = true 
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Si ya es visible, no hacer nada
    if (isVisible) return;

    // Fallback si no existe IntersectionObserver en el navegador
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // Verificación si el elemento ya está dentro de la ventana al cargar
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Dispara cuando el elemento cruza el threshold (10% - 15%) o interseca
      if (entry && (entry.isIntersecting || entry.intersectionRatio >= threshold)) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(element);
        }
      } else if (!once && entry && !entry.isIntersecting) {
        setIsVisible(false);
      }
    }, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, once, isVisible]);

  return [ref, isVisible];
}

