# Stage 3 Component Showcase

## Quick Reference Guide

This document provides code examples for implementing GT Media's Stage 3 design system components.

---

## Color Usage Examples

### Dark Backgrounds (Primary)
```tsx
// Ink background (primary canvas)
<section className="bg-ink text-paper">

// Charcoal surface (elevated panels)
<div className="bg-charcoal text-paper">

// Using auric accent
<span className="text-auric">Key Highlight</span>
```

### Light Backgrounds
```tsx
// Paper background (light content sections)
<section className="bg-paper text-text-primary-dark">

// Stone text (secondary/metadata)
<p className="text-stone">Secondary information</p>
```

---

## Typography Examples

### Display Headlines
```tsx
// Hero headline with display font
<h1 className="font-display text-display text-paper leading-tight tracking-tighter">
  Cinematic Experiences
</h1>

// Secondary hero
<h2 className="font-display text-display-sm text-paper">
  Editorial Design
</h2>
```

### Body Text
```tsx
// Standard body
<p className="font-sans text-body text-paper leading-relaxed">
  Long-form content with optimal readability...
</p>

// Large body for emphasis
<p className="font-sans text-body-lg text-paper leading-relaxed">
  Featured statement or introduction...
</p>
```

### Accent Text (Stats/Metrics)
```tsx
// Large stat number
<p className="font-accent text-stat text-auric">
  2.4x
</p>

// Metadata/microcopy
<p className="font-accent text-micro uppercase tracking-wider text-stone">
  Client Retention
</p>
```

---

## Button Components

### Primary CTA (Pill Style)
```tsx
<button className="px-12 py-5 bg-auric text-ink font-medium rounded-pill 
  hover:bg-opacity-90 transition-all duration-sm hover:translate-y-[-2px]">
  Start Your Project
</button>
```

### Secondary CTA (Outline)
```tsx
<button className="px-8 py-4 border-2 border-stone text-paper rounded-sm
  hover:border-auric hover:text-auric transition-all duration-sm">
  View Our Work
</button>
```

### Text Link with Underline Animation
```tsx
<a href="/contact" className="text-auric relative group">
  Get in Touch
  <span className="absolute bottom-0 left-0 w-0 h-px bg-auric 
    group-hover:w-full transition-all duration-sm"></span>
</a>
```

---

## Card Components

### Elevated Card on Dark Background
```tsx
<div className="bg-charcoal rounded-sm p-8 shadow-subtle 
  hover:shadow-soft hover:translate-y-[-4px] transition-all duration-md">
  
  {/* Card content */}
  <div className="mb-4">
    <p className="font-accent text-micro uppercase tracking-wider text-auric mb-2">
      Case Study
    </p>
    <h3 className="font-display text-h3 text-paper mb-4">
      Premium Brand Launch
    </h3>
    <p className="text-body text-stone leading-relaxed">
      Strategic positioning and visual identity...
    </p>
  </div>
  
  {/* Card footer */}
  <div className="flex items-center justify-between pt-4 border-t border-stone/20">
    <span className="text-micro text-stone">2024</span>
    <span className="text-auric">→</span>
  </div>
</div>
```

### Card on Light Background
```tsx
<div className="bg-white rounded-sm p-8 shadow-subtle border border-stone/10
  hover:border-auric/30 transition-all duration-md">
  {/* Content */}
</div>
```

---

## Form Elements

### Floating Label Input
```tsx
<div className="relative mb-8">
  <input
    type="text"
    id="name"
    placeholder=" "
    className="peer w-full bg-transparent border-b-2 border-stone/30 
      py-4 text-lg text-paper
      focus:border-auric focus:outline-none 
      transition-colors duration-sm"
  />
  <label
    htmlFor="name"
    className="absolute left-0 top-4 text-stone 
      transition-all duration-sm pointer-events-none
      peer-focus:top-0 peer-focus:text-xs peer-focus:text-auric
      peer-[:not(:placeholder-shown)]:top-0 
      peer-[:not(:placeholder-shown)]:text-xs"
  >
    Your Name
  </label>
</div>
```

### Select Dropdown
```tsx
<select className="w-full bg-charcoal border border-stone/30 rounded-sm
  py-4 px-4 text-lg text-paper
  focus:border-auric focus:outline-none 
  transition-colors duration-sm">
  <option value="">Select budget range</option>
  <option value="10k-25k">$10k - $25k</option>
  <option value="25k-50k">$25k - $50k</option>
</select>
```

---

## Section Layouts

### Full-Width Hero Section
```tsx
<section className="relative min-h-screen flex items-center bg-ink text-paper 
  overflow-hidden">
  
  {/* Background texture */}
  <div className="absolute inset-0 opacity-[0.015] pointer-events-none 
    mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
  
  {/* Content container */}
  <div className="relative z-10 w-full max-w-content mx-auto px-4 md:px-16">
    <div className="grid grid-cols-12 gap-8">
      
      {/* Left column: Text */}
      <div className="col-span-12 lg:col-span-7">
        <p className="font-accent text-xs uppercase tracking-widest text-stone mb-6">
          GT Media
        </p>
        <h1 className="font-display text-display text-paper mb-8">
          Cinematic Brand Experiences
        </h1>
        <p className="text-body-lg text-stone max-w-[50ch] mb-12">
          For artists, cultural leaders, and luxury brands.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-12 py-5 bg-auric text-ink rounded-pill">
            Start Project
          </button>
          <button className="px-12 py-5 border-2 border-stone rounded-pill text-paper">
            View Work
          </button>
        </div>
      </div>
      
      {/* Right column: Media */}
      <div className="col-span-12 lg:col-span-5">
        <div className="aspect-[4/5] bg-charcoal rounded-md overflow-hidden">
          {/* Image placeholder */}
        </div>
      </div>
      
    </div>
  </div>
</section>
```

