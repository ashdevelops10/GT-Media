"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const featuredProjects = [
  {
    id: "little-bay",
    title: "Little Bay Restaurant Launch",
    client: "Little Bay",
    category: "Brand Strategy",
    image: "/images/work/project-strategy.jpg",
    span: "col-span-12 md:col-span-5",
    tall: true,
  },
  {
    id: "zenergy-rebrand",
    title: "Zenergy Brand Evolution",
    client: "Zenergy",
    category: "Brand Identity",
    image: "/images/work/project-brand.jpg",
    span: "col-span-12 md:col-span-7",
    tall: false,
  },
  {
    id: "urban-theka-digital",
    title: "Digital Transformation",
    client: "Urban Theka",
    category: "Web Experience",
    image: "/images/work/project-web.jpg",
    span: "col-span-12 md:col-span-4",
    tall: false,
  },
  {
    id: "artist-campaign",
    title: "Artist Launch Campaign",
    client: "Music Division",
    category: "Visual Content",
    image: "/images/work/project-content.jpg",
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
      className={`${project.span} ${project.tall ? "aspect-[3/4]" : "aspect-[16/9]"} relative group overflow-hidden bg-silver/10`}
    >
      <Link href={`/case-studies/${project.id}`} className="block h-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-xs uppercase tracking-widest text-mahogany mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-medium mb-1">{project.title}</h3>
          <p className="text-silver text-sm">{project.client}</p>
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
    <Section spacing="default">
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
          <p className="text-lg text-silver max-w-[60ch]">
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
            className="col-span-12 md:col-span-4 aspect-[16/9] bg-mahogany text-onyx flex items-center justify-center p-8"
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
