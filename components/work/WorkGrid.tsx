"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
  { id: "little-bay", title: "Restaurant Launch Campaign", client: "Little Bay", category: "Strategy", industry: "Hospitality", image: "/images/work/project-strategy.jpg" },
  { id: "zenergy-rebrand", title: "Brand Evolution", client: "Zenergy", category: "Brand", industry: "Wellness", image: "/images/work/project-brand.jpg" },
  { id: "urban-theka-digital", title: "Digital Transformation", client: "Urban Theka", category: "Web", industry: "F&B", image: "/images/work/project-web.jpg" },
  { id: "artist-campaign", title: "Artist Launch Campaign", client: "Music Division", category: "Content", industry: "Entertainment", image: "/images/work/project-content.jpg" },
  { id: "corporate-rebrand", title: "Corporate Identity System", client: "Bastian Group", category: "Brand", industry: "Corporate", image: "/images/work/project-corporate.jpg" },
  { id: "performance-marketing", title: "Performance Marketing", client: "Wildhood", category: "Strategy", industry: "Lifestyle", image: "/images/work/project-marketing.jpg" },
];

const filters = {
  industry: ["All", "Entertainment", "Hospitality", "F&B", "Wellness", "Corporate", "Lifestyle"],
  category: ["All", "Strategy", "Brand", "Web", "Content"],
};

export function WorkGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) =>
      (activeIndustry === "All" || project.industry === activeIndustry) &&
      (activeCategory === "All" || project.category === activeCategory)
  );

  return (
    <Section background="dark">
      <Container>
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-silver mb-3">Industry</p>
            <div className="flex flex-wrap gap-3">
              {filters.industry.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveIndustry(filter)}
                  className={`px-4 py-2 border transition-all duration-300 ${
                    activeIndustry === filter
                      ? "border-mahogany bg-mahogany/10 text-mahogany"
                      : "border-silver/30 text-silver hover:border-mahogany/40"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-silver mb-3">Discipline</p>
            <div className="flex flex-wrap gap-3">
              {filters.category.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveCategory(filter)}
                  className={`px-4 py-2 border transition-all duration-300 ${
                    activeCategory === filter
                      ? "border-mahogany bg-mahogany/10 text-mahogany"
                      : "border-silver/30 text-silver hover:border-mahogany/40"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {(activeIndustry !== "All" || activeCategory !== "All") && (
            <p className="mt-4 text-sm text-silver">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${project.id}`} className="block group">
                <div className="aspect-[4/3] bg-silver/10 mb-4 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 border border-paper rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-mahogany">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-medium group-hover:text-mahogany transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-silver">{project.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
