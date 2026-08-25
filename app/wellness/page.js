import Link from "next/link";
import { TREATMENTS } from "@/lib/data";

export const metadata = {
  title: "Umuzi Wellness House",
  description:
    "Restorative treatments and quiet moments at Umuzi Wellness House — relaxation massage, couples treatments and bespoke wellness packages in the Vaal.",
  alternates: { canonical: "/wellness" }
};

export default function WellnessPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "80px 0 60px" }}>
        <div className="container">
          <p className="eyebrow">Umuzi Wellness House</p>
          <h1>Slow down. Breathe. Be cared for.</h1>
          <p className="lede">
            Restorative treatments and quiet moments, brought together in one intimate setting — for
            overnight guests and local clients alike.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-2" style={{ marginBottom: 56 }}>
            <div className="card">
              <div className="card-body">
                <h3>Wellness for Guests</h3>
                <p>Book a treatment as part of your stay — treatments can be arranged around your room booking.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Wellness for Locals</h3>
                <p>You don&apos;t need to be a guest to visit Umuzi Wellness House. Day treatments are open to the local community by appointment.</p>
              </div>
            </div>
          </div>

          <p className="eyebrow">Treatments</p>
          <h2>Treatment categories</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {TREATMENTS.map((t) => (
              <div className="card" key={t.id}>
                <div className="card-body">
                  <p className="meta">
                    {t.category} &middot; {t.duration}
                  </p>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <p className="price">{t.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="footer-legal-note" style={{ marginTop: 20, maxWidth: "none", color: "var(--green-deep)" }}>
            Wellness treatments at Umuzi are for relaxation and pampering purposes. They do not diagnose,
            treat, or cure any medical condition. Final treatment menu, durations and pricing are confirmed
            with the client before launch.
          </p>
        </div>
      </section>

      <section className="section-tint">
        <div className="container">
          <p className="eyebrow">Booking Flow</p>
          <h2>A calm way to book</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            <div className="card">
              <div className="card-body">
                <h3>1. Choose a treatment</h3>
                <p>Browse categories and select what suits you.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>2. Choose a date &amp; time</h3>
                <p>Pick a slot that works for your schedule.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>3. Confirm your details</h3>
                <p>Share your details and receive confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h2>Ready to book a treatment?</h2>
          <Link href="/contact#book" className="btn btn-primary" data-track="spa_booking">
            Book Wellness
          </Link>
        </div>
      </section>
    </>
  );
}
