"use client";

import { ReactNode, useEffect } from"react";
import Lenis from"lenis";
import { AnimatePresence, MotionConfig } from"framer-motion";
import { usePathname } from"next/navigation";

type ProvidersProps = {
 children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
 const pathname = usePathname();

 useEffect(() => {
 // Lenis must run in the browser only
 if (typeof window ==="undefined") return;

 // Skip smooth scroll for users who prefer reduced motion
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

 const lenis = new Lenis({
 lerp: 0.08, // Snappier response — less lag between input and visual
 wheelMultiplier: 1.0,
 touchMultiplier: 1.2,
 smoothWheel: true,
 });

 // Connect Lenis → GSAP ScrollTrigger so they share the same scroll position.
 // Without this, ScrollTrigger reads native scroll while Lenis virtualises it,
 // causing triggers to fire at wrong positions and stutter on every tick.
 import('gsap/ScrollTrigger')
 .then(({ ScrollTrigger }) => {
 lenis.on('scroll', () => ScrollTrigger.update());
 })
 .catch(() => {/* gsap not used on this page */});

 let rafId: number;
 const raf = (time: number) => {
 lenis.raf(time);
 rafId = requestAnimationFrame(raf);
 };

 rafId = requestAnimationFrame(raf);

 return () => {
 cancelAnimationFrame(rafId);
 lenis.destroy();
 };
 }, []);

 return (
 <MotionConfig reducedMotion="user">
 <AnimatePresence mode="wait"initial={false}>
 {/* key on pathname to animate route transitions */}
 <div key={pathname}>{children}</div>
 </AnimatePresence>
 </MotionConfig>
 );
}
