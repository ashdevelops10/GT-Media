"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";

export function ServicesHero() {
  return (
    <Section spacing="spacious">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-0"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-mahogany mb-4 sm:mb-6">
            Full-Service Capabilities
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display mb-6 sm:mb-8 leading-tight max-w-4xl mx-auto">
            Strategy, Creative &amp; Performance Under One Roof
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-silver max-w-[60ch] mx-auto leading-relaxed">
            No handoffs, no dilution, no excuses. Every rupee, frame, and line of copy is tied to 
            reach, revenue, or reputation—not vanity metrics.
          </p>

          {/* Proof Metrics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 pt-10 sm:pt-12 md:pt-16 border-t border-silver/20">
            <div className="group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full border border-mahogany/30 flex items-center justify-center group-hover:bg-mahogany/10 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-mahogany" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14L9 9L13 13L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 6H20V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 sm:mb-2">3.2×</p>
              <p className="text-xs sm:text-sm text-silver">Avg ROAS Achieved</p>
            </div>
            <div className="group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full border border-mahogany/30 flex items-center justify-center group-hover:bg-mahogany/10 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-mahogany" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 sm:mb-2">50+</p>
              <p className="text-xs sm:text-sm text-silver">Clients Served</p>
            </div>
            <div className="group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full border border-mahogany/30 flex items-center justify-center group-hover:bg-mahogany/10 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-mahogany" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display text-mahogany mb-1 sm:mb-2">4</p>
              <p className="text-xs sm:text-sm text-silver">Industry Verticals</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
