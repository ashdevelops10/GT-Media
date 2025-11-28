# STAGE 1 — BRAND & CREATIVE FOUNDATION
## GT Media — Ultra-Premium Design System

**Document Date:** November 28, 2025  
**Version:** 1.0  
**Status:** ✅ Implemented

---

## 1. BRAND ANALYSIS

### Tone Of Voice
**Surgical. Cinematic. Assured.**

- Minimal words, maximum intent
- Verbs that imply authorship: *direct, choreograph, articulate, stage, distill*
- Avoid agency clichés: ~~"disrupt," "innovate," "transform"~~
- Speak in first person plural only when claiming accountability
- Technical precision without jargon bloat

### Market Positioning
**Top 1% creative engineering partner** for:
- Launches
- Brand films-as-sites
- Product storytelling
- Flagship editorial experiences

**Not a generalist shop** — a precision studio for high-stakes moments.

### Competitive Set (Aspirational Peers)
- **Pentagram** — Clarity, typographic authority
- **Collins** — Systemic brand narrative
- **Basic®** — Cinematic product narrative
- **Locomotive** — Motion systems and scroll craft
- **North Kingdom** — Interactive spectacle
- **Studio Dumbar** — Graphic systems
- **Resn** — Playful tech craft
- **Ueno (legacy)** — Product-level elegance

### Differentiator
**"Cinematic Precision on the Web"**

A production-level motion language embedded into meticulous, performant architecture. Feels like film direction; builds like a product.

### Proof Vectors
- Motion-first design systems
- Sequencing as a brand asset
- Typographic stagecraft
- Launch-grade stability (90+ Lighthouse mobile)
- Crisp content operations via CMS with editorial guardrails

---

## 2. AUDIENCE & POSITIONING

### Target Persona
**VPs of Brand/Marketing and Heads of Product** at:
- Series B+ tech companies
- Luxury DTC brands
- Culture media outlets
- Experiential retail

**Budget Comfort:** 3L–10L+ per flagship project

**KPIs:** Narrative clarity + perceived quality + ship date confidence

### Selection Criteria
Clients evaluate on:
- Board-room viable design
- Articulate rationale and process
- Stability under press coverage
- Tasteful restraint with a single moment of technical apex (not spread thin)

### Messaging Pillars
1. **Direction** — We direct digital like film
2. **Discipline** — Every byte serves the frame
3. **Delivery** — Launch-grade engineering without compromise

---

## 3. VISUAL IDENTITY STRATEGY

### Overall Direction
**Elite Neutral Swiss + Cinematic Accent**

A typographic canvas with a single strong accent system (color/motion) used sparingly.

### Signature Moment
**One hero moment per page:**
- Cinematic reveal
- Typographic overture
- 3D stage

Then fade into editorial calm. **No constant gimmicks.**

### Brand Texture
- Matte blacks
- Graphite neutrals
- Single heated accent (vermilion/red) used **<3% of surface area**
- Everything else breathes

---

## 4. COLOR BLUEPRINT

### Primary Palette

| Token | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Onyx Black** | `#0A0A0B` | Stage background | Deep, low gloss; ensures high contrast and filmic mood |
| **Paper White** | `#F6F7F9` | Editorial foreground | Sparse usage; keeps body text elegant on light themes |

### Secondary Neutrals

| Token | Hex | Usage |
|-------|-----|-------|
| **Graphite 900** | `#141518` | Body bg tint, long-form sections; reduces eye strain |
| **Graphite 700** | `#2B2D33` | Cards/frames; micro-elevation |
| **Graphite 400** | `#6B7078` | Secondary copy; subdued UI chrome |
| **Graphite 200** | `#C9CDD4` | Hairlines, borders; never full white |

### Accent System

| Token | Hex | Usage | Density |
|-------|-----|-------|---------|
| **Vermilion** | `#FF4D4D` | Active states, tiny rules, progress, selection | 1–3% |
| **Electric Coral** | `#FF6B5E` | Rare alternate for editorial highlights | <1% |

