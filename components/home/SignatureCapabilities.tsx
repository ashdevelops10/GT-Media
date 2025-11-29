"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef } from "react";
import Link from "next/link";

const verticals = [
  {
    title: "Music Industry Solutions",
    description:
      "We design release strategies, visuals, and campaigns that turn songs, videos, and drops into scalable IP. From artist positioning to label systems, we operate where culture and performance meet.",
    services: ["Artist Management", "Music Label Management", "Music Distribution", "Music Promotions"],
    link: "/services/music",
  },
  {
    title: "Celebrity & Influencer Partnerships",
    description:
      "We architect collaborations where brand value, audience trust, and creative fit are non-negotiable. Every partnership is mapped to measurable lift, conversion, or narrative shift.",
    services: ["Celebrity Collaborations", "Influencer Marketing", "Campaign Strategy"],
    link: "/services/celebrity",
  },
  {
    title: "Brand Performance & Scaling",
    description:
      "We treat every brand as a live performance system—tuning creative, media, and experience to unlock compounding returns. No disconnected vendors, just one accountable performance partner.",
    services: ["Digital Marketing", "Meta Ads", "Web Development", "CRO & Data Analytics"],
    link: "/services/performance",
  },
  {
    title: "Political Image & Campaign Management",
    description:
      "We shape leaders into clear, consistent signals in noisy environments. From narrative to last-mile execution, every move is modeled for perception, sentiment, and margin of victory.",
    services: ["Political Communications", "Narrative Building", "Content Strategy", "Digital & On-ground Campaign Execution"],
    link: "/services/political",
  },
];

export function SignatureCapabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section background="dark">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Four Verticals. One Partner.
          </h2>
          <p className="text-lg text-soft-gray max-w-[60ch] mx-auto">
            Dedicated practice areas engineered for music, celebrity, brand performance, and political mandates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={vertical.link} className="block group h-full">
                <div className="border border-soft-gray/20 p-8 h-full flex flex-col hover:border-accent-gold/40 transition-all duration-500 hover:translate-y-[-4px]">
                  {/* Icon Placeholder */}
                  <div className="w-12 h-12 mb-6 border border-accent-gold/30 rounded-full flex items-center justify-center group-hover:border-accent-gold transition-colors duration-300">
                    <div className="w-2 h-2 bg-accent-gold rounded-full" />
                  </div>

                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent-gold transition-colors duration-300">
                    {vertical.title}
                  </h3>

                  <p className="text-sm text-soft-gray/80 mb-6 leading-relaxed">
                    {vertical.description}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {vertical.services.map((service) => (
                      <li key={service} className="text-soft-gray text-sm flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-accent-gold rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-sm font-medium text-accent-gold group-hover:tracking-[0.2em] transition-all duration-300 uppercase">
                    Explore Vertical →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
