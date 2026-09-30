import React, { useState } from 'react';
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  orderCount: number;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ orderCount, onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#2D211C]/6 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          className="font-display font-extrabold text-xl sm:text-2xl text-[#2D211C] tracking-tight hover:opacity-90 transition-opacity"
        >
          Genzify Cafe
        </a>

        {/* Zone 2: 4-6 text links with subtle hover underlines */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A483E]">
          <a href="#home" className="hover:text-[#2D211C] transition-colors py-1">
            Home
          </a>
          <a href="#menu" className="hover:text-[#2D211C] transition-colors py-1">
            Menu
          </a>
          <a href="#about" className="hover:text-[#2D211C] transition-colors py-1">
            About
          </a>
          <a href="#vibe" className="hover:text-[#2D211C] transition-colors py-1">
            Experience
          </a>
          <a href="#gallery" className="hover:text-[#2D211C] transition-colors py-1">
            Gallery
          </a>
          <a href="#visit" className="hover:text-[#2D211C] transition-colors py-1">
            Visit Us
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {/* Quick Bag / Order button */}
          <button
            onClick={onOpenOrderModal}
            aria-label={`View order bag, ${orderCount} items`}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F2ECE4] hover:bg-[#E8DFCFA] text-[#2D211C] text-xs font-semibold transition-colors cursor-pointer border border-[#E4D7C8]"
          >
            <ShoppingBag className="w-4 h-4 text-[#8C5F48]" />
            <span className="hidden sm:inline">My Bag</span>
            {orderCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#2D211C] text-white text-[11px] flex items-center justify-center font-bold">
                {orderCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#visit"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2D211C] rounded-full hover:bg-[#45332B] transition-all whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Visit the Cafe</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#2D211C] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#2D211C]/10 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#3A2D27]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              Menu Highlights
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              About the Cafe
            </a>
            <a
              href="#vibe"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              The Experience
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              Aesthetic Gallery
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#F2ECE4] transition-colors"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-3 border-t border-[#2D211C]/8 flex flex-col gap-2.5">
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-[#2D211C] rounded-xl hover:bg-[#45332B] transition-colors shadow-sm"
            >
              Visit the Cafe
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-[#2D211C] bg-[#F2ECE4] rounded-xl hover:bg-[#E8DFCFA] transition-colors"
            >
              View Order Bag ({orderCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
