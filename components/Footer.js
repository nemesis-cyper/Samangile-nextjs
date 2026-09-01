import Link from "next/link";
import Image from "next/image";
import { SITE_SETTINGS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="/assets/brand/samangile-logo-master.png"
              alt="Samangile Guest Lodge logo"
              width={48}
              height={48}
              style={{ marginBottom: 14 }}
            />
            <p style={{ maxWidth: 320, fontSize: "0.9rem" }}>
              Samangile Guest Lodge &amp; Umuzi Wellness House — a refined guest lodge and wellness house
              in the Vaal, Gauteng.
            </p>
            <p style={{ fontSize: "0.85rem" }}>{SITE_SETTINGS.addressLine}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/rooms">Stay / Rooms</Link>
            <Link href="/wellness">Umuzi Wellness House</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About Umuzi</Link>
          </div>
          <div>
            <h4>Guest Info</h4>
            <Link href="/contact">Contact &amp; Location</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/cancellation">Cancellation Policy</Link>
          </div>
          <div>
            <h4>Reach Us</h4>
            <a href={`tel:${SITE_SETTINGS.phone}`}>{SITE_SETTINGS.phone}</a>
            <a href={`mailto:${SITE_SETTINGS.email}`}>{SITE_SETTINGS.email}</a>
            <a href={`https://wa.me/${SITE_SETTINGS.whatsapp}`} data-track="whatsapp_click">
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © Samangile TM — Samangile Energy Solutions, &quot;Dev concepts own developer rights&quot;</span>
          <span>{SITE_SETTINGS.registrationDetails}</span>
        </div>
        <p className="footer-legal-note">
          All room, treatment, pricing and property information on this site is subject to confirmation.
          Wellness treatments are for relaxation purposes and do not diagnose, treat, or cure any medical
          condition. Availability, licensing and compliance details are confirmed with the relevant
          authorities prior to public launch.
        </p>
      </div>
    </footer>
  );
}
