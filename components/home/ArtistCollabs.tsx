"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { DesignVisual } from "@/components/layout/DesignVisual";

const collabs = [
    {
        id: "dolly",
        artist: "Dolly Chai Wala x CM Haryana",
        desc: "Viral Moment Coordination",
        image: "/images/hero/hero-bg.jpg",
        format: "reel",
        videoSrc: "/videos/collabs/dolly-chai-wala.mp4"
    },
    {
        id: "sidhu",
        artist: "Sidhu Moosewala x Urban Theka",
        desc: "Brand Integration",
        image: "/images/hero/hero-bg.jpg",
        format: "video",
        videoSrc: "/videos/collabs/sidhu-moosewala-urban-theka.mp4",
        muted: true
    },
    {
        id: "imran",
        artist: "Imran Khan x Moosewala House",
        desc: "Visiting Coverage",
        image: "/images/hero/hero-bg.jpg",
        format: "reel",
        videoSrc: "/videos/collabs/imran-khan-moosewala-house.mp4",
        muted: true
    },
];

function VideoCard({ collab, index }: { collab: typeof collabs[0]; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setPlaying(true); }
        else { v.pause(); setPlaying(false); }
    };

    return (
        <motion.div
            key={collab.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex-shrink-0 snap-center rounded-3xl overflow-hidden group cursor-pointer ${collab.format === "reel" ? "w-[280px] aspect-[9/16]" : "w-[400px] aspect-[16/9]"}`}
        >
            {(collab as any).videoSrc ? (
                <video
                    ref={videoRef}
                    playsInline
                    muted={(collab as any).muted ?? false}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={(collab as any).videoSrc}
                    onEnded={() => setPlaying(false)}
                />
            ) : (
                <DesignVisual
                    type={collab.format === "reel" ? "mesh" : "blueprint"}
                    color={index % 2 === 0 ? "burgundy" : "dark"}
                    className="transition-transform duration-700 group-hover:scale-110"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Play / Pause button */}
            {(collab as any).videoSrc && (
                <button
                    onClick={toggle}
                    className="absolute inset-0 flex items-center justify-center z-20"
                    aria-label={playing ? "Pause" : "Play"}
                >
                    <div className={`w-14 h-14 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                        {playing ? (
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-white fill-current ml-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </div>
                </button>
            )}

            <div className="absolute bottom-0 left-0 p-5 w-full pointer-events-none">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{collab.desc}</p>
                <h3 className="text-lg md:text-xl font-medium text-white leading-tight">
                    {collab.artist}
                </h3>
            </div>
        </motion.div>
    );
}

export function ArtistCollabs() {
    return (
        <Section showGridLines background="dark" spacing="compact">
            <Container>
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-widest text-burgundy mb-3">
                        Impact & Culture
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        Big Artist & Impact Collabs
                    </h2>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide justify-center flex-wrap">
                    {collabs.map((collab, index) => (
                        <VideoCard key={collab.id} collab={collab} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}

