"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing="default" background="dark">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="relative text-center py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-mahogany/60 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-mahogany/60 to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-mahogany/60 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-mahogany/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-mahogany/60 to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-mahogany/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24">
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-mahogany/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-mahogany/60 to-transparent" />
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" className="text-white"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-full border-2 border-mahogany/40 flex items-center justify-center"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-mahogany" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display mb-4 sm:mb-6 max-w-[24ch] mx-auto leading-tight">
              You don&apos;t need another agency. You need a performance partner.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-silver mb-8 sm:mb-10 max-w-[60ch] mx-auto leading-relaxed">
              We hold the creative, the narrative, and the numbers at the same level—protecting your upside with the urgency of a partner whose own name is on the line.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-mahogany text-onyx text-sm sm:text-base md:text-lg font-medium hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 group"
              >
                Book a Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20GT%20Media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-silver/50 text-white text-sm sm:text-base md:text-lg font-medium hover:border-mahogany hover:text-mahogany transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
