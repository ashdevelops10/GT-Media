"use client";

import { useEffect } from "react";
import { ensureScrollTrigger } from "@/src/gsap/registerScrollTrigger";
import { initHeroInteractions } from "@/src/animations/heroInteractions";
import { initSeparators } from "@/src/animations/sectionSeparators";
import { attachMicroInteractions } from "@/src/animations/microInteractions";

export function InitInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    ensureScrollTrigger();
    const init = () => {
      const root = document.querySelector("[data-hero-root]") as HTMLElement | null;
      if (root) initHeroInteractions(root);
      initSeparators(document.body);
      attachMicroInteractions(document.body);
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(init);
    } else {
      setTimeout(init, 0);
    }
  }, []);

  return null;
}
