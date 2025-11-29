# GT Media — CMS & Dynamic Content (Stage 7)

## Setup
- Create `.env.local` from `.env.local.example` with values:
  - `SANITY_PROJECT_ID`, `SANITY_DATASET`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_READ_TOKEN`, `REVALIDATE_SECRET`.
- Install deps and run:

```bash
pnpm install
# npm install
pnpm dev
pnpm studio # runs Sanity Studio locally
```

## Sanity Studio
- Config: `sanity/config.ts`, schemas under `sanity/schemas/*`.
- Deploy studio (optional):

```bash
pnpm sanity:deploy
```

## Seed Sample Content (optional)
Requires `SANITY_WRITE_TOKEN` locally. Do not commit real token.

```bash
SANITY_WRITE_TOKEN=your_token SANITY_PROJECT_ID=pid SANITY_DATASET=production \
  node scripts/seed-sample-data.ts
```

## Preview & Revalidate
- Preview: `/api/preview?secret=$REVALIDATE_SECRET&slug=case-studies/auric-records-launch`
- Webhook: POST to `/api/revalidate` with header `x-revalidate-secret: $REVALIDATE_SECRET` and body:

```json
{ "_type": "caseStudy", "slug": { "current": "auric-records-launch" } }
```

## Routes Added
- Dynamic pages: `app/case-studies/[slug]`, `app/artists/[slug]`, `app/services/[slug]`, `app/pages/[slug]`.
- SEO: JSON-LD injected server-side; OG image routes under `app/api/og/[slug]`.
- Sitemap/Robots: `app/sitemap.xml/route.ts`, `app/robots.txt/route.ts`.

## Verification Checklist (CMS & ISR)
- Visit `http://localhost:3000/case-studies/auric-records-launch` → 200 with seeded content.
- Visit `http://localhost:3333` (Studio) → docs exist.
- Trigger webhook via curl:

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "x-revalidate-secret: $REVALIDATE_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"_type":"caseStudy","slug":{"current":"auric-records-launch"}}'
```

- Check `http://localhost:3000/sitemap.xml` includes slug with `<lastmod>`.

## Launch Runbook (Production)

1. **Pre-flight checks (local):**
  - Ensure `.env.local` mirrors production secrets (without write tokens).
  - Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` locally.
2. **Run full CI pipeline:**
  - Push a branch and open a PR; verify GitHub Actions `CI` job passes.
  - Confirm Lighthouse scores in the uploaded `lhci-results` artifact (>= 90 across categories).
3. **Content freeze & sync:**
  - Coordinate a short content freeze window with stakeholders.
  - Confirm Sanity datasets (project/dataset IDs) match production.
4. **Sanity webhooks:**
  - Verify `REVALIDATE_SECRET` matches Sanity webhook configuration.
  - Confirm `caseStudy`, `artist`, `service`, and `page` webhooks are enabled.
5. **Vercel configuration:**
  - Ensure environment variables are set in Vercel (`SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_READ_TOKEN`, `REVALIDATE_SECRET`).
  - Confirm build command (`pnpm build`) and output settings are default.
6. **Security headers & domains:**
  - Verify `next.config.mjs` security headers are active on preview/staging.
  - Confirm canonical domain (`www.gt-media.com`) is primary and HTTPS-only.
7. **Smoke test (staging):**
  - Navigate: `/`, `/work`, `/case-studies/auric-records-launch`, `/artists`, `/services`, `/contact`.
  - Validate hero, navigation, forms, and footer links.
8. **Performance spot-check:**
  - Run Lighthouse in Chrome DevTools on `/` and `/case-studies/auric-records-launch` (mobile, slow 4G).
  - Optionally run `window.__gtMeasureFPS(5000)` from `scripts/measure-fps.js` snippet in DevTools to validate animation smoothness.
9. **Launch:**
  - Merge PR to `main`; verify final CI run passes.
  - Monitor Vercel deployment logs and initial traffic.
10. **Rollback plan:**
  - If a critical issue is found, revert the merge commit on `main` and redeploy.
  - Use Sanity draft/restore features to revert content-only regressions.

## Security Notes
- Never commit `SANITY_WRITE_TOKEN`. Use minimal read token for preview only.
- Lock webhooks with strong `REVALIDATE_SECRET`. Use HTTPS endpoints.
- Limit tokens to read-only for preview; write token only for local scripts.

## Bundle Avoidance Summary
- Avoid client-side fetching; use server components for data.
- Do not import Sanity client on the client; keep in `server` runtime.
- Use `next/image` with `auto('format')` and srcset to reduce payload.
- Prefer ISR with low `revalidate` over frequent client hydration.
- Keep OG generation simple (SVG+sharp) and cache aggressively.
# GT Media — Premium Website
## "Cinematic Precision on the Web"

An ultra-premium creative agency website built with Next.js 15, TypeScript, and cinematic motion design. Engineered for high-stakes launches with luxury aesthetics and performance-first architecture.

---

## 🎯 Project Status

**Stage 1:** ✅ Complete — Brand foundation, design system, technical scaffold  
**Stage 2:** 📋 Ready — Component library, content pages, CMS integration

**[View Stage 1 Summary →](./STAGE_1_SUMMARY.md)**

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 15.0.0 | Server Components, image pipeline, edge-ready |
| **Language** | TypeScript 5.9.3 | Type safety, refactoring confidence |
| **Styling** | Tailwind CSS 3.4.18 + CSS Vars | Zero-runtime utilities + theming |
| **Animation** | GSAP 3.13.0 + ScrollTrigger | Scroll choreography, cinematic reveals |
| **Transitions** | Framer Motion 11.18.2 | Route transitions, component animations |
| **Smooth Scroll** | Lenis 1.0.42 | Silky scroll with accessibility |
| **3D (Optional)** | React Three Fiber 9.4.0 | WebGL hero (lazy-loaded, SSR-off) |
| **CMS** | Sanity 4.19.0 | Structured content, real-time collaboration |
| **Hosting** | Vercel | Edge CDN, zero-config SSR, analytics |

---

## ⚡ Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your SANITY_PROJECT_ID

# Run development server
pnpm dev

# Open http://localhost:3000
```

**[Full Setup Guide →](./QUICKSTART.md)**

---

## 🎨 Design System

**Brand Positioning:** Elite creative agency for high-stakes launches (3L-10L+ projects)  
**Tone:** Surgical. Cinematic. Assured.  
**Visual Identity:** Neutral Swiss + Cinematic Accent

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Onyx Black** | `#0A0A0B` | Stage background |
| **Paper White** | `#F6F7F9` | Editorial foreground |
| **Graphite 900** | `#141518` | Body bg tint |
| **Graphite 700** | `#2B2D33` | Cards/frames |
| **Graphite 400** | `#6B7078` | Secondary copy |
| **Graphite 200** | `#C9CDD4` | Hairlines, borders |
| **Vermilion** | `#FF4D4D` | Accent (<3% usage) |

### Typography

- **Family:** GT America (fallback: system-ui)
- **Display:** 700-800 weight, tight tracking
- **Headings:** 600-700 weight, optical sizing
- **Body:** 400-500 weight, 1.6-1.7 line-height

### Grid System

- **Desktop:** 12-column fluid (80-104px columns, 24px gutters)
- **Mobile:** 4-column (16px gutters)
- **Rhythm:** 8px scale (12/16/24/32/48/64/96/128)
- **Containers:** 1280px (content), 1440px (hero), 1680px (edge)

**[Complete Blueprint →](./STAGE_1_BLUEPRINT.md)**

---

## 📂 Project Structure

```
/app                        # Next.js App Router
  fonts.ts                  # Font loading strategy
  globals.css               # Design tokens + utilities
  layout.tsx                # Root layout with fonts/theme
  page.tsx                  # Homepage (editorial sections)
  providers.tsx             # Client providers wrapper

/components
  /hero                     # Hero components (GSAP + Three.js)
  /nav                      # Navigation
  /ui                       # Shared UI components

/lib
  /animations               # Animation utilities (GSAP, Lenis, reveal)
  /analytics                # Performance tracking
  /sanity                   # CMS client

/sanity/schemas             # CMS content models
/hooks                      # React hooks
/docs                       # Documentation
```

---

## ✨ Features

### Implemented (Stage 1)

- ✅ **Server Components** — Default to SSR, client islands for interaction
- ✅ **Design Tokens** — CSS variables + Tailwind theme
- ✅ **Typography System** — Display/heading/body scales with optical sizing
- ✅ **Color Palette** — Luxury onyx/graphite/vermilion
- ✅ **Grid System** — 12-column, 8px rhythm
- ✅ **Animation Utilities** — GSAP reveal, parallax, scroll integration
- ✅ **Smooth Scroll** — Lenis with reduced-motion fallbacks
- ✅ **Page Transitions** — Framer Motion crossfade
- ✅ **Font Optimization** — Metrics override, fallback strategy
- ✅ **Image Pipeline** — next/image with AVIF/WebP
- ✅ **Performance Monitoring** — Web Vitals tracking
- ✅ **CMS Schemas** — Artist, case study, page, section models

### Pending (Stage 2)

- 📋 **Component Library** — Case study card, work index, artist profiles
- 📋 **Content Pages** — `/work`, `/work/[slug]`, `/artists/[slug]`, `/about`
- 📋 **Advanced Features** — Horizontal scroll rail, interactive 3D hero
- 📋 **CMS Integration** — Populate Sanity with content, preview mode
- 📋 **Polish** — OG images, favicons, loading states, 404 page, a11y audit

---

## 🚀 Scripts

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript compilation check

# Utilities
pnpm analyze          # Bundle size analysis (after build)
./verify-setup.sh     # Verify project setup
```

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| **LCP** (Largest Contentful Paint) | < 2.2s mobile | 🟡 Pending audit |
| **CLS** (Cumulative Layout Shift) | ~0.00 | 🟡 Pending audit |
| **TBT** (Total Blocking Time) | < 200ms | 🟡 Pending audit |
| **Lighthouse Score** | 90+ (mobile) | 🟡 Pending audit |
| **Bundle Size (core)** | < 120 KB gzipped | ✅ Within budget |
| **Bundle Size (with 3D)** | < 200 KB gzipped | 🟡 Not yet tested |

**[Performance Guide →](./docs/PERFORMANCE.md)**

---

## 📚 Documentation

### Core Docs
- **[Stage 1 Summary](./STAGE_1_SUMMARY.md)** — Executive summary, approval checklist, next steps
- **[Stage 1 Blueprint](./STAGE_1_BLUEPRINT.md)** — Complete brand/design/tech foundation
- **[Quick Start Guide](./QUICKSTART.md)** — Setup instructions

### Technical Guides
- **[Tech Stack Justification](./docs/TECH_STACK.md)** — Why Next.js, TypeScript, GSAP, etc.
- **[Performance Ruleset](./docs/PERFORMANCE.md)** — CLS prevention, font loading, caching, monitoring

---

## 🎯 Brand Positioning

**Target Persona:** VPs of Brand/Marketing and Heads of Product at Series B+ tech, luxury DTC, culture media  
**Budget Comfort:** 3L–10L+ per flagship project  
**Selection Criteria:** Board-room viable design, articulate process, launch-grade stability  

**Messaging Pillars:**
1. **Direction** — We direct digital like film
2. **Discipline** — Every byte serves the frame
3. **Delivery** — Launch-grade engineering without compromise

**Differentiator:** "Cinematic Precision on the Web" — Production-level motion embedded in meticulous, performant architecture

---

## 🔧 Environment Variables

Create `.env.local` in project root:

```bash
# Sanity CMS
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
```

---

## 🚨 Known Issues & Pending Items

### Before Production Launch

- [ ] **Font Files** — Add GT America WOFF2 to `/public/fonts/`, uncomment imports in `app/fonts.ts`
- [ ] **Sanity Project** — Configure `SANITY_PROJECT_ID` in `.env.local`
- [ ] **Performance Audit** — Run Lighthouse, measure Core Web Vitals
- [ ] **Animation Integration** — Apply scroll reveals to homepage sections
- [ ] **Accessibility** — Test keyboard navigation, screen readers, reduced motion

### Stage 2 Planning

- [ ] Build component library (case study card, work index, artist profile)
- [ ] Create content pages (`/work`, `/work/[slug]`, `/about`, `/contact`)
- [ ] Populate Sanity with 3-5 case studies, 2-3 artist profiles
- [ ] Add OG images, favicons, 404 page
- [ ] Final polish and launch prep

---

## 📝 License

MIT

---

**Built with precision. Shipped with confidence.**

3. **Risk: Multiple heavy custom fonts / many weights**  
   Mitigation: Limit to 1–2 weights via `next/font/local` and preload only those; rely on system fonts for the rest.

4. **Risk: Sanity client in the client bundle**  
   Mitigation: Keep Sanity usage inside server components / server actions; never import the Sanity client in `"use client"` modules.

5. **Risk: Analytics and tracking scripts**  
   Mitigation: Add only minimal `reportWebVitals` + `sendBeacon` usage; integrate marketing tags via tag manager with strict consent and load after interaction where possible.

## Bundle Size Expectations (Initial Scaffold)

- **Unminified initial JS (development build):** ~350–450 KB for the main route (includes React, Next, Tailwind runtime, client providers, Hero client). Dev builds are always heavier.
- **Production minified, gzipped initial JS:** ~90–130 KB for `/` with GSAP loaded (but without Three hero). With Three hero enabled, expect ~150–200 KB gzipped for the route that uses it.
- After removing dev tools and keeping 3D optional and off landing, a realistic production homepage should stay around **< 120 KB gzipped** of JS shipped to the browser, with room to spare for minor additional interactions.
