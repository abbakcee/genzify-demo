import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryPhoto } from '../types/cafe';
import { Maximize2, X, Sparkles, Instagram } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
              The Aesthetic Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
              Moments made to be shared.
            </h2>
            <p className="text-sm sm:text-base text-[#5A483E] max-w-xl font-normal">
              A glimpse into the daily life, handcrafted drinks, golden pastries, and sunlit corners that make Genzify Cafe a favorite on everyone’s camera roll.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5F48] self-start md:self-auto">
            <Instagram className="w-4 h-4" />
            <span>Tag @genzifycafe on your stories</span>
          </div>
        </div>

        {/* Gallery Bento / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* Item 1: Large Feature */}
          <div 
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[0])}
            className="sm:col-span-2 lg:col-span-8 group relative rounded-3xl overflow-hidden bg-[#ECE4D6] cursor-pointer border border-[#2D211C]/8 shadow-xs aspect-[16/10]"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-medium text-[#E6A07E]">{GALLERY_ITEMS[0].tag}</span>
              <p className="text-lg font-bold font-display">{GALLERY_ITEMS[0].title}</p>
              <p className="text-xs text-white/80 mt-1">{GALLERY_ITEMS[0].caption}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#2D211C]" />
            </div>
          </div>

          {/* Item 2: Square Match */}
          <div 
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[1])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-3xl overflow-hidden bg-[#ECE4D6] cursor-pointer border border-[#2D211C]/8 shadow-xs aspect-square"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-medium text-[#E6A07E]">{GALLERY_ITEMS[1].tag}</span>
              <p className="text-base font-bold font-display">{GALLERY_ITEMS[1].title}</p>
              <p className="text-xs text-white/80 mt-1">{GALLERY_ITEMS[1].caption}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#2D211C]" />
            </div>
          </div>

          {/* Item 3 */}
          <div 
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[2])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-3xl overflow-hidden bg-[#ECE4D6] cursor-pointer border border-[#2D211C]/8 shadow-xs aspect-square"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-medium text-[#E6A07E]">{GALLERY_ITEMS[2].tag}</span>
              <p className="text-base font-bold font-display">{GALLERY_ITEMS[2].title}</p>
              <p className="text-xs text-white/80 mt-1">{GALLERY_ITEMS[2].caption}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#2D211C]" />
            </div>
          </div>

          {/* Item 4 */}
          <div 
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[3])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-3xl overflow-hidden bg-[#ECE4D6] cursor-pointer border border-[#2D211C]/8 shadow-xs aspect-square"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-medium text-[#E6A07E]">{GALLERY_ITEMS[3].tag}</span>
              <p className="text-base font-bold font-display">{GALLERY_ITEMS[3].title}</p>
              <p className="text-xs text-white/80 mt-1">{GALLERY_ITEMS[3].caption}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#2D211C]" />
            </div>
          </div>

          {/* Item 5 */}
          <div 
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[4])}
            className="sm:col-span-1 lg:col-span-4 group relative rounded-3xl overflow-hidden bg-[#ECE4D6] cursor-pointer border border-[#2D211C]/8 shadow-xs aspect-square"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
              <span className="text-xs font-medium text-[#E6A07E]">{GALLERY_ITEMS[4].tag}</span>
              <p className="text-base font-bold font-display">{GALLERY_ITEMS[4].title}</p>
              <p className="text-xs text-white/80 mt-1">{GALLERY_ITEMS[4].caption}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#2D211C]" />
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative border border-[#2D211C]/10 animate-in zoom-in-95 duration-200"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-2 bg-[#FAF7F2]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C5F48]">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs text-[#8C7A70] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#E6A07E]" />
                    Shot at Genzify
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#2D211C]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#5A483E] leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
