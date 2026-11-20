import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ui/Chatbot";
import { CookieNotice } from "@/components/ui/CookieNotice";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.contact.website),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.founder.name, url: siteConfig.contact.website }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.companyName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} — Website & Software Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.ogImage],
    creator: "@cwd_techno",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org LocalBusiness & Organization JSON-LD
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: siteConfig.companyName,
    alternateName: ["CWD Technologies Haridwar", "CWD Technologies Uttarakhand", "CWD Tech"],
    url: siteConfig.contact.website,
    logo: `${siteConfig.contact.website}${siteConfig.brand.logo}`,
    image: `${siteConfig.contact.website}${siteConfig.brand.logo}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.designation,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jurs Country",
      addressLocality: "Haridwar",
      addressRegion: "Uttarakhand",
      postalCode: "249401",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.9457",
      longitude: "78.1642",
    },
    priceRange: "₹₹",
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
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": area === "India" ? "Country" : area === "Uttarakhand" ? "AdministrativeArea" : "City",
      name: area,
    })),
    knowsAbout: [
      "Website Development",
      "Custom Software Development",
      "CRM, ERP and HRMS Development",
      "SaaS Application Development",
      "Mobile Application Development",
      "AI-Powered Applications and Automation",
      "Digital Marketing & SEO",
    ],
    sameAs: Object.values(siteConfig.socials).filter(Boolean),
  };

  // Schema.org WebSite JSON-LD
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.companyName,
    url: siteConfig.contact.website,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.contact.website}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script src="/theme-script.js" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chatbot />
          <WhatsAppButton />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
