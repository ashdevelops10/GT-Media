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
        // GT Media Color Palette
        // Dark Colors
        onyx: "#0b090a",              // Primary dark background
        carbon: "#161a1d",            // Secondary dark / cards
        ink: "#0b090a",               // Alias
        charcoal: "#161a1d",          // Alias
        
        // Red Accent System
        garnet: "#660708",            // Deep red - dark accents
        mahogany: "#a4161a",          // Primary brand red
        "mahogany-bright": "#ba181b", // Hover states
        strawberry: "#e5383b",        // CTAs, highlights
        
        // Light & Neutral Colors
        silver: "#b1a7a6",            // Secondary text
        dust: "#d3d3d3",              // Borders, dividers
        smoke: "#f5f3f4",             // Light backgrounds
        paper: "#f5f3f4",             // Alias
        stone: "#b1a7a6",             // Alias
        
        // Accent system (via CSS variables)
        "accent-red": "var(--accent-red)",
        "accent-red-deep": "var(--accent-red-deep)",
        "accent-red-highlight": "var(--accent-red-highlight)",
        "accent-red-dark": "var(--accent-red-dark)",
        
        // Text tokens
        "text-primary-dark": "#0b090a",
        "text-primary-light": "#ffffff",
        "text-secondary": "#b1a7a6",
        
        // Legacy aliases (backwards compatibility)
        "soft-gray": "#b1a7a6",
        "accent-gold": "#a4161a",
        auric: "#a4161a",
        claret: "#660708"
      },
      fontFamily: {
        sans: ["var(--font-gt-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-gt-display)", "Libre Caslon Display", "Times New Roman", "serif"],
        accent: ["var(--font-gt-accent)", "Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      fontSize: {
        // Stage 3: Editorial Typography Scale
        // Display scale (for hero headlines)
        "display": ["clamp(4rem, 8vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2.5rem, 6vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        
        // Heading scale
        "h1": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2": ["clamp(1.875rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.25", letterSpacing: "0" }],
        "h4": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "0" }],
        
        // Body scale
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        
        // Micro/accent scale (for stats, metadata)
        "micro": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        "micro-sm": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.03em" }],
        
        // Numeric accent sizes
        "stat": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "stat-sm": ["1.75rem", { lineHeight: "1.2", letterSpacing: "0" }]
      },
      spacing: {
        // Stage 3: 4px base unit, 8px vertical rhythm
        "0": "0",
        "1": "0.25rem",   // 4px
        "2": "0.5rem",    // 8px
        "3": "0.75rem",   // 12px
        "4": "1rem",      // 16px
        "5": "1.25rem",   // 20px
        "6": "1.5rem",    // 24px
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
        
        // Section spacing (named for clarity)
        "section-compact": "2.5rem",   // 40px mobile
        "section-default": "4rem",     // 64px desktop
        "section-spacious": "6rem"     // 96px desktop
      },
      maxWidth: {
        "content": "90rem",      // 1440px
        "wide": "100rem",        // 1600px
        "narrow": "80rem"        // 1280px
      },
      borderRadius: {
        "none": "0",
        "xs": "0.125rem",   // 2px - global default
        "sm": "0.25rem",    // 4px - cards
        "md": "0.75rem",    // 12px - soft images
        "pill": "9999px"    // pill buttons
      },
      boxShadow: {
        "soft": "0 12px 30px rgba(0, 0, 0, 0.25)",
        "subtle": "0 6px 16px rgba(0, 0, 0, 0.18)",
        "elevation": "0 4px 12px rgba(0, 0, 0, 0.15)"
      },
      transitionDuration: {
        "xs": "180ms",   // Button hover, quick UI
        "sm": "240ms",   // Underline expansions
        "md": "400ms",   // Card elevations
        "lg": "800ms",   // Section entrances (slow luxury)
        "xl": "1200ms"   // Image reveals, hero transitions
      },
      transitionTimingFunction: {
        "soft": "cubic-bezier(0.25, 0.1, 0.25, 1)",      // ease
        "smooth": "cubic-bezier(0.19, 1, 0.22, 1)",      // power2.out equivalent
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",       // power4.out - slow luxury
        "sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)"  // subtle UI
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
