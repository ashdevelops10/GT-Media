"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const results = [
  "3.2× ROAS for a premium apparel brand across Meta and email within 90 days.",
  "1M+ organic reach for an artist launch with sustained playlisting and repeat streams.",
  "Political campaign won by an 11% margin through disciplined narrative and field execution.",
  "42% lift in conversion rate for a D2C brand after a full-funnel creative and CRO overhaul.",
  "7-figure launch revenue for a creator-led drop by aligning influencer, paid, and owned channels.",
  "30% reduction in media wastage for a legacy brand by consolidating performance operations.",
];

export function ResultsProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">Proof of Record</h2>
          <p className="text-lg text-soft-gray max-w-[60ch] mx-auto">
            Select outcomes from recent mandates across music, celebrity, brand, and political ecosystems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-soft-gray/15 p-6 md:p-8 bg-onyx/40"
            >
              <p className="text-lg text-paper leading-relaxed">{result}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
