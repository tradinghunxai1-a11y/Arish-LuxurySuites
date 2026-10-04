import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

interface NavbarProps {
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Suites', href: '#suites' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#1C1B19]/10 shadow-xs'
          : 'bg-[#F8F6F1] border-b border-[#1C1B19]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-2xl sm:text-[26px] font-semibold tracking-tight text-[#1C1B19] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#8C6D46]"
        >
          {HOTEL_CONFIG.name}
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4640]"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 whitespace-nowrap hover:text-[#1C1B19] border-b-2 border-transparent hover:border-[#8C6D46] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBookNowClick}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#F8F6F1] bg-[#1C1B19] hover:bg-[#332F2A] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6D46]"
          >
            Book Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2.5 rounded-lg text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Polished Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F6F1] border-b border-[#1C1B19]/15 px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors"
            >
              Home
            </a>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#1C1B19]/10 flex flex-col sm:flex-row gap-2.5">
            <a
              href={HOTEL_CONFIG.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full py-3 px-4 rounded-lg text-center text-sm font-semibold bg-[#1F5138] text-white hover:bg-[#183F2B] transition-colors"
            >
              WhatsApp Us ({HOTEL_CONFIG.contact.phoneDisplay})
            </a>
            <a
              href={HOTEL_CONFIG.contact.phoneHref}
              onClick={handleNavClick}
              className="w-full py-3 px-4 rounded-lg text-center text-sm font-semibold border border-[#1C1B19]/20 text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors"
            >
              Call Hotel Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
