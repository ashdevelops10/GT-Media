"use client";

import { gsap, ScrollTrigger } from "@/src/gsap/registerScrollTrigger";

export function initSeparators(container: HTMLElement) {
  const lines = container.querySelectorAll<HTMLElement>("[data-separator]");
  lines.forEach((line) => {
    gsap.set(line, { scaleX: 0.8, opacity: 0.6, transformOrigin: "left center" });
    ScrollTrigger.create({
      trigger: line,
      start: "top 85%",
      end: "top 65%",
      onEnter: () => gsap.to(line, { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" }),
    });
  });
}
