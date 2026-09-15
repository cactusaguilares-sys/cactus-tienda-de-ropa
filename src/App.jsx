import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProductGrid from './components/ProductGrid';
import KidsBanner from './components/KidsBanner';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';
import DrawerMenu from './components/DrawerMenu';
import SearchModal from './components/SearchModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import InfoModal from './components/InfoModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [infoModalType, setInfoModalType] = useState(null); // 'pagos' | 'horarios' | 'sucursales' | null

  const handleOrderWhatsApp = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-cactus-olive selection:text-white font-sans">
      
      {/* 1. Top Bar de Anuncios */}
      <TopBar />

      {/* 2. Header Sticky */}
      <Header 
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartCount}
      />

      {/* 3. Hero Section (80vh) */}
      <main className="flex-1">
        <Hero />

        {/* 4. Trust Badges (Facilitadores de Compra) */}
        <TrustBadges />

        {/* 5. Sección 'Los más elegidos' */}
        <ProductGrid onOrderWhatsApp={handleOrderWhatsApp} />

        {/* 6. Banner de CACTUS KIDS */}
        <KidsBanner />
      </main>

      {/* 7. Footer con 3 Columnas y Datos de Aguilares */}
      <Footer />

      {/* 8. Modal Dinámico Demo de WhatsApp */}
      <WhatsAppModal 
        product={selectedProduct} 
        onClose={handleCloseModal} 
      />

      {/* 9. Menú Lateral Drawer */}
      <DrawerMenu 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onOpenInfoModal={(type) => setInfoModalType(type)}
      />

      {/* 10. Modales de Información Comercial (Pop-ups) */}
      <InfoModal 
        type={infoModalType} 
        onClose={() => setInfoModalType(null)} 
      />

      {/* 11. Modal de Búsqueda Rápida */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectProduct={handleOrderWhatsApp}
      />

      {/* 11. Botón Flotante Discreto de WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
}
