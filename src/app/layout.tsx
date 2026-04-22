import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { siteConfig, defaultMetadata } from "@/config/site-content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

// Configure Arabic Font
const cairo = Cairo({ 
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`, // Ensure you place a logo.png in public dir eventually
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    url: siteConfig.url,
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-gray-50 flex flex-col font-cairo">
        {/* Schema.org for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        <Navbar />
        {/* The main content wraps child pages */}
        <main className="flex-grow pt-20"> 
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
