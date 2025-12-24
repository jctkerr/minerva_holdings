"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedValue({ value, suffix = "" }: { value: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!isInView) return;
        const num = parseInt(value.replace(/\D/g, ''));
        if (isNaN(num)) { setDisplay(value); return; }

        const duration = 1500;
        const start = Date.now();

        const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(Math.floor(num * eased).toString());
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
        };
        requestAnimationFrame(animate);
    }, [isInView, value]);

    return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
    { value: "40", suffix: "%", label: "cost reduction" },
    { value: "3", suffix: "×", label: "faster response" },
    { value: "50", suffix: "+", label: "countries covered" },
];

const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.5, delay, ease: [0.42, 0, 0.58, 1] as const },
            opacity: { duration: 0.3, delay },
        },
    }),
};

export default function Financials() {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center bg-minerva-void py-32 px-6 overflow-hidden">
            {/* Geometric background */}
            <div className="absolute inset-0 pointer-events-none">
                <svg
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-[0.08]"
                    viewBox="0 0 200 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Vertical lines */}
                    <motion.line
                        x1="50" y1="20" x2="50" y2="280"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                    />
                    <motion.line
                        x1="100" y1="40" x2="100" y2="260"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.4}
                    />
                    <motion.line
                        x1="150" y1="60" x2="150" y2="240"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.6}
                    />
                    {/* Horizontal accent */}
                    <motion.line
                        x1="30" y1="150" x2="170" y2="150"
                        stroke="white"
                        strokeWidth="0.3"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.8}
                    />
                </svg>

                {/* Right side geometric */}
                <svg
                    className="absolute right-0 top-1/3 w-[300px] h-[400px] opacity-[0.06]"
                    viewBox="0 0 150 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="75"
                        cy="100"
                        r="60"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.5}
                    />
                    <motion.line
                        x1="75" y1="20" x2="75" y2="180"
                        stroke="white"
                        strokeWidth="0.3"
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.7}
                    />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-xs text-slate-500 tracking-widest">
                        WHY MINERVA
                    </span>
                </motion.div>

                {/* Stats row */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="relative"
                        >
                            {/* Divider between stats (desktop) */}
                            {index > 0 && (
                                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-16 w-px bg-white/10" />
                            )}

                            <h3 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white">
                                <AnimatedValue value={stat.value} />
                                <span className="text-minerva-gold">{stat.suffix}</span>
                            </h3>
                            <p className="mt-3 text-sm text-slate-400 tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mx-auto mt-20 h-px w-24 bg-gradient-to-r from-transparent via-minerva-gold to-transparent"
                />

                {/* Closing statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-12 font-serif text-2xl md:text-3xl text-white font-light"
                >
                    Working alongside your team.
                    <br />
                    <span className="text-slate-400 italic">Never against it.</span>
                </motion.p>
            </div>
        </section>
    );
}
