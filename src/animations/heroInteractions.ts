"use client";

import { gsap } from "@/src/gsap/registerScrollTrigger";
import { ScrollTrigger } from "@/src/gsap/registerScrollTrigger";

export function initHeroInteractions(root: HTMLElement) {
  // Title spread on scroll (tracking expansion via letter-spacing)
  const title = root.querySelector("[data-hero-title]") as HTMLElement | null;
  const sub = root.querySelector("[data-hero-sub]") as HTMLElement | null;
  const bg = root.querySelector("[data-hero-bg]") as HTMLElement | null;

  if (!title) return;
  gsap.set(title, { letterSpacing: "-0.02em" });

  ScrollTrigger.create({
    trigger: root,
    start: "top top",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress; // 0..1
      const spread = (-0.02 + (0.06 * p)) + "em"; // expand ~6-8%
      gsap.to(title, { letterSpacing: spread, duration: 0.2, ease: "none" });
      if (sub) gsap.to(sub, { opacity: Math.min(1, p + 0.1), y: -8 * p, duration: 0.2, ease: "none" });
      if (bg) gsap.to(bg, { rotate: 4 * p, duration: 0.2, ease: "none" }); // 4–6 degrees
    }
  });
}
