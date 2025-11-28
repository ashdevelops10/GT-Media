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
      </head>
      <body className="bg-onyx text-paper antialiased font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
