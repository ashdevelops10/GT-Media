# Performance Ruleset
## GT Media — Luxury Without Lag

---

## Core Web Vitals Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **LCP** (Largest Contentful Paint) | < 2.2s mobile | TBD | 🟡 Pending |
| **CLS** (Cumulative Layout Shift) | ~0.00 | TBD | 🟡 Pending |
| **TBT** (Total Blocking Time) | < 200ms | TBD | 🟡 Pending |
| **FID** (First Input Delay) | < 100ms | TBD | 🟡 Pending |
| **INP** (Interaction to Next Paint) | < 200ms | TBD | 🟡 Pending |

**Lighthouse Score Target:** 90+ (mobile, real device, throttled 4G)

---

## JavaScript Budget

### Core Bundle Limits

| Context | Max Size (gzipped) | Notes |
|---------|-------------------|-------|
| **Homepage (no 3D)** | 120 KB | Core framework + GSAP + Framer Motion |
| **Homepage (with 3D)** | 200 KB | Includes lazy-loaded React Three Fiber |
| **Case Study Detail** | 140 KB | Includes lightbox/gallery components |
| **Work Index** | 130 KB | Includes filtering/sorting logic |

### Enforcement

**Bundle Analyzer:**
- Run on every PR via CI
- Fail build if budget exceeded
- Visualize chunk sizes

**Commands:**
```bash
pnpm build
pnpm analyze
```

**Webpack Config:**
```js
performance: {
  maxAssetSize: 250000, // 250 KB
  maxEntrypointSize: 250000,
  hints: 'error',
}
```

---

## CLS (Cumulative Layout Shift) Prevention

### 1. Reserve Media Dimensions

**Images:**
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // Only for LCP image
  sizes="(max-width: 768px) 100vw, 1920px"
/>
```

**Videos:**
```tsx
<video
  width="1920"
  height="1080"
  style={{ aspectRatio: '16/9' }}
>
```

### 2. Fixed Navigation Height

**Nav Component:**
```tsx
<nav className="fixed top-0 h-20 z-nav">
  {/* Content */}
</nav>

<main className="pt-20">
  {/* Offset by nav height */}
</main>
```

### 3. Font Metrics Override

**Prevent Reflow:**
```ts
// app/fonts.ts
const gtSans = localFont({
  src: './fonts/GTAmerica-Standard.woff2',
  variable: '--font-sans',
  adjustFontFallback: 'Arial', // Next.js calculates metrics
  display: 'swap',
});
```

**CSS Fallback:**
```css
:root {
  --font-sans: "GT America", -apple-system, "Segoe UI", Arial, sans-serif;
}
```

### 4. Skeletons Over Late Shifts

**Avoid:**
```tsx
{loading ? null : <HeroImage />} // Image pops in
```

**Prefer:**
```tsx
{loading ? (
  <div className="w-full h-[600px] bg-graphite-700 animate-pulse" />
) : (
  <HeroImage />
)}
```

### 5. No Layout Shifts During Hydration

**Avoid Client-Only Rendering:**
```tsx
// ❌ Causes shift when client hydrates
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

**Prefer SSR-Safe:**
```tsx
// ✅ Server renders placeholder
<Suspense fallback={<Skeleton />}>
  <ClientComponent />
</Suspense>
```

---

## Font Loading Strategy

### 1. Preload Critical Fonts

