import React, { useState } from 'react';
import { LOCATION_DATA } from '../data/cafeData';
import { MapPin, Clock, Phone, MessageSquare, Navigation, CheckCircle2, Copy, Check } from 'lucide-react';

interface VisitUsSectionProps {
  onOpenReserveModal: () => void;
}

export const VisitUsSection: React.FC<VisitUsSectionProps> = ({ onOpenReserveModal }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard?.writeText(LOCATION_DATA.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="visit" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
            Plan Your Visit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
            Come hang out with us.
          </h2>
          <p className="text-sm sm:text-base text-[#5A483E] [text-wrap:pretty]">
            Whether you are dropping by for a morning takeaway or pulling up a chair for the afternoon, our doors are open.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Essential Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#2D211C]/8 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8C5F48]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#2D211C]">
                      Location
                    </h3>
                    <p className="text-xs text-[#8C7A70]">Midtown Creative District</p>
                  </div>
                </div>

                <button
                  onClick={copyAddress}
                  className="flex items-center gap-1.5 text-xs text-[#8C5F48] hover:text-[#2D211C] font-semibold bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-[#E8DCCF] transition-colors cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#607261]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#2D211C]/5">
                <p className="font-semibold text-sm text-[#2D211C]">
                  {LOCATION_DATA.address}
                </p>
                <p className="text-xs text-[#705D52] mt-0.5">
                  {LOCATION_DATA.city} · Convenient street & bike parking
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(LOCATION_DATA.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D211C] text-white text-xs font-semibold hover:bg-[#45332B] transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onOpenReserveModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2ECE4] text-[#2D211C] text-xs font-semibold hover:bg-[#E8DFCFA] transition-colors cursor-pointer border border-[#E0D3C5]"
                >
                  <Clock className="w-3.5 h-3.5 text-[#8C5F48]" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#2D211C]/8 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#8C5F48]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#2D211C]">
                    Operating Hours
                  </h3>
                  <p className="text-xs text-[#607261] font-semibold">Walk-ins always welcome</p>
                </div>
              </div>

              <div className="divide-y divide-[#2D211C]/6">
                {LOCATION_DATA.hours.map((schedule, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-[#5A483E] font-medium">{schedule.days}</span>
                    <span className="text-[#2D211C] font-semibold tabular-nums">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Amenities */}
            <div className="bg-[#F5F0E8] rounded-3xl p-6 border border-[#2D211C]/8 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#8C5F48]">
                Space Amenities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A483E]">
                {LOCATION_DATA.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#607261] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Styled Map Card Placeholder */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#2D211C]/8 shadow-sm flex flex-col">
              
              {/* Map Canvas Graphic */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-[#EDE5D8] flex items-center justify-center overflow-hidden">
                {/* Stylized geometric grid map pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2D211C_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Simulated avenues */}
                <div className="absolute w-full h-8 bg-[#E2D6C6] -rotate-12 transform top-1/3" />
                <div className="absolute h-full w-8 bg-[#E2D6C6] rotate-24 transform left-1/2" />
                <div className="absolute w-full h-6 bg-[#E2D6C6] rotate-6 transform bottom-1/4" />

                {/* Simulated Park / Green Area */}
                <div className="absolute top-8 left-8 w-28 h-20 bg-[#D4E0D6] rounded-2xl opacity-75 border border-[#607261]/20 flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-[#546555] uppercase tracking-wider">Arts Square</span>
                </div>

                {/* Central Cafe Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="bg-[#2D211C] text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-white">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E6A07E]" />
                    <span className="font-display font-bold text-xs">Genzify Cafe</span>
                  </div>
                  <div className="w-3 h-3 bg-[#2D211C] rotate-45 -mt-1.5 shadow-md border-r-2 border-b-2 border-white" />
                  <div className="w-8 h-2 bg-black/20 rounded-full blur-[2px] mt-1" />
                </div>

                {/* Compass & Zoom Controls Mockup */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs rounded-xl shadow-xs border border-[#2D211C]/10 p-1 flex flex-col gap-1 text-xs font-bold text-[#2D211C]">
                  <span className="w-6 h-6 flex items-center justify-center hover:bg-[#F2ECE4] rounded cursor-pointer">+</span>
                  <div className="h-px bg-[#2D211C]/10" />
                  <span className="w-6 h-6 flex items-center justify-center hover:bg-[#F2ECE4] rounded cursor-pointer">-</span>
                </div>

                {/* Transit proximity badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#2D211C]/10 shadow-xs text-[11px] font-medium text-[#2D211C]">
                  🚇 3 min walk from Central Station
                </div>
              </div>

              {/* Map Footer info bar */}
              <div className="p-5 sm:p-6 bg-[#FAF7F2] border-t border-[#2D211C]/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-sm text-[#2D211C]">
                    Neighborhood Third Place
                  </p>
                  <p className="text-xs text-[#705D52]">
                    Outdoor sidewalk seating available when sunny
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BE5A] transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:5552345678"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[#2D211C] text-xs font-semibold hover:bg-[#F2ECE4] border border-[#E0D3C5] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8C5F48]" />
                    <span>Call Bar</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
