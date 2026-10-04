import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Upload, Maximize2 } from 'lucide-react';
import { HOTEL_CONFIG, GalleryItem } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface GallerySectionProps {
  resolvePhotoSlot: (slotKey: string) => string;
  onOpenPhotoManager: () => void;
}

type CategoryFilter = 'All' | 'Suites' | 'Exterior' | 'Dining';

export const GallerySection: React.FC<GallerySectionProps> = ({
  resolvePhotoSlot,
  onOpenPhotoManager,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = ['All', 'Suites', 'Exterior', 'Dining'];

  const filteredItems: GalleryItem[] =
    selectedCategory === 'All'
      ? HOTEL_CONFIG.gallery
      : HOTEL_CONFIG.gallery.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#8C6D46] mb-2">
              Visual Tour · Arish Luxury Suites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19]">
              Inside Our Skardu Sanctuary
            </h2>
          </div>

          {/* Interactive Filter Controls (Functional Buttons) + Photo Upload Trigger */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="Gallery category filter"
              className="inline-flex items-center gap-1 p-1 bg-[#EAE5DC] rounded-lg"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1C1B19] text-[#F8F6F1] shadow-2xs'
                      : 'text-[#4A4640] hover:text-[#1C1B19]'
                  }`}
                >
                  {cat === 'Dining' ? 'Lounge & Dining' : cat}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenPhotoManager}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#1C1B19]/15 hover:bg-[#EAE5DC] text-xs font-medium text-[#1C1B19] transition-colors whitespace-nowrap cursor-pointer"
              title="Upload or swap hotel photographs"
            >
              <Upload className="w-3.5 h-3.5 text-[#8C6D46]" />
              <span>Manage Photos</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {filteredItems.map((item, idx) => {
            const isWide = idx === 0 || idx === 4;
            const colSpanClass =
              selectedCategory === 'All'
                ? isWide
                  ? 'md:col-span-7'
                  : 'md:col-span-5'
                : 'md:col-span-6';

            return (
              <figure
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpanClass} group relative rounded-xl overflow-hidden border border-[#1C1B19]/10 bg-[#262522] cursor-pointer`}
              >
                <div className="aspect-16/10 w-full h-full">
                  <HotelImage
                    src={resolvePhotoSlot(item.slotKey)}
                    alt={item.alt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    fallbackLabel={item.title}
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#E6DEC8]">
                      {item.category} · Arish Luxury Suites
                    </p>
                    <h3 className="font-display text-xl font-semibold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="p-2 rounded-lg bg-white/15 text-white group-hover:bg-white/25 transition-colors shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph Lightbox"
        >
          <div className="flex items-center justify-between text-white max-w-6xl w-full mx-auto">
            <div className="text-xs sm:text-sm text-[#E6DEC8] font-mono-num">
              {lightboxIndex + 1} / {filteredItems.length} ·{' '}
              {filteredItems[lightboxIndex].category}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl w-full mx-auto">
            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div className="max-h-[75vh] w-full flex flex-col items-center">
              <div className="max-h-[65vh] w-full rounded-xl overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={resolvePhotoSlot(filteredItems[lightboxIndex].slotKey)}
                  alt={filteredItems[lightboxIndex].alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>
              <div className="mt-4 text-center max-w-2xl">
                <h3 className="font-display text-2xl text-white font-semibold">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D6D0C4] mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
