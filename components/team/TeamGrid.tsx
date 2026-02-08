"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/layout";
import Link from "next/link";

const teamMembers = [
    {
        name: "Pulkit Vamp",
        role: "Creative Director",
        bio: "Visionary storyteller blending cinematic aesthetics with viral strategy. Expert in crafting narratives that resonate across cultures.",
        image: "/images/team/pulkit.jpg", // Placeholder until provided
        social: {
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        name: "Jatin Wadhwa",
        role: "Lead Strategist",
        bio: "Data-driven strategist specializing in audience retention and growth. Turns creative concepts into measurable performance.",
        image: "/images/team/jatin.jpg", // Placeholder until provided
        social: {
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        name: "Manjot Singh",
        role: "Head of Production",
        bio: "Execution specialist ensuring every frame meets world-class standards. Manages complex shoots with military precision.",
        image: "/images/team/manjot.jpg", // Placeholder until provided
        social: {
            linkedin: "#",
            instagram: "#"
        }
    },
    {
        name: "Kirti",
        role: "Client Relations Lead",
        bio: "The bridge between brand vision and creative execution. Ensures seamless communication and project success.",
        image: "/images/team/kirti.jpg", // Placeholder until provided
        social: {
            linkedin: "#",
            instagram: "#"
        }
    }
];

export function TeamGrid() {
    return (
        <Section background="dark" spacing="default">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-carbon border border-white/5 rounded-lg overflow-hidden hover:border-mahogany/30 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/5] relative overflow-hidden bg-onyx">
                                <div className="absolute inset-0 bg-silver/10 flex items-center justify-center text-silver/20 font-display text-4xl">
                                    {/* Placeholder fallback if image missing */}
                                    {member.name.charAt(0)}
                                </div>
                                {/* 
                  NOTE: Using a placeholder div for now. 
                  Uncomment Image component when real images are available.
                */}
                                {/* <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                /> */}

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Social Links Overlay - Slides up on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-mahogany/90 to-mahogany/0 flex gap-4 justify-center pb-8 pt-12">
                                    <Link
                                        href={member.social.linkedin}
                                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-onyx transition-colors duration-300"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href={member.social.instagram}
                                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-onyx transition-colors duration-300"
                                        aria-label={`${member.name}'s Instagram`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-red-500 font-accent text-xs uppercase tracking-widest mb-1">
                                    {member.role}
                                </p>
                                <h3 className="text-2xl font-display text-white mb-3 group-hover:text-mahogany transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-silver text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
