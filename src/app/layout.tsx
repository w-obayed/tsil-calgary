import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BUSINESS_INFO } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsil-calgary.com"),
  title: {
    default: "Tri-Star Irrigation & Lightscape | Calgary Landscaping & Outdoor Lighting",
    template: "%s | Tri-Star Irrigation and Lightscape",
  },
  description:
    "Calgary and Chestermere's premier contractor for residential landscaping, water-efficient lawn irrigation, architectural landscape lighting, commercial grounds, and seasonal property care.",
  keywords: [
    "Landscaping Calgary",
    "Landscaping Chestermere",
    "Irrigation Calgary",
    "Sprinkler Installation Calgary",
    "Commercial Landscaping Calgary",
    "Landscape Lighting Calgary",
    "Outdoor Lighting Calgary",
    "Irrigation Winterization Calgary",
    "Snow Removal Calgary",
    "Yard Maintenance Calgary",
  ],
  authors: [{ name: "Tri-Star Irrigation and Lightscape" }],
  creator: "Tri-Star Irrigation and Lightscape",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://tsil-calgary.com",
    siteName: "Tri-Star Irrigation and Lightscape",
    title: "Tri-Star Irrigation & Lightscape | Calgary Landscaping & Outdoor Lighting",
    description:
      "Expert lawn irrigation, low-voltage landscape lighting, residential grading, sodding, wooden fencing, and commercial grounds care in Calgary & Chestermere.",
    images: [
      {
        url: "/images/hero/hero-lightscape.jpg",
        width: 1200,
        height: 630,
        alt: "Tri-Star Landscape Lighting and Irrigation Calgary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri-Star Irrigation & Lightscape | Calgary Landscaping & Outdoor Lighting",
    description:
      "Expert lawn irrigation, low-voltage landscape lighting, residential grading, sodding, wooden fencing, and commercial grounds care in Calgary & Chestermere.",
    images: ["/images/hero/hero-lightscape.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    name: BUSINESS_INFO.name,
    image: "https://tsil-calgary.com/images/logo/logo.png",
    "@id": "https://tsil-calgary.com",
    url: "https://tsil-calgary.com",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.province,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0476,
      longitude: -113.8227,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      "Calgary",
      "Chestermere",
      "Airdrie",
      "Cochrane",
      "Okotoks",
      "Rocky View County",
    ],
    sameAs: [
      BUSINESS_INFO.yelpUrl,
      BUSINESS_INFO.whatsappUrl,
    ],
  };

  return (
    <html
      lang="en-CA"
      className={`${manrope.variable} ${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-accent selection:text-white">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-forest-deep font-bold rounded shadow-lg"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
