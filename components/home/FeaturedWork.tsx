"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const featuredProjects = [
  {
    id: "little-bay",
    title: "Little Bay Restaurant Launch",
    client: "Little Bay",
    category: "Brand Strategy",
    image: "/images/work/project-strategy.jpg",
    videoUrl: "/videos/little-bay/biki-singh-1.mp4",
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
    span: "col-span-12 md:col-span-8",
    tall: false,
  },
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${project.span} ${project.tall ? "aspect-[3/4]" : "aspect-[16/9]"} relative group overflow-hidden bg-carbon border border-white/[0.06] rounded-2xl hover:border-orange/40 transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="block w-full h-full relative">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.image}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
          />
        ) : (
          <div
            className="absolute inset-0 bg-carbon transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-20" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-30">
          <p className="font-accent text-orange text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.category}
          </p>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white uppercase leading-none mb-1 group-hover:text-orange transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray text-sm">{project.client}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <Section id="work" className="relative bg-black overflow-hidden" spacing="compact">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-4">
          <div>
            <p className="font-script text-orange text-lg md:text-2xl mb-2">Selected Cases</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none">
              WORK THAT <span className="text-orange">DEFINES US</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 rounded-full text-xs font-bold uppercase tracking-wider hover:border-orange/40 hover:text-orange transition-all duration-300"
          >
            <span>View All Work</span>
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
