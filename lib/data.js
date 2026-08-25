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
  phone: "PLACEHOLDER — client to confirm",
  whatsapp: "PLACEHOLDER — client to confirm (e.g. 27XXXXXXXXX)",
  email: "PLACEHOLDER — client to confirm",
  addressLine: "34 Japie Krige Street, Unitas Park Agricultural Holdings, Vereeniging, Gauteng",
  registrationDetails: "PLACEHOLDER — registered business/entity details (ECT Act requires this in the footer)",
  checkIn: "PLACEHOLDER — e.g. 14:00",
  checkOut: "PLACEHOLDER — e.g. 10:00",
  social: {
    instagram: "PLACEHOLDER",
    facebook: "PLACEHOLDER"
  }
};

export const ROOMS = [
  {
    id: "room-1",
    name: "PLACEHOLDER Room Name",
    slug: "room-1",
    summary: "One-line promise — to be confirmed with client.",
    description: "Full room description pending final room inventory and finishes from the client.",
    capacity: "Sleeps 2 (PLACEHOLDER)",
    beds: "PLACEHOLDER",
    bathroom: "PLACEHOLDER",
    amenities: ["Wi-Fi (confirm)", "Tea & coffee (confirm)", "Air conditioning (confirm)"],
    priceFrom: "Check availability",
    active: true
  },
  {
    id: "room-2",
    name: "PLACEHOLDER Room Name",
    slug: "room-2",
    summary: "One-line promise — to be confirmed with client.",
    description: "Full room description pending final room inventory and finishes from the client.",
    capacity: "Sleeps 2 (PLACEHOLDER)",
    beds: "PLACEHOLDER",
    bathroom: "PLACEHOLDER",
    amenities: ["Wi-Fi (confirm)", "Parking (confirm)"],
    priceFrom: "Check availability",
    active: true
  },
  {
    id: "room-3",
    name: "PLACEHOLDER Room Name",
    slug: "room-3",
    summary: "One-line promise — to be confirmed with client.",
    description: "Full room description pending final room inventory and finishes from the client.",
    capacity: "Sleeps 2–3 (PLACEHOLDER)",
    beds: "PLACEHOLDER",
    bathroom: "PLACEHOLDER",
    amenities: ["Wi-Fi (confirm)", "Garden view (confirm)"],
    priceFrom: "Check availability",
    active: true
  }
];

export const TREATMENTS = [
  { id: "t-1", name: "Relaxation Massage", category: "Relaxation", duration: "60 min (confirm)", description: "Restorative full-body massage. Does not diagnose, cure, or medically treat any condition.", price: "PLACEHOLDER", active: true },
  { id: "t-2", name: "Couples Treatment", category: "Couples", duration: "90 min (confirm)", description: "A shared side-by-side wellness experience for two.", price: "PLACEHOLDER", active: true },
  { id: "t-3", name: "Body Treatment", category: "Body", duration: "45 min (confirm)", description: "Nourishing body treatment — final menu pending client confirmation.", price: "PLACEHOLDER", active: true }
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
  name: "PLACEHOLDER — Owner's name",
  role: "Owner & Founder, Samangile Guest Lodge",
  speech: "PLACEHOLDER — the owner's welcome message / thanks & acknowledgement will go here once supplied. Keep the tone warm, personal and first-person; this is the human voice behind the brand.",
  photoNote: "PLACEHOLDER — owner portrait to be inserted after property assessment/photoshoot."
};
