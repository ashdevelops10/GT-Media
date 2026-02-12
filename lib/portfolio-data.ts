// ─────────────────────────────────────────────────────────────
// GT Media — Brand Portfolio Data
// Structured work extracted from Instagram campaigns
// ─────────────────────────────────────────────────────────────

export interface Brand {
  id: string;
  name: string;
  handle: string;
  logo: string;
  industry: string;
  description: string;
  color: string; // Tailwind-safe accent
  instagram: string;
}

export interface PortfolioItem {
  id: string;
  brandId: string;
  title: string;
  description: string;
  type: "reel" | "post" | "carousel";
  format: "video" | "image";
  style: string;
  instagramUrl: string;
  shortcode: string;
  poster: string; // local poster image path
  video?: string; // local video path (if available)
  engagement: { likes: number; comments: number };
  date: string; // ISO date
}

// ─── Brands ──────────────────────────────────────────────────

export const BRANDS: Brand[] = [
  {
    id: "littles-bay",
    name: "Little's Bay",
    handle: "@littles_bay",
    logo: "/logos/little_bay.png",
    industry: "F&B / Hospitality",
    description:
      "French-inspired café & bakery in Mohali — where every bite tells a story from Paris to Punjab.",
    color: "#D4A574", // warm pastry gold
    instagram: "https://www.instagram.com/littles_bay/",
  },
  {
    id: "wildhood-cafe",
    name: "The Wildhood Cafe",
    handle: "@thewildhoodcafe",
    logo: "/logos/wildhood.jpg",
    industry: "Hospitality / Adventure",
    description:
      "Adventure café with horse riding, nature vibes, and rustic experiences in Sector 100, Mohali.",
    color: "#4A7C59", // forest green
    instagram: "https://www.instagram.com/thewildhoodcafe/",
  },
  {
    id: "mach-global",
    name: "Mach Global",
    handle: "@mach.immigration",
    logo: "/logos/mach global.jpg",
    industry: "Immigration & Education",
    description:
      "Visa consultancy and immigration services — Canada, UK, Europe, New Zealand — based in Panchkula.",
    color: "#2563EB", // professional blue
    instagram: "https://www.instagram.com/mach.immigration/",
  },
  {
    id: "event-resq",
    name: "EventResQ",
    handle: "@eventresq_",
    logo: "/logos/event resq.jpg",
    industry: "Event Safety & Medical",
    description:
      "On-ground emergency medical services for festivals, concerts, and large-scale events across India.",
    color: "#DC2626", // emergency red
    instagram: "https://www.instagram.com/eventresq_/",
  },
  {
    id: "urban-theka",
    name: "Urban Theka",
    handle: "@urbantheka",
    logo: "/logos/urban_theka.png",
    industry: "Fashion / Streetwear",
    description:
      "Punjabi streetwear brand — designed for Sidhu Moosewala, worn by the culture. Mohali & Chandigarh.",
    color: "#F59E0B", // amber/gold
    instagram: "https://www.instagram.com/urbantheka/",
  },
];

