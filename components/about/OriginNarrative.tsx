"use client";

import { motion, useInView } from"framer-motion";
import { Container, Section } from"@/components/layout";
import { useRef } from"react";

const timeline = [
 { year:"2019", milestone:"Founded with a mission to unite strategy, creative, and performance under one roof"},
 { year:"2021", milestone:"Expanded into music industry solutions and artist management"},
 { year:"2023", milestone:"Launched political communications practice with measurable campaign wins"},
 { year:"2024", milestone:"Scaled to serve 50+ clients across four distinct verticals"},
];

export function OriginNarrative() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, margin:"-100px"});

 return (
 <Section>
 <Container size="narrow">
 <motion.div
 ref={ref}
 initial={{ opacity: 0, y: 30 }}
 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
 transition={{ duration: 0.8 }}
 className="prose prose-invert prose-lg max-w-none" >
 <p className="text-xl text-white/50 leading-relaxed mb-8">
 GT Media was built for operators who can't afford"nice work"that doesn't move numbers. 
 Our team sits at the intersection of brand strategy, content, performance marketing, and 
 political communications—giving you a partner who understands P&L, fanbases, and 
 constituencies in equal measure.
 </p>

 <p className="text-xl text-white/50 leading-relaxed mb-12">
 We are as comfortable in boardrooms and war-rooms as we are on set or in the edit bay.
 Our cross-industry advantage is simple: we see what works in high-pressure launches across 
 music, celebrity, brands, and politics—and we move those learnings across categories.
 </p>

 {/* Timeline */}
 <div className="space-y-8 border-l-2 border-burgundy/30 pl-8 my-16">
 {timeline.map((item, index) => (
 <motion.div
 key={item.year}
 initial={{ opacity: 0, x: -20 }}
 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
 transition={{ duration: 0.6, delay: index * 0.15 }}
 >
 <p className="text-burgundy font-medium mb-1">{item.year}</p>
 <p className="text-white">{item.milestone}</p>
 </motion.div>
 ))}
 </div>

 <p className="text-xl text-white/50 leading-relaxed">
 Execution is senior-led, data-visible, and obsessively detailed. GT Media's founder operates 
 as a strategist, operator, and partner—challenging assumptions, stress-testing ideas, and 
 protecting your upside with the urgency of someone whose own name is on the line.
 </p>
 </motion.div>
 </Container>
 </Section>
 );
}
