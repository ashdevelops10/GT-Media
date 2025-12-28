"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section, SplitBlock } from "@/components/layout";
import { useRef } from "react";
import Image from "next/image";

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
              className="aspect-[3/4] bg-silver/10 relative overflow-hidden"
            >
              <Image
                src="/images/team/founder.jpg"
                alt="GT Media Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
          }
          right={
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-widest text-mahogany mb-4">
                Founder & Creative Director
              </p>
              <h3 className="text-3xl md:text-4xl font-display mb-6">Gaurav Taneja</h3>
              <p className="text-lg text-silver mb-6 leading-relaxed">
                With over a decade of experience spanning brand strategy, creative direction, and 
                performance marketing, Gaurav founded GT Media to bridge the gap between creative 
                excellence and measurable business outcomes.
              </p>
              <p className="text-silver mb-8 leading-relaxed">
                His cross-industry expertise spans music labels, celebrity management, premium F&B brands, 
                and political campaigns—bringing a unique perspective that moves seamlessly between 
                boardrooms and creative studios.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-silver/20">
                <div>
                  <p className="text-3xl font-display text-mahogany mb-1">10+</p>
                  <p className="text-sm text-silver">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-mahogany mb-1">50+</p>
                  <p className="text-sm text-silver">Clients Served</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-mahogany mb-1">4</p>
                  <p className="text-sm text-silver">Industry Verticals</p>
                </div>
              </div>
            </motion.div>
          }
        />
      </Container>
    </Section>
  );
}
