import React, { useState } from 'react';
import { MenuItem } from '../types/cafe';
import { X, Trash2, MessageSquare, Copy, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { LOCATION_DATA } from '../data/cafeData';

interface OrderPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderPreviewModal: React.FC<OrderPreviewModalProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart
}) => {
  const [copied, setCopied] = useState(false);
  const [pickupNote, setPickupNote] = useState('');

  if (!isOpen) return null;

  // Calculate sample total
  const totalNumber = items.reduce((acc, item) => {
    const numeric = parseFloat(item.price.replace('$', '')) || 0;
    return acc + numeric;
  }, 0);

  const formattedTotal = `$${totalNumber.toFixed(2)}`;

  const generateOrderMessage = () => {
    const itemList = items.map(i => `• 1x ${i.name} (${i.price})`).join('\n');
    return `Hi Genzify Cafe! I'd like to place a pickup order:\n\n${itemList}\n\nEstimated Subtotal: ${formattedTotal}${
      pickupNote ? `\nNotes: ${pickupNote}` : ''
    }\n\nPlease confirm availability and pickup time. Thank you!`;
  };

  const copyForDM = () => {
    navigator.clipboard?.writeText(generateOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(generateOrderMessage());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-preview-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#2D211C]/10 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#2D211C]/8 flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2D211C]">
              <ShoppingBag className="w-4 h-4 text-[#8C5F48]" />
            </div>
            <div>
              <h3 id="order-preview-title" className="font-display font-bold text-lg text-[#2D211C]">
                Sample Order Bag
              </h3>
              <p className="text-xs text-[#8C7A70]">
                {items.length} {items.length === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close sample bag"
            className="w-8 h-8 rounded-full hover:bg-[#EFE9DF] text-[#705D52] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {items.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#A8988B] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-display font-bold text-base text-[#2D211C]">
                Your sample bag is empty
              </p>
              <p className="text-xs text-[#705D52] max-w-xs mx-auto">
                Explore the menu highlights and tap &quot;Add&quot; to test the ordering flow concept.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2D211C] text-white text-xs font-semibold hover:bg-[#45332B] transition-colors cursor-pointer mt-2"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3 divide-y divide-[#2D211C]/6">
                {items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-xl object-cover bg-[#F4EFE6] shrink-0"
                      />
                      <div>
                        <p className="text-sm font-bold text-[#2D211C]">{item.name}</p>
                        <p className="text-xs text-[#8C7A70]">{item.notes || 'Specialty order'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-semibold text-sm text-[#2D211C] tabular-nums">
                        {item.price}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1.5 text-[#A8988B] hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special instructions */}
              <div className="pt-2">
                <label htmlFor="pickup-order-notes" className="block text-xs font-bold text-[#2D211C] mb-1">
                  Pickup notes or milk preference (optional):
                </label>
                <input
                  id="pickup-order-notes"
                  type="text"
                  placeholder="e.g. Oat milk, extra hot, pickup in 15 mins"
                  value={pickupNote}
                  onChange={e => setPickupNote(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                />
              </div>

              {/* Total Summary */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#2D211C]/6 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#705D52]">
                  <span>Subtotal estimate</span>
                  <span className="font-semibold tabular-nums">{formattedTotal}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#705D52]">
                  <span>Tax & Packaging</span>
                  <span>Calculated at bar</span>
                </div>
                <div className="pt-2 border-t border-[#2D211C]/6 flex items-center justify-between text-sm font-bold text-[#2D211C]">
                  <span>Estimated Total</span>
                  <span className="tabular-nums text-base">{formattedTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Actions */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-[#2D211C]/8 bg-white space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BE5A] transition-colors shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </button>

              <button
                onClick={copyForDM}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#2D211C] text-white text-xs font-bold hover:bg-[#45332B] transition-colors shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-[#8BA58D]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Order Text!' : 'Copy for Instagram DM'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={onClearCart}
                className="text-xs text-[#8C7A70] hover:text-rose-600 font-medium transition-colors cursor-pointer"
              >
                Clear all items
              </button>
              <span className="text-[11px] text-[#A8988B]">
                Concept demo · No direct payment required
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
