"use client";

import { motion, useInView } from"framer-motion";
import { Container, Section } from"@/components/layout";
import { useRef } from"react";

const phases = [
 {
 number:"01",
 title:"Diagnose",
 principle:"Audit brand, data, and market reality to clarify where attention, trust, or performance is leaking.",
 icon: (
 <svg className="w-6 h-6 sm:w-7 sm:h-7"viewBox="0 0 28 28"fill="none"xmlns="http://www.w3.org/2000/svg">
 <circle cx="12"cy="12"r="8"stroke="currentColor"strokeWidth="2"/>
 <path d="M18 18L26 26"stroke="currentColor"strokeWidth="2"strokeLinecap="round"/>
 <path d="M12 8V12L15 14"stroke="currentColor"strokeWidth="1.5"strokeLinecap="round"strokeLinejoin="round"/>
 </svg>
 ),
 },
 {
 number:"02",
 title:"Strategize",
 principle:"Design a focused plan with clear levers, budgets, and timelines linking creative, channels, and messaging to specific outcomes.",
 icon: (
 <svg className="w-6 h-6 sm:w-7 sm:h-7"viewBox="0 0 28 28"fill="none"xmlns="http://www.w3.org/2000/svg">
 <rect x="3"y="3"width="22"height="22"rx="2"stroke="currentColor"strokeWidth="2"/>
 <path d="M3 10H25"stroke="currentColor"strokeWidth="2"/>
 <path d="M10 10V25"stroke="currentColor"strokeWidth="2"/>
 <circle cx="17.5"cy="17.5"r="3"stroke="currentColor"strokeWidth="1.5"/>
 </svg>
 ),
 },
 {
 number:"03",
 title:"Build",
 principle:"Develop assets, journeys, and systems—content, funnels, sites, campaigns, and reporting—so execution runs without friction.",
 icon: (
 <svg className="w-6 h-6 sm:w-7 sm:h-7"viewBox="0 0 28 28"fill="none"xmlns="http://www.w3.org/2000/svg">
 <path d="M4 24L14 4L24 24H4Z"stroke="currentColor"strokeWidth="2"strokeLinejoin="round"/>
 <path d="M9 24L14 14L19 24"stroke="currentColor"strokeWidth="1.5"strokeLinejoin="round"/>
 <circle cx="14"cy="10"r="2"fill="currentColor"/>
 </svg>
 ),
 },
 {
 number:"04",
 title:"Scale",
 principle:"Double down on what works, cut what doesn't, and compound gains through iteration while protecting brand equity.",
 icon: (
 <svg className="w-6 h-6 sm:w-7 sm:h-7"viewBox="0 0 28 28"fill="none"xmlns="http://www.w3.org/2000/svg">
 <path d="M4 20L10 14L14 18L24 8"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/>
 <path d="M18 8H24V14"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/>
 <circle cx="10"cy="14"r="2"stroke="currentColor"strokeWidth="1.5"/>
 <circle cx="14"cy="18"r="2"stroke="currentColor"strokeWidth="1.5"/>
 </svg>
 ),
 },
];

export function ProcessTimeline() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin:"-100px"});

 return (
 <Section spacing="compact">
 <Container>
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8 }}
 className="text-center mb-12 sm:mb-16 md:mb-20" >
 <p className="text-xs sm:text-sm uppercase tracking-widest text-burgundy mb-3 sm:mb-4">Our Process</p>
 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4 px-4 sm:px-0">From Vision to Victory</h2>
 <p className="text-base sm:text-lg text-white/50 max-w-[60ch] mx-auto px-4 sm:px-0">
 A proven ritual for transforming strategic vision into exceptional reality
 </p>
 </motion.div>

 {/* Desktop: Horizontal Timeline */}
 <div ref={ref} className="hidden lg:block relative">
 {/* Connector Line */}
 <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"/>

 <div className="grid grid-cols-4 gap-6">
 {phases.map((phase, index) => (
 <motion.div
 key={phase.number}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.6, delay: index * 0.15 }}
 className="relative group" >
 {/* Number Circle */}
 <div className="relative z-10 w-24 h-24 mx-auto mb-8 border-2 border-burgundy/50 bg-black flex items-center justify-center group-hover:border-burgundy group-hover:bg-burgundy/10 transition-all duration-500">
 <div className="text-center">
 <span className="block text-burgundy text-3xl font-display">{phase.number}</span>
 <span className="text-burgundy/60 group-hover:text-burgundy transition-colors duration-300">
 {phase.icon}
 </span>
 </div>
 </div>

 {/* Content */}
 <div className="text-center">
 <h3 className="text-xl md:text-2xl font-medium mb-3 group-hover:text-burgundy transition-colors duration-300">{phase.title}</h3>
 <p className="text-white/50 leading-relaxed text-sm md:text-base">
 {phase.principle}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Mobile/Tablet: Vertical Timeline */}
 <div className="lg:hidden relative px-4 sm:px-0">
 {/* Connector Line */}
 <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-px bg-gradient-to-b from-burgundy/40 via-burgundy/20 to-transparent"/>

 <div className="space-y-8 sm:space-y-12">
 {phases.map((phase, index) => (
 <motion.div
 key={phase.number}
 initial={{ opacity: 0, x: -20 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
 transition={{ duration: 0.6, delay: index * 0.15 }}
 className="relative flex items-start gap-4 sm:gap-6 md:gap-8 group" >
 {/* Number Circle */}
 <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 border-2 border-burgundy/50 flex items-center justify-center bg-black relative z-10 group-hover:border-burgundy group-hover:bg-burgundy/10 transition-all duration-500">
 <span className="text-burgundy font-display text-base sm:text-lg">{phase.number}</span>
 </div>

 {/* Content */}
 <div className="flex-1 pt-1 sm:pt-2">
 <div className="flex items-center gap-3 mb-2 sm:mb-3">
 <span className="text-burgundy/60 group-hover:text-burgundy transition-colors duration-300">
 {phase.icon}
 </span>
 <h3 className="text-xl sm:text-2xl font-medium group-hover:text-burgundy transition-colors duration-300">{phase.title}</h3>
 </div>
 <p className="text-sm sm:text-base text-white/50 leading-relaxed">
 {phase.principle}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </Container>
 </Section>
 );
}
