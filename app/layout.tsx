import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL('https://photonexes.in'),
  title: {
    default: "Photonexes Technologies",
    template: "%s | Photonexes Technologies",
  },
  description:
    "Photonexes Technologies — India's premier IT software company and training institute. Expert software development, web development, mobile apps, cloud solutions, AI, cybersecurity, and professional IT training with internships, certifications, and placement assistance.",
  keywords: [
    "IT company India",
    "software development",
    "IT training institute",
    "web development",
    "mobile app development",
    "cloud solutions",
    "AI solutions",
    "cybersecurity",
    "full stack training",
    "internship program",
    "placement assistance",
    "Photonexes Technologies",
  ],
  authors: [{ name: "Photonexes Technologies" }],
  creator: "Photonexes Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://photonexes.in",
    siteName: "Photonexes Technologies",
    title: "Photonexes Technologies | Code. Create. Innovate.",
    description:
      "India's premier IT software company and training institute. Software development, training, internships & placements.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Photonexes Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photonexes Technologies | Code. Create. Innovate.",
    description:
      "India's premier IT software company and training institute.",
    images: ["/logo.png"],
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
    "@type": "Organization",
    name: "Photonexes",
    url: "https://photonexes.in",
    logo: "https://photonexes.in/logo.png",
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
