'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for scroll-triggered reveal animations
 * @param options - Animation configuration
 */
export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    duration?: number;
    ease?: string;
    start?: string;
    end?: string;
    scrub?: boolean;
    once?: boolean;
  } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }

    const {
      y = 32,
      duration = 0.8,
      ease = 'power3.out',
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      once = true,
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            end,
            scrub,
            once,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [options.y, options.duration, options.ease, options.start, options.end, options.scrub, options.once]);

  return ref;
}
