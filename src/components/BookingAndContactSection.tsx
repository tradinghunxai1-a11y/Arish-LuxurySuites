import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Navigation,
  Calendar,
  ChevronDown,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

interface BookingAndContactSectionProps {
  preselectedSuite: string;
}

export const BookingAndContactSection: React.FC<BookingAndContactSectionProps> = ({
  preselectedSuite,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  const tomorrowStr = tomorrowDate.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [preferredSuite, setPreferredSuite] = useState(
    preselectedSuite || HOTEL_CONFIG.suites[0].name
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [formError, setFormError] = useState('');
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);
  const [preparedMessageText, setPreparedMessageText] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (preselectedSuite) {
      setPreferredSuite(preselectedSuite);
    }
  }, [preselectedSuite]);

  const buildWhatsAppEnquiryMessage = () => {
    const lines = [
      `Hello *${HOTEL_CONFIG.name}*, I would like to check room availability and direct-booking rates:`,
      ``,
      `• *Guest Name:* ${fullName.trim()}`,
      `• *Check-in Date:* ${checkIn}`,
      `• *Check-out Date:* ${checkOut}`,
      `• *Number of Guests:* ${adults} Adult(s), ${children} Child(ren)`,
      `• *Preferred Suite:* ${preferredSuite}`,
      `• *Phone / WhatsApp:* ${phone.trim()}`,
      email.trim() ? `• *Email:* ${email.trim()}` : null,
      specialRequest.trim() ? `• *Special Request:* ${specialRequest.trim()}` : null,
      ``,
      `Please let me know the availability and latest rate. Thank you!`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setFormError('Please enter a valid phone or WhatsApp number.');
      return;
    }
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setFormError('Please select a check-out date that is after your check-in date.');
      return;
    }

    const messageText = buildWhatsAppEnquiryMessage();
    const waUrl = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    setPreparedMessageText(messageText);
    setPreparedWhatsAppUrl(waUrl);
  };

  const handleCopyMessage = async () => {
    if (!preparedMessageText) return;
    try {
      await navigator.clipboard.writeText(preparedMessageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#EFECE6] border-t border-[#1C1B19]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Booking Enquiry Form */}
          <div id="booking-form" className="lg:col-span-7">
            <div className="bg-[#F8F6F1] p-6 sm:p-8 lg:p-10 rounded-xl border border-[#1C1B19]/12">
              <p className="text-xs font-medium text-[#8C6D46] mb-2">
                Direct Reservation Enquiry
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1B19] mb-2">
                Check Availability & Direct Rates
              </h2>
              <p className="text-sm text-[#4A4640] mb-6">
                Final availability and rates will be confirmed directly by Arish Luxury Suites.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Check-in & Check-out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="checkin-date"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Check-in Date *
                    </label>
                    <input
                      id="checkin-date"
                      type="date"
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] font-mono-num focus:outline-2 focus:outline-[#8C6D46]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-date"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Check-out Date *
                    </label>
                    <input
                      id="checkout-date"
                      type="date"
                      min={checkIn || todayStr}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] font-mono-num focus:outline-2 focus:outline-[#8C6D46]"
                    />
                  </div>
                </div>

                {/* Adults, Children & Preferred Suite */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="adults-count"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Number of Adults
                    </label>
                    <select
                      id="adults-count"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="children-count"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Number of Children
                    </label>
                    <select
                      id="children-count"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-suite"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Preferred Suite
                    </label>
                    <select
                      id="preferred-suite"
                      value={preferredSuite}
                      onChange={(e) => setPreferredSuite(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                    >
                      {HOTEL_CONFIG.suites.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Any Available Suite">Any Available Suite</option>
                    </select>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      placeholder="e.g., Ahmed Khan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guest-phone"
                      className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="guest-phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] font-mono-num focus:outline-2 focus:outline-[#8C6D46]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guest-email"
                    className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="special-request"
                    className="block text-xs font-semibold text-[#1C1B19] mb-1.5"
                  >
                    Special Request (Optional)
                  </label>
                  <textarea
                    id="special-request"
                    rows={3}
                    placeholder="Arrival time, extra bedding enquiry, family stay notes..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#1C1B19]/20 text-sm text-[#1C1B19] focus:outline-2 focus:outline-[#8C6D46]"
                  />
                </div>

                {formError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-[#991B1B]/10 border border-[#991B1B]/30 text-xs font-medium text-[#7F1D1D]"
                  >
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-[#F8F6F1] font-semibold text-sm sm:text-base transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C5A572]" />
                  <span>Check Availability</span>
                </button>

                <p className="text-xs text-[#6E685F] text-center">
                  Final availability and rates will be confirmed directly by Arish Luxury Suites.
                </p>
              </form>

              {/* Prepared WhatsApp Enquiry Dispatch Box */}
              {preparedWhatsAppUrl && (
                <div className="mt-6 p-5 rounded-xl bg-[#1F5138]/10 border border-[#1F5138]/30 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1F5138] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-[#1C1B19]">
                        Your Availability Enquiry Is Ready to Send
                      </h3>
                      <p className="text-xs text-[#4A4640] mt-0.5">
                        Click below to send your pre-filled reservation details directly to Arish Luxury Suites on WhatsApp ({HOTEL_CONFIG.contact.phoneDisplay}).
                      </p>
                    </div>
                  </div>

                  <pre className="p-3.5 rounded-lg bg-white border border-[#1C1B19]/10 text-xs text-[#1C1B19] whitespace-pre-wrap font-sans leading-relaxed">
                    {preparedMessageText}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={preparedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-5 rounded-lg bg-[#1F5138] hover:bg-[#183F2B] text-white text-xs sm:text-sm font-semibold text-center inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp ({HOTEL_CONFIG.contact.phoneDisplay})</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="py-3 px-4 rounded-lg border border-[#1C1B19]/20 bg-white hover:bg-[#EAE5DC] text-xs font-semibold text-[#1C1B19] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#1F5138]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact Information & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Information Card */}
            <div className="bg-[#1C1B19] text-[#F8F6F1] p-6 sm:p-8 rounded-xl">
              <p className="text-xs font-medium text-[#C5A572] mb-2">
                Direct Hotel Contact
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                {HOTEL_CONFIG.name}
              </h3>

              <div className="space-y-4 text-sm text-[#EAE5DC] pb-6 border-b border-white/15">
                <div>
                  <p className="text-xs text-[#A8A29A]">Address</p>
                  <p className="font-medium mt-0.5">{HOTEL_CONFIG.address.street}</p>
                  <p className="font-medium">
                    {HOTEL_CONFIG.address.city} {HOTEL_CONFIG.address.postalCode}
                  </p>
                  <p className="text-[#C2BCB2]">
                    {HOTEL_CONFIG.address.region}, {HOTEL_CONFIG.address.country}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#A8A29A]">Phone / WhatsApp</p>
                  <p className="font-mono-num text-base font-semibold text-white mt-0.5">
                    {HOTEL_CONFIG.contact.phoneDisplay}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs text-[#A8A29A]">Check-in</p>
                    <p className="font-mono-num font-semibold text-white mt-0.5">
                      {HOTEL_CONFIG.policies.checkIn}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A8A29A]">Check-out</p>
                    <p className="font-mono-num font-semibold text-white mt-0.5">
                      {HOTEL_CONFIG.policies.checkOut}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6">
                <a
                  href={HOTEL_CONFIG.contact.phoneHref}
                  className="py-3 px-4 rounded-lg bg-[#C5A572] hover:bg-[#B3915D] text-[#1C1B19] text-xs font-semibold text-center inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={HOTEL_CONFIG.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg bg-[#1F5138] hover:bg-[#183F2B] text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={HOTEL_CONFIG.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="#booking-form"
                  className="py-3 px-4 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Your Stay</span>
                </a>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-[#F8F6F1] p-6 sm:p-8 rounded-xl border border-[#1C1B19]/12">
              <p className="text-xs font-medium text-[#8C6D46] mb-1">
                Guest Information
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#1C1B19] mb-5">
                Frequently Asked Questions
              </h3>

              <div className="divide-y divide-[#1C1B19]/10">
                {HOTEL_CONFIG.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between text-left gap-4 py-1 text-sm font-semibold text-[#1C1B19] hover:text-[#8C6D46] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 text-[#6E685F] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed mt-2 pr-4">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
