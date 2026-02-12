import type { Metadata, Viewport } from "next";
import type React from "react";

import "./globals.css";

import Providers from "./providers";
import { gtSans, gtDisplay, scriptFont, accentFont } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "GT Media Studio — Performance-First Creative Partner",
    template: "%s | GT Media Studio"
  },
  description:
    "GT Media is a performance-first creative partner uniting brand strategy, high-impact content, and precision media across music, celebrity, brand, and political ecosystems.",
  metadataBase: new URL("https://www.gt-media.com"),
  keywords: ["creative agency", "brand strategy", "digital marketing", "content production", "music industry", "celebrity management", "performance marketing", "India"],
  authors: [{ name: "GT Media Studio" }],
  creator: "GT Media Studio",
  publisher: "GT Media Studio",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gt-media.com",
    siteName: "GT Media Studio",
    title: "GT Media Studio — Performance-First Creative Partner",
    description: "Cinematic campaigns that move markets and minds. Strategy, creative, and performance under one roof.",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "GT Media Studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GT Media Studio — Performance-First Creative Partner",
    description: "Cinematic campaigns that move markets and minds.",
    creator: "@gtmediastudio"
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
  alternates: {
    canonical: "https://www.gt-media.com",
    languages: {
      "en": "https://www.gt-media.com"
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gtSans.variable} ${gtDisplay.variable} ${scriptFont.variable} ${accentFont.variable}`}>
      <head>
        {/* Preconnect to CDNs for performance */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        {/* Organization & WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GT Media Studio',
              url: 'https://www.gt-media.com',
              logo: 'https://www.gt-media.com/favicon.ico',
              sameAs: [
                'https://www.instagram.com/gtmediastudio',
                'https://www.linkedin.com/company/gt-media-studio',
                'https://twitter.com/gtmediastudio'
              ],
              description:
                'GT Media is a performance-first creative partner uniting brand strategy, high-impact content, and precision media across music, celebrity, brand, and political ecosystems.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9999999999',
                contactType: 'customer service',
                email: 'hello@gt-media.com',
                areaServed: 'IN',
                availableLanguage: ['English', 'Hindi']
              }
            })
          }}
        />
      </head>
      <body className="bg-onyx text-smoke antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-smoke focus:px-4 focus:py-2 focus:text-onyx"
        >
          Skip to main content
        </a>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <main id="main-content" role="main" className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
