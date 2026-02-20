'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * Page Transition Wrapper
 * Cinematic crossfade between routes
 */
export function PageTransition({ children }: { children: ReactNode }) {
 const pathname = usePathname();

 // Check for reduced motion
 const prefersReducedMotion = 
 typeof window !== 'undefined' && 
 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 if (prefersReducedMotion) {
 return <>{children}</>;
 }

 return (
 <AnimatePresence mode="wait">
 <motion.div
 key={pathname}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{
 duration: 0.3,
 ease: [0.16, 1, 0.3, 1],
 }}
 >
 {children}
 </motion.div>
 </AnimatePresence>
 );
}
