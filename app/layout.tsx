import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceLearningBanner from "@/components/ServiceLearningBanner";
import { ORG_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Astha Shakti | Nutrition, Education & Social Empowerment",
  description: "Astha Shakti works to support underprivileged children and communities through nutrition, education, skill development and social empowerment in Bengaluru.",
  keywords: [
    "Astha Shakti",
    "Astha Shakti Bengaluru",
    "Nutri-Ed program",
    "Child nutrition NGO",
    "Education charity Bangalore",
    "JP Nagar NGO",
    "Differently-abled child support",
    "Women empowerment Bengaluru",
    "Volunteer Bangalore",
    "Donate for child meals"
  ],
  authors: [{ name: "Astha Shakti Charitable Trust" }],
  creator: "Astha Shakti",
  publisher: "Astha Shakti Charitable Trust",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://asthashakti.org",
    title: "Astha Shakti | Food is the Gateway to Good Health and Education",
    description: "Astha Shakti works to create opportunities for underprivileged children and communities through nutrition, education, skill development and social empowerment.",
    siteName: "Astha Shakti",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Astha Shakti Nutri-Ed Child Nutrition & Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astha Shakti | Nutrition, Education & Social Empowerment",
    description: "Supporting underprivileged children and communities in Bengaluru.",
    images: ["https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": ORG_INFO.name,
  "legalName": ORG_INFO.legalName,
  "description": ORG_INFO.shortDescription,
  "slogan": ORG_INFO.tagline,
  "foundingDate": ORG_INFO.initiativeYear,
  "founder": {
    "@type": "Person",
    "name": ORG_INFO.founder.name,
    "jobTitle": ORG_INFO.founder.role
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${ORG_INFO.address.line1}, ${ORG_INFO.address.line2}`,
    "addressLocality": ORG_INFO.address.city,
    "addressRegion": ORG_INFO.address.state,
    "postalCode": ORG_INFO.address.pincode,
    "addressCountry": "IN"
  },
  "sameAs": [
    ORG_INFO.social.instagram,
    ORG_INFO.social.youtube
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-100 text-charcoal-800 antialiased selection:bg-saffron-200 selection:text-saffron-900">
        <ServiceLearningBanner />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
