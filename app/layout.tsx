import type { Metadata, Viewport } from "next";
import type React from "react";

import "./globals.css";

import Providers from "./providers";
import { gtSans, gtDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "GT Media — Creative Studio",
  description:
    "GT Media is an elite creative agency crafting premium digital experiences.",
  metadataBase: new URL("https://www.gt-media.com"),
  icons: {
    icon: "/favicon.ico"
  },
  alternates: {
    canonical: "https://www.gt-media.com",
    languages: {
      "en": "https://www.gt-media.com"
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gtSans.variable} ${gtDisplay.variable}`}>
      <head>
        {/* Preconnect to CDNs for performance */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        {/* Organization & WebSite JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GT Media',
              url: 'https://www.gt-media.com',
              logo: 'https://www.gt-media.com/favicon.ico',
              sameAs: [
                'https://www.instagram.com/gtmedia',
                'https://www.linkedin.com/company/gtmedia'
              ],
              description:
                'GT Media is an elite creative agency crafting premium digital experiences.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.gt-media.com/search?q={query}',
                'query-input': 'required name=query'
              }
            })
          }}
        />
      </head>
      <body className="bg-onyx text-paper antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-onyx"
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
