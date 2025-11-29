# STAGE 3 — COMPLETE UI DESIGN SYSTEM, VISUAL LANGUAGE & COMPONENT LOOKBOOK

## Brand Identity Statement

GT Media is a cinematic, editorial-led creative studio for artists, cultural leaders, and luxury brands: a place where high-gloss celebrity imagery, brutalist grids, and surgically precise typography converge into experiences that feel like limited-edition print objects brought to life on screen—restrained, confident, and unapologetically premium.

---

## 1. Complete Color System

### A. Core Palette (6 colors)

| Color | Hex | Token | Usage |
|-------|-----|-------|-------|
| **Ink** | `#050508` | `ink` | Deep near-black with blue-violet hint; primary dark canvas |
| **Charcoal** | `#111118` | `charcoal` | Lifted dark neutral for surfaces, cards, panels |
| **Paper** | `#F6F3EE` | `paper` | Soft warm off-white for light sections, forms |
| **Stone** | `#CAC2B5` | `stone` | Muted warm gray-beige for dividers, metadata |
| **Auric Gold** | `#D9B06A` | `auric` | Desaturated brushed gold for accents, CTAs |
| **Claret** | `#4F1F2D` | `claret` | Deep red-brown for rare emphasis, status |

### B. Color Usage Rules

#### Ink (`#050508`)
- **Use**: Global dark background, hero sections, nav bars, footer, modal overlays, large headlines in light mode
- **Avoid**: Body text on dark surfaces (use `paper` text on `ink`), large flat buttons
- **Contrast**: Primary text is `paper`; accent text/elements use `auric`; `stone` for dividers
- **Motion-safe**: Excellent for fades and masked reveals; avoid blur, keep edges crisp

#### Charcoal (`#111118`)
- **Use**: Cards, raised panels, feature modules, navigation dropdowns, hover-elevated elements over `ink`
- **Avoid**: Pure text color on `paper` (too dark)
- **Contrast**: Use `paper` for text, `auric` for accents, `stone` for metadata
- **Motion-safe**: Ideal for slide and scale animations; subtle elevation with shadows

#### Paper (`#F6F3EE`)
- **Use**: Light content sections, long-form stories, case-study narratives, forms, legal pages
- **Avoid**: Full-page backgrounds in cinematic scenarios (use `ink` instead)
- **Contrast**: Primary text is near-black (`#14131A`); `auric` for highlights; `claret` for rare emphasis
- **Motion-safe**: Keep motion restrained—focus on opacity and translation, not color shifts

#### Stone (`#CAC2B5`)
- **Use**: Hairline borders, dividers, muted backgrounds for stats/filters, icon strokes, subdued chips
- **Avoid**: Primary text or CTA backgrounds
- **Contrast**: Works best adjacent to `ink` or `paper`; never on `charcoal` surfaces
- **Motion-safe**: Mostly static; if animated, confine to small shifts or fades

#### Auric Gold (`#D9B06A`)
- **Use**: Primary CTA borders/fills (restrained), key metrics, underlines, active nav indicators, selection chips
- **Avoid**: Large backgrounds, paragraphs, constant animated glows
- **Contrast**: Foreground on `ink`/`charcoal`; refined accent on `paper`
- **Motion-safe**: Micro-motions (border expansion, underlines, icon strokes) over surface pulsation

#### Claret (`#4F1F2D`)
- **Use**: Status tags ("Exclusive"), important card highlights, subtle badge backgrounds
- **Avoid**: Primary buttons, global nav, form fields
- **Contrast**: Pair with `paper` text and `stone` borders on `ink`/`charcoal`
- **Motion-safe**: Only slight fades and position shifts

### C. Background Layer Strategy

- **Dark-first mode**:
  - Background: `ink` → Surfaces: `charcoal` → Text: `paper`/`stone` (secondary)
- **Light sections**:
  - Background: `paper` → Surfaces: white overlays with shadow → Text: near-black
- **Section separators**: `stone` hairlines (1px) at 8px or 16px offsets
- **Surface layers**: Cards on `ink` use `charcoal` base; on `paper` use white or light tint
- **Elevation levels**: Subtle shadows (`0 6px 16px rgba(0,0,0,0.18)`) for raised elements

### Accessibility
- Minimum contrast ratio: **4.5:1** for all body text
- Accent-only elements (hairlines, icon details) can dip slightly lower but must be paired with accessible labels

---

## 2. Typography System (Luxury Editorial Quality)

### Font Families

| Family | Use Case | Token | Weights |
|--------|----------|-------|---------|
| **Libre Caslon Display** | Hero headlines, case-study titles, pull-quotes | `font-display` | 400–600 |
| **Inter** | Paragraphs, UI labels, nav items, buttons, forms | `font-sans` | 400, 500, 600 |
| **Space Grotesk** | Metrics, timestamps, captions, numeric stats | `font-accent` | 500–600 |

