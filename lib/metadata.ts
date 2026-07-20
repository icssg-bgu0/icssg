import type { Metadata } from "next";

const SITE_URL = "https://icssg-ai.bgu.ac.in";
const SITE_NAME = "ICSSG-AI 2027";
const SITE_DESCRIPTION =
  "International Conference on Smart Systems and Sustainable Governance Powered by AI (ICSSG-AI 2027). Organized by Birla Global University, Bhubaneswar, Odisha, India. January 16–18, 2027.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | International Conference on Smart Systems & Sustainable Governance Powered by AI`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "ICSSG-AI 2027",
    "International Conference",
    "Smart Systems",
    "Sustainable Governance",
    "Artificial Intelligence",
    "AI Conference",
    "Birla Global University",
    "Bhubaneswar",
    "Machine Learning",
    "Big Data",
    "IEEE",
    "Springer",
    "Research Conference",
    "Academic Conference",
    "Smart Governance",
    "Human-Centric AI",
    "Sustainability",
    "India Conference 2027",
  ],
  authors: [
    { name: "Birla Global University", url: "https://bgu.ac.in" },
  ],
  creator: "Birla Global University",
  publisher: "ICSSG-AI 2027 Organizing Committee",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Smart Systems & Sustainable Governance Powered by AI`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICSSG-AI 2027 — International Conference on Smart Systems and Sustainable Governance Powered by AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@ICSSG_AI",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Education",
};

/**
 * Conference structured data (JSON-LD)
 */
export function getConferenceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "International Conference on Smart Systems and Sustainable Governance Powered by AI (ICSSG-AI 2027)",
    description: SITE_DESCRIPTION,
    startDate: "2027-01-16",
    endDate: "2027-01-18",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Birla Global University",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IDCO Plot No.2, Gothapatna",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751029",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.2434,
        longitude: 85.7986,
      },
    },
    organizer: {
      "@type": "EducationalOrganization",
      name: "Birla Global University",
      url: "https://bgu.ac.in",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#registration`,
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "3000",
      validFrom: "2026-07-01",
    },
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
  };
}

/**
 * Organization structured data
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Birla Global University",
    url: "https://bgu.ac.in",
    logo: `${SITE_URL}/images/bgu-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "IDCO Plot No.2, Gothapatna",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751029",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/BirlGlobalUniv",
      "https://www.linkedin.com/school/birla-global-university/",
    ],
  };
}
