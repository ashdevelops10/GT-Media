"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "Luxe Commerce Platform",
    client: "Premium Retail Brand",
    category: "E-Commerce",
    image: "/placeholder-project-1.jpg",
    span: "col-span-12 md:col-span-5",
    tall: true,
  },
  {
    id: 2,
    title: "Brand System Redesign",
    client: "Global Technology Company",
    category: "Brand Identity",
    image: "/placeholder-project-2.jpg",
    span: "col-span-12 md:col-span-7",
    tall: false,
  },
  {
    id: 3,
    title: "Editorial Platform",
    client: "Media & Publishing",
    category: "Web Experience",
    image: "/placeholder-project-3.jpg",
    span: "col-span-12 md:col-span-4",
    tall: false,
  },
  {
    id: 4,
    title: "Motion Campaign",
    client: "Luxury Automotive",
    category: "Visual Content",
    image: "/placeholder-project-4.jpg",
    span: "col-span-12 md:col-span-4",
    tall: false,
  },
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${project.span} ${project.tall ? "aspect-[3/4]" : "aspect-[16/9]"} relative group overflow-hidden bg-soft-gray/10`}
    >
      <Link href={`/work/${project.id}`} className="block h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs uppercase tracking-widest text-accent-gold mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-medium mb-1">{project.title}</h3>
          <p className="text-soft-gray text-sm">{project.client}</p>
        </div>

        {/* Hover Indicator */}
        <div className="absolute top-6 right-6 w-12 h-12 border border-paper rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section spacing="spacious">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-soft-gray max-w-[60ch]">
            Curated case studies demonstrating strategic depth and aesthetic excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* CTA Tile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-4 aspect-[16/9] bg-accent-gold text-onyx flex items-center justify-center p-8"
          >
            <Link href="/work" className="text-center group">
              <p className="text-2xl font-medium mb-4 group-hover:translate-y-[-4px] transition-transform duration-300">
                View All Projects
              </p>
              <div className="w-12 h-12 mx-auto border-2 border-onyx rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
