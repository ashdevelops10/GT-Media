"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout";

export function TeamHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background gradients */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-burgundy/10 to-transparent opacity-60" />
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-black/40 to-transparent" />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-burgundy font-accent text-xs md:text-sm uppercase tracking-[0.2em] mb-4"
                        >
                            The Collective
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
                        >
                            Meet the GT Media Dream Team – <span className="text-white/50 italic">Crafting Viral Stories.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-24 h-1 bg-burgundy mx-auto rounded-full"
                        />
                    </div>
                </Container>
            </motion.div>

            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat z-20" />
        </section>
    );
}
