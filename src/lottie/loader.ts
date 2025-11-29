// Lightweight Lottie loader with IntersectionObserver
"use client";

import lottie, { AnimationItem } from "lottie-web";

export type LottieSpec = {
  container: HTMLElement;
  json: object;
  loop?: boolean;
  autoplay?: boolean;
};

export function loadLottie(spec: LottieSpec): AnimationItem | null {
  const { container, json } = spec;
  if (!container) return null;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: spec.loop ?? true,
          autoplay: spec.autoplay ?? true,
          animationData: json,
        });
        io.disconnect();
      }
    });
  }, { rootMargin: "-10%" });
  io.observe(container);
  return null;
}
