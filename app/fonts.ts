import { Inter, Bebas_Neue, Alex_Brush, Space_Grotesk } from "next/font/google";

// Clean sans-serif for body text
export const gtSans = Inter({
  subsets: ["latin"],
  variable: "--font-gt-sans",
  display: "swap",
});

// Bold condensed headlines - Industrial look
export const gtDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gt-display",
  display: "swap",
});

// Elegant accent font - Refined cursive
export const scriptFont = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Technical/accent font
export const accentFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

/*
import localFont from "next/font/local";

// Primary: GT America (or system font stack as fallback)
// When you add GT America fonts, update paths below
export const gtSans = localFont({
  src: [
    {
      path: "../public/fonts/GT-Sans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/GT-Sans-Medium.woff2",
      weight: "500",
      style: "normal"
    }
  ],
  variable: "--font-gt-sans",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica Neue",
    "Arial",
    "sans-serif"
  ],
  adjustFontFallback: "Arial" // Metrics adjustment to prevent reflow
});

// Display variant (use same family with different optical sizing)
// For true GT America Expanded/Compressed, add those files
export const gtDisplay = localFont({
  src: [
    {
      path: "../public/fonts/GT-Sans-Medium.woff2",
      weight: "600",
      style: "normal"
    }
  ],
  variable: "--font-gt-display",
  display: "swap",
  preload: false, // Lazy load display weights
  fallback: [
    "system-ui",
    "-apple-system",
    "sans-serif"
  ]
});
*/
