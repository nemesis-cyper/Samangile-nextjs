import Link from "next/link";
import { ROOMS } from "@/lib/data";

export const metadata = {
  title: "Samangile Guest Lodge | Umuzi Wellness House — Guest Lodge & Wellness Retreat in the Vaal",
  description:
    "A refined guest lodge and wellness house in Unitas Park, Vereeniging. Privacy, African hospitality and restorative wellness experiences in the Vaal.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const previewRooms = ROOMS.slice(0, 3);

  return (
    <>
      <section className="hero on-dark">
        <div className="container">
          <p className="eyebrow">Samangile Guest Lodge &middot; Unitas Park, Vereeniging</p>
          <h1>Come Home to Umuzi.</h1>
          <p className="lede">
            A refined guest lodge and wellness house where privacy, African hospitality and restorative
            experiences meet in the Vaal.
          </p>
          <div className="cta-row">
            <Link href="/contact#book" className="btn btn-primary" data-track="start_booking">
              Book Your Stay
            </Link>
            <Link href="/wellness" className="btn btn-outline-light">
              Explore Wellness
            </Link>
          </div>
        </div>
        <svg className="hero-arcs" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="6">
            <path d="M0 220 Q 100 140 200 220" opacity="0.9" />
            <path d="M0 190 Q 100 110 200 190" opacity="0.7" />
            <path d="M0 160 Q 100 80 200 160" opacity="0.5" />
            <path d="M200 220 Q 300 140 400 220" opacity="0.9" />
            <path d="M200 190 Q 300 110 400 190" opacity="0.7" />
            <path d="M200 160 Q 300 80 400 160" opacity="0.5" />
          </g>
        </svg>
      </section>

      <div className="on-dark">
        <svg className="field-divider container" viewBox="0 0 1180 46" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 Q 295 5 590 40 T 1180 40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <section className="trust-strip">
        <div className="container">
          <span>Unitas Park &bull; Vereeniging</span>
          <span>Guest Accommodation</span>
          <span>Umuzi Wellness House</span>
          <span>Secure Private Environment</span>
        </div>
      </section>

      <section id="rooms-preview">
        <div className="container">
          <p className="eyebrow">Stay</p>
          <h2>Rooms built for rest</h2>
          <p className="max-w-prose">
            Each room is designed as a quiet retreat — comfortable, private, and considered down to the last
            detail. Full room details are added below as they are confirmed.
          </p>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {previewRooms.map((r) => (
              <div className="card" key={r.id}>
                <div className="placeholder placeholder-wide" data-ph={`room-${r.id}`}>
                  <span className="ph-icon">&#128247;</span>
                  {r.name} photo
                  <span className="ph-tag">Pending shoot</span>
                </div>
                <div className="card-body">
                  <h3>{r.name}</h3>
                  <p className="meta">{r.capacity}</p>
                  <p>{r.summary}</p>
                  <p className="price">{r.priceFrom}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link href="/rooms" className="btn btn-outline-dark">
              View All Rooms
            </Link>
          </p>
        </div>
      </section>

      <section className="section-tint">
        <div className="container two-col">
          <div className="placeholder placeholder-wide" data-ph="wellness-hero">
            <span className="ph-icon">&#127807;</span>
            Wellness photography placeholder
            <br />
            (spa / treatment room)
            <span className="ph-tag">To be added after shoot</span>
          </div>
          <div>
            <p className="eyebrow">Umuzi Wellness House</p>
            <h2>Slow down. Breathe. Be cared for.</h2>
            <p>
              Umuzi Wellness House brings restorative treatments and quiet moments together in one intimate
              setting — relaxation massage, couples treatments, body treatments and bespoke wellness
              packages for guests and local clients alike.
            </p>
            <Link href="/wellness" className="btn btn-outline-dark">
              Discover Wellness
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">The Umuzi Experience</p>
          <h2>Arrival, privacy, and a place that feels like home</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <div>
              <h3>Arrival</h3>
              <p>A quiet, secure entrance sets the tone the moment you arrive — private, unhurried, and welcoming.</p>
            </div>
            <div>
              <h3>Garden calm</h3>
              <p>Landscaped grounds designed for slow mornings, quiet conversation and open-air relaxation.</p>
            </div>
            <div>
              <h3>Local discovery</h3>
              <p>The Vaal on your doorstep — explore nearby attractions or simply stay and be looked after.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h2>A first look at Umuzi</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <div className="placeholder" data-ph="gallery-1">
              <span className="ph-icon">&#128247;</span>
              Property photography
              <span className="ph-tag">Pending shoot</span>
            </div>
            <div className="placeholder" data-ph="gallery-2">
              <span className="ph-icon">&#128247;</span>
              Room photography
              <span className="ph-tag">Pending shoot</span>
            </div>
            <div className="placeholder" data-ph="gallery-3">
              <span className="ph-icon">&#128247;</span>
              Garden photography
              <span className="ph-tag">Pending shoot</span>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>
            <Link href="/gallery" className="btn btn-outline-dark">
              View Full Gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="on-dark">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Location</p>
            <h2>Rooted in the Vaal</h2>
            <p>
              Umuzi Wellness House sits in Unitas Park, Vereeniging — private and quiet, with the wider Vaal
              Triangle close by. Detailed directions are shared directly with confirmed guests; we do not
              publish precise access or security information here.
            </p>
            <Link href="/contact" className="btn btn-outline-light">
              Contact &amp; Directions
            </Link>
          </div>
          <div
            className="placeholder placeholder-wide"
            data-ph="map"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold-bright)",
              background:
                "repeating-linear-gradient(135deg,#241f18,#241f18 12px,#2b2418 12px,#2b2418 24px)"
            }}
          >
            <span className="ph-icon">&#128506;&#65039;</span>
            Map / route embed placeholder
            <span className="ph-tag">Add on launch</span>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h2>Your space to rest, reconnect and feel at home.</h2>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link href="/contact#book" className="btn btn-primary" data-track="start_booking">
              Book Now
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
