import Link from "next/link";
import { OWNER } from "@/lib/data";

export const metadata = {
  title: "About Umuzi",
  description: "The story of Samangile Guest Lodge and Umuzi Wellness House — hospitality that feels like coming home.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "80px 0 60px" }}>
        <div className="container">
          <p className="eyebrow">About Umuzi</p>
          <h1>Hospitality that feels like coming home</h1>
          <p className="lede">Umuzi is built around a simple idea: hospitality should feel like coming home.</p>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>We are taking a property and turning it into a place</h2>
            <p>
              Umuzi is built around a simple idea: hospitality should feel like coming home. We are creating
              a place where guests can rest well, local clients can reconnect with themselves, and the
              property contributes positively to the neighbourhood around it.
            </p>
            <p>
              Every detail — from the garden paths to the wellness treatments — is chosen to support one
              feeling: <em>I can breathe here. I feel safe here. I can slow down here.</em>
            </p>
          </div>
          <div className="placeholder placeholder-wide" data-ph="about-exterior">
            <span className="ph-icon">&#127968;</span>
            Lodge exterior photography placeholder
            <span className="ph-tag">To be added after assessment</span>
          </div>
        </div>
      </section>

      <section className="on-dark">
        <div className="container text-center">
          <p className="eyebrow">Our Philosophy</p>
          <h2 style={{ maxWidth: 680, margin: "0 auto" }}>&quot;Fences build relationships.&quot;</h2>
          <p className="max-w-prose" style={{ margin: "16px auto 0", color: "var(--stone)" }}>
            A secure boundary creates privacy; an open-hearted welcome creates connection. Umuzi is designed
            to do both.
          </p>
        </div>
      </section>

      {/* ============================================================
          OWNER'S WELCOME SPEECH + ACKNOWLEDGEMENT / THANKS
          This whole block is a placeholder area. Once the owner's
          photo and message are supplied (post property assessment),
          update the OWNER object in lib/data.js — no markup needs
          to change.
          ============================================================ */}
      <section className="section-tint">
        <div className="container">
          <p className="eyebrow">A Word From the Owner</p>
          <h2>Welcome &amp; thanks</h2>
          <div className="owner-block" id="ownerBlock">
            <div className="placeholder placeholder-portrait" data-ph="owner-photo">
              <span className="ph-icon">&#128100;</span>
              Owner portrait placeholder
              <span className="ph-tag">Add after assessment</span>
            </div>
            <div>
              <blockquote>&quot;{OWNER.speech}&quot;</blockquote>
              <p className="owner-name">{OWNER.name}</p>
              <p style={{ color: "var(--stone)", fontSize: "0.9rem" }}>{OWNER.role}</p>
              <p style={{ color: "rgba(218,210,188,0.6)", fontSize: "0.78rem", marginTop: 12 }}>{OWNER.photoNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="container">
          <h2>Come see it for yourself</h2>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <Link href="/contact#book" className="btn btn-primary" data-track="start_booking">
              Book Your Stay
            </Link>
            <Link href="/gallery" className="btn btn-outline-dark">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
