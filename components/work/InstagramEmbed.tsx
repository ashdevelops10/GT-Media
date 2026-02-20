"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface InstagramEmbedProps {
  poster: string;
  video?: string;
  instagramUrl: string;
  title: string;
  type: "reel" | "post" | "carousel";
  className?: string;
  brandColor?: string;
}

export function InstagramEmbed({
  poster,
  video,
  instagramUrl,
  title,
  type,
  className = "",
  brandColor = "#6D001A",
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Lazy-load: only render when in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay video when visible
  useEffect(() => {
    if (!isVisible || !video || !videoRef.current) return;

    const vid = videoRef.current;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setVideoPlaying(true))
        .catch(() => {
          // Autoplay blocked — user will see poster + play button
          setVideoPlaying(false);
        });
    }
  }, [isVisible, video]);

  const isReel = type === "reel";
  const aspectClass = isReel ? "aspect-[9/16]" : "aspect-square";

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black group ${aspectClass} ${className}`}
    >
      {/* Poster image — always present as fallback */}
      {isVisible && (
        <Image
          src={poster}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-500 ${
            videoPlaying ? "opacity-0" : imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setImgLoaded(true)}
        />
      )}

      {/* Loading skeleton */}
      {!imgLoaded && !videoPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div
            className="w-10 h-10 rounded-full animate-pulse"
            style={{ backgroundColor: `${brandColor}30` }}
          />
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="h-1.5 w-24 rounded-full animate-pulse"
              style={{ backgroundColor: `${brandColor}20` }}
            />
            <div
              className="h-1.5 w-16 rounded-full animate-pulse"
              style={{ backgroundColor: `${brandColor}15` }}
            />
          </div>
        </div>
      )}

      {/* Self-hosted video — autoplay, loop, muted */}
      {isVisible && video && (
        <video
          ref={videoRef}
          src={video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoPlaying ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          playsInline
          preload="auto"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />



      {/* Type badge — top-right */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className="text-[8px] uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-md font-bold"
          style={{
            backgroundColor: `${brandColor}25`,
            color: brandColor,
          }}
        >
          {type}
        </span>
      </div>

      {/* Instagram link — bottom-right */}
      {instagramUrl && (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md font-semibold text-white/80 hover:text-white transition-colors"
          style={{ backgroundColor: `${brandColor}40` }}
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          View
        </a>
      )}
    </div>
  );
}
