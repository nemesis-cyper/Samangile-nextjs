import Link from "next/link";

export const metadata = {
  title: "Cancellation Policy",
  description: "Cancellation Policy for Samangile Guest Lodge / Umuzi Wellness House.",
  alternates: { canonical: "/cancellation" }
};

export default function CancellationPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "70px 0 40px" }}>
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Cancellation Policy</h1>
        </div>
      </section>
      <section>
        <div className="container max-w-prose">
          <p
            style={{
              background: "#FDF6E3",
              border: "1px dashed var(--gold-deep)",
              padding: "14px 18px",
              borderRadius: 8,
              fontSize: "0.85rem"
            }}
          >
            <strong>PLACEHOLDER DOCUMENT.</strong> Cancellation windows, refund percentages and no-show
            terms must be supplied and confirmed by the client.
          </p>
          <h2>Room bookings</h2>
          <p>PLACEHOLDER — e.g. free cancellation up to X days before check-in; Y% charge thereafter.</p>
          <h2>Wellness treatments</h2>
          <p>PLACEHOLDER — e.g. treatments may be rescheduled with X hours&apos; notice.</p>
          <h2>How to cancel</h2>
          <p>
            Contact us directly by phone, email or WhatsApp to cancel or amend a booking. See the{" "}
            <Link href="/contact">Contact page</Link> for details.
          </p>
        </div>
      </section>
    </>
  );
}
