"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Crisis Response & Data Protection",
        tagline: "When incidents happen, we respond.",
        items: [
            "Cyber Incident Response",
            "Digital Forensics",
            "DPO-as-a-Service",
        ],
    },
    {
        title: "IP Portfolio Management",
        tagline: "When IP needs scale, we deliver.",
        items: [
            "Trademark Docketing",
            "Portfolio Analytics",
            "Global Renewals",
        ],
    },
];

export default function HoldCoStructure() {
    return (
        <section className="relative min-h-screen w-full bg-minerva-void py-32 px-6">
            {/* Background geometric lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.06]"
                    viewBox="0 0 800 400"
                    fill="none"
                >
                    {/* Vertical center line */}
                    <line x1="400" y1="0" x2="400" y2="400" stroke="white" strokeWidth="1" />
                    {/* Horizontal lines */}
                    <line x1="100" y1="100" x2="700" y2="100" stroke="white" strokeWidth="0.5" />
                    <line x1="150" y1="200" x2="650" y2="200" stroke="#D4AF37" strokeWidth="0.5" />
                    <line x1="100" y1="300" x2="700" y2="300" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                        What We Do
                    </h2>
                </motion.div>

                {/* Two Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Divider line between columns (desktop only) */}
                            {index === 0 && (
                                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/10 translate-x-4" />
                            )}

                            {/* Pillar number */}
                            <span className="font-mono text-xs text-slate-500 tracking-widest">
                                0{index + 1}
                            </span>

                            {/* Title */}
                            <h3 className="mt-4 font-serif text-2xl text-white md:text-3xl">
                                {service.title}
                            </h3>

                            {/* Tagline */}
                            <p className="mt-3 text-slate-400 font-light">
                                {service.tagline}
                            </p>

                            {/* Services list */}
                            <ul className="mt-8 space-y-3">
                                {service.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center text-white/80"
                                    >
                                        <span className="mr-3 h-px w-4 bg-minerva-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
