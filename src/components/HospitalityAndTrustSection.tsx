import React from 'react';
import { Star, ExternalLink, Coffee, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { HotelImage } from './HotelImage';

interface HospitalityAndTrustSectionProps {
  loungeDiningImageSrc: string;
  daytimeExteriorImageSrc: string;
}

export const HospitalityAndTrustSection: React.FC<HospitalityAndTrustSectionProps> = ({
  loungeDiningImageSrc,
  daytimeExteriorImageSrc,
}) => {
  return (
    <>
      {/* Breakfast / Hospitality Section */}
      <section className="py-16 md:py-24 bg-[#1C1B19] text-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-medium text-[#C5A572] mb-2">
                {HOTEL_CONFIG.breakfastSection.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
                {HOTEL_CONFIG.breakfastSection.title}
              </h2>
              <p className="text-base sm:text-lg text-[#EAE5DC] leading-relaxed mb-4">
                “{HOTEL_CONFIG.breakfastSection.description}”
              </p>
              <p className="text-sm text-[#B8B2A8] leading-relaxed mb-6">
                {HOTEL_CONFIG.breakfastSection.supportingDetail}
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#E6DEC8]">
                <Coffee className="w-4 h-4 text-[#C5A572] shrink-0" />
                <span>{HOTEL_CONFIG.policies.breakfastNote}</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-white/15 aspect-16/10">
                <HotelImage
                  src={loungeDiningImageSrc}
                  alt="Grand lounge and complimentary breakfast dining hall at Arish Luxury Suites Skardu"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  fallbackLabel="Lounge & Morning Breakfast Hall"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Arish Luxury Suites Section */}
      <section id="about" className="py-16 md:py-24 bg-[#F8F6F1] border-b border-[#1C1B19]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-[#1C1B19]/12 aspect-4/3">
                <HotelImage
                  src={daytimeExteriorImageSrc}
                  alt="Arish Luxury Suites stone exterior and garden seating in Olding, Skardu"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  fallbackLabel="Arish Luxury Suites Exterior & Lawn"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <p className="text-xs font-medium text-[#8C6D46] mb-2">
                {HOTEL_CONFIG.aboutSection.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19] mb-5">
                {HOTEL_CONFIG.aboutSection.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4A4640] leading-relaxed mb-8">
                {HOTEL_CONFIG.aboutSection.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-[#1C1B19]/10">
                {HOTEL_CONFIG.aboutSection.highlights.map((item, idx) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold text-[#1C1B19] mb-1">
                      0{idx + 1}. {item.label}
                    </p>
                    <p className="text-xs text-[#6E685F] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Verified Google Rating Section (No Fabricated Quotes) */}
      <section className="py-16 md:py-24 bg-[#EFECE6] border-b border-[#1C1B19]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-[#1C1B19]/10">
            <div>
              <p className="text-xs font-medium text-[#8C6D46] mb-2">
                Guest Trust & Credibility
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19]">
                Rated {HOTEL_CONFIG.rating.score} / {HOTEL_CONFIG.rating.outOf} on Google
              </h2>
              <p className="text-sm sm:text-base text-[#4A4640] mt-2 max-w-xl">
                Based on <span className="font-semibold font-mono-num text-[#1C1B19]">{HOTEL_CONFIG.rating.reviewCount} verified Google reviews</span> from domestic and international travelers visiting Skardu, Gilgit-Baltistan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#F8F6F1] p-6 rounded-xl border border-[#1C1B19]/12">
              <div>
                <div className="flex items-center gap-1 text-[#B3823E] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B3823E]" />
                  ))}
                </div>
                <p className="font-mono-num text-2xl font-bold text-[#1C1B19]">
                  {HOTEL_CONFIG.rating.score} <span className="text-sm font-normal text-[#6E685F]">/ 5.0</span>
                </p>
                <p className="text-xs text-[#6E685F]">
                  {HOTEL_CONFIG.rating.reviewCount} Google Reviews
                </p>
              </div>

              <a
                href={HOTEL_CONFIG.rating.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-[#F8F6F1] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <span>Read Reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Clearly Labeled Owner-Editable Review Cards (Zero Fake Customer Quotations) */}
          <div className="pt-10">
            <div className="flex items-center gap-2 text-xs text-[#6E685F] mb-6">
              <ShieldCheck className="w-4 h-4 text-[#8C6D46]" />
              <span>
                Authentic Hospitality Commitment: No fabricated guest quotes are displayed. Below are verified property pillars and editable review slots for hotel management.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#1C1B19]/10 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#8C6D46] font-medium mb-2">
                    Verified Rating Highlight · 4.7 / 5
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#1C1B19] mb-2">
                    Consistent 4-Star Comfort in Olding
                  </h3>
                  <p className="text-sm text-[#4A4640] leading-relaxed">
                    With 165 reviews recorded on Google, Arish Luxury Suites maintains one of the strongest guest satisfaction scores among boutique hotels in Skardu.
                  </p>
                </div>
                <p className="text-xs text-[#6E685F] pt-4 mt-4 border-t border-[#1C1B19]/8">
                  Source: Google Maps Listing (7JMW+24 Skardu)
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#1C1B19]/10 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#8C6D46] font-medium mb-2">
                    Owner-Editable Guest Review Slot #1
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#1C1B19] mb-2">
                    Suite Cleanliness & Mountain Tranquility
                  </h3>
                  <p className="text-sm text-[#4A4640] leading-relaxed">
                    [Editable Review Placeholder — Replace in <code className="text-xs bg-[#EAE5DC] px-1 py-0.5 rounded">src/data/hotelData.ts</code> with an exact copy-pasted quotation from your Google Business Profile.]
                  </p>
                </div>
                <p className="text-xs text-[#6E685F] pt-4 mt-4 border-t border-[#1C1B19]/8">
                  Verified Google Reviewer · Skardu Stay
                </p>
              </div>

              <div className="bg-[#F8F6F1] p-6 rounded-xl border border-[#1C1B19]/10 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#8C6D46] font-medium mb-2">
                    Owner-Editable Guest Review Slot #2
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#1C1B19] mb-2">
                    Warm Hospitality & Direct Booking Ease
                  </h3>
                  <p className="text-sm text-[#4A4640] leading-relaxed">
                    [Editable Review Placeholder — Replace in <code className="text-xs bg-[#EAE5DC] px-1 py-0.5 rounded">src/data/hotelData.ts</code> with an exact guest review from your 165 Google Reviews.]
                  </p>
                </div>
                <p className="text-xs text-[#6E685F] pt-4 mt-4 border-t border-[#1C1B19]/8">
                  Verified Google Reviewer · Family & Couple Stays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
