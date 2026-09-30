import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';
import { LOCATION_DATA } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [date, setDate] = useState('2026-10-03');
  const [time, setTime] = useState('11:00 AM');
  const [vibe, setVibe] = useState('Casual Brunch');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#2D211C]/10 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#2D211C]/8 flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#2D211C]">
              <Calendar className="w-4 h-4 text-[#8C5F48]" />
            </div>
            <div>
              <h3 id="reservation-modal-title" className="font-display font-bold text-lg text-[#2D211C]">
                {submitted ? 'Table Reserved' : 'Book a Table / Visit'}
              </h3>
              <p className="text-xs text-[#8C7A70]">Genzify Cafe Midtown</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close reservation modal"
            className="w-8 h-8 rounded-full hover:bg-[#EFE9DF] text-[#705D52] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 rounded-full bg-[#EBF0EC] text-[#607261] mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-xl text-[#2D211C]">
                  You&apos;re on the list, {name}!
                </h4>
                <p className="text-xs text-[#705D52]">
                  We&apos;ve reserved a cozy table for {partySize} guests.
                </p>
              </div>

              {/* Receipt details */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#2D211C]/6 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Reservation Code:</span>
                  <span className="font-mono font-bold text-[#2D211C]">GNZ-8492</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Date & Time:</span>
                  <span className="font-semibold text-[#2D211C]">{date} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Party Size:</span>
                  <span className="font-semibold text-[#2D211C]">{partySize} people</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A70]">Vibe:</span>
                  <span className="font-semibold text-[#8C5F48]">{vibe}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#A8988B] leading-normal">
                Simply mention your name or code to the front barista upon arrival.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#2D211C] text-white text-xs font-bold hover:bg-[#45332B] transition-colors cursor-pointer mt-2"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#2D211C] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D211C] mb-1">
                  Email or Phone (for confirmation)
                </label>
                <input
                  type="text"
                  placeholder="alex@example.com or +1 555-..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#2D211C] mb-1">
                    Guests
                  </label>
                  <select
                    value={partySize}
                    onChange={e => setPartySize(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                  >
                    <option value="1">1 Person (Study)</option>
                    <option value="2">2 People (Coffee Date)</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People (Table)</option>
                    <option value="6">6+ People (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2D211C] mb-1">
                    Time
                  </label>
                  <select
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                  >
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2D211C] mb-1">
                  Occasion / Vibe
                </label>
                <select
                  value={vibe}
                  onChange={e => setVibe(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-[#D8CCC0] bg-[#FAF7F2] focus:outline-none focus:border-[#2D211C]"
                >
                  <option value="Casual Brunch">Casual Weekend Brunch</option>
                  <option value="Study & Work Session">Laptop Study / Remote Work</option>
                  <option value="Coffee Date">Coffee Date</option>
                  <option value="Friend Meetup">Friend Catchup / Hangout</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2D211C] text-white text-xs font-bold hover:bg-[#45332B] transition-all shadow-md cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>

              <p className="text-[11px] text-[#A8988B] text-center">
                Instant confirmation · No booking fee required
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
