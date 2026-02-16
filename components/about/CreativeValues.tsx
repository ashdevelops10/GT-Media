"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const values = [
  {
    title: "Strategic First",
    principle: "Every design decision traces back to business objectives and user needs",
    outcome: "Measurable brand lift and conversion optimization",
    icon: "01",
  },
  {
    title: "Performance as Craft",
    principle: "Beauty and speed are not mutually exclusive—they're inseparable",
    outcome: "Sub-3s load times with cinematic motion",
    icon: "02",
  },
  {
    title: "Accessibility by Design",
    principle: "Inclusive experiences are better experiences for everyone",
    outcome: "WCAG AAA compliance without aesthetic compromise",
    icon: "03",
  },
  {
    title: "Systems Thinking",
    principle: "We build design systems that scale, not one-off solutions",
    outcome: "Long-term brand consistency and efficiency",
    icon: "04",
  },
  {
    title: "Motion with Purpose",
    principle: "Animation enhances narrative and UX—never as decoration",
    outcome: "Reduced cognitive load, increased engagement",
    icon: "05",
  },
  {
    title: "Transparent Partnership",
    principle: "No black boxes. Clients understand our process and rationale",
    outcome: "Trust, alignment, and sustainable collaboration",
    icon: "06",
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Our Creative Values
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-[60ch] mx-auto px-4">
            Principles that guide every decision, from strategy to pixel
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-white/20/20 p-6 sm:p-8 hover:border-burgundy/40 transition-all duration-500 bg-gradient-to-br from-black to-black overflow-hidden"
            >
              {/* Large number background */}
              <span className="absolute -right-2 -top-4 text-[80px] sm:text-[100px] font-display text-white/50/5 select-none pointer-events-none group-hover:text-burgundy/10 transition-colors duration-500">
                {value.icon}
              </span>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4 text-burgundy">{value.title}</h3>
                <p className="text-white/50 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{value.principle}</p>
                <div className="flex items-start gap-2">
                  <span className="text-burgundy mt-0.5">→</span>
                  <p className="text-xs sm:text-sm text-white/50/70 italic">{value.outcome}</p>
                </div>
              </div>
              
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-burgundy to-burgundy/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
