# Stage 2 — UX Architecture, Section Strategy & High-Fidelity Wireframes

Stage 1 defined the strategic foundation, brand narrative, and technical guardrails for GT Media. Stage 2 translates that foundation into a rigorous UX architecture with premium, editorial-grade wireframes ready for high-end visual exploration.

---

## 1. Complete Site Map (Premium Hierarchy)
```
GT Media
├── Home
│   ├── Cinematic Hero & Value Frame
│   ├── Flagship Case Study Highlights
│   ├── Why Choose Us / Differentiators
│   ├── Signature Capabilities (Strategy → Brand → Web → Content)
│   ├── Ritual Process Overview
│   ├── Authority Layer (Awards / Clients / Metrics)
│   ├── Philosophy Teaser
│   └── Luxury CTA (“Start a Conversation”)
├── About
│   ├── Philosophy Manifesto
│   ├── Origin Narrative Timeline
│   ├── Creative Values Grid
│   ├── Design Methodologies Carousel
│   ├── Leadership / Persona Spotlight
│   ├── Brand Principles Matrix
│   └── Secondary CTA
├── Services
│   ├── Outcome-Focused Hero
│   ├── Strategy Suite
│   ├── Brand Identity Suite
│   ├── Website Design & Dev Suite
│   ├── Visual Content Suite
│   ├── Differentiation Table
│   ├── Engagement Models
│   └── CTA
├── Case Studies
│   ├── Hero Featuring Top 3 Projects
│   ├── Filterable Grid (Industry / Discipline / Outcome)
│   └── Progressive Load Pagination
├── Case Study Template
│   ├── Hero Banner + Metrics Snapshot
│   ├── Overview (Client, Sector, Services)
│   ├── Challenge
│   ├── Strategy Pillars
│   ├── Execution Timeline
│   ├── Visual Gallery (Asymmetric Grid)
│   ├── Components Breakdown
│   ├── Results (KPI & Qualitative)
│   └── Next Project Navigation
├── Process / How We Work
│   ├── Principles
│   ├── Phase Timeline
│   └── Tooling & Collaboration Layer
├── Pricing Philosophy (Value Narrative, No Line Items)
├── Contact / “Start a Project” Funnel
└── Legal (Privacy, Terms, Accessibility) — subdued in footer
```

---

## 2. ASCII Wireframes & Section Specs

### 2.1 Home Page
```
┌───────────────────────────────────────────────────────────────────────┐
│  HERO (Full viewport, 12-col grid, baseline rhythm 1.0)               │
│  ┌───────────────┬─────────────────────────────────────────────────┐  │
│  │ EYEBROW       │                                                   │  │
│  │ DISPLAY H1    │  MEDIA CANVAS (cinematic loop w/ texture overlay) │  │
│  │ SUBHEAD (50ch)│                                                   │  │
│  │ CTA STACK     │                                                   │  │
│  └───────────────┴─────────────────────────────────────────────────┘  │
│  CONTROLLED MOTION: line-by-line reveal, media kinetic mask          │
├───────────────────────────────────────────────────────────────────────┤
│ FEATURED WORK (Editorial quad, asymmetric)                            │
│ ┌────────────┬───────────────────────────────┐ ┌───────────────────┐ │
│ │ CARD A     │ CARD B (wide, hero project)   │ │ CTA / Insight Tile │ │
│ └────┬───────┴───────────────────────────────┘ └───────────────────┘ │
│      │ROW2: CARD C (portrait) | CARD D (landscape)                    │
│ HOVER: mask wipe + title slide; images respect 3px safe inset         │
├───────────────────────────────────────────────────────────────────────┤
│ WHY CHOOSE US (2x2 differentiator grid + narrative column)            │
│ L: Heading + thesis; R: Tiles with subtle hover parallax (<6px)       │
├───────────────────────────────────────────────────────────────────────┤
│ SIGNATURE CAPABILITIES (Horizontal track, snap points)                │
│ [Strategy] [Brand Identity] [Web Experience] [Visual Content]         │
│ Each card: icon, outcome bullets, micro-interaction bar               │
├───────────────────────────────────────────────────────────────────────┤
│ AUTHORITY LAYER                                                       │
│ Awards marquee · Metrics row · Client logos (grayscale → color hover) │
├───────────────────────────────────────────────────────────────────────┤
│ PROCESS LADDER (vertical, 5 stages with gradient connectors)          │
├───────────────────────────────────────────────────────────────────────┤
│ PHILOSOPHY TEASER (2-col editorial)                                   │
├───────────────────────────────────────────────────────────────────────┤
│ LUXURY CTA BLOCK (dark section, centered typographic stack)           │
└───────────────────────────────────────────────────────────────────────┘
```
**Layout Logic**: 12-column grid, 72px outer gutters desktop, section spacing 96/64/48. Display type `gtDisplay`, supporting `gtSans`. Editorial asymmetry echoes high-fashion print.  
**Motion**: Lenis smoothing, hero copy stagger (120ms), cards fade+mask, process connectors animate gradient flow on scroll (trigger at 40% viewport).  
**Interaction**: Entire cards focusable, CTA hover uses accent border morph, metrics counters animate once (reduces motion on prefers-reduced-motion).

