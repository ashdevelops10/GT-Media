"use client";

import { useEffect, useRef, useState } from "react";
import { CursorPhysics } from "@/src/utils/cursorPhysics";

export default function LuxuryCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const [physics] = useState(() => new CursorPhysics());
  const [magnet, setMagnet] = useState<{ x: number; y: number } | null>(null);
  const handlersRef = useRef<Array<() => void>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    
    // Check for touch device - don't initialize cursor if touch-only
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      physics.setTarget(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let rafId = 0;
    const raf = () => {
      physics.step(magnet);
      const dot = dotRef.current;
      const halo = haloRef.current;
      if (dot && halo) {
        dot.style.transform = `translate3d(${physics.dot.x}px, ${physics.dot.y}px, 0)`;
        halo.style.transform = `translate3d(${physics.halo.x}px, ${physics.halo.y}px, 0)`;
      }
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Magnetic hook on interactive elements - defer to idle callback
    let idleId: number;
    const attachMagnet = (el: Element) => {
      const enter = () => {
        const rect = el.getBoundingClientRect();
        setMagnet({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        if (haloRef.current) {
          haloRef.current.style.width = haloRef.current.style.height = "24px";
        }
      };
      const leave = () => {
        setMagnet(null);
        if (haloRef.current) {
          haloRef.current.style.width = haloRef.current.style.height = "10px";
        }
      };
      el.addEventListener("mouseenter", enter, { passive: true });
      el.addEventListener("mouseleave", leave, { passive: true });
      handlersRef.current.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };

    if ("requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(() => {
        document.querySelectorAll("a, button, [data-hover]").forEach(attachMagnet);
      });
    } else {
      setTimeout(() => {
        document.querySelectorAll("a, button, [data-hover]").forEach(attachMagnet);
      }, 500);
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      if (idleId && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      handlersRef.current.forEach((fn) => fn());
      handlersRef.current = [];
    };
  }, [physics, magnet]);

  return (
    <>
      <div ref={dotRef} className="fixed pointer-events-none z-[9999] w-[4px] h-[4px] bg-burgundy rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div ref={haloRef} className="fixed pointer-events-none z-[9998] w-[10px] h-[10px] border border-burgundy rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
    </>
  );
}
