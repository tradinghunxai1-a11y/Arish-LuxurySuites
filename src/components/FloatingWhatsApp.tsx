import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={HOTEL_CONFIG.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${HOTEL_CONFIG.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F5138] hover:bg-[#183F2B] text-white shadow-lg border border-white/15 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A572]"
    >
      <MessageCircle className="w-5 h-5 text-[#86EFAC] shrink-0" />
      <span className="text-xs sm:text-sm font-semibold whitespace-nowrap pr-0.5">
        WhatsApp Us
      </span>
    </a>
  );
};
