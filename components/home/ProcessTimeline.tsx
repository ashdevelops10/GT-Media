"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    title: "Diagnose",
    principle: "Audit brand, data, and market reality to clarify where attention, trust, or performance is leaking.",
  },
  {
    number: "02",
    title: "Strategize",
    principle: "Design a focused plan with clear levers, budgets, and timelines linking creative, channels, and messaging to specific outcomes.",
  },
  {
    number: "03",
    title: "Build",
    principle: "Develop assets, journeys, and systems—content, funnels, sites, campaigns, and reporting—so execution runs without friction.",
  },
  {
    number: "04",
    title: "Scale",
    principle: "Double down on what works, cut what doesn’t, and compound gains through iteration while protecting brand equity.",
  },
];

export function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">Our Process</h2>
          <p className="text-lg text-soft-gray max-w-[60ch] mx-auto">
            A proven ritual for transforming strategic vision into exceptional reality
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connector Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-accent-gold/40 via-accent-gold/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-8 md:gap-12"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-accent-gold flex items-center justify-center bg-onyx relative z-10">
                  <span className="text-accent-gold font-medium">{phase.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-medium mb-3">{phase.title}</h3>
                  <p className="text-soft-gray leading-relaxed max-w-[50ch]">
                    {phase.principle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
