"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section, SplitBlock } from "@/components/layout";
import { useRef } from "react";

export function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <Container size="narrow">
        <SplitBlock
          ratio="40-60"
          left={
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] bg-soft-gray/10 relative overflow-hidden"
            >
              {/* Portrait placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-soft-gray/30">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </motion.div>
          }
          right={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-widest text-accent-gold mb-4">
                Creative Director
              </p>
              <h3 className="text-3xl md:text-4xl font-display mb-6">Leadership Profile</h3>
              <p className="text-lg text-soft-gray mb-6 leading-relaxed">
                With 15+ years spanning brand strategy, interaction design, and technical
                implementation, our leadership brings both creative vision and engineering rigor
                to every engagement.
              </p>
              <p className="text-soft-gray mb-8 leading-relaxed">
                Previously: Art Director at Pentagram, Lead Designer at IDEO, Senior Engineer at
                Google. Published in Communication Arts, featured speaker at Awwwards Conference.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-soft-gray/20">
                <div>
                  <p className="text-3xl font-display text-accent-gold mb-1">15+</p>
                  <p className="text-sm text-soft-gray">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-accent-gold mb-1">8</p>
                  <p className="text-sm text-soft-gray">Core Disciplines</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-accent-gold mb-1">Global</p>
                  <p className="text-sm text-soft-gray">Client Reach</p>
                </div>
              </div>
            </motion.div>
          }
        />
      </Container>
    </Section>
  );
}
