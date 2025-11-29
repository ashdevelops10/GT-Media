"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";

export function ContactHero() {
  return (
    <Section spacing="spacious">
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8">
            Let's Begin With Clarity
          </h1>
          <p className="text-xl text-soft-gray max-w-[60ch] mx-auto">
            Great partnerships start with transparent conversations. Share your vision, and we'll
            determine if we're the right fit to bring it to life.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