---

### 2.2 About Page
```
┌──────────────────────────────────────────────────────────────┐
│ HERO SPLIT                                                   │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ Manifesto H1  │ Pull-quote / serif highlight             │ │
│ └───────────────┴──────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ ORIGIN NARRATIVE (single column, timeline markers inline)    │
├──────────────────────────────────────────────────────────────┤
│ CREATIVE VALUES GRID (3 x 2 cards, editorial captions)       │
├──────────────────────────────────────────────────────────────┤
│ DESIGN METHODOLOGIES CAROUSEL (4 nodes, snap)                │
├──────────────────────────────────────────────────────────────┤
│ LEADERSHIP / PERSONA SPLIT                                   │
│ Portrait (art-directed) | Biography + stats row              │
├──────────────────────────────────────────────────────────────┤
│ BRAND PRINCIPLES MATRIX (4 columns, evidence row)            │
├──────────────────────────────────────────────────────────────┤
│ SECONDARY CTA STRIP (link to Services)                       │
└──────────────────────────────────────────────────────────────┘
```
**Layout Logic**: Narrower measure (max 1280) to feel editorial. Alternating rhythm 80/56.  
**Motion**: Timeline markers fade upward, portrait has gentle scale-in, matrix cells cascade diagonally.  
**Interaction**: Methodology carousel keyboard-draggable, persona card reveals additional facts on hover/focus.

---

### 2.3 Services Page
```
┌──────────────────────────────────────────────────────────────┐
│ HERO: Outcome framing headline + proof metrics               │
├──────────────────────────────────────────────────────────────┤
│ SECTION STACK (each = split layout)                          │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ STRATEGY      │ Deliverables · Process · Outcomes        │ │
│ └───────────────┴──────────────────────────────────────────┘ │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ BRAND IDENTITY│ Editorial preview grid + spec column     │ │
│ └───────────────┴──────────────────────────────────────────┘ │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ WEB EXPERIENCE│ 3-column capability cards                 │ │
│ └───────────────┴──────────────────────────────────────────┘ │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ VISUAL CONTENT│ Mosaic thumbnails + narrative            │ │
│ └───────────────┴──────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ DIFFERENTIATION TABLE (GT vs commodity agencies)             │
├──────────────────────────────────────────────────────────────┤
│ ENGAGEMENT MODELS ACCORDION                                  │
├──────────────────────────────────────────────────────────────┤
│ CTA PANEL                                                     │
└──────────────────────────────────────────────────────────────┘
```
**Layout Logic**: Each service module uses 60/40 split, ensuring ample white space. Cards use 24px internal padding, consistent iconography.  
**Motion**: Module header fades, detail columns slide from opposite directions with easing.  
**Interaction**: Cards have border accent on hover, accordion uses chevron rotation + height animation.

---

