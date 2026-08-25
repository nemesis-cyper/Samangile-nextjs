/* ==========================================================================
   SAMANGILE CONTENT DATA LAYER
   Edit this file to change site content — rooms, treatments, gallery items,
   settings — without touching page markup. Fields marked "PLACEHOLDER"
   must be confirmed/replaced by the client before launch (see README).
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
    name: "serenity nest",
    slug: "room-1",
    summary: "A quiet, earth-toned retreat opening onto the bush
    description: "Warm and grounded, the Serenity Nest pairs a dark-wood king bed with soft linen layers and hand-woven textures. Floor-to-ceiling sliding doors open directly onto a private patio, filling the room with morning light.",
    ...
    capacity: "Sleeps 2",
    beds: "King-size Double bed",
    bathroom: "en-suit with shower",
    amenities: ["Wi-Fi", "Tea & coffee", "Air conditioning"],
    priceFrom: "R2.350",
    active: true
  },
  {
    id: "room-2",
    name: "Cloud 9",
    slug: "room-2",
    summary:"A bright room opening straight onto the private pool deck.",
    description: Airy and light-filled, wood floors and a security-gated sliding door lead directly out to a private, reed-fenced patio with its own pool — ideal for guests who want to step straight from bed into the water",
    capacity: "Sleeps 2",
    beds: "King-size Double bed",
    bathroom: "en-suit with shower",
    amenities: ["Wi-Fi", "Tea-Coffee", Private Parking"],
    priceFrom: "R3.800",
    active: true
  },
  {
    id: "room-3",
    name: "Family Deluxe",
    slug: "room-3",
    summary:"A sleek, striped double with soft neutral tones.",
    description:"A refined, contemporary double room finished in warm taupe stripes,a twin-bed room layered in rich mahogany and safari textiles.",
    capacity: "Sleeps 2–4",
    beds: "King-size Double bed with twin-beds ",
    bathroom: "en-suit with shower",
    amenities: ["Wi-Fi", "Garden view"],
    priceFrom: "R5.650",
    active: true
  }
];

export const TREATMENTS = [
  { id: "t-1", name: "Relaxation Massage", category: "Relaxation", duration: "60 min (confirm)", description: "Restorative full-body massage. Does not diagnose, cure, or medically treat any condition.", price: "R1.800", active: true },
  { id: "t-2", name: "Couples Treatment", category: "Couples", duration: "90 min (confirm)", description: "A shared side-by-side wellness experience for two.", price: "R3.500", active: true },
  { id: "t-3", name: "Body Treatment", category: "Body", duration: "45 min (confirm)", description: "Nourishing body treatment —.", price: "P.O.A", active: true }
];

export const GALLERY = [
  { id: "g-1", category: "Exterior", conceptFlag: true },
  { id: "g-2", category: "Rooms", conceptFlag: true },
  { id: "g-3", category: "Bathrooms", conceptFlag: true },
  { id: "g-4", category: "Wellness", conceptFlag: true },
  { id: "g-5", category: "Garden", conceptFlag: true },
  { id: "g-6", category: "Dining", conceptFlag: true },
  { id: "g-7", category: "Details", conceptFlag: true },
  { id: "g-8", category: "Local Area", conceptFlag: true }
];

export const OWNER = {
  name: "Mr Nceba Nosenga",
  role: "Owner, Samangile Guest Lodge",
  speech:"Welcome to Samangile. This lodge started as a piece of land we loved and slowly became a place we wanted to share — with quiet mornings over the bushveld, good food, and the kind of rest that's hard to find these days. Every corner of it, from the rooms to the garden, was built with our own guests in mind: people who need to slow down, breathe, and feel properly looked after.
Whether you're here for a weekend or a longer stay, our hope is simple — that you leave feeling more rested than when you arrived, and that some part of this place stays with you. Thank you for choosing to spend that time with us.
Warmly,
Mr Nceba Nosenga"
};