### Usage Map

#### Display (`font-display`)
- **Use**: Hero headlines, case-study titles, big statements, key pull-quotes
- **Weights**: 400–600 only; avoid ultra-bold
- **Sizes**:
  - XXL Hero: 64–88px desktop, 40–52px mobile
  - Secondary hero: 40–56px desktop, 28–36px mobile
- **Tracking**: Slightly negative at hero scale (-2% to -4%), neutral at smaller headings

#### Body (`font-sans`)
- **Use**: Paragraphs, UI labels, nav items, buttons, form fields
- **Weights**: 400 (body), 500 (labels), 600 (subheads)
- **Sizes**:
  - Body: 16px with 1.6–1.7 line-height
  - Long-form: 17–18px with 1.7–1.8 line-height
  - Microcopy: 13–14px with 1.5 line-height

#### Accent (`font-accent`)
- **Use**: Metrics (e.g., "2.4x"), timestamps, small captions, key numeric stats
- **Weights**: 500–600
- **Sizes**: 14–18px; uppercase for tags

### Typographic Rhythm & Vertical Grid

- **Base unit**: 4px
- **Vertical rhythm grid**: 8px (macro scale: 8/16/24/32/48/64/96)
- **Standard line-heights**:
  - Hero display: 1.0–1.1
  - H2/H3: 1.15–1.25
  - Body: 1.6–1.8
- **Paragraph spacing**: 1× base (16px) between paragraphs; 2× base (32px) between sections
- **Don't** center-align long paragraphs; center only for short statements or CTA copy

---

## 3. Shape Language & Geometry System

### Container Radius Rules

| Element | Radius | Token |
|---------|--------|-------|
| Global elements | 2px | `rounded-xs` |
| Cards | 4px | `rounded-sm` |
| Inputs & secondary buttons | 4px | `rounded-sm` |
| Primary CTAs | 9999px (pill) | `rounded-pill` |
| Soft images (portraits) | 12px | `rounded-md` |
| Brutalist images | 0px | `rounded-none` |

### Section Shapes

- Hard, edge-to-edge bands of `ink`, `charcoal`, or `paper`
- Subtle top/bottom dividers with `stone` to indicate transitions
- No diagonal clipping; straight rects and rare soft masks only

### Image Containers

**Preferred ratios**:
- **3:4**, **4:5** (portraits)
- **16:9** (video, stage, wide shots)
- **21:9** (ultra-wide cinematic hero)

**Masking & Clips**:
- Very restrained: straight rects and rare soft masks
- If mask is used, simple vertical reveal (top-to-bottom) feels like opening a book

### Luxury Grid System

- **Primary Grid**: 12-column
- **Gutters**: 72–80px max on desktop, 24–32px on tablet, 16px on mobile
- **Max width**: 1440–1600px
- **Editorial Asymmetry**:
  - Hero: 7/12 + 5/12 split for text/media
  - Case studies: 8/12 dominant tile, 4/12 stack
  - About sections: 6/12 manifesto, 6/12 supporting details

---

## 4. Motion Language (GSAP + Lenis Friendly)

### Principles

Motion supports narrative; it never shouts.

**Motion scales**:
- **Slow Luxury** (default): Weighty, editorial, cinematic
- **Energetic**: Only for specific promotional sequences

### Durations

| Context | Duration | Token |
|---------|----------|-------|
| Button hover | 0.18–0.24s | `duration-xs` / `duration-sm` |
| Micro-underline expansions | 0.22–0.3s | `duration-sm` |
| Card elevations | 0.4s | `duration-md` |
| Main section entrances | 0.8–1.2s | `duration-lg` / `duration-xl` |
| Image reveals | 0.9–1.3s | `duration-xl` |
| Page transitions | 0.6–0.9s | `duration-lg` |

### Easing

| Use Case | Easing | Token |
|----------|--------|-------|
| Default | `power2.out` / `power3.out` | `ease-smooth` |
| Large hero transitions | `power4.out` | `ease-luxury` |
| Subtle UI elements | `sine.out` | `ease-sine` |
| Standard ease | `ease` | `ease-soft` |

**Avoid** bouncy/spring overshoot except for tiny icons (scale 0.98 → 1.02)

### Scroll-Trigger Conventions

- **Lenis**: Smooth scroll with low damping; weighty, not floaty
- **GSAP ScrollTrigger**:
  - Reveal blocks on 15–20% viewport entry
  - Translation of 24–40px along Y and opacity from 0 to 1
  - Never animate from far off-screen

### Typography Reveals

- **Headline**: Line-by-line or word-by-word vertical mask reveal
  - Duration per line: 0.5–0.7s, stagger 0.08–0.12s
