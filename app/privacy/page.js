import { SITE_SETTINGS } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Samangile Guest Lodge / Umuzi Wellness House.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero on-dark" style={{ padding: "70px 0 40px" }}>
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
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
            <strong>PLACEHOLDER DOCUMENT.</strong> This page must be reviewed and finalised with reference to
            South Africa&apos;s Protection of Personal Information Act (POPIA) and the Electronic
            Communications and Transactions (ECT) Act before publication. Do not treat this draft as legal
            advice.
          </p>
          <h2>What this policy covers</h2>
          <p>
            This Privacy Policy explains how Samangile Energy Solutions, trading as Samangile Guest Lodge /
            Umuzi Wellness House (&quot;we&quot;, &quot;us&quot;), collects, uses, stores and protects
            personal information submitted through this website, including booking and enquiry forms.
          </p>
          <h2>Information we collect</h2>
          <p>
            Name, contact details, booking dates, guest preferences, and any information voluntarily
            submitted via our forms. PLACEHOLDER — confirm exact data fields collected once booking/payment
            systems are finalised.
          </p>
          <h2>How we use information</h2>
          <p>To process bookings and enquiries, communicate with guests, and improve our services. We do not sell personal information.</p>
          <h2>Your rights under POPIA</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information
            (&quot;Right to be Forgotten&quot;). PLACEHOLDER — confirm the process and contact point for
            exercising these rights, and the identity of the Information Officer.
          </p>
          <h2>Cookies</h2>
          <p>PLACEHOLDER — cookie consent banner and cookie policy details to be finalised alongside analytics/tracking implementation.</p>
          <h2>Contact</h2>
          <p>Information Officer: PLACEHOLDER. Email: {SITE_SETTINGS.email}.</p>
        </div>
      </section>
    </>
  );
}
