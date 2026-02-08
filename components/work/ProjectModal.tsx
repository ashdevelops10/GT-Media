"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
    id: string;
    title: string;
    client: string;
    category: string;
    industry: string;
    image: string;
    description?: string;
    metrics?: { label: string; value: string }[];
    testimonial?: { quote: string; author: string; role: string };
    beforeImage?: string;
    afterImage?: string;
};

type ProjectModalProps = {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-onyx/90 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[210] overflow-y-auto"
                    >
                        <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
                            <div className="w-full max-w-6xl bg-carbon border border-white/10 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl relative">

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-50 p-2 bg-onyx/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-onyx transition-all duration-300 group"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="flex flex-col lg:flex-row h-[90vh] lg:h-[85vh]">
                                    {/* Left: Image / Visuals */}
                                    <div className="w-full lg:w-1/2 relative h-64 lg:h-auto bg-onyx">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent lg:bg-gradient-to-r" />
                                    </div>

                                    {/* Right: Content */}
                                    <div className="w-full lg:w-1/2 p-8 lg:p-12 overflow-y-auto bg-carbon">
                                        <div className="max-w-xl">
                                            <p className="text-mahogany font-accent text-xs uppercase tracking-widest mb-3">
                                                {project.client} — {project.category}
                                            </p>
                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6">
                                                {project.title}
                                            </h2>

                                            <div className="space-y-6 text-silver text-lg leading-relaxed mb-10">
                                                <p>{project.description || "A strategic campaign designed to amplify brand presence and drive measurable engagement through high-impact visual storytelling."}</p>
                                            </div>

                                            {/* Before/After Visuals - If available */}
                                            {project.beforeImage && project.afterImage && (
                                                <div className="mb-10">
                                                    <p className="text-xs uppercase tracking-widest text-silver mb-4">Strategic Transformation</p>
                                                    <div className="grid grid-cols-2 gap-4 h-48 md:h-64">
                                                        <div className="relative rounded-lg overflow-hidden border border-white/5">
                                                            <Image src={project.beforeImage} alt="Before" fill className="object-cover" />
                                                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] text-white uppercase font-bold">Before</div>
                                                        </div>
                                                        <div className="relative rounded-lg overflow-hidden border border-mahogany/20 shadow-lg shadow-mahogany/10">
                                                            <Image src={project.afterImage} alt="After" fill className="object-cover" />
                                                            <div className="absolute top-2 left-2 px-2 py-1 bg-mahogany rounded text-[10px] text-white uppercase font-bold">After</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Metrics Grid */}
                                            {project.metrics && (
                                                <div className="grid grid-cols-2 gap-6 mb-10 border-t border-white/10 pt-8">
                                                    {project.metrics.map((metric, i) => (
                                                        <div key={i} className="p-4 bg-onyx/50 rounded-lg border border-white/5">
                                                            <p className="text-3xl md:text-4xl font-display text-orange mb-1">
                                                                {metric.value}
                                                            </p>
                                                            <p className="text-[10px] text-silver uppercase tracking-widest">
                                                                {metric.label}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Testimonial */}
                                            {project.testimonial && (
                                                <div className="mb-10 px-6 py-6 bg-carbon border border-mahogany/10 rounded-xl relative">
                                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-mahogany text-white text-[10px] uppercase font-bold rounded">Client Testimonial</div>
                                                    <p className="text-silver italic text-base leading-relaxed mb-4">
                                                        "{project.testimonial.quote}"
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-mahogany flex items-center justify-center text-white font-bold text-xs uppercase">
                                                            {project.testimonial.author.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-xs font-bold uppercase">{project.testimonial.author}</p>
                                                            <p className="text-silver text-[10px]">{project.testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex gap-4">
                                                <button className="px-8 py-4 bg-mahogany text-white rounded-full font-medium hover:bg-white hover:text-onyx transition-all duration-300">
                                                    View Full Case Study
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
