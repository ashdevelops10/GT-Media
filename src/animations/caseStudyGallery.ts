"use client";

import { gsap } from "@/src/gsap/registerScrollTrigger";

export function initCaseStudyGallery(container: HTMLElement) {
  const gallery = container.querySelector<HTMLElement>("[data-horizontal-gallery]");
  if (!gallery) return;

  const totalWidth = gallery.scrollWidth - gallery.clientWidth;
  gsap.to(gallery, {
    x: () => -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => "+=" + totalWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    }
  });

  // Parallax for stacked images
  const items = gallery.querySelectorAll<HTMLElement>("[data-parallax-item]");
  items.forEach((el, i) => {
    gsap.to(el, {
      yPercent: i % 2 === 0 ? -5 : 5,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "left 95%",
        end: "right 5%",
        scrub: true,
      }
    });
  });
}
