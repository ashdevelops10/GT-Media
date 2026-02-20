"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";

const teamMembers = [
    {
        name: "Pulkit Vamp",
        role: "Founder & Director",
        bio: "With 8+ years in entertainment and digital media, Pulkit built his presence from vlogging in 2018 to 170K+ YouTube subscribers. Known for his close ties with Sidhu Moose Wala and Sonu Sood, his creative vision and industry connections drive GT Media\u2019s growth and artist collaborations.",
        initials: "PV",
        specialties: ["Artist Management", "Content Strategy", "Brand Partnerships"],
    },
    {
        name: "Kirti Singh",
        role: "Brand Manager",
        bio: "The strategic mind behind GT Media\u2019s brand building and audience engagement. Kirti specializes in content strategy, brand positioning, and executing creative marketing campaigns that resonate across platforms \u2014 shaping GT Media\u2019s identity and visibility.",
        initials: "KS",
        specialties: ["Brand Strategy", "Campaign Design", "Audience Growth"],
    },
];

function ProfileIllustration({ initials, index }: { initials: string; index: number }) {
    const isEven = index % 2 === 0;
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="0.5" />
                    </pattern>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={isEven ? "#991b1b" : "#44403c"} stopOpacity="0.6" />
                        <stop offset="100%" stopColor={isEven ? "#b91c1c" : "#57534e"} stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <rect width="400" height="400" fill={`url(#grid-${index})`} />
                <motion.circle
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    cx="200" cy="200" r="140"
                    fill={`url(#grad-${index})`}
                />
                <motion.circle
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    cx="200" cy="200" r="160"
                    fill="none"
                    stroke={isEven ? "#b91c1c" : "#78716c"}
                    strokeOpacity="0.4"
                    strokeWidth="0.75"
                    strokeDasharray="8 6"
                />
                <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    d="M 20 60 L 20 20 L 60 20" fill="none" stroke={isEven ? "#b91c1c" : "#78716c"} strokeOpacity="0.5" strokeWidth="1.5"
                />
                <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    d="M 380 340 L 380 380 L 340 380" fill="none" stroke={isEven ? "#b91c1c" : "#78716c"} strokeOpacity="0.5" strokeWidth="1.5"
                />
                <motion.line
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    x1="0" y1="400" x2="400" y2="0"
                    stroke="white" strokeOpacity="0.06" strokeWidth="1"
                />
            </svg>
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="relative z-10 text-6xl md:text-7xl font-display text-white/20 select-none"
            >
                {initials}
            </motion.span>
        </div>
    );
}

export function TeamGrid() {
    return (
        <Section background="dark" spacing="default">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.article
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm hover:border-burgundy/30 transition-all duration-700">
                                <div className="aspect-[4/3] relative bg-neutral-950">
                                    <ProfileIllustration initials={member.initials} index={index} />
                                    <div className="absolute top-5 left-5">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.1] backdrop-blur-md border border-white/[0.12] text-[10px] uppercase tracking-[0.15em] text-white/70 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-burgundy/80" />
                                            {member.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl md:text-3xl font-display text-white mb-4 group-hover:text-burgundy transition-colors duration-500">
                                        {member.name}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-[1.8] mb-6">
                                        {member.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {member.specialties.map((s) => (
                                            <span
                                                key={s}
                                                className="px-3 py-1 rounded-full bg-white/[0.07] border border-white/[0.1] text-[11px] text-white/55 tracking-wide"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center justify-center gap-3 mt-12"
                >
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/10" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                        GT Media
                    </span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/10" />
                </motion.div>
            </Container>
        </Section>
    );
}
