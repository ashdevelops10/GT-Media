"use client";

import { motion } from "framer-motion";
import { Container, Section, Grid12 } from "@/components/layout";

const flagshipProjects = [
  {
    id: 1,
    title: "Premium Retail Platform",
    client: "Luxury E-Commerce Brand",
    category: "Web Experience",
    image: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Global Brand Redesign",
    client: "Technology Company",
    category: "Brand Identity",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Editorial Platform",
    client: "Media Publisher",
    category: "Strategy + Web",
    image: "/placeholder-3.jpg",
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6">
            Selected Work
          </h1>
          <p className="text-xl text-soft-gray max-w-[60ch] mx-auto">
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
            className="col-span-12 lg:col-span-7 aspect-[16/9] bg-soft-gray/10 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="text-xs uppercase tracking-widest text-accent-gold mb-2">
                {flagshipProjects[0]?.category}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-2">
                {flagshipProjects[0]?.title}
              </h2>
              <p className="text-soft-gray">{flagshipProjects[0]?.client}</p>
            </div>
          </motion.div>

          {/* Stacked Duo */}
          <div className="col-span-12 lg:col-span-5 space-y-6 lg:space-y-8">
            {flagshipProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="aspect-[16/9] bg-soft-gray/10 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-widest text-accent-gold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-medium mb-1">{project.title}</h3>
                  <p className="text-soft-gray text-sm">{project.client}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Grid12>
      </Container>
    </Section>
  );
}
