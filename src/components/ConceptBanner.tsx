import React from 'react';
import { Sparkles, Eye, Camera, Check } from 'lucide-react';

interface ConceptBannerProps {
  screenshotMode: boolean;
  setScreenshotMode: (val: boolean) => void;
}

export const ConceptBanner: React.FC<ConceptBannerProps> = ({
  screenshotMode,
  setScreenshotMode
}) => {
  if (screenshotMode) {
    return (
      <aside aria-label="Screenshot mode active" className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setScreenshotMode(false)}
          className="flex items-center gap-2 bg-[#2D211C] text-white px-4 py-2 rounded-full shadow-xl hover:bg-[#45332B] transition-colors text-xs font-medium cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Exit Screenshot Mode</span>
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Demo concept presentation details" className="bg-[#2D211C] text-[#E8DCCF] text-xs py-2 px-4 sticky top-0 z-50 transition-all border-b border-[#3D2D27]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-[#E6A07E] shrink-0" />
          <span className="font-medium text-white">Demo Concept Presentation</span>
          <span className="text-[#8C7A70] hidden sm:inline">|</span>
          <span className="text-[#C4B5A8] hidden sm:inline">Crafted by K-9 for Genzify Cafe</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setScreenshotMode(true)}
            title="Hide concept banners for clean Instagram screenshots"
            className="flex items-center gap-1.5 bg-[#45332B] hover:bg-[#574137] text-white px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer"
          >
            <Camera className="w-3 h-3 text-[#E6A07E]" />
            <span className="hidden xs:inline">Instagram Screenshot Mode</span>
            <span className="xs:hidden">Screenshot</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
