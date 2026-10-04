import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface HeroSectionProps {
  heroImageSrc: string;
  onBookStayClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroImageSrc,
  onBookStayClick,
}) => {
  return (
    <section id="home" className="relative">
      {/* Full-width cinematic luxury hero */}
      <div className="relative min-h-[580px] lg:min-h-[680px] flex items-end">
        <HotelImage
          src={heroImageSrc}
          alt="Arish Luxury Suites 4-star boutique hotel exterior at sunset in Olding, Skardu, Gilgit-Baltistan"
          priority={true}
          containerClassName="absolute inset-0 w-full h-full bg-[#1C1B19]"
          className="w-full h-full object-cover object-center"
          fallbackLabel="Arish Luxury Suites · Skardu"
        />

        {/* Measured contrast scrim for guaranteed WCAG AA legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:pb-20">
          <div className="max-w-3xl">
            {/* Unboxed regional metadata line (Zero-Pill Discipline) */}
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#E6DEC8] mb-3">
              <span>{HOTEL_CONFIG.category}</span>
              <span className="mx-2 opacity-60" aria-hidden="true">·</span>
              <span>Olding, Skardu</span>
              <span className="mx-2 opacity-60" aria-hidden="true">·</span>
              <span className="font-mono-num">
                {HOTEL_CONFIG.rating.score} / {HOTEL_CONFIG.rating.outOf} Google Rating ({HOTEL_CONFIG.rating.reviewCount} Reviews)
              </span>
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.08] mb-3">
              {HOTEL_CONFIG.name}
            </h1>

            <p className="font-display italic text-2xl sm:text-3xl text-[#EBD9B4] leading-snug mb-4">
              {HOTEL_CONFIG.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#EAE5DC] leading-relaxed max-w-2xl mb-8">
              {HOTEL_CONFIG.heroSupportingText}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onBookStayClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C5A572] hover:bg-[#B3915D] text-[#1C1B19] font-semibold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={HOTEL_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur-xs border border-white/30 text-white font-semibold text-sm sm:text-base transition-colors duration-150 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={HOTEL_CONFIG.contact.phoneHref}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-white/90 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C5A572]" />
                <span className="font-mono-num">{HOTEL_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Hotel Information Strip */}
      <div className="bg-[#1C1B19] text-[#F8F6F1] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-6 text-left">
            <div>
              <p className="text-xs text-[#A8A29A]">Category</p>
              <p className="text-sm font-semibold text-white mt-0.5">
                {HOTEL_CONFIG.category}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#A8A29A]">Guest Rating</p>
              <p className="text-sm font-semibold text-white mt-0.5 font-mono-num">
                {HOTEL_CONFIG.rating.score} / {HOTEL_CONFIG.rating.outOf} Google Rating
              </p>
            </div>

            <div>
              <p className="text-xs text-[#A8A29A]">Verified Feedback</p>
              <p className="text-sm font-semibold text-white mt-0.5 font-mono-num">
                {HOTEL_CONFIG.rating.reviewCount} Reviews
              </p>
            </div>

            <div>
              <p className="text-xs text-[#A8A29A]">Check-in</p>
              <p className="text-sm font-semibold text-white mt-0.5 font-mono-num">
                {HOTEL_CONFIG.policies.checkIn}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#A8A29A]">Check-out</p>
              <p className="text-sm font-semibold text-white mt-0.5 font-mono-num">
                {HOTEL_CONFIG.policies.checkOut}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#A8A29A]">Location</p>
              <p className="text-sm font-semibold text-white mt-0.5">
                Skardu, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <p className="text-xs font-medium text-[#8C6D46] mb-3">
          Olding · Skardu · Gilgit-Baltistan
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1C1B19] leading-tight mb-6">
          {HOTEL_CONFIG.introductionHeading}
        </h2>
        <p className="text-base sm:text-lg text-[#4A4640] leading-relaxed max-w-2xl mx-auto">
          {HOTEL_CONFIG.introductionBody}
        </p>
      </div>
    </section>
  );
};
