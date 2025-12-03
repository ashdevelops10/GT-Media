"use client";

import { useEffect, useRef, useState } from "react";

const SOURCES = [
  "/videos/little-bay/biki-singh-1.mp4",
  "/videos/little-bay/biki-singh-2.mp4",
];

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);

  // When a video ends, advance to the next source (and wrap back to the first).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIndex((prev) => (prev + 1) % SOURCES.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Whenever the index changes, swap the src on the same <video> element and play.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = SOURCES[index];
    if (!src) return;

    video.src = src;
    video.load();

    const play = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay might be blocked; fail silently.
      }
    };

    play();
  }, [index]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover rounded-lg"
      muted
      playsInline
      autoPlay
      preload="metadata"
    />
  );
}
