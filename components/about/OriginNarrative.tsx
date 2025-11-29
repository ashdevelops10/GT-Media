"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";

const timeline = [
  { year: "2018", milestone: "Founded with a mission to reject commoditized design" },
  { year: "2020", milestone: "Launched strategic practice serving Fortune 500 clients" },
  { year: "2024", milestone: "Recognized for innovation in performance-first motion design" },
];

export function OriginNarrative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Container size="narrow">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-xl text-soft-gray leading-relaxed mb-8">
            GT Media was born from a conviction: that the digital design industry had strayed too
            far toward efficiency over excellence. We saw brands investing in "fast and cheap"
            solutions that diluted their positioning rather than amplifying it.
          </p>

          <p className="text-xl text-soft-gray leading-relaxed mb-12">
            Our founding principle was simple—treat every project as if reputation depends on it.
            Because it does. We reject the assembly-line approach. We build custom systems, not
            templates. We prioritize strategic depth over deliverable volume.
          </p>

          {/* Timeline */}
          <div className="space-y-8 border-l-2 border-accent-gold/30 pl-8 my-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <p className="text-accent-gold font-medium mb-1">{item.year}</p>
                <p className="text-paper">{item.milestone}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xl text-soft-gray leading-relaxed">
            Today, we serve clients who understand that exceptional design is an investment in
            brand equity, not a line item. Our work spans strategy, visual identity, web
            experiences, and content—always integrated, always intentional.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
