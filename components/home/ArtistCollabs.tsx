"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import Image from "next/image";
import { DesignVisual } from "@/components/layout/DesignVisual";

const collabs = [
    {
        id: "dolly",
        artist: "Dolly Chai Wala x CM Haryana",
        desc: "Viral Moment Coordination",
        image: "/images/hero/hero-bg.jpg", // Placeholder
        format: "reel"
    },
    {
        id: "sidhu",
        artist: "Sidhu Moosewala x Urban Theka",
        desc: "Brand Integration",
        image: "/images/hero/hero-bg.jpg", // Placeholder
        format: "video"
    },
    {
        id: "imran",
        artist: "Imran Khan x Moosewala House",
        desc: "Visiting Coverage",
        image: "/images/hero/hero-bg.jpg", // Placeholder
        format: "reel"
    },
    {
        id: "un",
        artist: "Youth-Led Dialogue for UN",
        desc: "Social Impact Initiative",
        image: "/images/hero/hero-bg.jpg", // Placeholder
        format: "video"
    }
];

export function ArtistCollabs() {
    return (
        <Section showGridLines background="dark" spacing="compact">
            <Container>
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-widest text-mahogany mb-3">
                        Impact & Culture
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        Big Artist & Impact Collabs
                    </h2>
                </div>

                {/* Horizontal Scroll / Feed Container */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {collabs.map((collab, index) => (
                        <motion.div
                            key={collab.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex-shrink-0 snap-center rounded-3xl overflow-hidden group cursor-pointer ${collab.format === "reel" ? "w-[280px] aspect-[9/16]" : "w-[400px] aspect-[16/9]"
                                }`}
                        >
                            <DesignVisual
                                type={collab.format === "reel" ? "mesh" : "blueprint"}
                                color={index % 2 === 0 ? "orange" : "carbon"}
                                className="transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Brand Logo Overlay */}
                            <div className="absolute top-4 right-4 w-12 h-12 z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src="/logos/kkg.png"
                                    alt="Brand Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-80" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 p-5 w-full">
                                <p className="text-xs text-silver uppercase tracking-wider mb-1">{collab.desc}</p>
                                <h3 className="text-lg md:text-xl font-medium text-white leading-tight">
                                    {collab.artist}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
