"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";

export function ServicesHero() {
  return (
    <Section spacing="spacious">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-accent-gold mb-6">
            Integrated Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
            We Engineer Strategic Brand Systems
          </h1>
          <p className="text-xl text-soft-gray max-w-[60ch] mx-auto leading-relaxed">
            From positioning strategy to final deployment—cohesive solutions designed to amplify
            your competitive advantage and drive measurable outcomes.
          </p>

          {/* Proof Metrics */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-soft-gray/20">
            <div>
              <p className="text-4xl font-display text-accent-gold mb-2">93%</p>
              <p className="text-sm text-soft-gray">Avg Client Retention</p>
            </div>
            <div>
              <p className="text-4xl font-display text-accent-gold mb-2">2.4x</p>
              <p className="text-sm text-soft-gray">Avg Conversion Lift</p>
            </div>
            <div>
              <p className="text-4xl font-display text-accent-gold mb-2">&lt;3s</p>
              <p className="text-sm text-soft-gray">Avg Page Load Time</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