### Light/Dark Calibration

**Dark Mode (default):**
- Onyx/Graphite as canvas
- Paper White only for type and key UI

**Light Mode (optional editorial):**
- Paper White bg
- Graphite 700 for primary text
- Onyx for display headlines
- Accent usage cut in half to maintain restraint

### Psychology & Positioning
Black/graphite conveys **exclusivity and authority**. Limited accent simulates the **"director's laser pointer"** — intent, not decoration.

---

## 5. TYPOGRAPHY BLUEPRINT

### Primary Family: GT America
*(or Suisse Int'l / Neue Montreal)*

**Display:**
- GT America Expanded/Compressed
- Weight: 700–800
- Tight tracking for cinematic title cards

**Headings (H1–H3):**
- GT America Standard
- Weight: 600–700
- Optical size tuning per breakpoint

**Body:**
- GT America Standard
- Weight: 400–500
- Size: 16–18px base
- Line-height: 1.55–1.7

### Editorial Serif: Editorial New
*(Secondary for long-form)*

**Usage:** Pull-quotes and feature intros only
- Weight: 500–600
- Letter-spacing: +0.5–1.0 for digital clarity
- Line-height: 1.3–1.4

### Alternative System
*(License-conscious)*

- **Aeonik** (display/head)
- **Space Grotesk** (body with custom metrics)

### Micro Typography

**Microcopy:**
- Size: 12–13px
- Letter-spacing: +2–3%
- Line-height: 1.7–1.8 to avoid gray blocks

**Numerics:**
- Tabular for data
- Lining for display
- OpenType features where supported

### Line-Height Strategy

| Context | Line-Height | Purpose |
|---------|-------------|---------|
| Display | 1.05–1.15 | Drama, minimal wrap |
| Headings | 1.15–1.25 | Readability |
| Body | 1.6–1.7 | Comfort over long reads |

### Optical Adjustments

- **Large display:** Negative tracking (-2% to -4%)
- **Stacked headline/subhead:** Baseline shift (2–4px)
- **Body text:** Max 70–78 characters per line

### Font Loading Strategy

**next/font/local:**
- Preload 2 weights max (400, 600/700)
- Display weight via dynamic import after LCP or use same preloaded weight with CSS optical size
- Swap fallback: system-ui stack with metrics-adjusted CSS vars to prevent reflow
- Variable fonts allowed only if file < 110 KB per axis used
- Subset to Latin

---

## 6. GRID & LAYOUT SYSTEM

### Grid Architecture

**Desktop:**
- 12-column fluid grid
- Column width: 80–104px max
- Gutters: 24px

**Mobile:**
- 4-column
- Gutters: 16px

### Container Widths

| Context | Max Width | Usage |
|---------|-----------|-------|
| Content | 1280px | Body content, editorial |
| Hero | 1440px | Hero sections, imagery |
| Edge | 1680px | Edge-to-edge features |

### Vertical Rhythm

**Root rhythm:** 8px scale

**Major steps:**
- 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128

**Section spacers:**

| Size | Value | Usage |
|------|-------|-------|
| XS | 64px | Tight sections |
| S | 96px | Standard sections |
| M | 128px | Medium sections |
| L | 160px | Large sections |
| XL | 224px | Extra-large sections |
| Hero | 320–400px | Hero introduction |

### Whitespace Strategy

**Luxury breathes:**
- 55–65% negative space above the fold
- Don't fill edges
- Use whitespace to frame type like a poster
- Keep edges clean; avoid noise

### Section Architecture

**Overture (Hero):**
- Cinematic display line + minimal subhead
- One dominant focal action or motion

**Editorial Rows:**
- Alternating media/text
- Strong typographic rules (grid-aligned)

**Case Study Rail:**
- Horizontal scroller (snapped, low-friction)
- Revealing stills before entering detail

**Indexes:**
- Sparse table-like typographic lists
- Hover reveals
- Minimal images until intent is signaled

### Spacing Scale (Tokens)

```css
--s-0: 0
--s-1: 4px
--s-2: 8px
--s-3: 12px
--s-4: 16px
--s-5: 24px
--s-6: 32px
--s-7: 48px
--s-8: 64px
--s-9: 96px
--s-10: 128px
--s-11: 160px
```

---

## 7. SHAPE LANGUAGE & DESIGN MOTIFS

### Edge Treatment
**Default: Sharp Edges (0px radius)**

Rare usage of soft corners:
- Cards: 16px radius (sparingly)
- UI elements: 4–8px radius

### Layout Pattern
**Asymmetric Editorial with Cinematic Hero**

- Strong grid adherence with intentional breaks
- Editorial precision (Swiss influence)
- One cinematic apex per route

### Signature Elements

**Typographic Overtures:**
- Large display type with surgical line breaks
- Minimal subheads
- Generous whitespace

**Micro Accents:**
- Hairline rules (1px, graphite-200)
- Vermilion selection states
- Subtle elevation via shadow (sparingly)

**Motion Reveals:**
- Mask animations on type
- Subtle parallax on key art
- Scroll-triggered reveals with easing

### What to Avoid
- Playful rounded shapes
- Gradient backgrounds (except micro accents)
- Heavy drop shadows
- Decorative ornaments
- Constant animation

---

## 8. MOTION & ANIMATION SYSTEM

### Philosophy
**Choreography, not decoration.**

Motions serve reading order and emphasis. Strict timing curves; no playful physics on core UI.

### Smoothness Target
- 60fps constant
- Never drop frames for effect
- Disable heavy motion for reduced-motion users

### What Animates

✅ **Typography reveals**
- Mask or translateY 24–40px
- Easing: "power3.out"

✅ **Micro parallax on key art**
- <= 6% translate against scroll

✅ **Section reveals**
- Fade/scale subtle
- Duration: 140–220ms

✅ **Iconography micro-hover**
- Scale 1.02
- Duration: 80ms

### What NEVER Animates

❌ Body copy while reading  
❌ Navigation core affordances  
❌ Essential CTAs

### Loader Concept

**Silent Pre-roll:**
- Hero keyframe primer
- Auto-cancels if idle > 400ms
- Display inline loading only for media-heavy sections
- Skeletons over spinners

### Page Transitions

**Crossfade + typographic carry-over:**
- For related routes
- Hero headline persists momentarily

**Hard cut:**
- For tool-like pages (professional feel)

### Tooling Stack

| Tool | Purpose | Import Strategy |
|------|---------|-----------------|
| **GSAP + ScrollTrigger** | Scroll choreography | Lazy client import in useEffect |
| **Framer Motion** | Component state & route transitions | MotionConfig, reducedMotion |
| **Lenis** | Silky scroll | 1.1–1.2 duration, respects OS settings |
| **React Three Fiber** | WebGL hero (optional) | SSR off, dynamic import, idle-preload |

### WebGL Strategy

**When to use:**
- One hero truly benefits from 3D

**How to optimize:**
- GPU-friendly materials
- Low-poly meshes
- Minimal post-processing
- Static fallback for low-end devices

### Performance Guardrails

**Animation budget:**
- < 6ms scripting average per frame

**Best practices:**
- Clean up on unmount
- No orphaned listeners
- Clamp transforms
- Prefer CSS transform/opacity
- Avoid expensive props (width, height, top, left)
- Rasterize heavy layers (will-change) sparingly
- Remove will-change post-animation

---

## 9. DESIGN SYSTEM TOKENS

### Color Tokens

```css
--color-bg: #0A0A0B
--color-fg: #F6F7F9
--color-muted: #6B7078
--color-border: #C9CDD4
--color-accent: #FF4D4D

/* Graphite scale */
--color-graphite-900: #141518
--color-graphite-700: #2B2D33
--color-graphite-400: #6B7078
--color-graphite-200: #C9CDD4
```

### Typography Tokens

```css
--font-sans: "GT America", system-ui, -apple-system, sans-serif

/* Sizes */
--fs-display: clamp(3rem, 6vw, 6rem)
--fs-h1: clamp(2.25rem, 4vw, 4rem)
--fs-body: 1rem

/* Line-heights */
--lh-display: 1.1
--lh-head: 1.2
--lh-body: 1.65

/* Tracking */
--tracking-display: -0.02em
```

### Spacing Tokens

```css
--s-0: 0
--s-1: 0.25rem
--s-2: 0.5rem
--s-3: 0.75rem
--s-4: 1rem
--s-5: 1.5rem
--s-6: 2rem
--s-7: 3rem
--s-8: 4rem
--s-9: 6rem
--s-10: 8rem
--s-11: 10rem
```

### Radius Tokens

```css
--r-0: 0
--r-1: 0.25rem
--r-2: 0.5rem
--r-card: 1rem
```

### Shadow Tokens

```css
--elev-1: 0 1px 1px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)
```

### Motion Tokens

```css
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
--ease-emph: cubic-bezier(0.16, 1, 0.3, 1)

--dur-xs: 140ms
--dur-s: 220ms
--dur-m: 360ms
```

### Z-Index Tokens

```css
--z-nav: 100
--z-modal: 200
--z-toast: 300
```

---

## 10. TECH STACK STRATEGY

### Next.js 15 (App Router)
**Why:**
- Server Components by default = less JS shipped
- Built-in image pipeline with AVIF/WEBP
- Edge-first routing
- Metadata & OG image API
- Layouts and streaming for cinematic reveals

### TypeScript
**Why:**
- Tightens contracts for animation utilities
- CMS type safety
- Token maps with autocomplete
- Reduces regressions on high-stakes launches

### Tailwind + CSS Vars Hybrid
**Why:**
- Tailwind for utility ergonomics and zero-runtime
- CSS vars for tokens enabling theming, light/dark, and contextual palettes
- Best of both worlds: DX + flexibility

### GSAP + ScrollTrigger
**Why:**
- Industry-grade scroll choreography
- Plugin ecosystem mature and stable
- Imported only on client in dynamic blocks to avoid bundle bloat
- Predictable performance budget

### Framer Motion
**Why:**
- Component-level interactions
- Route transitions
- Works cleanly with RSC boundaries
- Smaller than GSAP for simple state animations

### Lenis
**Why:**
- Predictable, elegant smooth scrolling
- Coherent with ScrollTrigger
- Honors reduced motion
- Lightweight

### Radix UI (judiciously)
**Why:**
- Headless accessibility primitives (Dialog, Popover) when needed
- Ship only used parts
- Style with Tailwind/tokens to avoid framework weight
- Industry-standard a11y compliance

### Vercel Hosting
**Why:**
- Edge caching
- Image CDN with automatic optimization
- Zero-config SSR
- Fast cold starts
- Environment management
- Analytics integration

### SVGR
**Why:**
- Inline SVG with full control
- Animate strokes in CSS/GSAP
- No raster artifacts
- Component-based workflow

### Shaders / WebGL (Optional)
**Why:**
- One cinematic moment where it truly elevates
- Keep meshes low-poly
- Use post-processing lightly
- Gate behind IntersectionObserver
- Provide static fallback

---

## 11. PERFORMANCE STRATEGY

### CLS Avoidance
- Reserve media dimensions
- Fixed nav height
- Font metrics-override to prevent jank
- Skeletons instead of late image shifts
- No layout shifts during hydration

### Font Loading
- Preload two weights max
- Metrics-adjust fallback to avoid reflow
- Variable fonts only when truly needed and subsetted
- Display swap with system-ui fallback
- Adjust fallback metrics to match target font

### Image CDN
- next/image with AVIF/WEBP
- Strict `sizes` per layout
- Lazy by default
- `priority` on single LCP asset only
- Responsive srcset
- Blur placeholder for editorial images

### Animation Throttling
- Use RAF
- Cancel on unmount
- Debounce scroll handlers
- Cap parallax ranges
- Disable expensive effects on low-end via `navigator.hardwareConcurrency`
- Respect `prefers-reduced-motion`

### Hydration Strategy
- Server components for static sections
- Client islands for interactive blocks
- Dynamic imports + `ssr: false` only where truly needed
- Keep above-the-fold interactive code minimal
- Lazy hydration for below-the-fold components

### Component Splitting
- Hero animation code in separate client module
- 3D loaded only when intersecting viewport
- Route-level chunks validated via bundle analyzer
- Code-split by route and feature
- Shared chunks for common utilities

### Edge Caching
- Static assets on edge
- ISR for case studies
- SWR for low-risk data
- Sensible Cache-Control headers for OG images
- Stale-while-revalidate for dynamic content

### "Luxury Without Lag" Rules

**JS Budget:**
- Homepage < 120 KB gzipped (without 3D)
- Homepage < 200 KB gzipped (with 3D hero)

**Core Web Vitals Targets:**
- LCP < 2.2s mobile (real device)
- CLS ~0.00
- TBT negligible
- FID < 100ms

**Rule of One:**
- One "wow" per route
- The rest stays quiet and instant

---

## 12. IMPLEMENTATION STATUS

### ✅ Completed

- [x] Color system implemented in Tailwind config
- [x] Design tokens added to globals.css
- [x] Typography scale configured
- [x] Spacing system (8px rhythm)
- [x] Container widths defined
- [x] Font configuration with fallbacks
- [x] Navigation updated with new design system
- [x] Hero components updated
- [x] Main page redesigned with editorial sections
- [x] Motion utilities scaffolded
- [x] Performance optimizations in place

### 📋 Ready for Next Steps

**Typography:**
- Add actual GT America font files to `/public/fonts/`
- Uncomment font imports in `layout.tsx`

**Content:**
- Add case studies to Sanity
- Create work index page
- Add artist profiles

**Motion:**
- Implement scroll-triggered reveals on sections
- Add page transition animations
- Test reduced-motion fallbacks

**Performance:**
- Run Lighthouse audit
- Optimize bundle with analyzer
- Test on real mobile devices

---

## 13. APPROVAL CHECKLIST

### Brand & Positioning
- [ ] Tone and positioning align with desired clientele
- [ ] Messaging pillars resonate with target persona
- [ ] Competitive differentiation is clear

### Visual Identity
- [ ] Palette and accents feel premium, not aggressive
- [ ] Color psychology supports luxury positioning
- [ ] Light/dark modes tested

### Typography
- [ ] Typography licensing path confirmed (or fallback set)
- [ ] Font files ready to deploy
- [ ] Loading strategy prevents jank

### Layout
- [ ] Grid/spacing tested on representative content
- [ ] Container widths appropriate for content types
- [ ] Whitespace strategy feels luxurious

### Motion
- [ ] Motion bounds approved (no constant movement)
- [ ] Animation budget within performance targets
- [ ] Reduced motion fallbacks tested

### Technical
- [ ] 3D/WebGL limited to one hero, fallback prepared
- [ ] Performance budgets agreed, measured in CI
- [ ] Accessibility pass planned (focus states, reduced motion)

### Content
- [ ] CMS content model mirrors section archetypes
- [ ] Stakeholder alignment on single "signature" per route
- [ ] Image optimization pipeline configured

---

## NEXT: STAGE 2

**Focus Areas:**
1. Component library expansion
2. Advanced animation choreography
3. CMS integration and content modeling
4. Case study templates
5. Work index and filtering
6. Artist profile pages
7. Performance optimization and testing

---

**Document Version:** 1.0  
**Last Updated:** November 28, 2025  
**Status:** ✅ Stage 1 Complete — Ready for Stage 2
