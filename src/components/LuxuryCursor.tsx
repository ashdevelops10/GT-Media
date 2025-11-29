"use client";

import { useEffect, useRef, useState } from "react";
import { CursorPhysics } from "@/src/utils/cursorPhysics";

export default function LuxuryCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const [physics] = useState(() => new CursorPhysics());
  const [magnet, setMagnet] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: MouseEvent) => {
      physics.setTarget(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const raf = () => {
      physics.step(magnet);
      const dot = dotRef.current; const halo = haloRef.current;
      if (dot && halo) {
        dot.style.transform = `translate3d(${physics.dot.x}px, ${physics.dot.y}px, 0)`;
        halo.style.transform = `translate3d(${physics.halo.x}px, ${physics.halo.y}px, 0)`;
      }
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);

    // Magnetic hook on interactive elements
    const handlers: Array<(ev: Event) => void> = [];
    const attachMagnet = (el: Element) => {
      const enter = () => {
        const rect = el.getBoundingClientRect();
        setMagnet({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        haloRef.current!.style.width = haloRef.current!.style.height = "24px";
      };
      const leave = () => {
        setMagnet(null);
        haloRef.current!.style.width = haloRef.current!.style.height = "10px";
      };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      handlers.push(() => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };

    document.querySelectorAll("a, button, [data-hover]").forEach(attachMagnet);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(id);
      handlers.forEach((fn) => fn(new Event("cleanup")));
    };
  }, [physics, magnet]);

  return (
    <>
      <div ref={dotRef} className="fixed pointer-events-none z-[9999] w-[4px] h-[4px] bg-auric rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div ref={haloRef} className="fixed pointer-events-none z-[9998] w-[10px] h-[10px] border border-auric rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
    </>
  );
}
