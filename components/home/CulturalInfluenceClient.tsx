"use client";

import { useEffect, useState, useRef } from "react";

type Props = {
  photos: string[];
};

type PhotoWithOrientation = {
  src: string;
  orientation: "portrait" | "landscape";
};

export function CulturalInfluenceClient({ photos }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [photosWithMeta, setPhotosWithMeta] = useState<PhotoWithOrientation[]>([]);

  useEffect(() => {
    const loadMeta = async () => {
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
              img.onerror = () => resolve({ src, orientation: "landscape" });
              img.src = src;
            })
        )
      );
      setPhotosWithMeta(results);
    };
    loadMeta();
  }, [photos]);

  if (!photosWithMeta.length) return null;

  // Duplicate for seamless scroll
  const marqueePhotos = [...photosWithMeta, ...photosWithMeta];

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden py-10"
    >
      <div className="flex select-none">
        <div
          className="flex gap-6 whitespace-nowrap hover:[animation-play-state:paused]"
          style={{
            width: "fit-content",
            animation: `marquee ${photosWithMeta.length * 6}s linear infinite`,
            willChange: "transform",
          }}
        >
          {marqueePhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className={`relative flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 group ${photo.orientation === "portrait"
                ? "w-[180px] md:w-[240px] aspect-[3/4]"
                : "w-[240px] md:w-[360px] aspect-[4/3]"
                }`}
            >
              <img
                src={photo.src}
                alt="Celebrity collaboration"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold">Featured Relationship</p>
                <p className="text-white font-display text-lg uppercase leading-none mt-1">Cultural Impact</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
}
