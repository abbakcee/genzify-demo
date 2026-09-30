import React, { useState } from 'react';
import { ConceptBanner } from './components/ConceptBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuHighlights } from './components/MenuHighlights';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { VisitUsSection } from './components/VisitUsSection';
import { CTASection } from './components/CTASection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { OrderPreviewModal } from './components/OrderPreviewModal';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem } from './types/cafe';

export default function App() {
  const [screenshotMode, setScreenshotMode] = useState(false);
  const [orderBag, setOrderBag] = useState<MenuItem[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setOrderBag(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (id: string) => {
    setOrderBag(prev => {
      const idx = prev.findIndex(item => item.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      updated.splice(idx, 1);
      return updated;
    });
  };

  const handleClearCart = () => {
    setOrderBag([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420] flex flex-col font-sans selection:bg-[#E8DCCF]">
      {/* K-9 Demo Presentation Bar (can be hidden for Instagram screenshots) */}
      <ConceptBanner
        screenshotMode={screenshotMode}
        setScreenshotMode={setScreenshotMode}
      />

      {/* Main 3-Zone Sticky Navbar */}
      <Navbar
        orderCount={orderBag.length}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Menu Highlights */}
        <MenuHighlights
          onAddToCart={handleAddToCart}
          cartItems={orderBag}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Signature Experience ("Why people would love Genzify") */}
        <ExperienceSection />

        {/* 5. Gallery Section */}
        <GallerySection />

        {/* 6. Instagram Social Feed Section */}
        <SocialSection />

        {/* 7. Location & Visit Us Section */}
        <VisitUsSection
          onOpenReserveModal={() => setIsReserveModalOpen(true)}
        />

        {/* 8. Call To Action & Action Grid */}
        <CTASection
          onOpenReserveModal={() => setIsReserveModalOpen(true)}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <OrderPreviewModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        items={orderBag}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />
    </div>
  );
}
