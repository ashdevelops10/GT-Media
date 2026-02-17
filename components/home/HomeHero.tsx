"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("@/components/ui/FloatingLines"), {
  ssr: false,
});

const WORDS_ROTATE = ["Brands", "Campaigns", "Stories", "Content"];

/* ── Brand logos for the marquee ── */
const BRAND_LOGOS = [
  { name: "Mach Global", src: "/logos/mach global.jpg" },
  { name: "Event ResQ", src: "/logos/event resq.jpg" },
  { name: "Saahayak", src: "/logos/sahayak.webp" },
  { name: "Wildhood", src: "/logos/wildhood.jpg" },
  { name: "Studio Neoteric", src: "/logos/studeo-nuteric-logo.webp" },
  { name: "Rabab Music", src: "/logos/rabab music.webp" },
  { name: "Uttam", src: "/logos/uttam.png" },
  { name: "Dharmayu", src: "/logos/dharmayu.png" },
  { name: "Urban Theka", src: "/logos/urban_theka.png" },
  { name: "Bastian", src: "/logos/bastian.png" },
  { name: "Wildin", src: "/logos/wildin.png" },
  { name: "Zenergy", src: "/logos/zenergy.svg" },
  { name: "Little Bay", src: "/logos/little_bay.png" },
];

/* ── Word rotation animation variants ── */
const wordVariants = {
  enter: {
    y: "100%",
    opacity: 0,
  },
  center: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] as const },
  },
};

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS_ROTATE.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Content fades out as user scrolls */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  /* Parallax background shift */
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  /* Video expansion parallax - starts expanding after content fades, stops at 50% width */
  const videoScale = useTransform(scrollYProgress, [0.25, 0.5], [1, 2.3]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 1]);
  const videoBorderRadius = useTransform(scrollYProgress, [0.25, 0.5], [16, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]);
  
  /* Keep video at bottom-right while scaling to 50% screen width */
  const videoBottom = useTransform(scrollYProgress, [0, 0.5, 1], ["8.5rem", "8.5rem", "8.5rem"]);
  const videoTranslateX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]);
  const videoTranslateY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]);
  
  /* Left side text content fades in when video expands */
  const leftContentOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const leftContentY = useTransform(scrollYProgress, [0.35, 0.5], [30, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] w-full bg-black text-white"
      data-hero-root
    >
      {/* ━━━ Sticky viewport container ━━━ */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">

        {/* ── Ambient background ── */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          {/* Main animated lines - increased visibility */}
          <div className="absolute inset-0 opacity-70">
            <FloatingLines
              linesGradient={["#3A000D", "#6D001A", "#4A0012", "#2A0008"]}
            />
          </div>

          {/* Ambient Glow from top */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(109,0,26,0.35)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />

          {/* Radial vignette for depth - softened */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

          {/* Bottom fade to black */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* Subtle grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: "url(/noise.png)", backgroundSize: "200px" }}
          />
        </motion.div>

        {/* ── Main content — horizontal layout ── */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-16 xl:px-24 pt-32 pb-32 max-w-[1920px] mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="lg:col-span-7 xl:col-span-8 flex flex-col items-start gap-8"
            >
              {/* Headline block */}
              <motion.h1
                className="font-display uppercase leading-[0.9] tracking-tight mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 mb-1">
                  <span className="text-[clamp(3.5rem,8vw,8rem)] text-white tracking-tight">
                    We Build
                  </span>
                  <span className="text-[clamp(3.5rem,8vw,8rem)] h-[1.1em] overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={wordIndex}
                        className="block text-burgundy"
                        variants={wordVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        {WORDS_ROTATE[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </div>
                <span className="block text-[clamp(2rem,5.5vw,4.2rem)] text-white/50 tracking-wide mt-2">
                  That Move Markets.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.div
                className="flex flex-col gap-6 items-start w-full max-w-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  From crafting iconic brands to delivering high-impact real estate solutions — all in one place. A complete 360° approach blending strategy, creativity, and execution.
                </p>

                {/* CTAs */}
                <motion.div
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2.5 h-12 px-8 bg-burgundy text-white text-[11px] font-accent font-semibold uppercase tracking-[0.15em] overflow-hidden hover:shadow-[0_0_30px_rgba(109,0,26,0.3)] transition-all duration-500"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                  <Link
                    href="/work"
                    className="group relative inline-flex items-center justify-center gap-2.5 h-12 px-8 border border-white/10 text-white text-[11px] font-accent font-semibold uppercase tracking-[0.15em] overflow-hidden hover:border-white/25 hover:bg-white/[0.03] transition-all duration-500"
                  >
                    <span className="relative z-10">View Our Work</span>
                    <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column: Spacer for Video (Video is absolutely positioned but this helps layout logic if needed) */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 h-full relative pointer-events-none">
              {/* Video is positioned absolutely relative to screen still to maintain scroll effect */}
            </div>

          </div>
        </div>

        {/* ── Left side content when video expands ── */}
        <motion.div
          className="absolute left-4 md:left-8 lg:left-12 xl:left-16 z-25 max-w-xl"
          style={{ 
            opacity: leftContentOpacity, 
            y: leftContentY,
            bottom: "16rem", 
            transformOrigin: "bottom left"
          }}
        >
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="font-accent uppercase tracking-widest text-burgundy text-xs md:text-sm font-bold leading-tight">
                Creativity That Converts
              </p>
              <h2 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-[0.95] tracking-tight">
                Where <span className="text-burgundy">Vision</span> Meets<br />Execution
              </h2>
            </div>
            
            <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
              From concept to completion, we craft campaigns that don't just look good — they deliver results. Real brands. Real impact. Real growth.
            </p>
            

          </div>
        </motion.div>

        {/* ── Small video showcase with parallax expansion ── */}
        <motion.div
          className="absolute z-30 w-[280px] md:w-[320px] right-6 md:right-12 lg:right-16 xl:right-24"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            bottom: videoBottom,
            scale: videoScale,
            opacity: videoOpacity,
            x: videoTranslateX,
            y: videoTranslateY,
            transformOrigin: "bottom right",
          }}
        >
          <motion.div 
            className="relative group"
            style={{ borderRadius: videoBorderRadius }}
          >
            {/* Video container */}
            <motion.div 
              className="relative aspect-video overflow-hidden border border-white/10 bg-black shadow-2xl"
              style={{ borderRadius: videoBorderRadius }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/little-bay/biki-singh-1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            
            {/* Caption */}
            <motion.p 
              className="mt-3 text-white/60 text-xs md:text-sm font-accent tracking-wide text-center"
              style={{ opacity: overlayOpacity }}
            >
              The Proof is in the Work
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ── Brand logo marquee ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="overflow-hidden py-6 md:py-8">
            <div className="animate-marquee-brands flex gap-8 md:gap-12 items-center whitespace-nowrap">
              {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="relative h-10 md:h-14 w-28 md:w-40 flex-shrink-0 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-700"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden accessible heading for screen readers */}
      <h2 className="sr-only">
        We build brands, campaigns, stories, and content that move markets.
      </h2>
    </section>
  );
}
