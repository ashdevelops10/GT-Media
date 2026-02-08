"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";
import { MusicIcon, CelebrityIcon, PerformanceIcon, PoliticalIcon } from "@/components/ui/Icons";
import { DesignVisual } from "@/components/layout/DesignVisual";

const verticals = [
  {
    title: "Music Industry Solutions",
    description:
      "We design release strategies, visuals, and campaigns that turn songs, videos, and drops into scalable IP. From artist positioning to label systems, we operate where culture and performance meet.",
    services: ["Artist Management", "Music Label Management", "Music Distribution", "Music Promotions"],
    link: "/services/music",
    Icon: MusicIcon,
    gradient: "from-mahogany/20 to-transparent",
  },
  {
    title: "Celebrity & Influencer Partnerships",
    description:
      "We architect collaborations where brand value, audience trust, and creative fit are non-negotiable. Every partnership is mapped to measurable lift, conversion, or narrative shift.",
    services: ["Celebrity Collaborations", "Influencer Marketing", "Campaign Strategy"],
    link: "/services/celebrity",
    Icon: CelebrityIcon,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Brand Performance & Scaling",
    description:
      "We treat every brand as a live performance system—tuning creative, media, and experience to unlock compounding returns. No disconnected vendors, just one accountable performance partner.",
    services: ["Digital Marketing", "Meta Ads", "Web Development", "CRO & Data Analytics"],
    link: "/services/performance",
    Icon: PerformanceIcon,
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Political Image & Campaign Management",
    description:
      "We shape leaders into clear, consistent signals in noisy environments. From narrative to last-mile execution, every move is modeled for perception, sentiment, and margin of victory.",
    services: ["Political Communications", "Narrative Building", "Content Strategy", "Digital & On-ground Campaign Execution"],
    link: "/services/political",
    Icon: PoliticalIcon,
    gradient: "from-green-500/20 to-transparent",
  },
];

export function SignatureCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="parchment" spacing="compact" className="relative overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 transform rotate-12 scale-150">
        <span className="font-display text-[25vw] text-stroke-onyx text-transparent uppercase tracking-widest whitespace-nowrap">
          EXPERTISE
        </span>
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <p className="font-script text-mahogany text-xl md:text-2xl mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl uppercase text-onyx tracking-tight">
            FOUR VERTICALS. <span className="text-mahogany">ONE PARTNER.</span>
          </h2>
          <p className="text-sm md:text-lg text-onyx/60 mt-6 max-w-[60ch] mx-auto">
            Dedicated practice areas engineered for music, celebrity, brand performance, and political mandates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {verticals.map((vertical, index) => {
            const IconComponent = vertical.Icon;
            return (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={vertical.link} className="block group h-full">
                  <div className="relative border border-onyx/10 p-6 md:p-8 h-full flex flex-col rounded-3xl hover:border-mahogany transition-all duration-500 bg-white/30 backdrop-blur-sm group-hover:-translate-y-2 overflow-hidden">

                    {/* Background Blueprint */}
                    <DesignVisual
                      type="blueprint"
                      color={index % 2 === 0 ? "garnet" : "carbon"}
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                    />

                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 mb-6 text-onyx/40 group-hover:text-mahogany transition-colors duration-300">
                      <IconComponent className="w-full h-full" />
                    </div>

                    <h3 className="relative z-10 font-display text-2xl uppercase mb-3 text-onyx group-hover:text-mahogany transition-colors duration-300 leading-none">
                      {vertical.title}
                    </h3>

                    <p className="relative z-10 text-sm text-onyx/60 mb-6 leading-relaxed">
                      {vertical.description}
                    </p>

                    <ul className="relative z-10 space-y-2 flex-1 border-t border-onyx/10 pt-4 mb-6">
                      {vertical.services.map((service) => (
                        <li key={service} className="text-onyx/70 text-xs uppercase tracking-wide flex items-start">
                          <span className="mr-2 text-mahogany">»</span>
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="relative z-10 mt-auto flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-mahogany opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                      </span>
                      <div className="w-8 h-8 rounded-full border border-onyx/20 group-hover:border-mahogany flex items-center justify-center transition-colors">
                        <span className="text-onyx group-hover:text-mahogany text-lg">↗</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
