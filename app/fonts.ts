import { Inter, Bebas_Neue, Space_Grotesk, Playfair_Display } from "next/font/google";

// Body text - clean sans-serif
export const gtSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-gt-sans",
  display: "swap",
});

// Headlines - bold condensed uppercase
export const gtDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gt-display",
  display: "swap",
});

// Technical / UI accent text - buttons, nav, form labels
export const accentFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

// Editorial highlight - taglines, quotes, hero accents (used sparingly)
export const editorialFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});


