export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Samangile Guest Lodge / Umuzi Wellness House.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "70px 0 40px" }}>
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms &amp; Conditions</h1>
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
            <strong>PLACEHOLDER DOCUMENT.</strong> Review against South African consumer protection law and
            the ECT Act before publication. Not legal advice.
          </p>
          <h2>Bookings</h2>
          <p>
            Bookings made through this website are requests only and are confirmed once payment/availability
            is verified by our team. PLACEHOLDER — finalise once the live booking engine is built.
          </p>
          <h2>Use of this website</h2>
          <p>
            This site and its content are provided by Samangile Energy Solutions. Content, room and
            treatment descriptions are subject to change and confirmation.
          </p>
          <h2>Guest conduct</h2>
          <p>PLACEHOLDER — house rules and code of conduct to be supplied by the client.</p>
          <h2>Liability</h2>
          <p>PLACEHOLDER — liability and disclaimer clauses to be drafted with a qualified professional.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Republic of South Africa.</p>
        </div>
      </section>
    </>
  );
}
