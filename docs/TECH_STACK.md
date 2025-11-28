# Tech Stack Justification
## GT Media — Architecture Decisions

---

## Core Framework: Next.js 15

### Why Next.js 15?

**Server Components by Default**
- Reduces client-side JavaScript by 40-60% on average
- Keeps data fetching on the server (faster, more secure)
- Improves Time to Interactive (TTI) and Total Blocking Time (TBT)

**Built-in Image Pipeline**
- Automatic AVIF/WebP generation
- Responsive srcset without config
- Lazy loading with blur placeholders
- Priority hints for LCP optimization

**App Router Architecture**
- Nested layouts reduce redundant rendering
- Streaming SSR for progressive hydration
- Parallel routes for complex UI patterns
- Route groups for organization without URL impact

**Edge-First Routing**
- Deploy to edge runtime for sub-100ms TTFB globally
- Middleware for authentication, redirects, A/B tests
- Edge API routes for real-time data

**Metadata & OG Image API**
- Dynamic OG image generation at build time
- Type-safe metadata with generateMetadata
- SEO-friendly without third-party tools

**Performance Out of the Box**
- Automatic code splitting per route
- Prefetching on link hover
- Font optimization with next/font
- Script optimization with next/script

### Alternatives Considered

**Remix:** Strong contender, but Next.js has better image optimization and larger ecosystem for CMS integrations.

**SvelteKit:** Excellent DX, but smaller ecosystem and less enterprise adoption for high-stakes launches.

**Astro:** Great for content sites, but lacks the interactive primitives needed for cinematic scroll experiences.

---

## Language: TypeScript 5.9

### Why TypeScript?

**Contract Enforcement**
- Animation utilities have explicit type contracts
- CMS data shapes validated at compile time
- Prevents runtime errors on production launches

**Token Autocomplete**
- Design token maps typed for IntelliSense
- Reduces typos in className strings
- Catches breaking changes during refactors

**Refactoring Confidence**
- Rename symbols across codebase safely
- Find all usages reliably
- Maintain consistency across team

**Documentation**
- Types serve as inline documentation
- Reduces need for separate API docs
- Onboarding faster for new developers

### Configuration

**Strict Mode Enabled:**
- `noImplicitAny: true`
- `strictNullChecks: true`
- `strictFunctionTypes: true`

**Paths:**
- `@/*` for absolute imports
- Cleaner import statements
- Easier to move files

---

## Styling: Tailwind CSS + CSS Variables Hybrid

### Why Tailwind?

**Zero-Runtime CSS**
- No JavaScript needed for styles
- Styles extracted at build time
- Smaller bundle than CSS-in-JS

**Utility-First DX**
- Rapid prototyping without context switching
- Consistent spacing/sizing via design tokens
- Responsive modifiers inline

**Tree-Shaking**
- Only used classes shipped to production
- Typically 10-30 KB CSS after purge
- Faster than traditional CSS frameworks

**Customization**
- Extended theme with luxury tokens
- Custom utilities for brand patterns
- Maintains consistency across team

### Why CSS Variables Hybrid?

**Runtime Theming**
- Light/dark mode without duplicated CSS
- Contextual palette overrides (e.g., inverted sections)
- Client-side theme switching without flash

**Token Flexibility**
- CSS vars enable dynamic token values
- Tailwind consumes vars for compile-time safety
- Best of both worlds: DX + runtime control

**Fallback Strategy**
- CSS vars with fallbacks for older browsers
- Graceful degradation to static tokens

### Alternatives Considered

**CSS-in-JS (Styled Components, Emotion):** Adds runtime overhead, increases bundle size, complicates SSR.

**Vanilla CSS Modules:** Verbose for utility-heavy UI, lacks design token ecosystem.

**UnoCSS:** Faster build times, but smaller community and less mature plugin ecosystem.

---

## Animation: GSAP + Framer Motion

### Why GSAP?

**Industry-Grade Scroll Choreography**
- ScrollTrigger plugin is unmatched for precision
- Predictable performance (60fps constant)
- Fine-grained control over easing curves

**Plugin Ecosystem**
- ScrollSmoother, DrawSVG, MorphSVG (premium)
- Battle-tested in AAA campaigns
- Extensive documentation and community

**Performance Budget Control**
- Explicit imports prevent bloat
- Tree-shakeable via ESM
- Only load when needed (client-side dynamic import)

**Browser Consistency**
- Handles vendor prefixes automatically
- Reliable across Safari/Chrome/Firefox
- Fallbacks for older browsers

### Why Framer Motion?

**Component-Level Interactions**
- React-first API (layout animations, variants)
- Smaller than GSAP for simple state transitions
- Works cleanly with Server Components boundaries

**Route Transitions**
- AnimatePresence for page transitions
- Shared layout animations
- Exit animations on unmount

**Gesture Support**
- Drag, hover, tap with spring physics
- Accessible by default (keyboard support)
- Touch-optimized for mobile

### Division of Labor

**GSAP:**
- Scroll-triggered reveals
- Parallax effects
- Complex sequences
- SVG animations

**Framer Motion:**
- Component mount/unmount
- Route transitions
- Micro-interactions (hover, focus)
- Layout shifts

---

## Smooth Scroll: Lenis

### Why Lenis?

**Elegant, Predictable Scrolling**
- Smooth without feeling sluggish (1.1-1.2s duration)
- Coherent with GSAP ScrollTrigger
- Lightweight (~3 KB gzipped)

**Accessibility**
- Honors `prefers-reduced-motion`
- Keyboard navigation preserved
- Screen reader compatible

**Performance**
- Uses native RAF
- No layout thrashing
- Throttled event handlers

**Integration**
- Works out of the box with ScrollTrigger
- Simple API for programmatic scrolling
- Event hooks for custom behaviors

