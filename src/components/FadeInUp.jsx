import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 700, 
  className = '',
  threshold = 0.15 
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-[opacity,transform] duration-700 ease-out transform-gpu will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}
