"use client";

import { useEffect } from"react";
import { ensureScrollTrigger } from"@/src/gsap/registerScrollTrigger";
import { initHeroInteractions } from"@/src/animations/heroInteractions";
import { initSeparators } from"@/src/animations/sectionSeparators";
import { attachMicroInteractions } from"@/src/animations/microInteractions";

export function InitInteractions() {
 useEffect(() => {
 if (typeof window ==="undefined") return;
 if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
 return;
 }
 ensureScrollTrigger();
 // Defer animation initialization to idle callback with longer timeout
 if ("requestIdleCallback"in window) {
 (window as any).requestIdleCallback(() => {
 const root = document.querySelector("[data-hero-root]") as HTMLElement | null;
 if (root) initHeroInteractions(root);
 initSeparators(document.body);
 attachMicroInteractions(document.body);
 }, { timeout: 2000 });
 } else {
 // Fallback: use setTimeout with 1 second delay instead of 0
 setTimeout(() => {
 const root = document.querySelector("[data-hero-root]") as HTMLElement | null;
 if (root) initHeroInteractions(root);
 initSeparators(document.body);
 attachMicroInteractions(document.body);
 }, 1000);
 }
 }, []);

 return null;
}

export default InitInteractions;
