import React from 'react';
import { ArrowUp, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { LOCATION_DATA } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#2D211C]/8 pt-16 pb-12 text-[#5A483E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D211C]/8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-[#2D211C] tracking-tight">
              Genzify Cafe
            </h3>
            <p className="text-sm text-[#705D52] max-w-sm leading-relaxed">
              Specialty brews, nourishing artisan brunches, and soft lifestyle moments in a space designed for community and connection.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Genzify on Instagram"
                className="w-9 h-9 rounded-full bg-[#F2ECE4] hover:bg-[#2D211C] hover:text-white flex items-center justify-center transition-colors text-[#2D211C]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#F2ECE4] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors text-[#2D211C]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#2D211C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#2D211C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#2D211C] transition-colors">
                  Menu Highlights
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2D211C] transition-colors">
                  About Genzify
                </a>
              </li>
              <li>
                <a href="#vibe" className="hover:text-[#2D211C] transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2D211C] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#2D211C] transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Quick Address */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#2D211C]">
              Visit & Contact
            </h4>
            <p className="text-[#2D211C] font-medium">
              {LOCATION_DATA.address}
            </p>
            <p className="text-xs text-[#705D52]">
              Mon–Fri 7:30 AM – 9:00 PM <br />
              Sat–Sun 8:00 AM – 10:00 PM
            </p>
            <p className="text-xs text-[#8C5F48] font-semibold pt-1">
              WhatsApp & Pickups: {LOCATION_DATA.phone}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A70]">
          <p>
            &copy; {new Date().getFullYear()} Genzify Cafe. All rights reserved.
          </p>

          {/* Subtle note required by user */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#705D52]">Website concept by K-9</span>
            <span aria-hidden="true">·</span>
            <span>Created for presentation</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-[#2D211C] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
