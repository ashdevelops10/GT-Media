"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    </div>
  );
}
