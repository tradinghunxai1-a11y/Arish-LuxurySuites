/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { DEFAULT_IMAGES, HOTEL_CONFIG } from './data/hotelData';
import {
  PhotoSlotMap,
  getAllCustomPhotos,
  saveCustomPhoto,
  clearAllCustomPhotos,
} from './utils/photoStorage';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SuitesSection } from './components/SuitesSection';
import { GallerySection } from './components/GallerySection';
import { HospitalityAndTrustSection } from './components/HospitalityAndTrustSection';
import { LocationAndExploreSection } from './components/LocationAndExploreSection';
import { BookingAndContactSection } from './components/BookingAndContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PhotoManagerModal } from './components/PhotoManagerModal';

export default function App() {
  const [customPhotos, setCustomPhotos] = useState<PhotoSlotMap>({});
  const [preselectedSuite, setPreselectedSuite] = useState<string>(
    HOTEL_CONFIG.suites[0].name
  );
  const [photoManagerOpen, setPhotoManagerOpen] = useState(false);

  useEffect(() => {
    getAllCustomPhotos().then((stored) => {
      if (stored && Object.keys(stored).length > 0) {
        setCustomPhotos(stored);
      }
    });
  }, []);

  const resolvePhotoSlot = useCallback(
    (slotKey: string): string => {
      if (customPhotos[slotKey]) {
        return customPhotos[slotKey];
      }
      return (
        DEFAULT_IMAGES[slotKey as keyof typeof DEFAULT_IMAGES] ||
        DEFAULT_IMAGES.heroSunsetExterior
      );
    },
    [customPhotos]
  );

  const handleUpdateSlot = async (slotKey: string, dataUrl: string) => {
    await saveCustomPhoto(slotKey, dataUrl);
    setCustomPhotos((prev) => ({
      ...prev,
      [slotKey]: dataUrl,
    }));
  };

  const handleResetAllPhotos = async () => {
    await clearAllCustomPhotos();
    setCustomPhotos({});
  };

  const scrollToBookingForm = (suiteName?: string) => {
    if (suiteName) {
      setPreselectedSuite(suiteName);
    }
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#1C1B19]">
      {/* Sticky Top Bar (3-Zone Contract) */}
      <Navbar onBookNowClick={() => scrollToBookingForm()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero + Quick Info Strip + Introduction */}
        <HeroSection
          heroImageSrc={resolvePhotoSlot('heroSunsetExterior')}
          onBookStayClick={() => scrollToBookingForm()}
        />

        {/* 2. Suites Showcase + Reference Rate Comparison */}
        <SuitesSection
          resolvePhotoSlot={resolvePhotoSlot}
          onSelectSuiteForBooking={(suiteName) => scrollToBookingForm(suiteName)}
        />

        {/* 3. Responsive Photo Gallery + Lightbox */}
        <GallerySection
          resolvePhotoSlot={resolvePhotoSlot}
          onOpenPhotoManager={() => setPhotoManagerOpen(true)}
        />

        {/* 4. Complimentary Breakfast + About + 4.7/5 Google Rating Trust Section */}
        <HospitalityAndTrustSection
          loungeDiningImageSrc={resolvePhotoSlot('grandLoungeDining')}
          daytimeExteriorImageSrc={resolvePhotoSlot('daytimeGardenExterior')}
        />

        {/* 5. Location in Olding, Skardu + Explore Skardu Attractions */}
        <LocationAndExploreSection />

        {/* 6. Direct WhatsApp Booking Enquiry Form + Contact + FAQs */}
        <BookingAndContactSection preselectedSuite={preselectedSuite} />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer
        onBookNowClick={() => scrollToBookingForm()}
        onOpenPhotoManager={() => setPhotoManagerOpen(true)}
      />

      {/* Floating WhatsApp Direct Contact CTA */}
      <FloatingWhatsApp />

      {/* Hotel Owner Photo Manager Modal */}
      <PhotoManagerModal
        isOpen={photoManagerOpen}
        onClose={() => setPhotoManagerOpen(false)}
        customPhotos={customPhotos}
        onUpdateSlot={handleUpdateSlot}
        onResetAll={handleResetAllPhotos}
      />
    </div>
  );
}
