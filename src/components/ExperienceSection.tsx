import React from 'react';
import { Camera, Coffee, Croissant, Laptop, Music, Users, Sparkles } from 'lucide-react';
import { CAFE_FEATURES } from '../data/cafeData';

export const ExperienceSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#8C5F48]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#8C5F48]" />;
      case 'Croissant':
        return <Croissant className="w-5 h-5 text-[#8C5F48]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#8C5F48]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#8C5F48]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#8C5F48]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8C5F48]" />;
    }
  };

  return (
    <section id="vibe" className="py-16 sm:py-24 bg-[#F5F0E8] border-y border-[#2D211C]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
            The Signature Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
            Why people would love Genzify.
          </h2>
          <p className="text-sm sm:text-base text-[#5A483E] [text-wrap:pretty]">
            Designed from the ground up for a youthful, aesthetic lifestyle. From morning caffeine runs to late afternoon chill sessions, we’ve created a space that feels like home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAFE_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#2D211C]/8 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#F4EFE6] flex items-center justify-center">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-[#A8988B] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-[#2D211C]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6B5A50] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D211C]/6 flex items-center justify-between text-xs text-[#8C7A70]">
                <span>Everyday standard</span>
                <span className="text-[#8C5F48] font-medium">Genzify Culture</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
