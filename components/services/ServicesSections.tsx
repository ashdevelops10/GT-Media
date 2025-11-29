"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section, SplitBlock } from "@/components/layout";
import { useRef } from "react";

const services = [
  {
    id: "strategy",
    title: "Strategy",
    tagline: "Foundation for differentiation",
    deliverables: [
      "Brand positioning & messaging architecture",
      "Competitive analysis & market research",
      "User persona development & journey mapping",
      "Content strategy & editorial planning",
    ],
    process: "Discovery → Research → Synthesis → Framework",
    outcomes: "Clear market position, aligned stakeholders, strategic roadmap",
  },
  {
    id: "brand",
    title: "Brand Identity",
    tagline: "Visual systems that scale",
    deliverables: [
      "Logo design & mark exploration",
      "Typography system & hierarchy",
      "Color palette & application guidelines",
      "Brand guidelines & asset library",
    ],
    process: "Audit → Concept → Refinement → Documentation",
    outcomes: "Cohesive visual language, brand recognition, implementation confidence",
  },
  {
    id: "web",
    title: "Web Experience",
    tagline: "Performance meets aesthetics",
    deliverables: [
      "UX architecture & wireframing",
      "UI design & component systems",
      "Motion design & micro-interactions",
      "Front-end development & optimization",
    ],
    process: "Prototype → Design → Build → Optimize",
    outcomes: "High-converting interfaces, 90+ Lighthouse scores, accessible experiences",
  },
  {
    id: "content",
    title: "Visual Content",
    tagline: "Narrative-driven production",
    deliverables: [
      "Art direction & photography",
      "Motion graphics & animation",
      "Video production & editing",
      "Campaign asset creation",
    ],
    process: "Concept → Production → Post → Delivery",
    outcomes: "Distinctive visual language, campaign consistency, audience engagement",
  },
];

function ServiceModule({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing={index % 2 === 0 ? "default" : "compact"} background={index % 2 === 0 ? "default" : "dark"}>
      <Container>
        <motion.div
          ref={ref}
          id={service.id}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SplitBlock
            ratio="60-40"
            reverse={index % 2 !== 0}
            left={
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xs uppercase tracking-widest text-accent-gold mb-4"
                >
                  0{index + 1}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-display mb-4"
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-soft-gray mb-8"
                >
                  {service.tagline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="aspect-[16/9] bg-soft-gray/10 mb-8"
                >
                  {/* Visual placeholder */}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-sm text-soft-gray/70 mb-2">PROCESS</p>
                  <p className="text-soft-gray">{service.process}</p>
                </motion.div>
              </div>
            }
            right={
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <div className="mb-8">
                  <p className="text-sm text-soft-gray/70 mb-4">DELIVERABLES</p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-soft-gray flex items-start">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-accent-gold rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-soft-gray/20 pt-6">
                  <p className="text-sm text-soft-gray/70 mb-2">OUTCOMES</p>
                  <p className="text-soft-gray">{service.outcomes}</p>
                </div>
              </motion.div>
            }
          />
        </motion.div>
      </Container>
    </Section>
  );
}

export function ServicesSections() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceModule key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