- **Body text**: Simple fade + tiny Y-shift (8–12px) on first appearance

### Parallax Rules

- **Background images**: 5–10% parallax range; never more
- **Foreground cards**: Subtle counter-motion of 3–5px to create depth
- **Limit**: At most 1–2 parallax elements per viewport

### Page Transitions

- Fade to `ink` overlay at 0.4–0.5s, then reveal next page from bottom or slight zoom-out
- Preserve nav; don't animate the logo away fully

### Hover Micro-Interactions

- **Buttons**: Border thickening (1px → 2px), subtle background tint, icon shift 2–4px
- **Cards**: Elevate with 2–4px translateY and 4–8px blur-less shadow; saturation bump 5–10%
- **Links**: Underlines slide in from left to right with 0.2s ease

### When NOT to Animate

- Legal text, long-form body copy, forms beyond on-focus cues
- Accessibility-focused pages: minimal motion; offer reduced-motion support
- Dense content (filter panels, long tables)

---

## 5. Component Library Visual Styles

### Buttons

#### Primary
- **Background**: `ink` on light, `auric` outline on dark → hover fill
- **Text**: `paper`
- **Shape**: pill (9999px), height 44–52px
- **Hover**: Border or fill changes, subtle 2px elevate, arrow icon shift right
- **Motion**: 0.18–0.24s ease

#### Secondary
- **Outline**: `stone` or `auric`
- **Background**: transparent
- **Shape**: 4px radius, more editorial
- **Hover**: Underline expand or subtle fill

### Links

- **Body links**: `auric` text or underline-only; no bright blues
- **Hover**: Underline expands from left, slight color shift toward lighter gold
- **Duration**: 0.2s

### Navbars

- **Background**: `ink` with low-opacity blur or `charcoal`
- **Items**: uppercase `font-sans` 12–13px, spaced out (0.18em tracking)
- **Active**: `auric` underline bar or dot

### Headers

- Clear typographic hierarchy: H1 (display), H2 (large sans or display), H3 (sans, uppercase)
- Generous spacing on top (48–64px) and bottom (24–32px)

### Footers

- **Background**: `ink`
- **Columns**: 3–4; mix label (uppercase micro sans) + link lists
- **Dividers**: `stone` lines, 1px at 8px or 16px offsets

### Cards

- **Background**: `charcoal` on dark sections, `paper` on light
- **Radius**: 4px, shadow subtle and crisp
- **Content**: Image on top, meta strip, title, tags
- **Hover**: Small elevate, mild saturation bump

### Image Grids

- Asymmetric layout: 1 large tile, 2–3 smaller; maintain breathing room
- Overlay: top gradient from `ink` to transparent, text in `paper`

### Case Study Blocks

- **Layout**: 7/12 image, 5/12 text; or stacked for mobile
- **Include**: Category tag, title, metrics row, CTA
- **Motion**: Slow reveal of image and delayed text

### Testimonial Blocks

- **Background**: `charcoal` or `paper` band
- **Quote**: Display or serif with large quotes; name in accent font; role in microcopy

### Stats Blocks

- **Numbers**: `font-accent`, large (32–40px), `auric` or `paper` depending on background
- **Labels**: Small and uppercase

### Process Blocks

- Step index (01, 02, 03) in accent font, large but faint
- String line or ladder line linking steps using `stone`

### Accordions

- **Minimal**: Full-width rows; label left, icon right
- **Border-bottom**: `stone`
- **Motion**: Height auto with 0.24–0.3s ease, chevron rotates 90°

### Form Elements

- **Background**: `paper` or `charcoal` depending on section
- **Borders**: `stone` or subtle `auric` on focus
- **Labels**: Floating labels, microcopy 12–13px
- **Error state**: Subtle `claret` border and text, no harsh fills

---

## 6. Iconography System

- **Style**: Mono-stroke, minimal geometric icons with slightly softened corners
- **Stroke Thickness**: 1.5px at 24px icon size (scale accordingly)
- **Corner Radius**: 2–4px for internal curves; outer shapes mostly sharp
- **Weight & Personality**: No cartoon or filled glyphs; line icons only
- **Color Usage**:
  - Default: `stone` on `ink` or `charcoal`, `ink` on `paper`
  - Accent: `auric` only for key interactive icons (play, arrow)

---

## 7. Photography / Imagery Style

### Art Direction

- High-contrast, editorial, cinematic
- Subjects: performers, artists, live moments, studio environments, city at night, luxurious textures

### Color Grading

- Cool blacks, warm skin, gold highlights
- Desaturated backgrounds with precise accent tones (gold lights, claret details)

### Framing

- Intimate half-portraits, over-the-shoulder shots, negative space for overlay text
- Rule-of-thirds, but embrace asymmetry

### Lighting

