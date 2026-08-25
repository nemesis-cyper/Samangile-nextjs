"use client";

import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  category: "Lodge" | "Rooms" | "Garden" | "Wellness" | "Dining";
  isPlaceholder: boolean; // true = AI-generated stand-in, not a real photo of this property
};

// ---------------------------------------------------------------------------
// isPlaceholder: true images are AI-generated stand-ins, NOT real photos of
// Samangile. They render with a visible "Placeholder" badge and must be
// swapped for real photography before this page goes live publicly.
// ---------------------------------------------------------------------------
const IMAGES: GalleryImage[] = [
  // ---- Real property photos ----
  { src: "/assets/gallery/samangile-sign-entrance.webp", alt: "Samangile Guest Lodge entrance sign", category: "Lodge", isPlaceholder: false },
  { src: "/assets/gallery/garden-patio-dining.webp", alt: "Covered patio dining area by the pool", category: "Garden", isPlaceholder: false },
  { src: "/assets/gallery/back-garden-seating.webp", alt: "Back garden seating area", category: "Garden", isPlaceholder: false },
  { src: "/assets/gallery/ensuite-double-vanity.webp", alt: "En-suite bathroom with double vanity", category: "Rooms", isPlaceholder: false },
  { src: "/assets/gallery/pool-through-door.webp", alt: "View of the pool through the sliding door", category: "Garden", isPlaceholder: false },
  { src: "/assets/gallery/outdoor-braai.webp", alt: "Outdoor clay braai / fire pit", category: "Dining", isPlaceholder: false },
  { src: "/assets/gallery/room-amberline.webp", alt: "Amberline Room, striped double room", category: "Rooms", isPlaceholder: false },
  { src: "/assets/gallery/room-poolside-retreat.webp", alt: "Poolside Retreat room", category: "Rooms", isPlaceholder: false },

  // ---- AI-generated placeholders — pending real photography ----
  { src: "/assets/gallery/PLACEHOLDER-spa-cabana-poolside.webp", alt: "Placeholder — wellness cabana concept", category: "Wellness", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-garden-daybed.webp", alt: "Placeholder — garden daybed concept", category: "Garden", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-spa-cabana-river.webp", alt: "Placeholder — riverside spa concept", category: "Wellness", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-aloe-closeup.webp", alt: "Placeholder — indigenous garden planting concept", category: "Garden", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-aerial-estate.webp", alt: "Placeholder — aerial estate concept", category: "Lodge", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-desert-bedroom.webp", alt: "Placeholder — bedroom styling concept", category: "Rooms", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-night-bedroom.webp", alt: "Placeholder — evening bedroom mood concept", category: "Rooms", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-entrance-gate.webp", alt: "Placeholder — entrance gate concept", category: "Lodge", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-freestanding-bath.webp", alt: "Placeholder — bathroom styling concept", category: "Rooms", isPlaceholder: true },
  { src: "/assets/gallery/PLACEHOLDER-breakfast-spread.webp", alt: "Placeholder — breakfast styling concept", category: "Dining", isPlaceholder: true },
];

export default function GalleryPage() {
  return (
    <section className="gallery-section">
      <div className="container">
        <p className="eyebrow">Gallery</p>
        <h1>A look around Samangile</h1>
        <p className="lede" style={{ maxWidth: "60ch" }}>
          Photos marked <strong>Placeholder</strong> are concept images standing in until real photography is
          taken on-site — swap these out before this page is shared publicly.
        </p>

        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
          {IMAGES.map((img) => (
            <div key={img.src} style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
              {img.isPlaceholder && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "rgba(23,20,15,0.85)",
                    color: "#F4EEE1",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontWeight: 600,
                  }}
                >
                  Placeholder
                </span>
              )}
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  background: "rgba(23,20,15,0.7)",
                  color: "#F4EEE1",
                  fontSize: "0.65rem",
                  padding: "3px 9px",
                  borderRadius: 999,
                }}
              >
                {img.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
