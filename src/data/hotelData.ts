/**
 * Centralized Configuration & Data File for Arish Luxury Suites
 * Edit this single file to update hotel contact details, suite names,
 * descriptions, reference rates, images, FAQs, and Skardu attractions.
 */

export interface SuiteItem {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  bedInfo: string;
  capacityLabel: string;
  referenceRateLabel: string;
  rateNote: string;
  observedFeatures: string[];
  EditablePlaceholderNote: string;
  primaryImageSlot: string;
  galleryImageSlots: string[];
}

export interface GalleryItem {
  id: string;
  slotKey: string;
  title: string;
  category: 'Suites' | 'Exterior' | 'Interiors' | 'Dining';
  caption: string;
  alt: string;
  aspectRatio: '16:9' | '4:3';
  defaultSrc: string;
  matchedUploadFilenames: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AttractionItem {
  index: string;
  name: string;
  category: string;
  description: string;
  travelNote: string;
}

export const DEFAULT_IMAGES = {
  heroSunsetExterior: '/src/assets/images/arish_hero_sunset_exterior_1791127568636.jpg',
  daytimeGardenExterior: '/src/assets/images/arish_daytime_garden_exterior_1791127588942.jpg',
  executiveSuiteWingback: '/src/assets/images/arish_executive_suite_interior_1791127607166.jpg',
  deluxeSuiteVanity: '/src/assets/images/arish_deluxe_suite_vanity_1791127620505.jpg',
  grandLoungeDining: '/src/assets/images/arish_grand_lounge_dining_1791127633600.jpg',
};

export const HOTEL_CONFIG = {
  name: 'Arish Luxury Suites',
  category: '4-Star Hotel',
  tagline: 'Luxury, comfort and unforgettable stays in Skardu',
  heroSupportingText:
    'Experience refined hospitality surrounded by the extraordinary beauty of Skardu.',
  introductionHeading: 'A Peaceful Retreat in the Heart of Skardu',
  introductionBody:
    'Discover a peaceful retreat in the heart of Skardu. Arish Luxury Suites combines contemporary comfort, warm hospitality and convenient access to the spectacular landscapes of Gilgit-Baltistan.',
  rating: {
    score: '4.7',
    outOf: '5',
    reviewCount: 165,
    source: 'Google Reviews',
    // Editable placeholder URL: replace with direct Google Business Profile review link if desired
    googleReviewsUrl:
      'https://www.google.com/search?q=Arish+Luxury+Suites+Skardu+Reviews',
  },
  address: {
    street: '572 Sumbul Town, Olding',
    city: 'Skardu',
    postalCode: '16100',
    region: 'Gilgit-Baltistan',
    country: 'Pakistan',
    fullAddress: '572 Sumbul Town, Olding, Skardu, 16100, Pakistan',
    plusCode: '7JMW+24 Skardu',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Arish+Luxury+Suites+572+Sumbul+Town+Olding+Skardu+16100+Pakistan',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Arish%20Luxury%20Suites%20572%20Sumbul%20Town%20Olding%20Skardu%2016100%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  contact: {
    phoneDisplay: '+92 346 4166614',
    phoneHref: 'tel:+923464166614',
    whatsappNumber: '923464166614',
    whatsappDefaultMessage:
      'Hello Arish Luxury Suites, I would like to check room availability.',
    whatsappHref:
      'https://wa.me/923464166614?text=Hello%20Arish%20Luxury%20Suites%2C%20I%20would%20like%20to%20check%20room%20availability.',
  },
  policies: {
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    breakfastNote: 'Complimentary breakfast included (per current listing — confirm package when booking)',
  },
  pricing: {
    headlineRate: 'Suites from PKR 22,000/night',
    referenceDisclaimer:
      'Rates from PKR 22,000 — subject to availability and date. Rates vary according to dates, suite type and availability. Contact the hotel for the latest direct-booking offer.',
    directBookingBenefit:
      'Contact Arish Luxury Suites directly via WhatsApp or phone for the most accurate seasonal rates, flexible stay enquiries, and personalized suite selection.',
    otaComparisons: [
      {
        platform: 'Direct with Arish Luxury Suites',
        rateText: 'Best Available Direct Rate',
        details: 'Direct WhatsApp confirmation · Complimentary breakfast · Personalized assistance',
        isRecommended: true,
      },
      {
        platform: 'Booking.com (Reference)',
        rateText: 'From PKR 22,000',
        details: 'Reference listing: 1 double bed · Free breakfast · Free cancellation window applies',
        isRecommended: false,
      },
      {
        platform: 'Stayovia (Reference)',
        rateText: 'From PKR 26,000',
        details: 'Reference listing · Free cancellation window applies · Subject to date changes',
        isRecommended: false,
      },
    ],
  },
  breakfastSection: {
    kicker: 'Morning Hospitality',
    title: 'Start Your Morning Right',
    description:
      'Enjoy complimentary breakfast during your stay and begin your day before exploring the spectacular surroundings of Skardu.',
    supportingDetail:
      'Served in our spacious marble-floored dining and lounge hall, giving guests a calm, unhurried start before setting out into Gilgit-Baltistan.',
  },
  aboutSection: {
    kicker: 'About Arish Luxury Suites',
    title: 'Refined Mountain Hospitality in Olding, Skardu',
    paragraphs: [
      'Situated in the peaceful enclave of Sumbul Town, Olding, Arish Luxury Suites offers travelers a calm 4-star sanctuary characterized by distinctive stone architecture, manicured garden seating, and classically appointed interiors.',
      'Every suite is designed for restful comfort after a day in the mountains of Gilgit-Baltistan—featuring marble flooring, upholstered seating areas, warm lighting, and attentive personal service that has earned a 4.7 out of 5 rating across 165 Google reviews.',
    ],
    highlights: [
      {
        label: '4-Star Comfort',
        detail: 'Spacious suites with classical furnishings, upholstered seating, and tranquil interiors.',
      },
      {
        label: 'Warm Hospitality',
        detail: 'Attentive direct communication and personalized guest care from arrival to departure.',
      },
      {
        label: 'Peaceful Setting',
        detail: 'Stone-clad villa architecture with an enclosed garden lawn in Olding, Skardu.',
      },
    ],
  },
  suites: [
    {
      id: 'deluxe-suite',
      name: 'Deluxe Suite',
      subtitle: 'Classical Comfort & Dressing Vanity',
      shortDescription:
        'Elegantly appointed suite featuring a tufted double bed, ornate vanity mirror and dresser, plush wingback armchairs, and polished marble flooring.',
      fullDescription:
        'Designed for couples and discerning travelers seeking a tranquil retreat in Skardu. The Deluxe Suite combines classical gold-accented woodwork, a cushioned foot bench, twin velvet wingback armchairs with a coffee table, and soft recessed ceiling illumination.',
      bedInfo: '1 Double Bed (Reference listing)',
      capacityLabel: 'Ideal for Couple / Standard Occupancy (Confirm on enquiry)',
      referenceRateLabel: 'Rates from PKR 22,000 — subject to availability and date',
      rateNote: 'Complimentary breakfast included · Contact directly for current seasonal rate',
      observedFeatures: [
        'Tufted double bed with crisp white linens',
        'Two velvet wingback armchairs & coffee table',
        'Ornate vanity mirror & wooden dresser',
        'Climate control & ceiling fan',
        'Wall-mounted flat-screen TV',
        'Complimentary morning breakfast',
      ],
      EditablePlaceholderNote:
        'Suite title and exact guest capacity can be customized by management.',
      primaryImageSlot: 'deluxeSuiteVanity',
      galleryImageSlots: ['deluxeSuiteVanity', 'executiveSuiteWingback', 'daytimeGardenExterior'],
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      subtitle: 'Spacious Suite with Wingback Lounge Seating',
      shortDescription:
        'Refined suite with an upholstered headboard, cushioned bench, tall tufted wingback chairs by full-height drapery, and climate control.',
      fullDescription:
        'Our Executive Suite offers generous floor space with polished white marble tiling, warm wall sconces, a signature tufted bed with foot bench, and a dedicated armchair seating area ideal for unwinding with tea after exploring Skardu.',
      bedInfo: '1 Double Bed · Spacious Layout (Confirm configuration on booking)',
      capacityLabel: 'Adults & Small Families (Confirm exact capacity on enquiry)',
      referenceRateLabel: 'Contact for latest direct-booking rate',
      rateNote: 'Reference rates from PKR 22,000–26,000 depending on dates & occupancy',
      observedFeatures: [
        'Upholstered king/double bed & tufted bench',
        'Pair of tall tufted wingback armchairs',
        'Full-height blackout privacy drapery',
        'Split air-conditioning / heating unit',
        'Polished marble flooring & warm lighting',
        'Complimentary morning breakfast',
      ],
      EditablePlaceholderNote:
        'Suite title and exact guest capacity can be customized by management.',
      primaryImageSlot: 'executiveSuiteWingback',
      galleryImageSlots: ['executiveSuiteWingback', 'deluxeSuiteVanity', 'grandLoungeDining'],
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      subtitle: 'Extended Living Area with Sofa & Lounge Seating',
      shortDescription:
        'Generously proportioned suite combining a comfortable sleeping area with a full sofa lounge, armchairs, coffee table, and flat-screen television.',
      fullDescription:
        'Tailored for families or small groups traveling together through Gilgit-Baltistan. The Family Suite provides an integrated living space with a three-seater sofa, two matching armchairs around a coffee table, a wall-mounted flat-screen TV, and direct access to the hotel’s grand lounge and garden.',
      bedInfo: 'Double Bed + Full Sofa Lounge Area (Confirm extra bedding on enquiry)',
      capacityLabel: 'Suited for Families & Group Stays (Confirm capacity on enquiry)',
      referenceRateLabel: 'Contact for latest family suite rate',
      rateNote: 'Direct WhatsApp enquiry recommended for multi-guest or multi-night stays',
      observedFeatures: [
        'Ornate tufted bed with premium bedding',
        'Full 3-seater sofa & twin lounge armchairs',
        'Coffee table & wall-mounted flat-screen TV',
        'Access to grand velvet lounge & garden lawn',
        'Complimentary morning breakfast',
      ],
      EditablePlaceholderNote:
        'Suite title and exact guest capacity can be customized by management.',
      primaryImageSlot: 'grandLoungeDining',
      galleryImageSlots: ['grandLoungeDining', 'executiveSuiteWingback', 'heroSunsetExterior'],
    },
  ] as SuiteItem[],
  gallery: [
    {
      id: 'gal-1',
      slotKey: 'heroSunsetExterior',
      title: 'Arish Luxury Suites at Dusk',
      category: 'Exterior',
      caption:
        'Twilight view of Arish Luxury Suites in Olding, Skardu, showcasing the stone facade, terracotta roof, private courtyard driveway, and mountain sunset.',
      alt: 'Arish Luxury Suites 4-star hotel exterior at sunset in Olding, Skardu, Gilgit-Baltistan',
      aspectRatio: '16:9',
      defaultSrc: DEFAULT_IMAGES.heroSunsetExterior,
      matchedUploadFilenames: ['302756581.jpg'],
    },
    {
      id: 'gal-2',
      slotKey: 'daytimeGardenExterior',
      title: 'Stone Facade & Garden Lawn Seating',
      category: 'Exterior',
      caption:
        'Daytime view of the entrance portico, private lawn seating with garden umbrella, and surrounding Skardu peaks.',
      alt: 'Daytime exterior and green lawn garden seating at Arish Luxury Suites Skardu',
      aspectRatio: '4:3',
      defaultSrc: DEFAULT_IMAGES.daytimeGardenExterior,
      matchedUploadFilenames: ['Arish-Luxury-Suites-skardu (9).jpg', 'Arish-Luxury-Suites-skardu'],
    },
    {
      id: 'gal-3',
      slotKey: 'executiveSuiteWingback',
      title: 'Executive Suite Bedroom & Armchairs',
      category: 'Suites',
      caption:
        'Spacious suite interior featuring a tufted double bed, cushioned foot bench, and twin velvet wingback armchairs.',
      alt: 'Executive Suite interior with tufted bed and wingback armchairs at Arish Luxury Suites Skardu',
      aspectRatio: '4:3',
      defaultSrc: DEFAULT_IMAGES.executiveSuiteWingback,
      matchedUploadFilenames: [
        'executive-quad-suite-img1-arish-luxury-suites-img11-arish12.jpg',
        'executive-quad-suite',
      ],
    },
    {
      id: 'gal-4',
      slotKey: 'deluxeSuiteVanity',
      title: 'Deluxe Suite & Ornate Dressing Vanity',
      category: 'Suites',
      caption:
        'Suite view highlighting the gold-framed vanity mirror, wooden dresser, coffered ceiling, and marble floor.',
      alt: 'Deluxe Suite bedroom with ornate gold vanity mirror at Arish Luxury Suites in Skardu',
      aspectRatio: '4:3',
      defaultSrc: DEFAULT_IMAGES.deluxeSuiteVanity,
      matchedUploadFilenames: ['365453250.jpg', 'images.jpeg'],
    },
    {
      id: 'gal-5',
      slotKey: 'grandLoungeDining',
      title: 'Grand Velvet Lounge & Breakfast Dining Hall',
      category: 'Dining',
      caption:
        'Expansive marble-floored lounge with curved velvet sofas, chandelier lighting, and the morning breakfast dining area.',
      alt: 'Grand lounge and complimentary breakfast dining area at Arish Luxury Suites Skardu',
      aspectRatio: '16:9',
      defaultSrc: DEFAULT_IMAGES.grandLoungeDining,
      matchedUploadFilenames: ['304414298.jpg'],
    },
  ] as GalleryItem[],
  exploreSkardu: [
    {
      index: '01',
      name: 'Shangrila Resort / Lower Kachura Lake',
      category: 'Alpine Lake & Gardens',
      description:
        'Renowned for its tranquil waters and surrounding mountain reflections, Lower Kachura Lake is one of Skardu’s most iconic scenic landmarks.',
      travelNote: 'Accessible from Skardu town via main valley road',
    },
    {
      index: '02',
      name: 'Upper Kachura Lake',
      category: 'Pristine Mountain Lake',
      description:
        'A crystal-clear alpine lake framed by dramatic rocky slopes and orchards, cherished by nature lovers and photographers.',
      travelNote: 'Popular half-day excursion in Kachura valley',
    },
    {
      index: '03',
      name: 'Satpara Lake',
      category: 'High-Altitude Turquoise Lake',
      description:
        'Fed by glacial meltwaters from the Deosai plains, Satpara Lake dazzles visitors with vivid turquoise hues against rugged peaks.',
      travelNote: 'Scenic drive south of Skardu along the Deosai route',
    },
    {
      index: '04',
      name: 'Skardu Fort (Kharpocho)',
      category: 'Historic Heritage',
      description:
        'Perched high on a cliff overlooking the confluence of the Indus River and Skardu Valley, offering panoramic vistas of the town and mountains.',
      travelNote: 'Located in central Skardu overlooking the valley',
    },
    {
      index: '05',
      name: 'Katpana & Sarfaranga Cold Desert',
      category: 'High-Altitude Sand Dunes',
      description:
        'Extraordinary wind-sculpted white sand dunes set beside snow-dusted Karakoram peaks—a landscape unique to Gilgit-Baltistan.',
      travelNote: 'Ideal for late afternoon and sunset visits',
    },
    {
      index: '06',
      name: 'Shigar Valley',
      category: 'Heritage & Orchards',
      description:
        'Gateway to the mighty Karakoram range, known for historic wooden and stone architecture, fruit orchards, and serene river valleys.',
      travelNote: 'Rewarding day trip across the Indus River',
    },
  ] as AttractionItem[],
  faqs: [
    {
      question: 'What time is check-in?',
      answer: 'Check-in begins at 2:00 PM.',
    },
    {
      question: 'What time is check-out?',
      answer: 'Check-out is at 12:00 PM.',
    },
    {
      question: 'Is breakfast included?',
      answer:
        'The supplied current listing indicates complimentary breakfast. Guests should confirm the latest package when booking.',
    },
    {
      question: 'How can I make a reservation?',
      answer:
        'Guests can contact Arish Luxury Suites directly by phone or WhatsApp at +92 346 4166614, or use the direct Check Availability enquiry form on this website.',
    },
    {
      question: 'Where is Arish Luxury Suites located?',
      answer:
        '572 Sumbul Town, Olding, Skardu, 16100, Gilgit-Baltistan, Pakistan (Plus Code: 7JMW+24 Skardu).',
    },
    {
      question: 'Can I confirm current rates through WhatsApp?',
      answer:
        'Yes. Guests can contact the hotel directly on WhatsApp (+92 346 4166614) to confirm real-time room availability and current direct-booking rates.',
    },
  ] as FAQItem[],
};
