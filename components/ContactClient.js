"use client";

import { useState } from "react";
import { SITE_SETTINGS, ROOMS, TREATMENTS } from "@/lib/data";

export default function ContactClient() {
  const [bookingStatus, setBookingStatus] = useState(null); // { text, type }
  const [contactStatus, setContactStatus] = useState(null);

  function handleBookingSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setBookingStatus({ text: "Please complete all required fields before sending your request.", type: "error" });
      return;
    }
    setBookingStatus({
      text: "Thank you — your booking request has been noted. (Connect this form to a backend endpoint to send it live.)",
      type: "success"
    });
    form.reset();
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setContactStatus({ text: "Please complete all required fields.", type: "error" });
      return;
    }
    setContactStatus({ text: "Thank you for your message — the team will be in touch shortly.", type: "success" });
    form.reset();
  }

  return (
    <>
      <section className="hero on-dark" style={{ padding: "80px 0 50px" }}>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s plan your stay</h1>
          <p className="lede">Send us your dates and we&apos;ll confirm availability — or reach out directly on WhatsApp.</p>
        </div>
      </section>

      <section id="book">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Book Now</p>
            <h2>Booking request</h2>
            <p>This form captures your request — it does not process payment. A team member will confirm availability and next steps.</p>
            <form id="bookingForm" noValidate onSubmit={handleBookingSubmit}>
              <label htmlFor="bk-name">Full name *</label>
              <input id="bk-name" name="name" type="text" required />

              <label htmlFor="bk-email">Email *</label>
              <input id="bk-email" name="email" type="email" required />

              <label htmlFor="bk-phone">Phone</label>
              <input id="bk-phone" name="phone" type="tel" />

              <div className="grid grid-2" style={{ gap: "0 20px" }}>
                <div>
                  <label htmlFor="bk-checkin">Check-in *</label>
                  <input id="bk-checkin" name="checkin" type="date" required />
                </div>
                <div>
                  <label htmlFor="bk-checkout">Check-out *</label>
                  <input id="bk-checkout" name="checkout" type="date" required />
                </div>
              </div>

              <label htmlFor="bk-guests">Number of guests *</label>
              <input id="bk-guests" name="guests" type="number" min="1" required />

              <label htmlFor="bk-room">Room preference</label>
              <select id="bk-room" name="room" defaultValue="">
                <option value="">No preference</option>
                {ROOMS.map((r) => (
                  <option value={r.id} key={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>

              <label htmlFor="bk-wellness">Interested in a wellness treatment?</label>
              <select id="bk-wellness" name="wellness" defaultValue="">
                <option value="">No thank you</option>
                {TREATMENTS.map((t) => (
                  <option value={t.id} key={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>

              <label htmlFor="bk-notes">Special requests</label>
              <textarea id="bk-notes" name="notes"></textarea>

              <button type="submit" className="btn btn-primary" data-track="booking_request">
                Send Booking Request
              </button>
              {bookingStatus && (
                <p className={`form-status ${bookingStatus.type}`} role="status">
                  {bookingStatus.text}
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="card" style={{ marginBottom: 20 }}>
              <div className="card-body">
                <h3>Direct contact</h3>
                <p>Phone: {SITE_SETTINGS.phone}</p>
                <p>Email: {SITE_SETTINGS.email}</p>
                <p>Address: {SITE_SETTINGS.addressLine}</p>
                <a
                  href={`https://wa.me/${SITE_SETTINGS.whatsapp}`}
                  className="btn btn-whatsapp"
                  data-track="whatsapp_click"
                  style={{ marginTop: 8 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="placeholder placeholder-wide" data-ph="contact-map">
              <span className="ph-icon">&#128506;&#65039;</span>
              Map / route embed placeholder
              <span className="ph-tag">Add on launch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="container two-col">
          <div>
            <p className="eyebrow">General Enquiry</p>
            <h2>Ask us a question</h2>
            <form id="contactForm" noValidate onSubmit={handleContactSubmit}>
              <label htmlFor="ct-name">Name *</label>
              <input id="ct-name" name="name" type="text" required />
              <label htmlFor="ct-email">Email *</label>
              <input id="ct-email" name="email" type="email" required />
              <label htmlFor="ct-message">Message *</label>
              <textarea id="ct-message" name="message" required></textarea>
              <button type="submit" className="btn btn-outline-dark">
                Send Message
              </button>
              {contactStatus && (
                <p className={`form-status ${contactStatus.type}`} role="status">
                  {contactStatus.text}
                </p>
              )}
            </form>
          </div>
          <div>
            <h3>Check-in / Check-out</h3>
            <p>
              Check-in: {SITE_SETTINGS.checkIn} &middot; Check-out: {SITE_SETTINGS.checkOut}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--green-deep)" }}>
              Detailed directions and gate access information are shared directly with confirmed guests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
