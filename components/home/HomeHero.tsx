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
      className="relative min-h-[100dvh] w-full flex items-center bg-black text-white overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-12"
      data-hero-root
    >
      <Container className="h-full relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 h-full items-stretch">

          {/* COLUMN 1: PITCH & CONTENT (Left, 5 cols on lg) */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-12 order-2 lg:order-1 relative z-20">
            {/* Mobile Logo Show */}
            <div className="lg:hidden mb-10">
              <div className="relative w-16 h-16">
                <NextImage
                  src="/logos/file_000000001db4720692432eb1b5ba9db6.png"
                  alt="GT Media Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-script text-orange text-2xl md:text-3xl mb-4">
                Take control of your brand
              </p>

              <h1 className="font-display text-4xl md:text-5xl xl:text-7xl leading-[0.9] uppercase mb-4 tracking-tight">
                <span className="block text-white">Cinematic</span>
                <span className="block text-white">campaigns</span>
                <span className="block text-orange">that move markets.</span>
              </h1>

              <p className="text-gray-light text-base md:text-lg mb-8 max-w-[50ch] leading-relaxed">
                From Creating Brands to Delivering Real Estate Solutions — All in One Place. A complete 360° approach that blends strategy, creativity, and execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-orange text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300"
                >
                  Start Project <span className="text-lg">»</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 border border-gray text-white text-xs font-bold uppercase tracking-wider rounded-full hover:border-orange hover:text-orange transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: VERTICAL BRANDING (Center, 1 col on lg) */}
          <div className="hidden lg:flex col-span-1 flex-col items-center justify-between py-12 order-2 border-x border-gray-dark/30 bg-black/50 backdrop-blur-sm relative">
            {/* Top Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-12 h-12">
                <NextImage
                  src="/logos/file_000000001db4720692432eb1b5ba9db6.png"
                  alt="GT Media Logo"
                  fill
                  className="object-contain animate-pulse-slow"
                />
              </div>
            </motion.div>

            {/* Vertical Typography */}
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="writing-vertical-rl text-orientation-mixed rotate-180 transform">
                <span className="font-display text-[5rem] xl:text-[6rem] leading-none text-stroke-gray text-transparent opacity-30 tracking-widest whitespace-nowrap">
                  GT MEDIA
                </span>
              </div>
            </div>

            {/* Bottom Indicator */}
            <motion.div
              className="text-orange text-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ↓
            </motion.div>
          </div>

          {/* COLUMN 3: IMAGE SLIDER (Right, 6 cols) */}
          <div className="col-span-12 lg:col-span-6 h-[35vh] sm:h-[40vh] lg:h-[75vh] order-1 lg:order-3 relative rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-dark group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <NextImage
                  src={HERO_IMAGES[currentImageIndex] || HERO_IMAGES[0]}
                  alt="Featured work showcase"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority={currentImageIndex === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            </AnimatePresence>

            {/* Overlay Grid Lines */}
            <div className="absolute inset-0 border-[0.5px] border-white/10 pointer-events-none grid grid-rows-3">
              <div className="border-b border-white/10" />
              <div className="border-b border-white/10" />
            </div>
          </div>

        </div>
      </Container>

      {/* Marquee Bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-dark bg-carbon py-3 z-30">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-sm font-bold bg-orange text-black px-3 py-1 rounded-sm">STUDIO</span>
              <span className="text-gray-light font-accent text-sm uppercase tracking-widest">
                BRAND STRATEGY // HIGH-IMPACT CONTENT // PRECISION MEDIA // RESULTS DRIVEN //
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
