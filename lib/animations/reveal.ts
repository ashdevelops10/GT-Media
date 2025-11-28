/**
 * Typography Reveal Utilities
 * Cinematic mask/translateY animations for display type
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal display headline with mask animation
 * @param target - Element selector or ref
 * @param options - Animation config
 */
export function revealHeadline(
  target: string | Element,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
    y?: number;
  } = {}
) {
  const {
    duration = 1.2,
    delay = 0,
    stagger = 0.08,
    y = 40,
  } = options;

  const elements = typeof target === 'string' 
    ? document.querySelectorAll(target) 
    : [target];

  gsap.fromTo(
    elements,
    {
      y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
    }
  );
}

/**
 * Scroll-triggered section reveal
 * @param target - Section selector
 * @param options - ScrollTrigger config
 */
export function revealSection(
  target: string | Element,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
  } = {}
) {
  const {
    start = 'top 80%',
    end = 'bottom 20%',
    scrub = false,
    markers = false,
  } = options;

  const elements = typeof target === 'string'
    ? document.querySelectorAll(target)
    : [target];

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 32,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
        },
      }
    );
  });
}

/**
 * Parallax effect for hero imagery
 * @param target - Image element
 * @param speed - Parallax speed (0.1 = subtle, 0.3 = strong)
 */
export function parallaxImage(
  target: string | Element,
  speed: number = 0.15
) {
  const element = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (!element) return;

  // Clamp speed to max 6% translate
  const clampedSpeed = Math.min(speed, 0.06);

  gsap.to(element, {
    yPercent: clampedSpeed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Staggered list reveal
 * @param target - List items selector
 * @param options - Stagger config
 */
export function revealList(
  target: string | NodeListOf<Element>,
  options: {
    stagger?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const {
    stagger = 0.12,
    duration = 0.6,
    delay = 0,
  } = options;

  const elements = typeof target === 'string'
    ? document.querySelectorAll(target)
    : target;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 24,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power2.out',
    }
  );
}

/**
 * Page transition overlay
 * @param onComplete - Callback after transition
 */
export function pageTransitionOut(onComplete?: () => void) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: #0A0A0B;
    z-index: 9999;
    pointer-events: none;
  `;
  document.body.appendChild(overlay);

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        onComplete?.();
        // Clean up after route change
        setTimeout(() => {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => overlay.remove(),
          });
        }, 100);
      },
    }
  );
}

/**
 * Cleanup all ScrollTrigger instances
 * Call this on component unmount
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Conditional animation wrapper
 * Returns instant completion if reduced motion is preferred
 */
export function safeAnimate(
  animationFn: () => void,
  fallbackFn?: () => void
) {
  if (prefersReducedMotion()) {
    fallbackFn?.();
  } else {
    animationFn();
  }
}