// ─── Portfolio Items (grouped by brand) ──────────────────────

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // ── Little's Bay ───────────────────────────────────────────
  {
    id: "lb-takeaway",
    brandId: "littles-bay",
    title: "Mohali Outside, France Inside",
    description:
      "Cinematic reel showcasing the French bakery ambience and takeaway experience at Little's Bay, Sector 68 Mohali.",
    type: "reel",
    format: "video",
    style: "Cinematic / Lifestyle",
    instagramUrl: "https://www.instagram.com/reel/DTVDVykkypF/",
    shortcode: "DTVDVykkypF",
    poster: "/portfolio/lb-takeaway.jpg",
    video: "/portfolio/lb-takeaway.mp4",
    engagement: { likes: 148, comments: 13 },
    date: "2026-01-10",
  },
  {
    id: "lb-origin-story",
    brandId: "littles-bay",
    title: "Meet Dackshta — The Baker's Journey",
    description:
      "Storytelling reel tracing the founder's path from 7th-grade kitchen to a Michelin-starred restaurant in France, and back to Mohali.",
    type: "reel",
    format: "video",
    style: "Storytelling / Brand Origin",
    instagramUrl: "https://www.instagram.com/reel/DO8l94XkwFv/",
    shortcode: "DO8l94XkwFv",
    poster: "/portfolio/lb-origin-story.jpg",
    engagement: { likes: 180, comments: 24 },
    date: "2025-09-23",
  },
  {
    id: "lb-date-night",
    brandId: "littles-bay",
    title: "Paris Feels Without the Flight",
    description:
      "Aesthetic date-night reel — warm lighting, delicate pastries, and French music setting the mood.",
    type: "reel",
    format: "video",
    style: "Aesthetic / Lifestyle",
    instagramUrl: "https://www.instagram.com/reel/DTkqXUaDW3K/",
    shortcode: "DTkqXUaDW3K",
    poster: "/portfolio/lb-date-night.jpg",
    engagement: { likes: 90, comments: 9 },
    date: "2026-01-16",
  },

  // ── The Wildhood Cafe ──────────────────────────────────────
  {
    id: "wh-horse-meme",
    brandId: "wildhood-cafe",
    title: "Hop on a Horse — Viral Meme Reel",
    description:
      "Comedy-driven meme reel promoting horse riding at The Wildhood Cafe — 1.5K likes, high shareability.",
    type: "reel",
    format: "video",
    style: "UGC / Meme / Viral",
    instagramUrl: "https://www.instagram.com/reel/DFFxf_iP0A_/",
    shortcode: "DFFxf_iP0A_",
    poster: "/portfolio/wh-horse-meme.jpg",
    engagement: { likes: 1500, comments: 9 },
    date: "2025-01-21",
  },
  {
    id: "wh-horse-riding",
    brandId: "wildhood-cafe",
    title: "Wildhood Horse Riding Club",
    description:
      "Experiential showcase of the horse riding club with Jaskirat Virk — cinematic outdoor footage.",
    type: "reel",
    format: "video",
    style: "Experiential / Cinematic",
    instagramUrl: "https://www.instagram.com/reel/DEece_KCTRk/",
    shortcode: "DEece_KCTRk",
    poster: "/portfolio/wh-horse-riding.jpg",
    engagement: { likes: 872, comments: 35 },
    date: "2025-01-06",
  },

  // ── Mach Global Immigration ────────────────────────────────
  {
    id: "mg-canada-pr",
    brandId: "mach-global",
    title: "Easy Canada PR — No LMIA Required",
    description:
      "Performance-driven reel for Canada PR applications — low IELTS accepted, direct response CTA.",
    type: "reel",
    format: "video",
    style: "Performance Ad / Direct Response",
    instagramUrl: "https://www.instagram.com/reel/DL9mrtdIo3X/",
    shortcode: "DL9mrtdIo3X",
    poster: "/portfolio/mg-canada-pr.jpg",
    engagement: { likes: 7, comments: 0 },
    date: "2025-07-11",
  },
  {
    id: "mg-nz-budget",
    brandId: "mach-global",
    title: "New Zealand on a Budget",
    description:
      "Travel visa reel — low budget, minimal paperwork, guaranteed success. Mach Global Panchkula.",
    type: "reel",
    format: "video",
    style: "Performance Ad / Direct Response",
    instagramUrl: "https://www.instagram.com/reel/DLW-aWfS5z4/",
    shortcode: "DLW-aWfS5z4",
    poster: "/portfolio/mg-nz-budget.jpg",
    engagement: { likes: 2, comments: 0 },
    date: "2025-06-26",
  },
  {
    id: "mg-europe-group",
    brandId: "mach-global",
    title: "Europe Group Visa — Family & Friends",
    description:
      "Group visa services reel for Europe — travel with family, friends, or in a group. Fast & transparent.",
    type: "reel",
    format: "video",
    style: "Performance Ad / Informational",
    instagramUrl: "https://www.instagram.com/reel/DLJ0G84y1-L/",
    shortcode: "DLJ0G84y1-L",
    poster: "/portfolio/mg-europe-group.jpg",
    engagement: { likes: 0, comments: 0 },
    date: "2025-06-21",
  },

  // ── EventResQ ──────────────────────────────────────────────
  {
    id: "er-crowds-handled",
    brandId: "event-resq",
    title: "Crowds. Energy. Emergencies? Handled.",
    description:
      "Brand awareness reel showing fully equipped hospital-style emergency medical setups at events.",
    type: "reel",
    format: "video",
    style: "Cinematic / Brand Awareness",
    instagramUrl: "https://www.instagram.com/reel/DTvLBL2k2e2/",
    shortcode: "DTvLBL2k2e2",
    poster: "/portfolio/er-crowds-handled.jpg",
    engagement: { likes: 45, comments: 9 },
    date: "2026-01-20",
  },
  {
    id: "er-offroad-rally",
    brandId: "event-resq",
    title: "Off-Road Rally Medical Coverage",
    description:
      "Action-packed documentary reel from Safar Expedition off-road rally — mud, madness & machines. 251 likes.",
    type: "reel",
    format: "video",
    style: "Documentary / Action",
    instagramUrl: "https://www.instagram.com/reel/DKDNcTUzb0u/",
    shortcode: "DKDNcTUzb0u",
    poster: "/portfolio/er-offroad-rally.jpg",
    engagement: { likes: 251, comments: 19 },
    date: "2025-05-25",
  },
  {
    id: "er-medical-setup",
    brandId: "event-resq",
    title: "Fully Equipped Medical Setup",
    description:
      "Showcase reel of EventResQ's on-ground medical infrastructure — preparing for emergencies before they happen.",
    type: "reel",
    format: "video",
    style: "Documentary / Showcase",
    instagramUrl: "https://www.instagram.com/reel/DUTGd3GjC1O/",
    shortcode: "DUTGd3GjC1O",
    poster: "/portfolio/er-medical-setup.jpg",
    engagement: { likes: 41, comments: 7 },
    date: "2026-02-03",
  },

  // ── Urban Theka ────────────────────────────────────────────
  {
    id: "ut-royal-instincts",
    brandId: "urban-theka",
    title: "Urban Roots. Royal Instincts.",
    description:
      "Product-focused carousel — Royal collection drop. Bold streetwear with Punjabi identity.",
    type: "carousel",
    format: "image",
    style: "Product / Brand Storytelling",
    instagramUrl: "https://www.instagram.com/p/DUf7tq-kxjf/",
    shortcode: "DUf7tq-kxjf",
    poster: "/portfolio/ut-royal-instincts.jpg",
    engagement: { likes: 0, comments: 0 },
    date: "2026-02-08",
  },
  {
    id: "ut-conquer-mind",
    brandId: "urban-theka",
    title: "Conquer Your Mind — Hoodie Drop",
    description:
      "Streetwear hoodie campaign carousel — 'Built for those who move their own way.' Eagle motif, dark tones.",
    type: "carousel",
    format: "image",
    style: "Product / Motivational",
    instagramUrl: "https://www.instagram.com/p/DUN470Fkxma/",
    shortcode: "DUN470Fkxma",
    poster: "/portfolio/ut-conquer-mind.jpg",
    engagement: { likes: 0, comments: 0 },
    date: "2026-02-01",
  },
];

// ─── Helpers ─────────────────────────────────────────────────

export function getBrand(brandId: string): Brand | undefined {
  return BRANDS.find((b) => b.id === brandId);
}

export function getItemsByBrand(brandId: string): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.brandId === brandId);
}

export function getItemsByType(type: PortfolioItem["type"]): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.type === type);
}

export const INDUSTRIES = [...new Set(BRANDS.map((b) => b.industry))];
export const CONTENT_TYPES = [...new Set(PORTFOLIO_ITEMS.map((i) => i.type))];