**Layout.tsx:**
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gtSans.variable} ${gtDisplay.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/GTAmerica-Standard-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Limit Preloaded Weights

**Only Preload 2 Weights Max:**
- Regular (400) for body text
- Semi-Bold (600) for headings

**Lazy-Load Display Weight:**
- Display (700) loaded after LCP via dynamic import

### 3. Font Display Strategy

**CSS:**
```css
@font-face {
  font-family: 'GT America';
  src: url('/fonts/GTAmerica-Standard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback immediately */
}
```

### 4. Variable Fonts (Conditional)

**Only if < 110 KB per axis used:**
```ts
const gtSans = localFont({
  src: './fonts/GTAmerica-Variable.woff2',
  variable: '--font-sans',
  weight: '100 900',
  display: 'swap',
});
```

**Subset to Latin:**
```bash
pyftsubset GTAmerica-Variable.woff2 \
  --output-file=GTAmerica-Variable-Latin.woff2 \
  --unicodes=U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC
```

---

## Image CDN Optimization

### 1. next/image Pipeline

**Automatic Optimizations:**
- AVIF/WebP conversion
- Responsive srcset
- Lazy loading (below-fold)
- Blur placeholder

**Example:**
```tsx
<Image
  src="/case-study/hero.jpg"
  alt="Case Study Hero"
  width={1920}
  height={1080}
  quality={85} // Default: 75
  priority={false} // Only true for LCP image
  placeholder="blur"
  blurDataURL="/case-study/hero-blur.jpg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
/>
```

### 2. Priority Hints

**LCP Image Only:**
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  priority // Preloads, no lazy load
  fetchPriority="high"
/>
```

**Below-the-Fold:**
```tsx
<Image
  src="/section.jpg"
  alt="Section"
  loading="lazy" // Default behavior
  fetchPriority="low"
/>
```

### 3. Responsive Sizes

**Map Breakpoints to Image Widths:**
```tsx
sizes="
  (max-width: 640px) 100vw,
  (max-width: 1024px) 80vw,
  (max-width: 1440px) 1280px,
  1920px
"
```

### 4. Blur Placeholders

**Generate Low-Quality Placeholders:**
```bash
# Using sharp
sharp input.jpg -o blur.jpg --blur 20 --resize 20x20
```

**Inline Data URL:**
```tsx
blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
```

---

## Animation Performance

### 1. RAF Budget

**Max 6ms Scripting per Frame:**
- Measure with Chrome DevTools Performance tab
- Identify long tasks (>50ms)
- Defer non-critical work

### 2. Prefer CSS Transform/Opacity

**GPU-Accelerated:**
```css
/* ✅ Fast */
transform: translateY(20px);
opacity: 0.5;

/* ❌ Slow (triggers layout) */
top: 20px;
height: 200px;
```

### 3. Will-Change Sparingly

**Only During Animation:**
```tsx
// ✅ Add will-change before animation, remove after
useEffect(() => {
  const el = ref.current;
  el.style.willChange = 'transform';
  
  gsap.to(el, {
    y: 100,
    onComplete: () => {
      el.style.willChange = 'auto'; // Clean up
    },
  });
}, []);
```

**Avoid Permanent Will-Change:**
```css
/* ❌ Wastes GPU memory */
.hero {
  will-change: transform, opacity;
}
```

### 4. Throttle Scroll Handlers

**Lenis Handles This:**
```ts
// Automatically throttled via RAF
lenis.on('scroll', ({ scroll, velocity }) => {
  // Update UI
});
```

### 5. Cap Parallax Ranges

**Max 6% Translate:**
```ts
gsap.to('.parallax', {
  yPercent: 6, // Max 6% movement
  ease: 'none',
  scrollTrigger: {
    scrub: true,
  },
});
```

### 6. Reduced Motion Fallbacks

**CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**JavaScript:**
```ts
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Skip animations, set final state
  gsap.set('.hero', { opacity: 1, y: 0 });
} else {
  // Run animations
  gsap.from('.hero', { opacity: 0, y: 40, duration: 1.2 });
}
```

---

## Hydration Strategy

### 1. Server Components First

**Default to RSC:**
```tsx
// app/components/CaseStudyCard.tsx (Server Component)
export default function CaseStudyCard({ title, image }) {
  return (
    <article>
      <Image src={image} alt={title} />
      <h3>{title}</h3>
    </article>
  );
}
```

### 2. Client Islands for Interaction

**Minimal 'use client':**
```tsx
// components/CaseStudyCard.client.tsx
'use client';

