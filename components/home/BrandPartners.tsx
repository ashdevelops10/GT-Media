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
    <Section spacing="compact" showGridLines className="relative z-10 bg-black overflow-hidden">
      {/* Giant background text - Split Rows */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0 select-none overflow-hidden">
        <span className="font-display text-[22vw] text-cream/[0.02] uppercase tracking-[0.1em] leading-none translate-y-1/4">
          BRAND
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none z-0 select-none overflow-hidden">
        <span className="font-display text-[22vw] text-cream/[0.02] uppercase tracking-[0.1em] leading-none -translate-y-1/4">
          PARTNER
        </span>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-orange text-2xl md:text-3xl mb-4"
          >
            Digital Marketing Brands
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.9]"
          >
            TRUSTED BY THE <span className="text-orange">BEST</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {CORE_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center h-48 bg-black hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="relative w-full h-full p-8 flex flex-col items-center justify-center space-y-4">
                <div className={`relative w-full h-16 transition-all duration-700 group-hover:scale-110 flex items-center justify-center ${partner.needsLightBg ? "bg-white/90 p-3 rounded-lg group-hover:bg-white" : ""
                  }`}>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>

                {/* Minimal label */}
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-light opacity-0 group-hover:opacity-100 group-hover:text-orange transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-center">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Tier */}
        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-12">
            <div className="h-px w-20 bg-white/10 hidden md:block" />
            <p className="font-script text-orange/60 text-xl">Also Collaborated With</p>
            <div className="h-px w-20 bg-white/10 hidden md:block" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-700">
            {ALSO_WORKED_WITH.map((brand) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative w-32 md:w-40 h-16 md:h-20 bg-white p-3 rounded-xl transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0 overflow-hidden shadow-lg"
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
