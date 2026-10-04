import React, { useState } from 'react';
import { X, Check, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG, SuiteItem } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface SuitesSectionProps {
  resolvePhotoSlot: (slotKey: string) => string;
  onSelectSuiteForBooking: (suiteName: string) => void;
}

export const SuitesSection: React.FC<SuitesSectionProps> = ({
  resolvePhotoSlot,
  onSelectSuiteForBooking,
}) => {
  const [activeSuiteModal, setActiveSuiteModal] = useState<SuiteItem | null>(null);
  const [activeModalImageIndex, setActiveModalImageIndex] = useState<number>(0);

  const openSuiteDetails = (suite: SuiteItem) => {
    setActiveSuiteModal(suite);
    setActiveModalImageIndex(0);
  };

  return (
    <section id="suites" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#1C1B19]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-medium text-[#8C6D46] mb-2">
              Accommodations at Arish Luxury Suites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19]">
              Refined Suites Designed for Restful Stays
            </h2>
          </div>
          <p className="text-sm text-[#4A4640] max-w-md leading-relaxed">
            {HOTEL_CONFIG.pricing.referenceDisclaimer}
          </p>
        </div>

        {/* Suite Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HOTEL_CONFIG.suites.map((suite, idx) => {
            const primaryImg = resolvePhotoSlot(suite.primaryImageSlot);
            return (
              <article
                key={suite.id}
                className="bg-[#F8F6F1] border border-[#1C1B19]/10 rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  {/* Suite Photograph */}
                  <div
                    onClick={() => openSuiteDetails(suite)}
                    className="relative aspect-4/3 cursor-pointer group overflow-hidden"
                  >
                    <HotelImage
                      src={primaryImg}
                      alt={`${suite.name} at Arish Luxury Suites in Skardu`}
                      containerClassName="w-full h-full bg-[#262522]"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                      fallbackLabel={suite.name}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-end p-3">
                      <span className="px-3 py-1.5 rounded-md bg-black/75 text-white text-xs font-medium inline-flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Suite Gallery</span>
                      </span>
                    </div>
                  </div>

                  {/* Suite Content */}
                  <div className="p-6">
                    {/* Clean unboxed metadata kicker */}
                    <p className="text-xs text-[#6E685F] mb-1.5">
                      <span>0{idx + 1}. {suite.subtitle}</span>
                    </p>

                    <h3 className="font-display text-2xl font-semibold text-[#1C1B19] mb-2">
                      {suite.name}
                    </h3>

                    <p className="text-sm text-[#4A4640] leading-relaxed mb-4">
                      {suite.shortDescription}
                    </p>

                    {/* Unboxed Bed & Capacity Specs */}
                    <div className="py-3 border-y border-[#1C1B19]/10 text-xs text-[#38342E] space-y-1.5 mb-4">
                      <p>
                        <span className="font-semibold text-[#1C1B19]">Bed Configuration:</span>{' '}
                        {suite.bedInfo}
                      </p>
                      <p>
                        <span className="font-semibold text-[#1C1B19]">Occupancy:</span>{' '}
                        {suite.capacityLabel}
                      </p>
                    </div>

                    {/* Observed Suite Amenities */}
                    <ul className="space-y-1.5 mb-6">
                      {suite.observedFeatures.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-[#4A4640] flex items-start gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price Indicator & Action Footer */}
                <div className="px-6 pb-6 pt-2">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#1C1B19] font-mono-num">
                      {suite.referenceRateLabel}
                    </p>
                    <p className="text-xs text-[#6E685F] mt-0.5">{suite.rateNote}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => openSuiteDetails(suite)}
                      className="py-2.5 px-3 rounded-lg border border-[#1C1B19]/20 hover:bg-[#EAE5DC] text-xs font-semibold text-[#1C1B19] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectSuiteForBooking(suite.name)}
                      className="py-2.5 px-3 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-xs font-semibold text-[#F8F6F1] transition-colors whitespace-nowrap inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Rate Comparison & Direct Booking Callout Strip */}
        <div className="mt-14 bg-[#F8F6F1] border border-[#1C1B19]/12 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1C1B19]/10">
            <div>
              <p className="text-xs font-medium text-[#8C6D46] mb-1">
                Transparent Rate Guide · Reference Pricing
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19]">
                {HOTEL_CONFIG.pricing.headlineRate}
              </h3>
              <p className="text-sm text-[#4A4640] mt-1 max-w-2xl">
                Rates vary according to dates, suite type and availability. Contact the hotel for the latest direct-booking offer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={HOTEL_CONFIG.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1F5138] hover:bg-[#183F2B] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Rate on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {HOTEL_CONFIG.pricing.otaComparisons.map((item) => (
              <div
                key={item.platform}
                className={`p-4 rounded-lg border ${
                  item.isRecommended
                    ? 'border-[#8C6D46] bg-[#EFECE6]/70'
                    : 'border-[#1C1B19]/10 bg-white/60'
                }`}
              >
                <p className="text-xs font-medium text-[#6E685F]">{item.platform}</p>
                <p className="text-lg font-semibold text-[#1C1B19] font-mono-num mt-1">
                  {item.rateText}
                </p>
                <p className="text-xs text-[#4A4640] mt-1.5 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6E685F] mt-4">
            Note: Third-party OTA rates (Booking.com from PKR 22,000; Stayovia from PKR 26,000) are reference prices supplied for comparison and may change by season or date. Direct booking with Arish Luxury Suites is recommended.
          </p>
        </div>
      </div>

      {/* Larger Suite Detail & Multi-Photo Modal */}
      {activeSuiteModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="suite-modal-title"
        >
          <div className="bg-[#F8F6F1] border border-[#1C1B19]/15 rounded-xl max-w-4xl w-full overflow-hidden shadow-xl my-8">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1B19]/10">
              <div>
                <p className="text-xs text-[#8C6D46] font-medium">
                  {activeSuiteModal.subtitle}
                </p>
                <h3
                  id="suite-modal-title"
                  className="font-display text-2xl font-semibold text-[#1C1B19]"
                >
                  {activeSuiteModal.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSuiteModal(null)}
                aria-label="Close suite details"
                className="p-2 rounded-lg text-[#4A4640] hover:text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Suite Image Gallery */}
              <div className="lg:col-span-7 p-6 bg-[#EFECE6]">
                <div className="aspect-4/3 rounded-lg overflow-hidden mb-3">
                  <HotelImage
                    src={resolvePhotoSlot(
                      activeSuiteModal.galleryImageSlots[activeModalImageIndex] ||
                        activeSuiteModal.primaryImageSlot
                    )}
                    alt={`${activeSuiteModal.name} view ${activeModalImageIndex + 1}`}
                    containerClassName="w-full h-full bg-[#262522]"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {activeSuiteModal.galleryImageSlots.map((slotKey, index) => (
                    <button
                      key={slotKey}
                      type="button"
                      onClick={() => setActiveModalImageIndex(index)}
                      className={`aspect-4/3 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                        activeModalImageIndex === index
                          ? 'border-[#8C6D46] opacity-100'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <HotelImage
                        src={resolvePhotoSlot(slotKey)}
                        alt={`${activeSuiteModal.name} thumbnail ${index + 1}`}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Suite Information & Booking */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#4A4640] leading-relaxed mb-5">
                    {activeSuiteModal.fullDescription}
                  </p>

                  <div className="space-y-2 py-3 border-y border-[#1C1B19]/10 text-xs text-[#1C1B19] mb-5">
                    <div>
                      <span className="text-[#6E685F]">Bed Information: </span>
                      <span className="font-semibold">{activeSuiteModal.bedInfo}</span>
                    </div>
                    <div>
                      <span className="text-[#6E685F]">Guest Capacity: </span>
                      <span className="font-semibold">{activeSuiteModal.capacityLabel}</span>
                    </div>
                    <div>
                      <span className="text-[#6E685F]">Check-in / Out: </span>
                      <span className="font-mono-num font-semibold">
                        {HOTEL_CONFIG.policies.checkIn} / {HOTEL_CONFIG.policies.checkOut}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xs font-semibold text-[#1C1B19] mb-2.5">
                    Suite Features & Hospitality
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {activeSuiteModal.observedFeatures.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs text-[#4A4640] flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#8C6D46] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1C1B19]/10">
                  <p className="text-sm font-semibold text-[#1C1B19] font-mono-num">
                    {activeSuiteModal.referenceRateLabel}
                  </p>
                  <p className="text-xs text-[#6E685F] mb-4">
                    {activeSuiteModal.rateNote}
                  </p>

                  <div className="flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        const chosen = activeSuiteModal.name;
                        setActiveSuiteModal(null);
                        onSelectSuiteForBooking(chosen);
                      }}
                      className="w-full py-3 px-4 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Check Availability for {activeSuiteModal.name}
                    </button>
                    <a
                      href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Arish Luxury Suites, I would like to enquire about availability and the latest direct rate for the ${activeSuiteModal.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-lg border border-[#1C1B19]/20 hover:bg-[#EAE5DC] text-[#1C1B19] text-xs font-semibold text-center transition-colors"
                    >
                      Enquire Directly on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