### Content Section with Vertical Spacing
```tsx
<section className="py-section-default md:py-section-spacious bg-paper">
  <div className="max-w-content mx-auto px-4 md:px-16">
    
    <div className="text-center mb-16">
      <h2 className="font-display text-h1 text-text-primary-dark mb-6">
        Our Approach
      </h2>
      <p className="text-body-lg text-stone max-w-[60ch] mx-auto">
        Strategic thinking meets editorial craft.
      </p>
    </div>
    
    {/* Grid of cards or content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards here */}
    </div>
    
  </div>
</section>
```

---

## Image Containers

### Portrait Image (3:4 ratio)
```tsx
<div className="aspect-[3/4] bg-charcoal rounded-md overflow-hidden relative group">
  <img 
    src="/portrait.jpg" 
    alt="Portrait" 
    className="w-full h-full object-cover transition-transform duration-lg 
      group-hover:scale-105"
  />
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent 
    opacity-80 group-hover:opacity-60 transition-opacity duration-md" />
  
  {/* Text overlay */}
  <div className="absolute bottom-0 left-0 p-8 text-paper">
    <p className="text-micro uppercase tracking-wider text-auric mb-2">
      Artist
    </p>
    <h3 className="text-h3 font-display">
      Featured Work
    </h3>
  </div>
</div>
```

### Wide Cinematic Image (16:9 ratio)
```tsx
<div className="aspect-[16/9] bg-charcoal rounded-none overflow-hidden">
  <img 
    src="/wide-shot.jpg" 
    alt="Cinematic shot" 
    className="w-full h-full object-cover"
  />
</div>
```

---

## Navigation Component

### Fixed Header with Blur Background
```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md 
  border-b border-stone/10">
  
  <div className="max-w-content mx-auto px-4 md:px-16 py-6">
    <div className="flex items-center justify-between">
      
      {/* Logo */}
      <a href="/" className="font-display text-xl text-paper">
        GT Media
      </a>
      
      {/* Nav items */}
      <ul className="hidden md:flex items-center gap-12">
        <li>
          <a href="/work" className="font-accent text-xs uppercase tracking-widest 
            text-stone hover:text-auric transition-colors duration-sm">
            Work
          </a>
        </li>
        <li>
          <a href="/services" className="font-accent text-xs uppercase tracking-widest 
            text-stone hover:text-auric transition-colors duration-sm">
            Services
          </a>
        </li>
        <li>
          <a href="/about" className="font-accent text-xs uppercase tracking-widest 
            text-stone hover:text-auric transition-colors duration-sm">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="px-6 py-3 border border-auric text-auric 
            rounded-pill hover:bg-auric hover:text-ink 
            transition-all duration-sm">
            Contact
          </a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
```

---

## Motion Patterns

### Scroll-Triggered Fade-In
```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // luxury easing
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Staggered List Animation
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.12 // 120ms stagger
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] }
        }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Utility Class Patterns

### Responsive Spacing
```tsx
// Section padding that scales with viewport
<section className="py-section-compact md:py-section-default lg:py-section-spacious">

// Responsive max-width containers
<div className="max-w-narrow mx-auto px-4 md:px-16">  // 1280px max
<div className="max-w-content mx-auto px-4 md:px-16"> // 1440px max
<div className="max-w-wide mx-auto px-4 md:px-16">    // 1600px max
```

### Typography Responsive Patterns
```tsx
// Responsive heading sizes (built-in with clamp)
<h1 className="text-display">   // Auto-scales 64-88px
<h2 className="text-h1">         // Auto-scales 36-64px
<h3 className="text-h2">         // Auto-scales 30-48px

// Manual responsive control
<p className="text-base md:text-lg lg:text-xl">
```

### Grid Layouts
```tsx
// 12-column responsive grid
<div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12">
  <div className="col-span-12 md:col-span-6 lg:col-span-7">
    {/* 7/12 on desktop */}
  </div>
  <div className="col-span-12 md:col-span-6 lg:col-span-5">
    {/* 5/12 on desktop */}
  </div>
</div>
```

---

## Accessibility Patterns

### Reduced Motion Support
```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
```tsx
// Accessible focus ring
<button className="focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-auric focus-visible:ring-offset-2 
  focus-visible:ring-offset-ink">
  Click me
</button>
```

### ARIA Labels
```tsx
// Icon-only buttons
<button aria-label="Open navigation menu">
  <MenuIcon className="w-6 h-6" />
</button>

// Skip to content link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## Summary

This showcase demonstrates the practical implementation of GT Media's Stage 3 design system. All components maintain:

- **Luxury aesthetic**: Dark-first, cinematic, editorial
- **Consistent spacing**: 4px/8px rhythm, section tokens
- **Motion restraint**: Slow luxury (0.8-1.2s), subtle interactions
- **Accessibility**: Focus states, reduced motion, ARIA labels
- **Responsive design**: Mobile-first, fluid scaling

Refer to `STAGE_3_DESIGN_SYSTEM.md` for complete design specifications and usage rules.
