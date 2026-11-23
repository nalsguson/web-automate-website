import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Web Automate | Websites That Rank. Systems That Run Themselves.",
  description:
    "Web Automate builds websites for local service businesses — with scheduling, an AI chatbot, an AI voice receptionist, SEO, and Google Business Profile setup. Request a free demo.",
  // STAGING: do not index until go-live. Remove `robots` below and update
  // src/app/robots.ts at launch (see README go-live checklist).
  robots: { index: false, follow: false },
  openGraph: {
    title: "Web Automate | Websites That Rank. Systems That Run Themselves.",
    description:
      "Websites, scheduling, AI chatbot, AI voice receptionist, SEO and Google Business Profile — for local service businesses.",
    url: "https://webautomate.net",
    siteName: "Web Automate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Automate | Websites That Rank. Systems That Run Themselves.",
    description:
      "Websites, scheduling, AI chatbot, AI voice receptionist, SEO and Google Business Profile — for local service businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Web Automate",
  description:
    "Website design, SEO, scheduling systems, AI chatbot, AI voice receptionist and Google Business Profile services for local service-based businesses.",
  url: "https://webautomate.net",
  email: "infowebautomate@gmail.com",
  telephone: "+1-815-412-4915",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankfort",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: "Frankfort, IL and surrounding areas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy-900 text-slate-100">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
