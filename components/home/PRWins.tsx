"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import Link from "next/link";

export function PRWins() {
    return (
        <Section background="dark" spacing="compact" className="bg-black border-t border-white/[0.04]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="order-2 md:order-1 relative">
                        {/* Abstract Cards Visual */}
                        <div className="relative h-[400px] w-full max-w-sm mx-auto md:mx-0 perspective-1000">
                            <motion.div
                                initial={{ rotateY: -10, rotateX: 5, z: 0 }}
                                whileHover={{ rotateY: -5, rotateX: 0, z: 20 }}
                                className="absolute top-0 left-4 w-full h-64 bg-black border border-white/10 rounded-xl p-6 shadow-2xl transform origin-bottom-left z-10"
                            >
                                <div className="h-4 w-24 bg-white/10 rounded mb-4" />
                                <div className="space-y-2 mb-6 opacity-30 blur-sm">
                                    <div className="h-2 w-full bg-white/20 rounded" />
                                    <div className="h-2 w-5/6 bg-white/20 rounded" />
                                    <div className="h-2 w-full bg-white/20 rounded" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/5" />
                                    <div className="h-12 w-12 rounded-full bg-white/5" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ rotateY: 10, rotateX: -5, y: 100, x: 40 }}
                                whileHover={{ rotateY: 5, rotateX: 0, y: 80, x: 20 }}
                                className="absolute top-12 left-0 w-full h-64 bg-gradient-to-br from-burgundy/20 to-black border border-burgundy/30 rounded-xl p-6 shadow-2xl backdrop-blur-sm z-20"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-4 w-32 bg-burgundy rounded opacity-80" />
                                    <div className="px-2 py-1 bg-burgundy/20 rounded text-[10px] text-burgundy uppercase tracking-wider">Confidential</div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="h-3 w-full bg-white/10 rounded animate-pulse" />
                                    <div className="h-3 w-3/4 bg-white/10 rounded animate-pulse delay-75" />
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex justify-between items-end text-white">
                                        <div>
                                            <p className="text-3xl font-display">10x</p>
                                            <p className="text-xs text-white/50">Media Reach</p>
                                        </div>
                                        <div className="h-8 w-px bg-white/10" />
                                        <div>
                                            <p className="text-3xl font-display">Viral</p>
                                            <p className="text-xs text-white/50">Buzz</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <p className="text-xs uppercase tracking-widest text-burgundy mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse" />
                            Confidential Highlights
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-5">
                            PR &amp; MEDIA <span className="text-burgundy">WINS</span>
                        </h2>
                        <p className="text-base text-white/40 mb-6 leading-relaxed">
                            Powered high-profile PR campaigns for undisclosed blue-chip clients, politicians, and enterprises.
                            We deliver viral buzz, exponential media reach, and ethical storytelling at scale—all while strictly adhering to confidentiality agreements.
                        </p>

                        <div className="p-5 bg-white/[0.03] rounded-xl border-l-2 border-burgundy mb-6">
                            <p className="text-white italic">
                                "Results that speak louder than the NDAs that bind them."
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-burgundy hover:text-white transition-all duration-300"
                        >
                            NDA Locked – Let's chat for deets
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
