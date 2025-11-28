# GT Media Site - Quick Start Guide

## Installation Complete! ✓

The project has been fully scaffolded with all required files and dependencies.

## Next Steps

### 1. Install Dependencies (Already Done)
```bash
pnpm install
```

### 2. Add Your Fonts
Replace the placeholder font files in `public/fonts/`:
- `GT-Sans-Regular.woff2`
- `GT-Sans-Medium.woff2`

### 3. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and add your Sanity credentials:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SANITY_PROJECT_ID=your_actual_project_id
SANITY_DATASET=production
```

### 4. Start Development Server
```bash
pnpm dev
```

Visit http://localhost:3000

### 5. Build for Production
```bash
pnpm build
```

### 6. Analyze Bundle Size
```bash
pnpm analyze
```

### 7. Deploy to Vercel
```bash
pnpm add -D vercel
npx vercel login
npx vercel
```

## Project Structure

```
/workspaces/GT-Media
├── app/                    # Next.js App Router
│   ├── api/               # API routes (OG image generator)
│   ├── fonts.ts           # Font configuration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout (server component)
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Client providers (Lenis, Framer Motion)
├── components/            # React components
│   ├── hero/             # Hero components
│   │   ├── Hero.tsx      # Server wrapper
│   │   ├── Hero.client.tsx   # GSAP animated hero
│   │   └── HeroThree.client.tsx  # Three.js hero (optional)
│   └── nav/              # Navigation
│       └── Nav.tsx       # Server component
├── lib/                   # Utilities
│   ├── animations/       # GSAP utilities
│   ├── analytics/        # Performance tracking
│   ├── sanity/          # Sanity client
│   └── seo.ts           # SEO configuration
├── sanity/               # Sanity CMS schemas
│   └── schemas/
│       ├── artist.ts
│       ├── caseStudy.ts
│       ├── page.ts
│       └── pageSection.ts
├── public/               # Static assets
│   └── fonts/           # Font files
├── .eslintrc.cjs        # ESLint config
├── .prettierrc          # Prettier config
├── .gitignore           # Git ignore rules
├── next.config.mjs      # Next.js config (performance optimized)
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS config
├── tsconfig.json        # TypeScript config (strict mode)
└── vercel.json          # Vercel deployment config
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm analyze` - Build with bundle analyzer
- `pnpm deploy:vercel` - Deploy to Vercel

## Key Features Implemented

✅ Next.js 15 with App Router  
✅ TypeScript (strict mode)  
✅ Tailwind CSS  
✅ Framer Motion (lightweight)  
✅ GSAP + ScrollTrigger (dynamic import, client-only)  
✅ Lenis smooth scrolling  
✅ React Three Fiber (optional, lazy-loaded)  
✅ Sanity CMS schemas  
✅ Dynamic OG image generation (Sharp)  
✅ Security headers  
✅ Performance optimizations  
✅ Husky + lint-staged  
✅ ESLint + Prettier  

## Performance Optimization Checklist

The project is pre-configured for maximum performance:

- ✅ Server components by default
- ✅ Client components only when needed
- ✅ Dynamic imports for heavy libraries (GSAP, Three.js)
- ✅ Font optimization via `next/font/local`
- ✅ Image optimization (AVIF/WEBP)
- ✅ Bundle size monitoring
- ✅ Security headers
- ✅ CSP configured
- ✅ No unnecessary polyfills

## Troubleshooting

### Port already in use
```bash
lsof -ti:3000 | xargs kill -9
pnpm dev
```

### Build errors
```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

### Type errors
```bash
pnpm tsc --noEmit
```

## Bundle Size Targets

- **Initial JS (gzipped):** < 120 KB
- **LCP:** < 2.5s
- **CLS:** ~0.00
- **Lighthouse Score:** ≥ 90 (mobile), ≥ 95 (desktop)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap/)
- [Sanity CMS](https://www.sanity.io)
- [Vercel Deployment](https://vercel.com/docs)
