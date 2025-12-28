"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";
import { MusicIcon, CelebrityIcon, PerformanceIcon, PoliticalIcon } from "@/components/ui/Icons";

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
    <Section background="dark" spacing="compact">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-mahogany mb-3 sm:mb-4">Our Verticals</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Four Verticals. One Partner.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-silver max-w-[60ch] mx-auto">
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
                  <div className="relative border border-silver/20 p-5 sm:p-6 md:p-8 h-full flex flex-col hover:border-mahogany/40 transition-all duration-500 hover:translate-y-[-4px] overflow-hidden bg-onyx/50 backdrop-blur-sm">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 text-mahogany/70 group-hover:text-mahogany transition-colors duration-300">
                      <IconComponent className="w-full h-full" />
                    </div>

                    <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 group-hover:text-mahogany transition-colors duration-300 leading-tight">
                      {vertical.title}
                    </h3>

                    <p className="relative z-10 text-xs sm:text-sm text-silver/80 mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {vertical.description}
                    </p>

                    <ul className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-3 flex-1">
                      {vertical.services.map((service) => (
                        <li key={service} className="text-silver text-xs sm:text-sm flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-mahogany rounded-full flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm font-medium text-mahogany group-hover:tracking-[0.15em] transition-all duration-300 uppercase flex items-center gap-2">
                      Explore Vertical 
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
