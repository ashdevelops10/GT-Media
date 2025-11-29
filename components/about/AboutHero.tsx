"use client";

import { motion } from "framer-motion";
import { Container, Section, SplitBlock } from "@/components/layout";

export function AboutHero() {
  return (
    <Section spacing="spacious">
      <Container size="narrow">
        <SplitBlock
          ratio="60-40"
          left={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight">
                We Believe Design Is Strategic Intelligence
              </h1>
            </motion.div>
          }
          right={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <p className="text-xl text-accent-gold italic font-serif">
                "Every pixel, every motion curve, every typographic choice is a strategic
                decision—never decoration."
              </p>
            </motion.div>
          }
        />
      </Container>
    </Section>
  );
}
