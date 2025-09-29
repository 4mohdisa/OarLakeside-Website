import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import siteMetadata from "@/app/metadata.json";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  ...siteMetadata["/"],
  metadataBase: new URL('https://oarlakeside.com'),
  authors: [{ name: 'OAR Restaurant' }],
  creator: 'OAR Restaurant',
  publisher: 'OAR Restaurant',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    siteName: 'OAR Restaurant',
    images: [
      {
        url: siteMetadata["/"].ogImage,
        width: 1200,
        height: 630,
        alt: 'OAR Restaurant - Premium Lakeside Dining in West Lakes Shore Adelaide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@oarlakeside',
    creator: '@oarlakeside',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "OAR Restaurant",
  "alternateName": "OAR - Coffee, Kitchen & Lakeside Vibes",
  "description": "Premium lakeside dining restaurant in West Lakes Shore, Adelaide, featuring fresh Adelaide Hills farm-to-table cuisine",
  "url": "https://oarlakeside.com",
  "telephone": "+61-8-XXXX-XXXX",
  "email": "info@oarlakeside.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "West Lakes Shore",
    "addressLocality": "Adelaide",
    "addressRegion": "SA",
    "postalCode": "5020",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.8755,
    "longitude": 138.4954
  },
  "openingHours": [
    "Mo-Su 07:00-15:00"
  ],
  "servesCuisine": ["Australian", "International", "Farm-to-table"],
  "priceRange": "$$",
  "acceptsReservations": true,
  "hasMenu": "https://oarlakeside.com/menu",
  "image": [
    "https://assets.macaly-user-data.dev/bkih89bjnhhv1zsmtlc5fs4q/ayd8n5tgg94m7pi2dirvz79o/s6-ZBv89sNKaWSFkVmHfw/untitled-design-6.png"
  ],
  "sameAs": [
    "https://www.instagram.com/oarlakeside/",
    "https://www.facebook.com/oarlakeside"
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Lakeside Dining",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Outdoor Seating",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Takeaway Available",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking Available",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://oarlakeside.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#304a33" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} ${playfairDisplay.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

