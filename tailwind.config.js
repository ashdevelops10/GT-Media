/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        onyx: "#0A0A0B",
        paper: "#F6F7F9",
        
        // Secondary Neutrals
        graphite: {
          900: "#141518",
          700: "#2B2D33",
          400: "#6B7078",
          200: "#C9CDD4"
        },
        
        // Accent System
        vermilion: "#FF4D4D",
        coral: "#FF6B5E",
        
        // Legacy aliases (for backwards compatibility)
        "gt-bg": "#0A0A0B",
        "gt-accent": "#FF4D4D",
        "gt-muted": "#6B7078"
      },
      fontFamily: {
        sans: ["var(--font-gt-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-gt-display)", "var(--font-gt-sans)", "system-ui", "sans-serif"]
      },
      fontSize: {
        // Display scale
        "display": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        
        // Heading scale
        "h1": ["clamp(2.25rem, 4vw, 4rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h2": ["clamp(1.875rem, 3vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.25", letterSpacing: "0" }],
        "h4": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "0" }],
        
        // Body scale
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        
        // Micro scale
        "micro": ["0.8125rem", { lineHeight: "1.75", letterSpacing: "0.02em" }],
        "micro-sm": ["0.75rem", { lineHeight: "1.8", letterSpacing: "0.03em" }]
      },
      spacing: {
        // 8px rhythm system
        "0": "0",
        "1": "0.25rem",   // 4px
        "2": "0.5rem",    // 8px
        "3": "0.75rem",   // 12px
        "4": "1rem",      // 16px
        "5": "1.25rem",   // 20px
        "6": "1.5rem",    // 24px
        "7": "1.75rem",   // 28px
        "8": "2rem",      // 32px
        "10": "2.5rem",   // 40px
        "12": "3rem",     // 48px
        "16": "4rem",     // 64px
        "20": "5rem",     // 80px
        "24": "6rem",     // 96px
        "32": "8rem",     // 128px
        "40": "10rem",    // 160px
        "48": "12rem",    // 192px
        "56": "14rem",    // 224px
        "64": "16rem",    // 256px
        
        // Section spacing (named)
        "section-xs": "4rem",    // 64px
        "section-s": "6rem",     // 96px
        "section-m": "8rem",     // 128px
        "section-l": "10rem",    // 160px
        "section-xl": "14rem",   // 224px
        "section-hero": "20rem"  // 320px
      },
      maxWidth: {
        "content": "80rem",      // 1280px
        "hero": "90rem",         // 1440px
        "edge": "105rem"         // 1680px
      },
      borderRadius: {
        "none": "0",
        "sm": "0.25rem",    // 4px
        "DEFAULT": "0.5rem", // 8px
        "card": "1rem"      // 16px (rare usage)
      },
      boxShadow: {
        "elevation-1": "0 1px 1px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)"
      },
      transitionDuration: {
        "xs": "140ms",
        "s": "220ms",
        "m": "360ms"
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.2, 0.8, 0.2, 1)",
        "emphasis": "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      zIndex: {
        "nav": "100",
        "modal": "200",
        "toast": "300"
      }
    }
  },
  plugins: []
};
