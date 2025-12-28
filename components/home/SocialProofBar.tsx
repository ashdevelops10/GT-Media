"use client";

import { Container } from "@/components/layout";
import { motion } from "framer-motion";

export function SocialProofBar() {
  return (
    <section className="border-t border-b border-silver/15 py-4 sm:py-6 bg-onyx/80 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8"
        >
          {/* Trust badges */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-mahogany" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs sm:text-sm text-silver">4.9/5 Client Rating</span>
            </div>
            <span className="hidden sm:block text-silver/30">|</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-mahogany" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 2L2 7V17L10 22L18 17V7L10 2Z" strokeLinejoin="round"/>
                <path d="M6 10L9 13L14 8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs sm:text-sm text-silver">Verified Agency</span>
            </div>
          </div>
          
          {/* Divider for mobile */}
          <span className="hidden sm:block text-silver/30">|</span>
          
          {/* Trust statement */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-silver text-center px-4 sm:px-0">
            Trusted by brands, artists &amp; campaign teams
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
