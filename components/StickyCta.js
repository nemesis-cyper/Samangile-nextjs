import { SITE_SETTINGS } from "@/lib/data";

export default function StickyCta() {
  return (
    <div className="sticky-cta" id="sticky-cta">
      <a href="/contact#book" className="btn btn-primary" data-track="start_booking">
        Book Now
      </a>
      <a href={`https://wa.me/${SITE_SETTINGS.whatsapp}`} className="btn btn-whatsapp" data-track="whatsapp_click">
        WhatsApp
      </a>
    </div>
  );
}
