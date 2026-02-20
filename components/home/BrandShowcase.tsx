"use client";

import { useRef } from"react";
import { motion } from"framer-motion";
import Image from"next/image";
import Link from"next/link";
import { Container, Section } from"@/components/layout";
import { BRANDS, PORTFOLIO_ITEMS, type Brand } from"@/lib/portfolio-data";
import { InstagramEmbed } from"@/components/work/InstagramEmbed";

// Pick one featured item per brand (prefer reels)
function getFeaturedItem(brand: Brand) {
 const items = PORTFOLIO_ITEMS.filter((i) => i.brandId === brand.id);
 return items.find((i) => i.type ==="reel") ?? items[0];
}

export function BrandShowcase() {
 const scrollRef = useRef<HTMLDivElement>(null);

 return (
 <Section spacing="compact"className="bg-black relative overflow-hidden">
 <Container>
 {/* Header */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
 <div>
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="font-editorial italic text-burgundy text-lg md:text-xl mb-1" >
 Live From Instagram
 </motion.p>
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-tight leading-[0.9]" >
 BRANDS WE <span className="text-burgundy">POWER</span>
 </motion.h2>
 </div>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 >
 <Link
 href="/work" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-[11px] uppercase tracking-widest text-white/50 hover:text-white hover:border-burgundy/40 transition-all duration-300 group" >
 View Full Portfolio
 <svg
 className="w-3 h-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
 >
 <path d="M5 12h14M12 5l7 7-7 7"/>
 </svg>
 </Link>
 </motion.div>
 </div>

 {/* Scrollable brand cards — mobile horizontal scroll, desktop 5-col grid */}
 <div
 ref={scrollRef}
 className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0" >
 {BRANDS.map((brand, i) => {
 const featured = getFeaturedItem(brand);
 if (!featured) return null;
 return (
 <motion.div
 key={brand.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.08, duration: 0.5 }}
 className="flex-shrink-0 w-[260px] sm:w-[280px] lg:w-auto snap-start" >
 <div className="border border-white/[0.06] overflow-hidden bg-black hover:border-white/[0.12] transition-all duration-300 group">
 {/* Brand header */}
 <div className="flex items-center gap-2.5 p-3.5 border-b border-white/[0.04]">
 <div className="relative w-8 h-8 overflow-hidden bg-white flex-shrink-0">
 <Image
 src={brand.logo}
 alt={brand.name}
 fill
 className="object-contain p-1" />
 </div>
 <div className="min-w-0">
 <p className="font-display text-xs uppercase text-white truncate">
 {brand.name}
 </p>
 <p className="text-[9px] text-white/30 truncate">
 {brand.industry}
 </p>
 </div>
 </div>

 {/* Featured content preview */}
 <InstagramEmbed
 poster={featured.poster}
 video={featured.video}
 instagramUrl={featured.instagramUrl}
 title={featured.title}
 type={featured.type ==="carousel"?"post": featured.type}
 brandColor={brand.color}
 />

 {/* Card footer */}
 <div className="p-3.5">
 <h3 className="font-display text-[11px] uppercase text-white mb-1 leading-tight line-clamp-1 group-hover:text-burgundy transition-colors">
 {featured.title}
 </h3>
 <p className="text-[10px] text-white/25 line-clamp-1">
 {featured.description}
 </p>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>

 {/* Scroll indicator — mobile only */}
 <div className="flex lg:hidden justify-center gap-1.5 mt-4">
 {BRANDS.map((b) => (
 <div
 key={b.id}
 className="w-1.5 h-1.5 rounded-full bg-white/10" />
 ))}
 </div>
 </Container>
 </Section>
 );
}
