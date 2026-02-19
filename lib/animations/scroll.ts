/**
 * Smooth Scroll Configuration
 * Lenis integration with performance optimizations
 */

'use client';

// Lenis is optional; we intentionally use require and loose typing
// so that missing type declarations do not break the build.
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const Lenis: any = require('@studio-freight/lenis');

let lenisInstance: any | null = null;

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
    duration,
    easing,
    orientation = 'vertical',
    smoothWheel = true,
    wheelMultiplier = 1.2,
  } = options;

  lenisInstance = new Lenis({
    // Use lerp for responsive momentum; omit duration to avoid sluggish fixed-time scroll
    lerp: 0.1,
    ...(duration !== undefined && { duration }),
    ...(easing !== undefined && { easing }),
    orientation,
    gestureOrientation: 'vertical',
    smoothWheel,
    wheelMultiplier,
    touchMultiplier: 1.5,
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
export function getLenis(): any | null {
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
    duration = 0.8,
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
