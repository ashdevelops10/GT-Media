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
    gradient: "from-burgundy/20 to-transparent",
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
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <p className="font-editorial italic text-burgundy text-lg md:text-2xl mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase text-black tracking-tight leading-[0.9]">
            FOUR VERTICALS. <span className="text-burgundy">ONE PARTNER.</span>
          </h2>
          <p className="text-sm md:text-base text-black/50 mt-4 max-w-[55ch] mx-auto leading-relaxed">
            Dedicated practice areas engineered for music, celebrity, brand performance, and political mandates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
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
                  <div className="relative border border-black/8 p-6 md:p-7 h-full flex flex-col rounded-2xl hover:border-burgundy/40 transition-all duration-300 bg-white/40 group-hover:bg-white/60 group-hover:-translate-y-1 group-hover:shadow-lg overflow-hidden">

                    {/* Icon */}
                    <div className="relative z-10 w-10 h-10 mb-5 text-black/30 group-hover:text-burgundy transition-colors duration-300">
                      <IconComponent className="w-full h-full" />
                    </div>

                    <h3 className="relative z-10 font-display text-xl lg:text-2xl uppercase mb-2.5 text-black group-hover:text-burgundy transition-colors duration-300 leading-none">
                      {vertical.title}
                    </h3>

                    <p className="relative z-10 text-sm text-black/50 mb-5 leading-relaxed line-clamp-3">
                      {vertical.description}
                    </p>

                    <ul className="relative z-10 space-y-1.5 flex-1 border-t border-black/8 pt-4 mb-5">
                      {vertical.services.map((service) => (
                        <li key={service} className="text-black/60 text-xs uppercase tracking-wide flex items-start">
                          <span className="mr-2 text-burgundy/70">»</span>
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="relative z-10 mt-auto flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                      </span>
                      <div className="w-7 h-7 rounded-full border border-black/15 group-hover:border-burgundy group-hover:bg-burgundy/10 flex items-center justify-center transition-all duration-300">
                        <span className="text-black/50 group-hover:text-burgundy text-sm">↗</span>
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
