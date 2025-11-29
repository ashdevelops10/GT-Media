"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const values = [
  {
    title: "Strategic First",
    principle: "Every design decision traces back to business objectives and user needs",
    outcome: "Measurable brand lift and conversion optimization",
  },
  {
    title: "Performance as Craft",
    principle: "Beauty and speed are not mutually exclusive—they're inseparable",
    outcome: "Sub-3s load times with cinematic motion",
  },
  {
    title: "Accessibility by Design",
    principle: "Inclusive experiences are better experiences for everyone",
    outcome: "WCAG AAA compliance without aesthetic compromise",
  },
  {
    title: "Systems Thinking",
    principle: "We build design systems that scale, not one-off solutions",
    outcome: "Long-term brand consistency and efficiency",
  },
  {
    title: "Motion with Purpose",
    principle: "Animation enhances narrative and UX—never as decoration",
    outcome: "Reduced cognitive load, increased engagement",
  },
  {
    title: "Transparent Partnership",
    principle: "No black boxes. Clients understand our process and rationale",
    outcome: "Trust, alignment, and sustainable collaboration",
  },
];

export function CreativeValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Our Creative Values
          </h2>
          <p className="text-lg text-soft-gray max-w-[60ch] mx-auto">
            Principles that guide every decision, from strategy to pixel
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-soft-gray/20 p-8 hover:border-accent-gold/40 transition-all duration-500"
            >
              <h3 className="text-2xl font-medium mb-4 text-accent-gold">{value.title}</h3>
              <p className="text-soft-gray mb-4 leading-relaxed">{value.principle}</p>
              <p className="text-sm text-soft-gray/70 italic">→ {value.outcome}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
