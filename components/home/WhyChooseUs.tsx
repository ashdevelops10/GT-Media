"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L4 8V24L16 30L28 24V8L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 12L10 15V21L16 24L22 21V15L16 12Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Hybrid Advantage",
    description: "Strategy house, creative studio, and performance team under one roof—no handoffs, no dilution, no excuses.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 8V16L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    title: "Performance-First Philosophy",
    description: "Every rupee, frame, and line of copy is tied to reach, revenue, or reputation—not vanity metrics.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="18" y="18" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 9H18M9 14V18M23 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Creative + Strategy + Execution",
    description: "Narrative, content, funnels, media, and data operated by one accountable team for end-to-end clarity.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 12L28 13L22 19L23.5 28L16 24L8.5 28L10 19L4 13L12 12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 10L18 14L22 14.5L19 17.5L19.75 22L16 20L12.25 22L13 17.5L10 14.5L14 14L16 10Z" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    title: "High-Growth Trust",
    description: "CMOs, managers, and campaign heads work with GT because we speak their language: dashboards, iteration, and accountability.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing="compact">
      <Container>
        {/* Header - Full width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-mahogany mb-3 sm:mb-4">Why GT Media</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4 sm:mb-6 px-4 sm:px-0">
            Engineered for Leaders
          </h2>
          <p className="text-base sm:text-lg text-silver leading-relaxed max-w-[60ch] mx-auto px-4 sm:px-0">
            GT Media is built for leaders who demand ROI from every creative move. We design
            systems where the idea, the craft, and the media spend are owned by the same senior team.
          </p>
        </motion.div>

        {/* Grid - Responsive layout */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative border border-silver/20 p-5 sm:p-6 md:p-8 h-full bg-onyx/30 hover:border-mahogany/40 hover:bg-onyx/60 transition-all duration-500 hover:translate-y-[-4px] overflow-hidden">
                {/* Background number */}
                <span className="absolute -right-2 -top-4 text-[80px] sm:text-[100px] font-display text-silver/5 leading-none pointer-events-none select-none">
                  0{index + 1}
                </span>
                
                {/* Icon */}
                <div className="relative z-10 text-mahogany mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="relative z-10 text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-mahogany transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-sm sm:text-base text-silver leading-relaxed">{item.description}</p>
                
                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-mahogany to-mahogany/0 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
