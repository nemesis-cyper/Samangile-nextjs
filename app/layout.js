import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import TrackEvents from "@/components/TrackEvents";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-worksans",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://www.samangile.co.za"),
  title: {
    default: "Samangile Guest Lodge | Umuzi Wellness House — Guest Lodge & Wellness Retreat in the Vaal",
    template: "%s | Samangile Guest Lodge"
  },
  description:
    "A refined guest lodge and wellness house in Unitas Park, Vereeniging. Privacy, African hospitality and restorative wellness experiences in the Vaal.",
  openGraph: {
    title: "Samangile Guest Lodge | Umuzi Wellness House",
    description: "A refined guest lodge and wellness house in the Vaal — come home to Umuzi.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Samangile Guest Lodge",
              description: "A refined guest lodge and wellness house in Unitas Park, Vereeniging, Gauteng.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "34 Japie Krige Street, Unitas Park Agricultural Holdings",
                addressLocality: "Vereeniging",
                addressRegion: "Gauteng",
                addressCountry: "ZA"
              }
            })
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <TrackEvents />
      </body>
    </html>
  );
}
