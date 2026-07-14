import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL('https://photonexes.in'),
  title: {
    default: "Photonexes Technologies | Best IT Company in Zirakpur",
    template: "%s | Photonexes Technologies",
  },
  description:
    "Photonexes Technologies is a top-rated IT software company in Zirakpur, Punjab. We specialize in enterprise software development, web development, mobile apps, AI solutions, and managed IT support for global businesses.",
  keywords: [
    "best IT company in Zirakpur",
    "software development company Zirakpur",
    "web development Zirakpur",
    "mobile app development Chandigarh",
    "managed IT support Mohali",
    "enterprise software development",
    "AI solutions Punjab",
    "cloud migration services",
    "Photonexes Technologies",
  ],
  authors: [{ name: "Photonexes Technologies" }],
  creator: "Photonexes Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://photonexes.in",
    siteName: "Photonexes Technologies",
    title: "Photonexes Technologies | Best IT Company in Zirakpur",
    description:
      "Top-rated IT software company in Zirakpur specializing in enterprise software development, AI, and cloud solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Photonexes Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photonexes Technologies | Best IT Company in Zirakpur",
    description:
      "Top-rated IT software company in Zirakpur specializing in enterprise software development, AI, and cloud solutions.",
    images: ["/logo.png"],
  },
  icons: {
    icon: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Photonexes Technologies",
    "image": "https://photonexes.in/logo.png",
    "@id": "https://photonexes.in",
    "url": "https://photonexes.in",
    "telephone": "+91-7006291591",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zirakpur",
      "addressLocality": "Zirakpur",
      "addressRegion": "Punjab",
      "postalCode": "140603",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.6425,
      "longitude": 76.8173
    },
    "sameAs": [
      "https://www.linkedin.com/company/photonexes",
      "https://twitter.com/photonexes",
      "https://www.facebook.com/photonexes"
    ]
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
