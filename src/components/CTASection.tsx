import React from 'react';
import { MessageSquare, Instagram, Calendar, Phone, Sparkles, ArrowUpRight } from 'lucide-react';
import { LOCATION_DATA } from '../data/cafeData';

interface CTASectionProps {
  onOpenReserveModal: () => void;
  onOpenOrderModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenReserveModal,
  onOpenOrderModal
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#2D211C] text-white relative overflow-hidden">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-0 right-1/4 -z-0 w-96 h-96 bg-[#8C5F48]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 w-80 h-80 bg-[#607261]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-[#45332B] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#E6A07E] border border-[#574137]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Good Coffee · Great Conversations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
            Ready to visit Genzify?
          </h2>

          <p className="text-base sm:text-lg text-[#D4C3B7] leading-relaxed [text-wrap:pretty]">
            Whether you are planning a weekend brunch date, looking for your next work sanctuary, or just craving a fresh iced cloud latte—we can’t wait to welcome you.
          </p>

          {/* Action Grid */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Action 1: Order Preview / WhatsApp */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center justify-between p-4 rounded-2xl bg-[#3D2D27] hover:bg-[#4D3A32] border border-[#574137] transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-[#A8988B] font-medium">Quick Pickups</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E6A07E] transition-colors">
                    Order on WhatsApp
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-white transition-colors" />
            </button>

            {/* Action 2: Instagram DM */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#3D2D27] hover:bg-[#4D3A32] border border-[#574137] transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E6A07E]/20 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-[#E6A07E]" />
                </div>
                <div>
                  <p className="text-xs text-[#A8988B] font-medium">Say Hello</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E6A07E] transition-colors">
                    Instagram DM
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-white transition-colors" />
            </a>

            {/* Action 3: Book a Table */}
            <button
              onClick={onOpenReserveModal}
              className="flex items-center justify-between p-4 rounded-2xl bg-[#3D2D27] hover:bg-[#4D3A32] border border-[#574137] transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#607261]/30 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[#8BA58D]" />
                </div>
                <div>
                  <p className="text-xs text-[#A8988B] font-medium">Groups & Dates</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E6A07E] transition-colors">
                    Book a Visit
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-white transition-colors" />
            </button>

            {/* Action 4: Call Direct */}
            <a
              href="tel:5552345678"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#3D2D27] hover:bg-[#4D3A32] border border-[#574137] transition-all text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#A8988B] font-medium">Barista Bar</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E6A07E] transition-colors">
                    Call Now
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8C7A70] group-hover:text-white transition-colors" />
            </a>
          </div>

          <p className="text-xs text-[#A8988B] pt-2">
            No reservations required for solo study & walk-in coffee runs.
          </p>

        </div>
      </div>
    </section>
  );
};
