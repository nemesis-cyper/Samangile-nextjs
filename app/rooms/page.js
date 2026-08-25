import Link from "next/link";
import { ROOMS } from "@/lib/data";

export const metadata = {
  title: "Stay & Rooms",
  description: "Explore rooms at Samangile Guest Lodge — private, comfortable and considered spaces to rest in the Vaal.",
  alternates: { canonical: "/rooms" }
};

export default function RoomsPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "80px 0 60px" }}>
        <div className="container">
          <p className="eyebrow">Stay</p>
          <h1>Rooms built for rest</h1>
          <p className="lede">
            Every room is designed as a private retreat. Details below are updated as the client confirms
            final inventory, finishes and pricing.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-3">
            {ROOMS.map((r) => (
              <div className="card" key={r.id}>
                <div className="placeholder placeholder-wide" data-ph={`room-${r.id}`} data-track="view_room">
                  <span className="ph-icon">&#128247;</span>
                  {r.name} photo
                  <span className="ph-tag">Pending shoot</span>
                </div>
                <div className="card-body">
                  <h3>{r.name}</h3>
                  <p className="meta">
                    {r.capacity} &middot; {r.beds}
                  </p>
                  <p>{r.description}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--green-deep)" }}>
                    <strong>Bathroom:</strong> {r.bathroom}
                  </p>
                  <p style={{ fontSize: "0.85rem" }}>{r.amenities.join(" \u00b7 ")}</p>
                  <p className="price">{r.priceFrom}</p>
                  <Link href="/contact#book" className="btn btn-primary" style={{ marginTop: 10 }} data-track="start_booking">
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint text-center">
        <div className="container">
          <h2>Not sure which room suits you?</h2>
          <p className="max-w-prose" style={{ margin: "0 auto 24px" }}>
            Send us your dates and preferences and we&apos;ll recommend the best fit.
          </p>
          <Link href="/contact#book" className="btn btn-primary" data-track="start_booking">
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
