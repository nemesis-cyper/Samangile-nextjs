"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/data";

const CATEGORIES = ["All", "Exterior", "Rooms", "Bathrooms", "Wellness", "Garden", "Dining", "Details", "Local Area"];

export default function GalleryClient() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <>
      <section className="hero on-dark" style={{ padding: "80px 0 50px" }}>
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>A look at Umuzi</h1>
          <p className="lede">
            Photography is added here as the property assessment and shoot are completed. Every tile below
            is a clearly marked placeholder until then.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="gallery-filter" id="galleryFilter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={activeCat === cat ? "active" : ""}
                data-cat={cat}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="gallery-grid" id="galleryGrid">
            {GALLERY.filter((g) => activeCat === "All" || g.category === activeCat).map((g) => (
              <div className="placeholder" data-cat={g.category} style={{ minHeight: 180 }} key={g.id}>
                <span className="ph-icon">&#128247;</span>
                {g.category}
                <span className="ph-tag">{g.conceptFlag ? "Concept / pending shoot" : "Pending upload"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
