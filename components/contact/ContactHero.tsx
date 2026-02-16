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
            Let's Create Something Exceptional
          </h1>
          <p className="text-xl text-white/50 max-w-[60ch] mx-auto mb-12">
            Great partnerships start with transparent conversations. Share your vision, and we'll
            determine if we're the right fit to bring it to life.
          </p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div className="border border-white/20/20 p-6">
              <p className="text-xs uppercase tracking-widest text-burgundy mb-2">Email</p>
              <a href="mailto:hello@gt-media.com" className="text-white hover:text-burgundy transition-colors">
                hello@gt-media.com
              </a>
            </div>
            <div className="border border-white/20/20 p-6">
              <p className="text-xs uppercase tracking-widest text-burgundy mb-2">WhatsApp</p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-burgundy transition-colors">
                +91 99999 99999
              </a>
            </div>
            <div className="border border-white/20/20 p-6">
              <p className="text-xs uppercase tracking-widest text-burgundy mb-2">Location</p>
              <p className="text-white">New Delhi, India</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
