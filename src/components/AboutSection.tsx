import React from 'react';
import { INTERIOR_IMAGE } from '../data/cafeData';
import { Sparkles, Sun, Wifi, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5F0E8] border-y border-[#2D211C]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo of the Interior Space */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#2D211C]/8 bg-[#ECE4D6] group">
              <img
                src={INTERIOR_IMAGE}
                alt="Cozy sunlit booths and minimalist interior at Genzify Cafe"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#E6A07E]">
                  Space & Atmosphere
                </p>
                <p className="text-sm font-medium text-white/90">
                  Sunlit corners, textured walls & ambient calm
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
                About the Concept
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
                A café made for good moments.
              </h2>
            </div>

            <p className="text-base text-[#5A483E] leading-relaxed [text-wrap:pretty]">
              Genzify Cafe is conceived as a fresh neighborhood sanctuary—a welcoming space where specialty coffee culture meets a relaxed, youthful lifestyle. Whether you are catching up over iced matcha, fueling up on artisan sourdough brunch, or settling into a quiet booth for an afternoon work sprint, every detail is tuned for comfort and connection.
            </p>

            <p className="text-base text-[#5A483E] leading-relaxed [text-wrap:pretty]">
              We believe a modern café should be as aesthetically inspiring as it is warm and unpretentious. From natural morning light to wholesome ingredients and chill playlists, it’s a space made to be shared in person and on your feed.
            </p>

            {/* Editorial highlights grid */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-sm font-bold text-[#2D211C]">Thoughtful Drinks</span>
                <p className="text-xs text-[#705D52] leading-normal">
                  Direct-trade beans, ceremonial matcha & crafted syrups.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-bold text-[#2D211C]">Comfort First</span>
                <p className="text-xs text-[#705D52] leading-normal">
                  Plush booths, high-speed WiFi & accessible power ports.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-bold text-[#2D211C]">Fresh Every Day</span>
                <p className="text-xs text-[#705D52] leading-normal">
                  Warm morning pastries and wholesome daytime plates.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-bold text-[#2D211C]">Social & Easy</span>
                <p className="text-xs text-[#705D52] leading-normal">
                  Walk-ins welcome, dog-friendly patio & friendly baristas.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#vibe"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C5F48] hover:text-[#2D211C] transition-colors"
              >
                <span>See what makes the experience special</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
