"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing="spacious" background="dark">
      <Container size="narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 max-w-[24ch] mx-auto leading-tight">
            You don’t need another agency. You need a performance partner.
          </h2>

          <p className="text-lg text-soft-gray mb-10 max-w-[60ch] mx-auto">
            We hold the creative, the narrative, and the numbers at the same level—protecting your upside with the urgency of a partner whose own name is on the line.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-accent-gold text-onyx text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="https://wa.me/0000000000"
              className="px-10 py-4 border border-soft-gray text-paper text-lg font-medium hover:border-accent-gold transition-all duration-300"
            >
              Message on WhatsApp
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
