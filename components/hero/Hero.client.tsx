"use client";

import { useEffect, useRef } from "react";

import { registerScrollTrigger } from "@/lib/animations/gsap";

export default function HeroClient() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // Ensure this code runs only in browser
    if (typeof window === "undefined") return;

    let ctx: gsap.Context | null = null;

    (async () => {
      const registered = await registerScrollTrigger();
      if (!registered) return;

      const { gsap, ScrollTrigger } = registered;

      ctx = gsap.context(() => {
        if (headingRef.current && subRef.current) {
          gsap.fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out"
            }
          );

          gsap.fromTo(
            subRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.15,
              ease: "power3.out"
            }
          );

          ScrollTrigger.create({
            trigger: headingRef.current,
            start: "top top+=120",
            onEnter: () => {
              // Additional scroll-based interactions can be added here.
            }
          });
        }
      });

      return () => {
        ScrollTrigger.killAll();
      };
    })();

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div className="relative space-y-8">
      <h1
        ref={headingRef}
        className="text-display font-display text-balance text-paper"
      >
        Cinematic Precision
        <span className="block text-vermilion">on the Web.</span>
      </h1>
      <p
        ref={subRef}
        className="max-w-2xl text-body-lg text-graphite-400"
      >
        GT Media directs motion-first digital experiences with 
        film-level craft and product-grade stability. Built for 
        high-stakes launches.
      </p>
    </div>
  );
}
