"use client";

import { Container } from "@/components/layout";
import Link from "next/link";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/images/services/content.jpg",
  "/images/work/project-content.jpg"
] as const;

export function HomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] w-full flex items-end bg-black text-white overflow-hidden"
      data-hero-root
    >
      {/* Full-bleed background image carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <NextImage
              src={HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0]}
              alt="Featured work showcase"
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pb-24 pt-40 md:pt-48 lg:pt-56">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          {/* Text column */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-6">
            <motion.p
              className="font-script text-orange text-xl sm:text-2xl md:text-3xl mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Take control of your brand
            </motion.p>

            <motion.h1
              className="font-display text-[2.75rem] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-[0.9] uppercase tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span className="block text-white">Cinematic</span>
              <span className="block text-white">campaigns</span>
              <span className="block text-orange">that move markets.</span>
            </motion.h1>

            <motion.p
              className="text-white/50 text-base md:text-lg mb-10 max-w-[48ch] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              From Creating Brands to Delivering Real Estate Solutions — All in One Place. A complete 360° approach that blends strategy, creativity, and execution.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 h-13 px-8 bg-orange text-black text-xs font-bold uppercase tracking-wider rounded-full overflow-hidden hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] transition-shadow duration-300"
              >
                <span className="relative z-10">Start Project</span>
                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/work"
                className="group relative inline-flex items-center justify-center gap-2 h-13 px-8 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full overflow-hidden hover:border-white/40 transition-all duration-300"
              >
                <span className="relative z-10">View Work</span>
                <span className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          </div>

          {/* Image carousel indicators */}
          <div className="hidden lg:flex col-span-5 xl:col-span-6 justify-end items-end pb-2">
            <div className="flex items-center gap-2">
              {HERO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`h-[2px] rounded-full transition-all duration-500 ${
                    i === currentImageIndex ? "w-8 bg-orange" : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee Bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-black/60 backdrop-blur-sm py-3 z-30">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[10px] font-bold bg-orange text-black px-2.5 py-0.5 rounded-sm tracking-wider">STUDIO</span>
              <span className="text-white/40 font-accent text-[11px] uppercase tracking-[0.2em]">
                BRAND STRATEGY &nbsp;·&nbsp; HIGH-IMPACT CONTENT &nbsp;·&nbsp; PRECISION MEDIA &nbsp;·&nbsp; RESULTS DRIVEN
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
