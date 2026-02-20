"use client";

import { Container, Section } from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";

const ALSO_WORKED_WITH = [
  { name: "Bastian", src: "/logos/bastian.png",  needsLightBg: true  },
  { name: "Wildin",  src: "/logos/wildin.png",   needsLightBg: true  },
  { name: "Mobe",    src: "/logos/mobe.png",      needsLightBg: false },
];

export function BrandPartners() {
  return (
    <Section spacing="compact" className="relative z-10 bg-black overflow-hidden !py-0">
      <Container className="relative z-10">
        <div className="py-6 md:py-8 border-t border-white/5">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-burgundy/50 to-transparent" />
            <p className="font-editorial italic text-white/40 text-base md:text-lg tracking-wide">Select Collaborations</p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-burgundy/50 to-transparent" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-3xl mx-auto px-4">
            {ALSO_WORKED_WITH.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="w-32 md:w-36 h-14 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                 <div className="relative w-full h-full opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ease-out flex items-center justify-center">
                    <Image
                        src={brand.src}
                        alt={brand.name}
                        fill
                        className={`object-contain transition-all duration-300 ${
                          brand.needsLightBg
                            ? 'brightness-0 invert group-hover:filter-none'
                            : 'brightness-0 invert group-hover:filter-none'
                        }`}
                    />
                 </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
