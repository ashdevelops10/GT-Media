"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  photos: string[];
};

function shuffleArray<T>(input: T[]): T[] {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function CulturalInfluenceClient({ photos }: Props) {
  const initial = useMemo(() => shuffleArray(photos).slice(0, 6), [photos]);
  const [visible, setVisible] = useState(initial);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, margin: "-120px" });

  useEffect(() => {
    if (photos.length <= 6) return;

    const id = setInterval(() => {
      setVisible((current) => {
        const next = shuffleArray(photos).slice(0, 6);
        return next;
      });
    }, 6000);

    return () => clearInterval(id);
  }, [photos]);

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
    >
      {visible.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.7,
            delay: index * 0.05,
            ease: [0.19, 1, 0.22, 1],
          }}
          className={
            "group relative w-full overflow-hidden rounded-md bg-black/70 shadow-subtle " +
            (index % 3 === 0
              ? "md:mt-6 lg:mt-10"
              : index % 3 === 2
              ? "md:-mt-4 lg:-mt-6"
              : "")
          }
        >
          <div className="relative">
            <img
              src={src}
              alt="Cultural reference"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover align-middle transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.02]"
            />

            {/* Vignette and border */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[5px] border border-transparent bg-[linear-gradient(135deg,rgba(255,77,77,0.75),rgba(163,8,18,0.1))] opacity-60 group-hover:opacity-90 transition-opacity duration-500 mix-blend-screen" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Lower-third caption placeholder */}
            <div className="absolute inset-x-4 bottom-3 md:bottom-4 text-center">
              <div className="mx-auto inline-flex flex-col items-center px-4 py-2 rounded-sm bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="block h-px w-10 mb-2 bg-accent-red/80" />
                <span className="text-[11px] md:text-xs tracking-[0.22em] uppercase text-white/90">
                  Cultural Collaborations
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
