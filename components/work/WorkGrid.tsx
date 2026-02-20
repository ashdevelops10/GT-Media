"use client";

import { motion, useInView } from"framer-motion";
import { Container, Section } from"@/components/layout";
import { useRef, useState } from"react";
import Image from"next/image";
import { ProjectModal } from"./ProjectModal";

const allProjects = [
 {
 id:"luxury-real-estate",
 title:"Elite Real Estate Branding",
 client:"Saahayak",
 category:"Brand",
 industry:"Real Estate",
 image:"/images/work/project-brand.jpg",
 description:"A comprehensive 360° approach for a premium real estate solutions provider. We blended strategy, creativity, and execution to deliver a brand that stands out in a crowded market.",
 metrics: [{ label:"Lead Generation", value:"300%"}, { label:"Brand Equity", value:"High"}],
 testimonial: { quote:"GT Media transformed our digital presence into a luxury experience.", author:"CEO", role:"Saahayak"}
 },
 {
 id:"viral-marketing-kkg",
 title:"Viral Performance Strategy",
 client:"KKG",
 category:"Strategy",
 industry:"Entertainment",
 image:"/images/work/project-strategy.jpg",
 metrics: [{ label:"Instagram Growth", value:"300%"}, { label:"Engagement", value:"10x"}]
 },
 {
 id:"mash-global-launch",
 title:"Global Launch Campaign",
 client:"Mach Global",
 category:"Web",
 industry:"International",
 image:"/images/work/project-web.jpg" },
 {
 id:"artist-campaign",
 title:"Artist Impact Campaign",
 client:"Music Studio",
 category:"Content",
 industry:"Entertainment",
 image:"/images/work/project-content.jpg",
 metrics: [{ label:"Media Reach", value:"Viral"}]
 },
];

const filters = {
 industry: ["All","Entertainment","Real Estate","International"],
 category: ["All","Strategy","Brand","Web","Content"],
};

export function WorkGrid() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin:"-100px"});
 const [activeIndustry, setActiveIndustry] = useState("All");
 const [activeCategory, setActiveCategory] = useState("All");
 const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

 const filteredProjects = allProjects.filter(
 (project) =>
 (activeIndustry ==="All"|| project.industry === activeIndustry) &&
 (activeCategory ==="All"|| project.category === activeCategory)
 );

 return (
 <Section background="dark">
 <Container>
 {/* Filter Bar */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
 transition={{ duration: 0.6 }}
 className="mb-16" >
 <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end">
 <div className="space-y-6 flex-1">
 <div>
 <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Industry</p>
 <div className="flex flex-wrap gap-2">
 {filters.industry.map((filter) => (
 <button
 key={filter}
 onClick={() => setActiveIndustry(filter)}
 className={`px-4 py-2 text-sm transition-all duration-300 border ${activeIndustry === filter
 ?"border-burgundy bg-burgundy text-white" :"border-white/10 text-white/50 hover:border-white/30 hover:text-white" }`}
 >
 {filter}
 </button>
 ))}
 </div>
 </div>

 <div>
 <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Discipline</p>
 <div className="flex flex-wrap gap-2">
 {filters.category.map((filter) => (
 <button
 key={filter}
 onClick={() => setActiveCategory(filter)}
 className={`px-4 py-2 text-sm transition-all duration-300 border ${activeCategory === filter
 ?"border-burgundy bg-burgundy text-white" :"border-white/10 text-white/50 hover:border-white/30 hover:text-white" }`}
 >
 {filter}
 </button>
 ))}
 </div>
 </div>
 </div>

 <div className="text-right hidden md:block">
 <p className="text-sm text-white/50">
 Showing <span className="text-white font-medium">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ?"s":""}
 </p>
 </div>
 </div>
 </motion.div>

 {/* Masonry-style Grid using CSS Grid + different spans */}
 <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
 {filteredProjects.map((project, index) => {
 // Logic to create masonry variation based on index
 const isLarge = index % 4 === 0 || index % 5 === 0;
 const spanClass = isLarge ?"md:row-span-2":"";

 return (
 <motion.div
 key={project.id}
 initial={{ opacity: 0, y: 40 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 className={`group relative overflow-hidden bg-black cursor-pointer ${spanClass}`}
 onClick={() => setSelectedProject(project)}
 >
 <Image
 src={project.image}
 alt={project.title}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"/>

 <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
 <p className="text-xs uppercase tracking-widest text-burgundy mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
 {project.category}
 </p>
 <h3 className="text-2xl font-medium text-white group-hover:text-burgundy transition-colors duration-300">
 {project.title}
 </h3>
 <p className="text-white/50 text-sm opacity-80 group-hover:opacity-100">{project.client}</p>
 </div>

 {/* Hover Indicator */}
 <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
 <svg className="w-5 h-5 text-white"fill="none"viewBox="0 0 24 24"stroke="currentColor">
 <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
 <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
 </svg>
 </div>
 </motion.div>
 );
 })}
 </div>
 </Container>

 <ProjectModal
 project={selectedProject}
 isOpen={!!selectedProject}
 onClose={() => setSelectedProject(null)}
 />
 </Section>
 );
}
