import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact & Book Now",
  description: "Book your stay or a wellness treatment at Samangile Guest Lodge, Unitas Park, Vereeniging.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <ContactClient />;
}