### 2.4 Case Studies Overview
```
┌──────────────────────────────────────────────────────────────┐
│ HERO GRID (Top 3 projects, asymmetric layout)                 │
│ [Wide hero] [Stacked duo]                                    │
├──────────────────────────────────────────────────────────────┤
│ FILTER BAR                                                    │
│ Industry ▢  Discipline ▢  Outcome ▢  Search ⌕ (chip states)  │
├──────────────────────────────────────────────────────────────┤
│ EDITORIAL GRID                                                │
│ ┌───────┬──────────────┬──────────────┐                      │
│ │Large  │ Medium       │ Tall         │  ← repeating pattern  │
│ └───────┴──────────────┴──────────────┘                      │
│ Hover: gradient lift, title slide, micro-icon fade            │
├──────────────────────────────────────────────────────────────┤
│ LOAD MORE / INFINITE PROGRESS BAR                            │
└──────────────────────────────────────────────────────────────┘
```
**Layout Logic**: Grid uses 3:2:1 height ratios for cinematic rhythm; gutter 32px.  
**Motion**: On filter change, Masonry animates with crossfade, skeleton shimmer indicates loading.  
**Interaction**: Chips multi-select with pill morph; card hover accessible via focus outlines.

---

### 2.5 Case Study Template
```
┌──────────────────────────────────────────────────────────────┐
│ HERO BANNER (Full bleed media + overlay metrics)              │
├──────────────────────────────────────────────────────────────┤
│ OVERVIEW SPLIT: Narrative | Data sheet                        │
├──────────────────────────────────────────────────────────────┤
│ CHALLENGE BLOCK (highlight color, pull quote)                 │
├──────────────────────────────────────────────────────────────┤
│ STRATEGY PILLARS (4 cards w/ icons + hypothesis copy)         │
├──────────────────────────────────────────────────────────────┤
│ EXECUTION LADDER (phase timeline + artifacts thumbnails)      │
├──────────────────────────────────────────────────────────────┤
│ VISUAL GALLERY (asymmetric mosaic + lightbox triggers)        │
├──────────────────────────────────────────────────────────────┤
│ COMPONENTS BREAKDOWN (system map tiers)                       │
├──────────────────────────────────────────────────────────────┤
│ RESULTS (KPI table + qualitative quote + before/after bars)   │
├──────────────────────────────────────────────────────────────┤
│ NEXT PROJECT NAV (split panel)                                │
└──────────────────────────────────────────────────────────────┘
```
**Layout Logic**: Alternating dark/light bands to pace reading. Gallery uses 5-cell mosaic with 2:1 ratio anchor cell.  
**Motion**: Hero metrics count up once; gallery cells fade in from staggered origins; system map reveals tier by tier linked to scroll position.  
**Interaction**: Lightbox accessible via Enter; next-project nav responds to hover with image reveal.

---

### 2.6 Contact Page
```
┌──────────────────────────────────────────────────────────────┐
│ HERO STATEMENT (“Let’s Begin With Clarity”)                   │
├──────────────────────────────────────────────────────────────┤
│ QUALIFICATION FORM (Two-column)                               │
│ ┌───────────────┬──────────────────────────────────────────┐ │
│ │ Personal info │ Strategic questions (Goals, Timeline)   │ │
│ │ Budget select  │ Engagement readiness scale             │ │
│ └───────────────┴──────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ TRUST STRIP (Micro metrics + confidentiality note)            │
├──────────────────────────────────────────────────────────────┤
│ SECONDARY CTA (“Download Capability Deck”)                    │
└──────────────────────────────────────────────────────────────┘
```
**Layout Logic**: Form fields arranged to reduce friction (short fields left, storytelling right).  
**Motion**: Input focus glides label upward; section enters with soft fade.  
**Interaction**: Budget selector uses segmented control; required fields show understated error lines.

---

