"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CompetitiveLandscape() {
    const content = {
        title: "Market Position",
        subtitle: "We don't compete with law firms. We complete them.",
    };

    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#050B1F] py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-4xl text-white md:text-5xl">{content.title}</h2>
                    <p className="text-xl text-minerva-cyan">{content.subtitle}</p>
                </div>

                {/* The Graph */}
                <div className="relative mx-auto aspect-square w-full max-w-2xl border-b border-l border-white/20 bg-minerva-void/50 p-8 shadow-2xl backdrop-blur-sm">
                    {/* Axis Labels */}
                    <div className="absolute -left-12 bottom-1/2 -rotate-90 text-sm font-medium tracking-widest text-white/50">OPERATIONAL SCALE</div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm font-medium tracking-widest text-white/50">LAW FIRM ALIGNMENT</div>

                    {/* Premium gradient grid */}
                    <div className="absolute inset-8">
                        <svg className="h-full w-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gridLineH" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                    <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </linearGradient>
                                <linearGradient id="gridLineV" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                    <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </linearGradient>
                            </defs>
                            {[0, 25, 50, 75, 100].map((pos) => (
                                <g key={pos}>
                                    <line x1="0%" y1={`${pos}%`} x2="100%" y2={`${pos}%`} stroke="url(#gridLineH)" strokeWidth="1" />
                                    <line x1={`${pos}%`} y1="0%" x2={`${pos}%`} y2="100%" stroke="url(#gridLineV)" strokeWidth="1" />
                                </g>
                            ))}
                        </svg>
                    </div>

                    {/* Competitors */}

                    {/* Big 4 */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="absolute left-[20%] top-[25%] group cursor-pointer"
                    >
                        <div className="relative">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 shadow-lg ring-2 ring-slate-500/20" />
                            {/* Tooltip */}
                            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                <div className="whitespace-nowrap rounded-lg bg-slate-800/95 px-3 py-2 backdrop-blur-sm border border-white/10">
                                    <span className="text-sm font-medium text-white">Big 4</span>
                                    <p className="text-xs text-slate-400">High scale, competes with firms</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ALSPs */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="absolute left-[30%] top-[55%] group cursor-pointer"
                    >
                        <div className="relative">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 shadow-lg ring-2 ring-slate-600/20" />
                            {/* Tooltip */}
                            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                <div className="whitespace-nowrap rounded-lg bg-slate-800/95 px-3 py-2 backdrop-blur-sm border border-white/10">
                                    <span className="text-sm font-medium text-white">Legacy ALSPs</span>
                                    <p className="text-xs text-slate-400">Limited scale, fragmented</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Minerva */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                        className="absolute right-[15%] top-[15%]"
                    >
                        <div className="relative">
                            {/* Pulse rings */}
                            <motion.div
                                className="absolute -inset-2 rounded-full border-2 border-minerva-gold"
                                animate={{ scale: [1, 1.8, 1.8], opacity: [0.6, 0, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -inset-2 rounded-full border-2 border-minerva-gold"
                                animate={{ scale: [1, 1.8, 1.8], opacity: [0.6, 0, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                            />

                            {/* Main marker */}
                            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-minerva-gold to-[#8B7222] shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] flex items-center justify-center">
                                <Crown className="h-6 w-6 text-minerva-void" />
                            </div>

                            {/* Label */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-max"
                            >
                                <div className="rounded-xl border border-minerva-gold/30 bg-minerva-void/90 px-4 py-2 backdrop-blur-sm">
                                    <span className="block font-serif text-lg font-bold text-minerva-gold">Minerva</span>
                                    <span className="block text-xs text-minerva-gold/70">Category Leader</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
