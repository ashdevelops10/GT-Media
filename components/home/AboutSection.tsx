"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark">
      <Container size="narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-soft-gray leading-relaxed">
            GT Media Studio was built for operators who can’t afford “nice work” that doesn’t move numbers. Our team sits at the intersection of brand strategy, content, performance marketing, and political communications—giving you a partner who understands P&L, fanbases, and constituencies in equal measure. We are as comfortable in boardrooms and war-rooms as we are on set or in the edit bay.
          </p>
          <p className="text-lg text-soft-gray leading-relaxed">
            Our cross-industry advantage is simple: we see what works in high-pressure launches across music, celebrity, brands, and politics, and we move those learnings across categories. Execution is senior-led, data-visible, and obsessively detailed. GT Media’s founder operates as a strategist, operator, and partner—challenging assumptions, stress-testing ideas, and protecting your upside with the urgency of someone whose own name is on the line.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
