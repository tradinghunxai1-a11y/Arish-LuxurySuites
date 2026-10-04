import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

export const LocationAndExploreSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pb-20 border-b border-[#1C1B19]/10">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#8C6D46] mb-2">
              Location & Directions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19] mb-4">
              Stay in Skardu
            </h2>
            <p className="text-sm sm:text-base text-[#4A4640] leading-relaxed mb-6">
              Located in the peaceful neighborhood of Sumbul Town, Olding, Arish Luxury Suites provides a serene base in Skardu with convenient road access for travelers exploring the lakes, forts, and valleys of Gilgit-Baltistan.
            </p>

            <div className="bg-[#EFECE6] p-6 rounded-xl border border-[#1C1B19]/10 space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8C6D46] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-[#6E685F]">Hotel Address</p>
                  <p className="text-sm font-semibold text-[#1C1B19] mt-0.5">
                    {HOTEL_CONFIG.address.street}, {HOTEL_CONFIG.address.city},{' '}
                    {HOTEL_CONFIG.address.postalCode}
                  </p>
                  <p className="text-xs text-[#4A4640]">
                    {HOTEL_CONFIG.address.region}, {HOTEL_CONFIG.address.country}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1C1B19]/10 flex items-center justify-between text-xs">
                <span className="text-[#6E685F]">Google Maps Plus Code</span>
                <span className="font-mono-num font-semibold text-[#1C1B19]">
                  {HOTEL_CONFIG.address.plusCode}
                </span>
              </div>

              <div className="pt-3 border-t border-[#1C1B19]/10 flex items-center justify-between text-xs">
                <span className="text-[#6E685F]">Check-in / Check-out</span>
                <span className="font-mono-num font-semibold text-[#1C1B19]">
                  {HOTEL_CONFIG.policies.checkIn} · {HOTEL_CONFIG.policies.checkOut}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={HOTEL_CONFIG.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-[#F8F6F1] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-[#C5A572]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-[#1C1B19]/15 bg-[#EFECE6] h-[360px] sm:h-[420px] relative">
              <iframe
                title="Arish Luxury Suites Map Location in Olding, Skardu"
                src={HOTEL_CONFIG.address.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-[#6E685F] mt-2.5 flex items-center justify-between">
              <span>572 Sumbul Town, Olding, Skardu, 16100</span>
              <span className="font-mono-num">Plus Code: 7JMW+24 Skardu</span>
            </p>
          </div>
        </div>

        {/* Explore Skardu Section */}
        <div className="pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-medium text-[#8C6D46] mb-2">
                Discover Gilgit-Baltistan
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19]">
                Explore the Extraordinary Landscapes of Skardu
              </h2>
            </div>
            <p className="text-sm text-[#4A4640] max-w-md leading-relaxed">
              Guests staying at Arish Luxury Suites enjoy a restful base for multi-day journeys across Skardu’s alpine lakes, historic forts, and high-altitude valleys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_CONFIG.exploreSkardu.map((place) => (
              <article
                key={place.name}
                className="bg-[#EFECE6] p-6 rounded-xl border border-[#1C1B19]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8C6D46] font-medium mb-2">
                    <span>
                      {place.index}. {place.category}
                    </span>
                    <Compass className="w-4 h-4 opacity-70" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#1C1B19] mb-2.5">
                    {place.name}
                  </h3>
                  <p className="text-sm text-[#4A4640] leading-relaxed">
                    {place.description}
                  </p>
                </div>

                <p className="text-xs text-[#6E685F] pt-4 mt-5 border-t border-[#1C1B19]/10">
                  {place.travelNote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