## 3. Motion & Interaction Blueprint (Global)
- **Scroll Framework**: Lenis smoothing, velocity damping 0.85 for calm glide. Scroll-triggered reveals respect reduced-motion preferences (fall back to simple fade).
- **Reveal Pattern**: Opacity 0 → 1 + translateY 24px → 0 over 480ms, staggered 90ms; triggered when section enters 35% viewport.
- **Image Masks**: Diagonal clip-path sweeps (0.65s) with cubic-bezier(.25,.9,.25,1); never autoplay loops >3s.
- **Carousels/Tracks**: snap-aligned, arrow + drag support, momentum eased.
- **Buttons/Chips**: color transition 180ms; underline grows from center.
- **Forms**: Floating labels slide 8px upward, weight +100 on focus; errors shake once (8px) only if user leaves empty.
- **Accessibility**: All interactive elements keyboard reachable; hover effects mirrored on focus with outlines.

---

## 4. Component Library Blueprint
| Layer | Components |
| --- | --- |
| Layout | `Container`, `Section`, `Grid12`, `SplitBlock`, `Stack`, `MosaicGallery`, `HeroCanvas` |
| Typography | `DisplayHeading`, `SectionHeading`, `Eyebrow`, `BodyCopy`, `MetricLabel`, `PullQuote` |
| Navigation | `PrimaryNav`, `FooterNav`, `Breadcrumb`, `NextProjectNav`, `FilterBar` |
| Content Modules | `CaseStudyCard`, `ServiceCard`, `CapabilityTrackItem`, `ProcessStep`, `DifferentiatorTile`, `AuthorityStrip`, `AwardMarquee` |
| Media | `ResponsiveMedia`, `MaskedImage`, `VideoFrame`, `LightboxGallery`, `PortraitCard` |
| Data / Proof | `MetricCounter`, `ResultTable`, `BeforeAfterBar`, `PrincipleMatrixCell`, `ValueGridItem` |
| Forms | `FormField`, `FloatingLabelInput`, `BudgetSelector`, `StrategicTextarea`, `SubmitCTA`, `ValidationHint` |
| Utility | `ScrollRevealGroup`, `StaggerCluster`, `LogoMarquee`, `Chip`, `Accordion`, `CarouselTrack` |

Tokens inherited from Stage 1: spacing scale (4–128), typography pairings (gtDisplay / gtSans), color palette (Onyx, Paper, Soft Gray, Accent Gold), motion durations (120/240/480/650ms), easing curves (swift-out, gentle-in-out).

---

## 5. Section-by-Section Reasoning
- **Hero**: Immediate narrative control; cinematic presence mirrors premium studios (Basic®, Locomotive) and sets pricing expectations.
- **Featured Work**: Curated triad proves quality fast; editorial asymmetry signals bespoke craft.
- **Differentiators**: Counters commodity agency perception; frames GT Media as strategic partner.
- **Capabilities**: Bridges positioning to tangible offerings; ensures prospect clarity on services.
- **Authority Layer**: Mitigates risk; adds awards/metrics to reinforce trust.
- **Process**: Demonstrates rigor, reducing engagement anxiety.
- **About**: Deepens emotional alignment via philosophy and leadership.
- **Services detail**: Converts intrigue into scoped understanding of deliverables/outcomes.
- **Case Studies**: Show repeatable excellence, variety, and measurable impact.
- **Case Study Template**: Provides narrative arc perspective; shows future clients how stories will be told.
- **Contact**: Qualifies leads while delivering luxury experience.

---

## 6. Final Approval Checklist
- [ ] Site map covers every Stage 2 objective, including Process, Pricing Philosophy, Legal.
- [ ] ASCII wireframes delivered for Home, About, Services, Case Studies Overview, Case Study Template, Contact.
- [ ] Each section includes layout logic, motion rules, and interaction guidance.
- [ ] Motion & interaction blueprint defined with accessibility considerations.
- [ ] Component library blueprint aligns with Stage 1 tokens/typography.
- [ ] Section reasoning ties decisions back to brand narrative and conversion goals.
- [ ] Document ends with handoff statement for Stage 3 readiness.

Ready for Stage 3 — Visual Design & UI System.