### Alternatives Considered

**Locomotive Scroll:** Heavier bundle, more opinionated structure.

**GSAP ScrollSmoother:** Premium plugin, requires commercial license.

**Native CSS `scroll-behavior: smooth`:** Too basic, no control over duration/easing.

---

## Headless UI: Radix UI (Selective)

### Why Radix?

**Accessibility Primitives**
- ARIA attributes handled automatically
- Focus management out of the box
- Keyboard navigation built-in

**Headless Design**
- Full control over styling
- No CSS to override
- Works seamlessly with Tailwind

**Tree-Shakeable**
- Import only what you use
- Each primitive is independent
- Small bundle impact

**Industry Standard**
- Used by Vercel, shadcn/ui, Tailwind Labs
- Well-documented
- Active maintenance

### Usage Strategy

**Only for Complex Interactions:**
- Dialog/Modal
- Dropdown/Select
- Popover
- Accordion (if needed)

**Avoid for Simple UI:**
- Buttons → native `<button>`
- Links → Next.js `<Link>`
- Forms → native `<input>` with validation

---

## Hosting: Vercel

### Why Vercel?

**Zero-Config Next.js Deployment**
- Automatic SSR optimization
- Edge caching without manual config
- Preview deployments per PR

**Image CDN**
- Global CDN with automatic optimization
- AVIF/WebP conversion on-demand
- Lazy loading with blur placeholders

**Performance Analytics**
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Lighthouse CI integration

**Environment Management**
- Environment variables per branch
- Secret encryption
- Preview URLs for testing

**Edge Functions**
- Deploy serverless functions to edge
- Sub-100ms response times globally
- Automatic scaling

### Alternatives Considered

**Netlify:** Similar features, but Vercel has tighter Next.js integration and better DX.

**AWS Amplify:** More configuration overhead, slower cold starts.

**Self-Hosted (Docker/Kubernetes):** Overkill for content sites, higher maintenance burden.

---

## SVG Workflow: SVGR

### Why SVGR?

**Component-Based SVG**
- Import SVG as React components
- Full control over props (fill, stroke, className)
- Type-safe SVG handling

**Animation Control**
- Animate SVG elements with GSAP
- Morph paths with MorphSVG
- Stroke animations with DrawSVG

**No Raster Artifacts**
- Scalable to any size
- Retina-ready without @2x assets
- Smaller file sizes than PNGs

**Optimization**
- Automatic SVGO processing
- Tree-shakeable exports
- Inline or external based on size

### Configuration

**Next.js Integration:**
```js
webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
}
```

---

## WebGL (Optional): React Three Fiber

### Why React Three Fiber?

**React-First 3D**
- Declarative Three.js API
- Hooks for animations and interactions
- Server-safe (ssr: false)

**Performance**
- GPU-accelerated rendering
- Efficient scene updates via React reconciler
- Automatic cleanup on unmount

**Ecosystem**
- @react-three/drei for helpers
- @react-three/postprocessing for effects
- Large community and examples

### Usage Strategy

**One Hero Moment Only:**
- WebGL limited to single hero section
- Lazy-loaded via dynamic import
- Static fallback for low-end devices

**Optimization Rules:**
- Low-poly meshes (<50k triangles)
- GPU-friendly materials (MeshStandardMaterial)
- Minimal post-processing (bloom/FXAA only)
- Gate behind IntersectionObserver

**Device Detection:**
```ts
const isLowEnd = navigator.hardwareConcurrency < 4;
if (isLowEnd) {
  // Show static image fallback
}
```

---

## CMS: Sanity

### Why Sanity?

**Structured Content**
- Schema-based modeling
- Type-safe with TypeScript
- Portable text for rich content

**Real-Time Collaboration**
- Live presence indicators
- Conflict-free merges
- Editorial workflows

**Image Pipeline**
- Global CDN with automatic optimization
- Hotspot cropping
- LQIP (Low-Quality Image Placeholders)

**Developer Experience**
- GraphQL or GROQ queries
- Content Lake API
- Webhooks for incremental builds

**Scalability**
- Free tier generous for startups
- Pay-as-you-grow pricing
- Enterprise SLAs available

### Alternatives Considered

**Contentful:** More expensive, less flexible schema modeling.

**Strapi:** Self-hosted overhead, less polished editorial UI.

**Prismic:** Good for marketing sites, but less developer-friendly for custom schemas.

---

## Summary

| Layer | Tool | Why | Bundle Impact |
|-------|------|-----|---------------|
| **Framework** | Next.js 15 | Server Components, image pipeline, edge-ready | Base (~90 KB) |
| **Language** | TypeScript | Type safety, refactoring confidence | 0 KB (compile-time) |
| **Styling** | Tailwind + CSS Vars | Zero-runtime, design tokens, theming | ~15 KB |
| **Animation** | GSAP + Framer Motion | Scroll choreography + component transitions | ~35 KB (GSAP), ~25 KB (Framer) |
| **Scroll** | Lenis | Smooth, accessible, performant | ~3 KB |
| **UI Primitives** | Radix UI (selective) | Accessibility, headless, tree-shakeable | ~5-15 KB (per primitive) |
| **Hosting** | Vercel | Zero-config, edge CDN, analytics | N/A |
| **SVG** | SVGR | Component-based, animatable | 0 KB (build-time) |
| **3D (optional)** | React Three Fiber | React-first, performant, ecosystem | ~80 KB (lazy-loaded) |
| **CMS** | Sanity | Structured, real-time, scalable | N/A (API-fetched) |

**Total Core Bundle:** ~120 KB gzipped (without 3D)  
**With 3D Hero:** ~200 KB gzipped (lazy-loaded, non-blocking)

**Result:** Luxury without lag.
