"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section, SplitBlock } from "@/components/layout";
import { useRef } from "react";

const differentiators = [
  {
    title: "Hybrid Advantage",
    description: "Strategy house, creative studio, and performance team under one roof—no handoffs, no dilution, no excuses.",
  },
  {
    title: "Performance-First Philosophy",
    description: "Every rupee, frame, and line of copy is tied to reach, revenue, or reputation—not vanity metrics.",
  },
  {
    title: "Creative + Strategy + Execution",
    description: "Narrative, content, funnels, media, and data operated by one accountable team for end-to-end clarity.",
  },
  {
    title: "High-Growth Trust",
    description: "CMOs, managers, and campaign heads work with GT because we speak their language: dashboards, iteration, and accountability.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Container>
        <SplitBlock
          ratio="40-60"
          left={
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
                Why Choose GT Media
              </h2>
              <p className="text-lg text-soft-gray leading-relaxed">
                GT Media is engineered for leaders who demand ROI from every creative move. We
                design systems where the idea, the craft, and the media spend are owned by the
                same senior team.
              </p>
            </motion.div>
          }
          right={
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="border border-soft-gray/20 p-6 md:p-8 h-full hover:border-accent-gold/40 transition-all duration-500 hover:translate-y-[-4px]">
                    <h3 className="text-xl font-medium mb-3 group-hover:text-accent-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-soft-gray leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          }
        />
      </Container>
    </Section>
  );
}
