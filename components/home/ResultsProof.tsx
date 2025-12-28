"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const results = [
  {
    metric: "3.2×",
    label: "ROAS",
    description: "Premium apparel brand across Meta and email within 90 days.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 22L12 18.5L6 22L7 14.5L2 9.5L9 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    metric: "1M+",
    label: "Organic Reach",
    description: "Artist launch with sustained playlisting and repeat streams.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    metric: "11%",
    label: "Victory Margin",
    description: "Political campaign won through disciplined narrative and field execution.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15L9 9L13 13L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6H20V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    metric: "42%",
    label: "Conversion Lift",
    description: "D2C brand after a full-funnel creative and CRO overhaul.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 14L11 10L15 14L21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    metric: "7-Figure",
    label: "Launch Revenue",
    description: "Creator-led drop by aligning influencer, paid, and owned channels.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M17 5H9.5C8.57 5 7.68 5.37 7.03 6.03C6.37 6.68 6 7.57 6 8.5C6 9.43 6.37 10.32 7.03 10.97C7.68 11.63 8.57 12 9.5 12H14.5C15.43 12 16.32 12.37 16.97 13.03C17.63 13.68 18 14.57 18 15.5C18 16.43 17.63 17.32 16.97 17.97C16.32 18.63 15.43 19 14.5 19H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    metric: "30%",
    label: "Wastage Reduction",
    description: "Legacy brand by consolidating performance operations.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function ResultsProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark" spacing="compact">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-mahogany mb-3 sm:mb-4">Proof of Record</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4 px-4 sm:px-0">Results That Speak</h2>
          <p className="text-base sm:text-lg text-silver max-w-[60ch] mx-auto px-4 sm:px-0">
            Select outcomes from recent mandates across music, celebrity, brand, and political ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative border border-silver/15 p-5 sm:p-6 md:p-8 bg-onyx/60 hover:border-mahogany/30 hover:bg-onyx/80 transition-all duration-500 overflow-hidden h-full">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-mahogany/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 text-mahogany/60 mb-4 group-hover:text-mahogany transition-colors duration-300">
                  {result.icon}
                </div>
                
                {/* Metric */}
                <div className="relative z-10 mb-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-display text-white group-hover:text-mahogany transition-colors duration-300">
                    {result.metric}
                  </span>
                  <span className="block text-xs sm:text-sm uppercase tracking-wider text-mahogany/80 mt-1">
                    {result.label}
                  </span>
                </div>
                
                {/* Description */}
                <p className="relative z-10 text-sm sm:text-base text-silver leading-relaxed">{result.description}</p>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-mahogany/40 to-transparent" />
                  <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-mahogany/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
