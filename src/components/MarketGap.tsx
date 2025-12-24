"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Unique geometric compositions for each card
function GeometricComposition({ variant }: { variant: "status" | "complexity" | "cost" | "gap" }) {
    const compositions = {
        status: (
            // Rigid grid - representing rigid frameworks
            <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.line x1="40" y1="10" x2="40" y2="190" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
                <motion.line x1="80" y1="10" x2="80" y2="190" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                <motion.line x1="120" y1="10" x2="120" y2="190" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.35 }} />
                <motion.line x1="160" y1="10" x2="160" y2="190" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
                <motion.line x1="10" y1="40" x2="190" y2="40" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.line x1="10" y1="80" x2="190" y2="80" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.55 }} />
                <motion.line x1="10" y1="120" x2="190" y2="120" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                <motion.line x1="10" y1="160" x2="190" y2="160" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.65 }} />
            </svg>
        ),
        complexity: (
            // Overlapping circles - representing complexity/globe
            <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.circle cx="70" cy="100" r="60" fill="none" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />
                <motion.circle cx="130" cy="100" r="60" fill="none" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} />
                <motion.circle cx="100" cy="70" r="60" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }} />
                <motion.line x1="100" y1="20" x2="100" y2="180" stroke="#020617" strokeWidth="0.5" strokeOpacity="0.3"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
                <motion.line x1="20" y1="100" x2="180" y2="100" stroke="#020617" strokeWidth="0.5" strokeOpacity="0.3"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
            </svg>
        ),
        cost: (
            // Rising diagonal lines - representing climbing costs
            <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.line x1="20" y1="180" x2="180" y2="20" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.6"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
                <motion.line x1="40" y1="180" x2="180" y2="40" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.35 }} />
                <motion.line x1="60" y1="180" x2="180" y2="60" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.line x1="80" y1="180" x2="180" y2="80" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.65 }} />
                <motion.line x1="100" y1="180" x2="180" y2="100" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
                <motion.line x1="10" y1="160" x2="190" y2="160" stroke="#020617" strokeWidth="0.5" strokeOpacity="0.25"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.95 }} />
            </svg>
        ),
        gap: (
            // Two separate elements with space between - representing the gap
            <svg viewBox="0 0 200 200" className="w-full h-full">
                <motion.rect x="15" y="50" width="70" height="100" fill="none" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />
                <motion.rect x="115" y="50" width="70" height="100" fill="none" stroke="#020617" strokeWidth="1" strokeOpacity="0.4"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} />
                <motion.line x1="85" y1="100" x2="115" y2="100" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.7"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
                <motion.circle cx="100" cy="100" r="5" fill="#D4AF37" fillOpacity="0.7"
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 1 }} />
                <motion.line x1="50" y1="30" x2="50" y2="170" stroke="#020617" strokeWidth="0.5" strokeOpacity="0.2"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                <motion.line x1="150" y1="30" x2="150" y2="170" stroke="#020617" strokeWidth="0.5" strokeOpacity="0.2"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
            </svg>
        ),
    };

    return compositions[variant];
}

const content = [
    {
        id: "intro",
        variant: "status" as const,
        title: "The Broken Model",
        desc: "The current legal landscape is failing to keep pace with modern demands.",
        cardTitle: "Status Quo",
        cardContent: "Traditional legal frameworks are rigid, opaque, and increasingly unable to handle the velocity of global business.",
    },
    {
        id: "complexity",
        variant: "complexity" as const,
        title: "Complexity",
        desc: "Regulatory and geopolitical complexity is rising. Legal teams are overwhelmed.",
        cardTitle: "Regulatory Maze",
        cardContent: "Navigating cross-border compliance requires more than just human expertise. It demands systemic intelligence.",
    },
    {
        id: "cost",
        variant: "cost" as const,
        title: "Cost",
        desc: "Corporate legal costs are climbing. CFOs demand discipline.",
        cardTitle: "Financial Strain",
        cardContent: "Linear billing models incentivize inefficiency. The cost of legal defense is outpacing revenue growth.",
    },
    {
        id: "gap",
        variant: "gap" as const,
        title: "The Gap",
        desc: "Law firms lack the operating model for scale. ALSPs compete rather than partner.",
        cardTitle: "Service Void",
        cardContent: "A critical disconnect exists between trusted counsel and scalable execution. Minerva bridges this gap.",
    },
];

export default function MarketGap() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] md:h-[400vh] text-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {content.map((item, i) => (
                        <div
                            key={item.id}
                            className="relative flex h-screen w-screen flex-shrink-0 items-center justify-center p-6 md:p-12 lg:p-24"
                        >
                            <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                                {/* Left Column: The "Document" Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/3] w-full overflow-hidden bg-white text-black shadow-lg lg:aspect-square"
                                >
                                    {/* Card Decoration */}
                                    <div className="absolute left-0 top-0 h-px w-full bg-minerva-gold" />

                                    <div className="flex h-full flex-col justify-between p-6 sm:p-8 md:p-12">
                                        <div>
                                            <div className="mb-6 flex items-center gap-3 opacity-40">
                                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                                                <span className="font-mono text-xs uppercase tracking-widest">
                                                    {item.id === 'intro' ? 'EXHIBIT A' : `EXHIBIT 0${i}`}
                                                </span>
                                            </div>
                                            <h3 className="font-serif text-xl sm:text-2xl font-medium leading-tight md:text-3xl">
                                                {item.cardTitle}
                                            </h3>
                                        </div>

                                        {/* Geometric composition instead of image */}
                                        <div className="flex-grow flex items-center justify-center my-4">
                                            <div className="w-full max-w-[280px] aspect-square">
                                                <GeometricComposition variant={item.variant} />
                                            </div>
                                        </div>

                                        <div className="border-t border-black/10 pt-4">
                                            <p className="text-sm font-light leading-relaxed text-black/60">
                                                {item.cardContent}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Column: Typography */}
                                <div className="flex flex-col justify-center text-left">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="mb-4 font-mono text-xs uppercase tracking-widest text-minerva-gold"
                                    >
                                        {item.id === 'intro' ? 'Overview' : `Problem 0${i}`}
                                    </motion.span>
                                    <motion.h2
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="mb-6 font-serif text-3xl sm:text-5xl font-light text-white md:text-6xl lg:text-7xl"
                                    >
                                        {item.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="max-w-md text-lg font-light leading-relaxed text-slate-400 md:text-xl"
                                    >
                                        {item.desc}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
