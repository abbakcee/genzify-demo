import React from 'react';
import { ArrowDown, MapPin, Clock, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/cafeData';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle organic warm background glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#F4EBE1] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-48 left-1/10 -z-10 w-80 h-80 bg-[#EBF0EC] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top subtle live indicator */}
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#607261]">
            <span className="w-2 h-2 rounded-full bg-[#607261] animate-pulse" />
            Open Today
          </span>
          <span className="text-[#A8988B] text-xs">·</span>
          <span className="text-xs text-[#705D52] font-medium">7:30 AM – 9:00 PM</span>
          <span className="text-[#A8988B] text-xs hidden sm:inline">·</span>
          <span className="text-xs text-[#705D52] font-medium hidden sm:inline">Midtown Arts District</span>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D211C] leading-[1.1] tracking-tight [text-wrap:balance]">
              Fresh bites. <br className="hidden sm:inline" />
              <span className="text-[#8C5F48]">Great coffee.</span> <br />
              Better vibes.
            </h1>

            <p className="text-base sm:text-lg text-[#5A483E] leading-relaxed max-w-xl font-normal [text-wrap:pretty]">
              Genzify Cafe is a fresh, aesthetic space crafted for iced specialty brews, slow artisan brunches, casual study sessions, and memorable moments with friends.
            </p>

            {/* Zero-Pill Unboxed Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#705D52] font-medium pt-1">
              <span>Fresh Specialty Coffee</span>
              <span className="text-[#C4B5A8]" aria-hidden="true">·</span>
              <span>Artisan Brunch</span>
              <span className="text-[#C4B5A8]" aria-hidden="true">·</span>
              <span>Cozy Atmosphere</span>
              <span className="text-[#C4B5A8]" aria-hidden="true">·</span>
              <span>High-Speed WiFi</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#menu"
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-full bg-[#2D211C] text-white text-sm font-semibold hover:bg-[#45332B] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Explore Menu
              </a>

              <a
                href="#visit"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#2D211C] text-sm font-semibold hover:bg-[#F2ECE4] border border-[#E0D3C5] transition-all hover:-translate-y-0.5 active:translate-y-0 text-center shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#8C5F48]" />
                <span>Visit the Cafe</span>
              </a>
            </div>

            {/* Quick Micro Proof Point */}
            <div className="pt-3 border-t border-[#2D211C]/8 flex items-center gap-4 text-xs text-[#705D52]">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#D4BAA7] border-2 border-[#FAF7F2] flex items-center justify-center text-[10px] font-bold text-[#2D211C]">☕️</div>
                <div className="w-7 h-7 rounded-full bg-[#CCD8CE] border-2 border-[#FAF7F2] flex items-center justify-center text-[10px] font-bold text-[#2D211C]">🥑</div>
                <div className="w-7 h-7 rounded-full bg-[#EAD4C7] border-2 border-[#FAF7F2] flex items-center justify-center text-[10px] font-bold text-[#2D211C]">✨</div>
              </div>
              <p className="font-medium">
                Crafted for coffee lovers, remote workers & social weekends.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual Focal Point */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#2D211C]/8 shadow-xl bg-[#EFE9DF] group">
              
              {/* Main Image with fallback */}
              <img
                src={HERO_IMAGE}
                alt="Genzify Cafe aesthetic table setup with iced oat latte, strawberry matcha, and fresh pastry"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-103"
                loading="eager"
              />

              {/* Subtle aesthetic overlay card at corner */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/92 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 shadow-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C5F48]">
                    Daily Special
                  </span>
                  <span className="text-xs font-semibold text-[#2D211C]">$6.75</span>
                </div>
                <p className="text-xs font-semibold text-[#2D211C]">
                  Strawberry Matcha Cloud & Oat Latte
                </p>
                <p className="text-[11px] text-[#705D52]">
                  Fresh strawberry compote, ceremonial matcha & microfoam
                </p>
              </div>

              {/* Top corner social tag */}
              <div className="absolute top-4 right-4 bg-[#2D211C]/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#E6A07E]" />
                <span>#GenzifyCafe</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
