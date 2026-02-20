"use client";

import { motion } from "framer-motion";
import { Container, Section, Grid12 } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const flagshipProjects = [
  {
    id: "little-bay",
    title: "Little Bay Launch",
    client: "Little Bay Restaurant",
    category: "Brand Strategy",
    image: "/images/work/project-strategy.jpg",
  },
  {
    id: "zenergy-rebrand",
    title: "Brand Evolution",
    client: "Zenergy Wellness",
    category: "Brand Identity",
    image: "/images/work/project-brand.jpg",
  },
  {
    id: "urban-theka-digital",
    title: "Digital Platform",
    client: "Urban Theka",
    category: "Web Experience",
    image: "/images/work/project-web.jpg",
  },
];

export function WorkHero() {
  return (
    <Section spacing="spacious">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-white/50 max-w-[60ch] mx-auto">
            Strategic brand systems that drive measurable business outcomes
          </p>
        </motion.div>

        {/* Flagship Grid */}
        <Grid12 gap="loose">
          {/* Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 aspect-[16/9] bg-white/20/10 relative group overflow-hidden"
          >
            <Link href={`/case-studies/${flagshipProjects[0]?.id}`} className="block h-full">
              <Image
                src={flagshipProjects[0]?.image || ""}
                alt={flagshipProjects[0]?.title || ""}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <p className="text-xs uppercase tracking-widest text-burgundy mb-2">
                  {flagshipProjects[0]?.category}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-2">
                  {flagshipProjects[0]?.title}
                </h2>
                <p className="text-white/50">{flagshipProjects[0]?.client}</p>
              </div>
            </Link>
          </motion.div>

          {/* Stacked Duo */}
          <div className="col-span-12 lg:col-span-5 space-y-6 lg:space-y-8">
            {flagshipProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="aspect-[16/9] bg-white/20/10 relative group overflow-hidden"
              >
                <Link href={`/case-studies/${project.id}`} className="block h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-widest text-burgundy mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-medium mb-1">{project.title}</h3>
                    <p className="text-white/50 text-sm">{project.client}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Grid12>
      </Container>
    </Section>
  );
}
