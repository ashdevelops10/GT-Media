"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  photos: string[];
};

type PhotoWithOrientation = {
  src: string;
  orientation: "portrait" | "landscape";
};

export function CulturalInfluenceClient({ photos }: Props) {
  const [sortedPhotos, setSortedPhotos] = useState<PhotoWithOrientation[]>([]);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, margin: "-100px" });

  // Detect image orientations on mount (no shuffling)
  useEffect(() => {
    const detectOrientations = async () => {
      const results = await Promise.all(
        photos.map(
          (src) =>
            new Promise<PhotoWithOrientation>((resolve) => {
              const img = new Image();
              img.onload = () => {
                resolve({
                  src,
                  orientation: img.naturalHeight > img.naturalWidth ? "portrait" : "landscape",
                });
              };
              img.onerror = () => {
                resolve({ src, orientation: "landscape" });
              };
              img.src = src;
            })
        )
      );
      
      // Sort: landscapes first, then portraits - no shuffling
      const landscapes = results.filter((p) => p.orientation === "landscape");
      const portraits = results.filter((p) => p.orientation === "portrait");
      setSortedPhotos([...landscapes, ...portraits]);
    };

    detectOrientations();
  }, [photos]);

  const landscapes = sortedPhotos.filter((p) => p.orientation === "landscape");
  const portraits = sortedPhotos.filter((p) => p.orientation === "portrait");

  if (sortedPhotos.length === 0) {
    return (
      <div ref={rootRef} className="flex items-center justify-center py-16">
        <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={rootRef} className="space-y-5">
      {/* Row 1: First 3 landscape images */}
      {landscapes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {landscapes.slice(0, 3).map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900"
            >
              <img
                src={photo.src}
                alt="Celebrity collaboration"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Row 2: Mixed layout - 1 landscape + 2 portraits + 1 landscape */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Landscape left */}
        {landscapes[3] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900"
          >
            <img
              src={landscapes[3].src}
              alt="Celebrity collaboration"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>
        )}

        {/* 2 Portraits in center */}
        {portraits.slice(0, 2).map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900"
          >
            <img
              src={photo.src}
              alt="Celebrity collaboration"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>
        ))}

        {/* Landscape right */}
        {landscapes[4] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900"
          >
            <img
              src={landscapes[4].src}
              alt="Celebrity collaboration"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>
        )}
      </div>

      {/* Row 3: Remaining images in a clean grid */}
      {(landscapes.length > 5 || portraits.length > 2) && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...landscapes.slice(5), ...portraits.slice(2)].map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.7 + index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 ${
                photo.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={photo.src}
                alt="Celebrity collaboration"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