export function CaseStudyCardHover({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
```

### 3. Dynamic Imports for Heavy Components

**Lazy-Load 3D Hero:**
```tsx
// app/page.tsx
import dynamic from 'next/dynamic';

const HeroThree = dynamic(() => import('@/components/hero/HeroThree.client'), {
  ssr: false, // Skip SSR for WebGL
  loading: () => <HeroFallback />,
});
```

### 4. Streaming SSR

**Suspense Boundaries:**
```tsx
<Suspense fallback={<CaseStudySkeleton />}>
  <CaseStudyList />
</Suspense>
```

---

## Code Splitting

### 1. Route-Level Chunks

**Next.js Automatic:**
- Each route gets its own chunk
- Shared code extracted to common chunk
- Prefetch on link hover

### 2. Component-Level Splitting

**Dynamic Imports:**
```tsx
const Lightbox = dynamic(() => import('@/components/Lightbox'), {
  loading: () => <LoadingSpinner />,
});
```

### 3. Vendor Splitting

**Webpack Config:**
```js
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10,
      },
      common: {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
},
```

### 4. Bundle Analysis

**Commands:**
```bash
# Analyze bundle
ANALYZE=true pnpm build

# Check chunk sizes
pnpm build && ls -lh .next/static/chunks/
```

---

## Edge Caching

### 1. Static Assets

**Next.js Automatic:**
- `_next/static/*` cached for 1 year
- Hashed filenames for cache busting

### 2. ISR for Case Studies

**Incremental Static Regeneration:**
```tsx
// app/work/[slug]/page.tsx
export const revalidate = 3600; // Revalidate every hour

export default async function CaseStudyPage({ params }) {
  const caseStudy = await getCaseStudy(params.slug);
  return <CaseStudyDetail data={caseStudy} />;
}
```

### 3. Stale-While-Revalidate

**API Routes:**
```ts
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

### 4. CDN Configuration

**Vercel Automatic:**
- Global edge network
- Automatic cache invalidation on deploy
- Preview URLs with separate cache

---

## Monitoring & Measurement

### 1. Lighthouse CI

**GitHub Actions:**
```yaml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      https://gt-media.vercel.app
      https://gt-media.vercel.app/work
    uploadArtifacts: true
    temporaryPublicStorage: true
```

### 2. Real User Monitoring

**Vercel Analytics:**
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Core Web Vitals Tracking

**Custom Reporting:**
```ts
// lib/analytics/perf.ts (already exists)
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals() {
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
}
```

### 4. Performance Budget Alerts

**Fail PR if Budget Exceeded:**
```yaml
- name: Check Bundle Size
  run: |
    pnpm build
    SIZE=$(du -sk .next/static | cut -f1)
    if [ $SIZE -gt 250 ]; then
      echo "Bundle size exceeded: ${SIZE}KB > 250KB"
      exit 1
    fi
```

---

## Checklist

### Pre-Launch

- [ ] Lighthouse score 90+ on mobile (throttled 4G)
- [ ] CLS < 0.05
- [ ] LCP < 2.2s (mobile, real device)
- [ ] TBT < 200ms
- [ ] Font metrics override prevents reflow
- [ ] All images have explicit width/height
- [ ] Only 1 image has `priority` flag
- [ ] Reduced motion fallbacks tested
- [ ] Bundle size within budget (<120 KB core, <200 KB with 3D)
- [ ] No layout shifts during hydration
- [ ] Navigation height fixed
- [ ] WebGL gated behind IntersectionObserver
- [ ] Animations clean up on unmount
- [ ] Will-change removed after animation
- [ ] ISR configured for dynamic content
- [ ] Edge caching verified
- [ ] Analytics/RUM enabled

### Ongoing

- [ ] Monitor Core Web Vitals weekly
- [ ] Review bundle size on every PR
- [ ] Run Lighthouse CI on deploy previews
- [ ] Test on real devices quarterly
- [ ] Audit third-party scripts (Google Analytics, etc.)
- [ ] Update dependencies for performance fixes

---

**Luxury Without Lag:** Speed is a feature, not an afterthought.
