import React from 'react';
import { MessageCircle, Calendar, Phone, MapPin, Upload } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

interface FooterProps {
  onBookNowClick: () => void;
  onOpenPhotoManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBookNowClick,
  onOpenPhotoManager,
}) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Suites', href: '#suites' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1B19] text-[#EAE5DC] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Hotel Brand & Summary */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight"
            >
              {HOTEL_CONFIG.name}
            </a>
            <p className="text-xs text-[#C5A572] mt-1">
              {HOTEL_CONFIG.category} · {HOTEL_CONFIG.rating.score} / {HOTEL_CONFIG.rating.outOf} Google Rating ({HOTEL_CONFIG.rating.reviewCount} Reviews)
            </p>
            <p className="text-sm text-[#B8B2A8] mt-4 max-w-sm leading-relaxed">
              {HOTEL_CONFIG.heroSupportingText}
            </p>

            <div className="mt-6 space-y-2 text-xs text-[#D6D0C4]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A572] shrink-0" />
                <span>572 Sumbul Town, Olding, Skardu, 16100</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A572] shrink-0" />
                <a
                  href={HOTEL_CONFIG.contact.phoneHref}
                  className="font-mono-num hover:text-white transition-colors"
                >
                  {HOTEL_CONFIG.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-[#B8B2A8]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Booking & Actions */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-white mb-4">
              Direct Reservations
            </h3>
            <p className="text-xs text-[#B8B2A8] leading-relaxed mb-5">
              Check-in: <span className="font-mono-num text-white">{HOTEL_CONFIG.policies.checkIn}</span> · Check-out:{' '}
              <span className="font-mono-num text-white">{HOTEL_CONFIG.policies.checkOut}</span>
              <br />
              Contact us directly for current seasonal availability and direct rates.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onBookNowClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C5A572] hover:bg-[#B3915D] text-[#1C1B19] text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>

              <a
                href={HOTEL_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F5138] hover:bg-[#183F2B] text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Owner Photo Utility */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E887E]">
          <p>© {HOTEL_CONFIG.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Plus Code: {HOTEL_CONFIG.address.plusCode}</span>
            <button
              type="button"
              onClick={onOpenPhotoManager}
              className="inline-flex items-center gap-1.5 text-[#B8B2A8] hover:text-white transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-[#C5A572]" />
              <span>Hotel Photo Manager</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