- Directional, often single-source, with defined shadows
- Nighttime neon allowed only in controlled, muted palettes aligned with `auric` and `claret`

### Ratios

- Hero: 16:9 or 21:9
- Case study main visuals: 3:4 or 4:5
- Grid tiles: mix 1:1 and 4:5

### Negative Space

- Essential for text overlays; maintain 30–40% of image as breathable area

---

## 8. UI Kits / Tokens

### Token Library (Tailwind-Compatible)

```css
:root {
  /* Color Tokens */
  --color-ink: #050508;
  --color-charcoal: #111118;
  --color-paper: #F6F3EE;
  --color-stone: #CAC2B5;
  --color-auric: #D9B06A;
  --color-claret: #4F1F2D;

  /* Text Tokens */
  --text-primary-dark: #14131A;
  --text-primary-light: #F6F3EE;
  --text-secondary: #A39A8A;

  /* Spacing Tokens (8px rhythm) */
  --spacing-2xs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;

  /* Radius Tokens */
  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  /* Typography Tokens */
  --font-display: "Libre Caslon Display", "Times New Roman", serif;
  --font-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-accent: "Space Grotesk", ui-monospace, SFMono-Regular, Menlo, monospace;

  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;
  --font-size-3xl: 40px;
  --font-size-4xl: 56px;
  --font-size-5xl: 72px;

  --leading-tight: 1.1;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;

  /* Motion Tokens */
  --duration-xs: 0.18s;
  --duration-sm: 0.24s;
  --duration-md: 0.4s;
  --duration-lg: 0.8s;
  --duration-xl: 1.2s;

  --easing-soft: cubic-bezier(0.25, 0.1, 0.25, 1);
  --easing-smooth: cubic-bezier(0.19, 1, 0.22, 1);
  --easing-luxury: cubic-bezier(0.16, 1, 0.3, 1);

  /* Shadow Tokens */
  --shadow-soft: 0 12px 30px rgba(0, 0, 0, 0.25);
  --shadow-subtle: 0 6px 16px rgba(0, 0, 0, 0.18);

  /* Layout Tokens */
  --layout-max-width: 1440px;
  --layout-gutter-mobile: 16px;
  --layout-gutter-desktop: 72px;
}
```

### Tailwind Configuration Mapping

These tokens map directly into `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      ink: "#050508",
      charcoal: "#111118",
      paper: "#F6F3EE",
      stone: "#CAC2B5",
      auric: "#D9B06A",
      claret: "#4F1F2D"
    },
    fontFamily: {
      display: ["Libre Caslon Display", "serif"],
      sans: ["Inter", "sans-serif"],
      accent: ["Space Grotesk", "monospace"]
    },
    spacing: {
      // 8px rhythm system mapped
    },
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "12px",
      pill: "9999px"
    },
    transitionDuration: {
      xs: "180ms",
      sm: "240ms",
      md: "400ms",
      lg: "800ms",
      xl: "1200ms"
    },
    transitionTimingFunction: {
      soft: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      smooth: "cubic-bezier(0.19, 1, 0.22, 1)",
      luxury: "cubic-bezier(0.16, 1, 0.3, 1)"
    }
  }
}
```

---

## Final Approval Summary

Stage 3 defines GT Media's complete visual language:

- ✅ **Dark, cinematic canvas** grounded in `ink` and `charcoal`
- ✅ **Restrained accent palette** with auric gold and warm paper tones
- ✅ **Editorial typography** pairing serif display with precise grotesk body and numeric accent
- ✅ **Disciplined 12-column grid** with editorial asymmetry
- ✅ **Sharp-but-refined geometry** (2px global radius, 4px cards, pill CTAs)
- ✅ **GSAP + Lenis motion language** tuned to "slow luxury"
- ✅ **Full component aesthetic blueprint** with hover states, motion states, and accessibility
- ✅ **Tokens ready to wire** directly into Next.js + Tailwind

This system is now **implementation-ready for Stage 4 & 5**, ensuring every UI decision feels cohesive, elevated, and unmistakably GT Media.

---

## Implementation Checklist

- [x] Update `tailwind.config.js` with Stage 3 color palette
- [x] Update `tailwind.config.js` with typography scale
- [x] Update `tailwind.config.js` with spacing, radius, shadows
- [x] Update `tailwind.config.js` with motion tokens
- [x] Update `app/globals.css` with CSS custom properties
- [x] Document complete design system in `STAGE_3_DESIGN_SYSTEM.md`
- [ ] Update existing components to use new color tokens
- [ ] Install web fonts (Libre Caslon Display, Space Grotesk)
- [ ] Create icon set with 1.5px stroke weight
- [ ] Add real photography with proper color grading
- [ ] Implement smooth scroll with Lenis
- [ ] Add GSAP ScrollTrigger animations
- [ ] Create component showcase/storybook
