import type { Metadata } from "next";
import { Geist, Pacifico } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const pacifico = Pacifico({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Smuffy's Pub — Smash Burger & Fluffy Palacsinta | Szombathely",
  description:
    "Smuffy's Pub Szombathely — igazi smash burgerek és fluffy palacsinták, kézműves hozzávalókból. Rendelj telefonon: +36 30 525 2336",
  keywords: [
    "smash burger szombathely",
    "fluffy palacsinta",
    "étterem szombathely",
    "smuffy's pub",
    "burger rendelés",
  ],
  openGraph: {
    title: "Smuffy's Pub — Smash Burger & Fluffy Palacsinta",
    description:
      "Szombathely legjobb smash burgerei és fluffy palacsintái. Gyere be, vagy rendelj telefonon!",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${geist.variable} ${pacifico.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Smuffy's Pub",
              description: "Smash burger és fluffy palacsinta étterem Szombathelyen.",
              servesCuisine: ["American", "Burger", "Dessert"],
              telephone: "+36 30 525 2336",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Szombathely",
                addressCountry: "HU",
              },
              priceRange: "$$",
              url: "https://smuffys-pub.vercel.app",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
