/* ==========================================================================
   SAMANGILE CONTENT DATA LAYER
   Edit this file to change site content — rooms, treatments, gallery items,
   settings — without touching page markup.
   ========================================================================== */

export const SITE_SETTINGS = {
  brandName: "Samangile Guest Lodge",
  wellnessBrand: "Umuzi Wellness House",
  tagline: "Come home to Umuzi.",
  phone: "(2716)0230905",
  whatsapp: "27655937203",
  email: "samangileinvestments@gmail.com",
  addressLine: "34 Japie Krige Street, Unitas Park Agricultural Holdings, Vereeniging, Gauteng",
  registrationDetails: "Samangile Investments & Projects - Reg.no: 2014/18554/07",
  checkIn: "13:00",
  checkOut: "10:00",
  social: {
    instagram: "#SamangileGuests",
    facebook: "#SamangileGuests"
  }
};

export const ROOMS = [
  {
    id: "room-1",
    name: "Serenity Nest",
    slug: "room-1",
    summary: "A quiet, earth-toned retreat opening onto the bush.",
    description: "Warm and grounded, the Serenity Nest pairs a dark-wood king bed with soft linen layers and hand-woven textures. Floor-to-ceiling sliding doors open directly onto a private patio facing the natural bushveld garden, filling the room with morning light. A woven armchair by the window makes it an easy spot to slow down with a book or morning coffee.",
    capacity: "Sleeps 2",
    beds: "King-size Double bed",
    bathroom: "en-suite with shower",
    amenities: ["Wi-Fi", "Tea & coffee", "Air conditioning"],
    priceFrom: "R2,350",
    active: true,
    images: [] // Add image paths here: ["images/rooms/serenity-nest-1.jpg", "images/rooms/serenity-nest-2.jpg"]
  },
  {
    id: "room-2",
    name: "Cloud 9",
    slug: "room-2",
    summary: "A bright room opening straight onto the private pool deck.",
    description: "Airy and light-filled, this room pairs a whitewashed slatted headboard with crisp white linen and a large mirror that draws in natural light. Wood floors and a security-gated sliding door lead directly out to a private, reed-fenced patio with its own pool — ideal for guests who want to step straight from bed into the water. A small bedside stool-table and cabinet round out the practical touches.",
    capacity: "Sleeps 2",
    beds: "King-size Double bed",
    bathroom: "en-suite with shower",
    amenities: ["Wi-Fi", "Tea & coffee", "Private pool access", "Private Parking"],
    priceFrom: "R3,800",
    active: true,
    images: [] // Add image paths here: ["images/rooms/cloud-9-1.jpg", "images/rooms/cloud-9-2.jpg"]
  },
  {
    id: "room-3",
    name: "Family Deluxe - Master",
    slug: "room-3",
    summary: "A sleek, striped double with soft neutral tones.",
    description: "A refined, contemporary double room finished in warm taupe stripes, with a dark wood headboard flanked by arched mirrors and bedside lamps. Clean lines and a neutral palette give the room a calm, boutique-hotel feel.",
    capacity: "Sleeps 2",
    beds: "King-size Double bed",
    bathroom: "en-suite with shower",
    amenities: ["Wi-Fi", "Garden view", "Air conditioning"],
    priceFrom: "R5,650",
    active: true,
    images: [] // Add image paths here: ["images/rooms/family-deluxe-master-1.jpg"]
  },
  {
    id: "room-4",
    name: "Family Deluxe - Twin Room",
    slug: "room-4",
    summary: "A twin-bed room layered in rich mahogany and safari textiles.",
    description: "Two twin beds dressed in deep burgundy and cream sit beneath a draped canopy of sheer netting, with African-print wall art and warm curtains giving the room a lodge-safari character. A dark wood wardrobe, writing desk, and wall-mounted TV round out the space — a good fit for friends or family sharing.",
    capacity: "Sleeps 2",
    beds: "Twin beds",
    bathroom: "en-suite with shower",
    amenities: ["Wi-Fi", "Safari decor", "Air conditioning"],
    priceFrom: "R5,650",
    active: true,
    images: [] // Add image paths here: ["images/rooms/family-deluxe-twin-1.jpg"]
  }
];

export const TREATMENTS = [
  {
    id: "t-1",
    name: "Relaxation Massage",
    category: "Massage",
    duration: "60 minutes",
    description: "A full-body massage designed to ease the tension of travel and settle you into lodge time. Using warmed oils and slow, deliberate strokes, this treatment works through the shoulders, back, and legs to release tightness and calm the nervous system — a quiet reset before dinner or a still afternoon by the pool.",
    price: "R1,350 - R1,950",
    active: true
  },
  {
    id: "t-2",
    name: "Couples Treatment",
    category: "Couples",
    duration: "90 minutes",
    description: "A shared side-by-side wellness experience for two. A luxurious pairing of treatments designed to connect and relax together.",
    price: "R3,500",
    active: true
  },
  {
    id: "t-3",
    name: "Express Facial",
    category: "Express",
    duration: "15–30 minutes",
    description: "A quick, targeted facial to refresh and rejuvenate.",
    price: "R550 - R750",
    active: true
  },
  {
    id: "t-4",
    name: "Foot Massage",
    category: "Express",
    duration: "30 minutes",
    description: "A soothing express treatment focused on the feet and lower legs.",
    price: "R550 - R750",
    active: true
  },
  {
    id: "t-5",
    name: "Deep Tissue Massage",
    category: "Standard",
    duration: "60 minutes",
    description: "An intensive full-body treatment using deeper pressure to release chronic muscle tension.",
    price: "R750",
    active: true
  },
  {
    id: "t-6",
    name: "Facial Treatment",
    category: "Standard",
    duration: "60 minutes",
    description: "A complete facial treatment customized to your skin type and needs.",
    price: "R750",
    active: true
  },
  {
    id: "t-7",
    name: "Massage + Facial Combo",
    category: "Luxury",
    duration: "90 minutes",
    description: "A luxurious combination of deep-tissue massage and facial treatment for complete relaxation.",
    price: "R950 - R1,200",
    active: true
  },
  {
    id: "t-8",
    name: "Half-Day Wellness Package",
    category: "Package",
    duration: "2–4 hours",
    description: "Multiple treatments bundled together for a full wellness experience.",
    price: "R950 - R1,200",
    active: true
  }
];

export const GALLERY = [
  { id: "g-1", category: "Exterior", conceptFlag: false },
  { id: "g-2", category: "Rooms", conceptFlag: false },
  { id: "g-3", category: "Bathrooms", conceptFlag: false },
  { id: "g-4", category: "Wellness", conceptFlag: false },
  { id: "g-5", category: "Garden", conceptFlag: false },
  { id: "g-6", category: "Dining", conceptFlag: false },
  { id: "g-7", category: "Details", conceptFlag: false },
  { id: "g-8", category: "Local Area", conceptFlag: false }
];

export const OWNER = {
  name: "Mr Nceba Nosenga",
  role: "Owner, Samangile Guest Lodge",
  speech: "Welcome to Samangile. This lodge started as a piece of land we loved and slowly became a place we wanted to share — with quiet mornings over the bushveld, good food, and the kind of rest that's hard to find these days. Every corner of it, from the rooms to the garden, was built with our own guests in mind: people who need to slow down, breathe, and feel properly looked after.\n\nWhether you're here for a weekend or a longer stay, our hope is simple — that you leave feeling more rested than when you arrived, and that some part of this place stays with you.\n\nThank you for choosing to spend that time with us.\n\nWarmly,\nMr Nceba Nosenga"
};
