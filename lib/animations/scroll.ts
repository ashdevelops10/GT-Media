/**
 * Smooth Scroll Configuration
 * Lenis integration with performance optimizations
 */

'use client';

import Lenis from '@studio-freight/lenis';

let lenisInstance: Lenis | null = null;

/**
 * Initialize smooth scroll with Lenis
 * @param options - Lenis configuration
 */
export function initSmoothScroll(options: {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  wheelMultiplier?: number;
} = {}) {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  const {
    duration = 1.2,
    easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation = 'vertical',
    smoothWheel = true,
    wheelMultiplier = 1,
  } = options;

  lenisInstance = new Lenis({
    duration,
    easing,
    orientation,
    gestureOrientation: 'vertical',
    smoothWheel,
    wheelMultiplier,
    touchMultiplier: 2,
    infinite: false,
  });

  // RAF loop for Lenis
  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

/**
 * Destroy smooth scroll instance
 */
export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

/**
 * Get current Lenis instance
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Scroll to element or position
 * @param target - Selector, element, or position
 * @param options - Scroll options
 */
export function scrollTo(
  target: string | Element | number,
  options: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    immediate?: boolean;
  } = {}
) {
  if (!lenisInstance) return;

  const {
    offset = 0,
    duration = 1.2,
    easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    immediate = false,
  } = options;

  lenisInstance.scrollTo(target, {
    offset,
    duration: immediate ? 0 : duration,
    easing,
  });
}

/**
 * Stop scroll animation
 */
export function stopScroll() {
  lenisInstance?.stop();
}

/**
 * Start scroll animation
 */
export function startScroll() {
  lenisInstance?.start();
}

/**
 * Hook for scroll events
 * @param callback - Scroll event handler
 */
export function onScroll(callback: (data: { scroll: number; velocity: number }) => void) {
  if (!lenisInstance) return () => {};

  lenisInstance.on('scroll', callback);

  return () => {
    lenisInstance?.off('scroll', callback);
  };
}
