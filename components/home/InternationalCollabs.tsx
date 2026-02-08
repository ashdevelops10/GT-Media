"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { DesignVisual } from "@/components/layout/DesignVisual";

interface Location {
    id: string;
    city: string;
    country: string;
    event: string;
    image: string;
    coords: { x: number; y: number }; // Percentages 0-100
}

const locations: Location[] = [
    {
        id: "london",
        city: "London",
        country: "UK",
        event: "F9 Events UK",
        image: "/images/hero/hero-bg.jpg",
        coords: { x: 48, y: 34 }
    },
    {
        id: "wolverhampton",
        city: "Wolverhampton",
        country: "UK",
        event: "Wolver Hampton Mela",
        image: "/images/hero/hero-bg.jpg",
        coords: { x: 47.5, y: 32 }
    },
    {
        id: "dubai",
        city: "Dubai",
        country: "UAE",
        event: "Aura Nights",
        image: "/images/hero/hero-bg.jpg",
        coords: { x: 60, y: 56 }
    },
    {
        id: "singapore",
        city: "Singapore",
        country: "SG",
        event: "Asia Pacific Summit",
        image: "/images/hero/hero-bg.jpg",
        coords: { x: 80, y: 70 }
    }
];

const HUB_LOCATION = { x: 68, y: 55 }; // India (Main Hub)

function BezierArc({ start, end, delay = 0.5 }: { start: { x: number; y: number }; end: { x: number; y: number }; delay?: number }) {
    // Simple cubic bezier calculation for arcs
    // We'll create a curve that arcs upwards
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - 15; // Arc height

    const path = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

    return (
        <motion.path
            d={path}
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="1"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, delay, ease: "easeInOut" }}
            style={{ opacity: 0.4 }}
        />
    );
}

export function InternationalCollabs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeLocation, setActiveLocation] = useState<string | null>(null);

    return (
        <Section showGridLines background="carbon" className="relative overflow-hidden">
            <Container>
                <div className="mb-8 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-strawberry font-accent text-xs uppercase tracking-widest mb-2"
                    >
                        Global Reach
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display text-white"
                    >
                        International <span className="text-strawberry">Collabs</span>
                    </motion.h2>
                </div>

                <div
                    ref={ref}
                    className="relative w-full aspect-[16/10] md:aspect-[3/1] bg-carbon/30 rounded-3xl border border-white/5 overflow-hidden group shadow-2xl"
                >
                    {/* World Map Backdrop */}
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid slice"
                        className="absolute inset-0 w-full h-full opacity-[0.08]"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern id="world-dots" x="0" y="0" width="1" height="1" patternUnits="userSpaceOnUse">
                                <circle cx="0.5" cy="0.5" r="0.1" fill="currentColor" />
                            </pattern>
                            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e5383b" stopOpacity="0" />
                                <stop offset="50%" stopColor="#e5383b" stopOpacity="1" />
                                <stop offset="100%" stopColor="#e5383b" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <rect width="100" height="100" fill="url(#world-dots)" className="text-white" />

                        {/* Minimalist World Contours (Simplified for performance & style) */}
                        <path
                            d="M20,30 Q25,25 35,30 T45,35 T55,30 T70,35 T85,30"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.1"
                            strokeOpacity="0.2"
                        />

                        {/* Connecting Arcs */}
                        {isInView && locations.map((loc, idx) => (
                            <BezierArc key={`arc-${loc.id}`} start={HUB_LOCATION} end={loc.coords} delay={0.8 + idx * 0.2} />
                        ))}
                    </svg>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                    {/* Hub Pin (India) */}
                    <div
                        className="absolute z-20"
                        style={{ left: `${HUB_LOCATION.x}%`, top: `${HUB_LOCATION.y}%` }}
                    >
                        <div className="relative -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute -inset-8 bg-mahogany/10 rounded-full animate-pulse" />
                            <div className="absolute -inset-4 bg-mahogany/20 rounded-full animate-ping" />
                            <div className="w-3 h-3 bg-white rounded-full border-2 border-mahogany shadow-[0_0_15px_rgba(229,56,59,0.8)]" />
                            <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase font-bold tracking-tighter text-mahogany opacity-60">HQ / Hub</span>
                        </div>
                    </div>

                    {/* Destination Pins */}
                    {locations.map((loc, index) => (
                        <motion.div
                            key={loc.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.2, type: "spring" }}
                            className="absolute z-30 group/pin cursor-pointer"
                            style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                            onMouseEnter={() => setActiveLocation(loc.id)}
                            onMouseLeave={() => setActiveLocation(null)}
                        >
                            <div className="relative -translate-x-1/2 -translate-y-1/2">
                                {/* Secondary pulse */}
                                <div className="absolute -inset-4 bg-mahogany/30 rounded-full opacity-0 group-hover/pin:opacity-100 group-hover/pin:animate-ping transition-opacity" />
                                <div className="relative w-4 h-4 bg-mahogany/80 hover:bg-mahogany rounded-full border-2 border-white/50 shadow-lg transition-colors" />

                                {/* City Label */}
                                <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-widest text-silver/40 group-hover/pin:text-white transition-colors">
                                    {loc.city}
                                </span>
                            </div>

                            {/* Enhanced Hover Card */}
                            <AnimatePresence>
                                {activeLocation === loc.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-52 bg-onyx/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 pointer-events-none"
                                    >
                                        <div className="h-28 relative">
                                            <DesignVisual type="blueprint" color="garnet" className="transition-transform duration-700 group-hover/pin:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
                                            <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-mahogany/90 rounded text-[8px] font-bold text-white uppercase tracking-wider">
                                                Live Case
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-white font-display text-sm mb-1 leading-tight">{loc.event}</p>
                                            <p className="text-strawberry/80 text-[10px] uppercase tracking-widest font-bold">
                                                {loc.city}, {loc.country}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Legend / Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 text-[10px] uppercase tracking-[0.2em] font-medium"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-mahogany shadow-[0_0_8px_#e5383b]" />
                        Active Campaign Hub
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-silver/50" />
                        Verified International Partnership
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-px bg-mahogany/60" />
                        Strategic Cultural Corridors
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
