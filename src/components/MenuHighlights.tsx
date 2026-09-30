import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuCategory, MenuItem } from '../types/cafe';
import { Plus, Check, Sparkles, ShoppingBag } from 'lucide-react';

interface MenuHighlightsProps {
  onAddToCart: (item: MenuItem) => void;
  cartItems: MenuItem[];
  onOpenOrderModal: () => void;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({
  onAddToCart,
  cartItems,
  onOpenOrderModal
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'signature', label: 'Signature Drinks' },
    { id: 'coffee', label: 'Coffee & Espresso' },
    { id: 'brunch', label: 'Brunch & Savory' },
    { id: 'bakery', label: 'Bakery & Sweets' }
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1200);
  };

  const isItemInCart = (id: string) => cartItems.some(i => i.id === id);

  return (
    <section id="menu" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8C5F48]">
              Curated Menu Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D211C] tracking-tight [text-wrap:balance]">
              Fresh bites & handcrafted brews.
            </h2>
            <p className="text-sm sm:text-base text-[#5A483E] max-w-xl font-normal">
              A sample preview of Genzify Cafe’s staple drinks and kitchen offerings. Every recipe pairs high-grade ingredients with picture-perfect presentation.
            </p>
          </div>

          {/* Quick Bag Status on Desktop */}
          {cartItems.length > 0 && (
            <button
              onClick={onOpenOrderModal}
              className="self-start md:self-auto inline-flex items-center gap-2 bg-[#2D211C] text-white px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#45332B] transition-colors cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#E6A07E]" />
              <span>Review Sample Order ({cartItems.length})</span>
            </button>
          )}
        </div>

        {/* Category Tabs (Interactive Segmented Filter) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#EFE9DF] rounded-2xl max-w-fit overflow-x-auto mb-10 border border-[#E0D3C5]">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#2D211C] shadow-xs'
                    : 'text-[#6C5B51] hover:text-[#2D211C]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => {
            const added = justAddedId === item.id;
            const inCart = isItemInCart(item.id);

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-3xl p-3.5 border border-[#2D211C]/8 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  {/* Image Container with Fallback */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EFE6] mb-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tag label */}
                    {item.tag && (
                      <div className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-medium text-[#705D52] shadow-xs">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Item Content */}
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display font-bold text-base text-[#2D211C] leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-semibold text-sm text-[#2D211C] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#6B5A50] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Metadata and Quick Add */}
                <div className="mt-4 pt-3 border-t border-[#2D211C]/6 flex items-center justify-between px-1">
                  <span className="text-[11px] text-[#8C7A70] font-medium truncate max-w-[140px]">
                    {item.notes || 'Fresh Specialty'}
                  </span>

                  <button
                    onClick={() => handleAdd(item)}
                    aria-label={`Add ${item.name} to sample bag`}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      added
                        ? 'bg-[#607261] text-white scale-95'
                        : inCart
                        ? 'bg-[#EBF0EC] text-[#4A5D4B] hover:bg-[#DDE6DF]'
                        : 'bg-[#F2ECE4] hover:bg-[#2D211C] hover:text-white text-[#2D211C]'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : inCart ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#607261]" />
                        <span>In Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Sample Menu items */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#8C7A70]">
            Sample concept menu · All items, prices, and categories can be customized to match Genzify Cafe’s official offerings.
          </p>
        </div>

      </div>
    </section>
  );
};
