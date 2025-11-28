"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Lenis must run in the browser only
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        {/* key on pathname to animate route transitions */}
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </MotionConfig>
  );
}
