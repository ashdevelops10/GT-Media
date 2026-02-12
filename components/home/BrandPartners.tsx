"use client";

import { Container, Section } from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";

const CORE_PARTNERS = [
  { name: "Mach Global", src: "/logos/mach global.jpg", needsLightBg: true },
  { name: "Event ResQ", src: "/logos/event resq.jpg", needsLightBg: true },
  { name: "Saahayak", src: "/logos/sahayak.webp", needsLightBg: true },
  { name: "Wildhood", src: "/logos/wildhood.jpg" },
  { name: "Studio Neoteric", src: "/logos/studeo-nuteric-logo.webp", needsLightBg: true },
  { name: "Rabab Music Studio", src: "/logos/rabab music.webp" },
  { name: "Uttam", src: "/logos/uttam.png" },
  { name: "Dharmayu", src: "/logos/dharmayu.png" },
  { name: "Urban Theka", src: "/logos/urban_theka.png" },
];

const ALSO_WORKED_WITH = [
  { name: "Bastian", src: "/logos/bastian.png", needsLightBg: true },
  { name: "Wildin", src: "/logos/wildin.png", needsLightBg: true },
  { name: "Zenergy", src: "/logos/zenergy.svg" },
  { name: "Little Bay", src: "/logos/little_bay.png", needsLightBg: true },
];

export function BrandPartners() {
  return (
    <Section spacing="compact" className="relative z-10 bg-black overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-orange text-xl md:text-2xl mb-3"
          >
            Digital Marketing Brands
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-[0.9]"
          >
            TRUSTED BY THE <span className="text-orange">BEST</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/[0.04] border border-white/[0.06] rounded-2xl overflow-hidden">
          {CORE_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group relative flex flex-col items-center justify-center h-36 sm:h-40 bg-black hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div className="relative w-full h-full p-6 flex flex-col items-center justify-center gap-3">
                <div className={`relative w-full h-12 transition-all duration-500 group-hover:scale-105 flex items-center justify-center ${partner.needsLightBg ? "bg-white/90 p-2.5 rounded-lg group-hover:bg-white" : ""}`}>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 group-hover:text-orange/80 transition-all duration-300 text-center truncate max-w-full">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Tier */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-10">
            <div className="h-px w-12 bg-white/10 hidden md:block" />
            <p className="font-script text-orange/50 text-lg">Also Collaborated With</p>
            <div className="h-px w-12 bg-white/10 hidden md:block" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {ALSO_WORKED_WITH.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative w-28 md:w-36 h-14 md:h-16 bg-white/90 p-2.5 rounded-xl transition-all duration-500 hover:scale-105 grayscale hover:grayscale-0 overflow-hidden"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain p-2 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
