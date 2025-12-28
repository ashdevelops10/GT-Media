"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark" spacing="compact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 px-4 sm:px-0"
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-mahogany mb-3 sm:mb-4">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 lg:mb-6">
              Built for operators who can&apos;t afford &quot;nice work&quot; that doesn&apos;t move numbers.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center text-mahogany hover:text-white transition-colors duration-300 group text-sm sm:text-base"
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-4 sm:space-y-6 px-4 sm:px-0"
          >
            <p className="text-sm sm:text-base md:text-lg text-silver leading-relaxed">
              Our team sits at the intersection of brand strategy, content, performance marketing, and political communications—giving you a partner who understands P&amp;L, fanbases, and constituencies in equal measure. We are as comfortable in boardrooms and war-rooms as we are on set or in the edit bay.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-silver leading-relaxed">
              Our cross-industry advantage is simple: we see what works in high-pressure launches across music, celebrity, brands, and politics, and we move those learnings across categories. Execution is senior-led, data-visible, and obsessively detailed.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-silver/20">
              <div className="group">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 group-hover:scale-105 transition-transform duration-300">5+</p>
                <p className="text-xs sm:text-sm text-silver">Years Experience</p>
              </div>
              <div className="group">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 group-hover:scale-105 transition-transform duration-300">50+</p>
                <p className="text-xs sm:text-sm text-silver">Projects Delivered</p>
              </div>
              <div className="group">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 group-hover:scale-105 transition-transform duration-300">100M+</p>
                <p className="text-xs sm:text-sm text-silver">Reach Generated</p>
              </div>
              <div className="group">
                <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 group-hover:scale-105 transition-transform duration-300">4</p>
                <p className="text-xs sm:text-sm text-silver">Industry Verticals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
