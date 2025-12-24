"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

/**
 * Geometric line composition - Japanese minimalist aesthetic
 * Now with subtle parallax and "breathing" light beam effects
 */
function GeometricLines() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Create parallax layers
    // Layer 1: Background/Slow
    const x1 = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
    const y1 = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

    // Layer 2: Mid/Standard
    const x2 = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
    const y2 = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

    // Layer 3: Foreground/Fast
    const x3 = useTransform(smoothX, [-0.5, 0.5], [-45, 45]);
    const y3 = useTransform(smoothY, [-0.5, 0.5], [-45, 45]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from -0.5 to 0.5
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) - 0.5;
            const y = (e.clientY / innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

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

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Right side composition - asymmetric */}
            <motion.svg
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.2]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ x: x1, y: y1 }}
            >
                {/* Group 1: Background Vertical Lines */}
                <motion.g style={{ x: x2, y: y2 }}>
                    <motion.line
                        x1="100" y1="50" x2="100" y2="350"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                    />
                    <motion.line
                        x1="300" y1="60" x2="300" y2="340"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.35}
                    />
                </motion.g>

                {/* Group 2: Accent Vertical Lines (Closer) */}
                <motion.g style={{ x: x3, y: y3 }}>
                    <motion.line
                        x1="150" y1="80" x2="150" y2="320"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                    />
                    <motion.line
                        x1="200" y1="30" x2="200" y2="370"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                    />
                    <motion.line
                        x1="250" y1="100" x2="250" y2="300"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                    />
                </motion.g>

                {/* Horizontal lines */}
                <motion.g style={{ x: x2, y: y2 }}>
                    <motion.line
                        x1="70" y1="150" x2="330" y2="150"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.6}
                    />

                    {/* The Gold Accent Line - Breathing */}
                    <motion.line
                        x1="80" y1="200" x2="320" y2="200"
                        stroke="#D4AF37"
                        strokeWidth="0.75"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0.6, 1, 0.6], // Entrance then breath
                            strokeWidth: [0.75, 0.75, 1.5, 0.75]
                        }}
                        transition={{
                            pathLength: { duration: 1.5, delay: 0.8, ease: [0.42, 0, 0.58, 1] },
                            opacity: {
                                times: [0, 0.3, 0.5, 0.75, 1], // Keyframes
                                duration: 6,
                                repeat: Infinity,
                                repeatDelay: 0,
                                ease: "easeInOut"
                            },
                            strokeWidth: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5 // Start breathing after entrance
                            }
                        }}
                    />

                    <motion.line
                        x1="90" y1="250" x2="310" y2="250"
                        stroke="white"
                        strokeWidth="0.5"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.7}
                    />
                </motion.g>

                {/* Diagonal accent - Deep Layer */}
                <motion.line
                    x1="120" y1="120" x2="280" y2="280"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="0.3"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.0}
                    style={{ x: x1, y: y1 }}
                />

                {/* Circle accent - Front Layer */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="0.3"
                    fill="none"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.2}
                    style={{ x: x3, y: y3 }}
                />
            </motion.svg>

            {/* Left side - smaller, subtle */}
            <motion.svg
                className="absolute left-0 bottom-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] opacity-[0.1]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ x: x1, y: y1 }} // Move as a block
            >
                <motion.line
                    x1="20" y1="180" x2="180" y2="180"
                    stroke="white"
                    strokeWidth="0.5"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.4}
                />
                <motion.line
                    x1="20" y1="140" x2="120" y2="140"
                    stroke="white"
                    strokeWidth="0.5"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.5}
                />
                <motion.line
                    x1="20" y1="100" x2="80" y2="100"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1.6}
                />
            </motion.svg>
        </div>
    );
}

/**
 * Hero Section - Japanese minimalist design with geometric lines
 */
export default function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center bg-minerva-void px-4 sm:px-6 overflow-hidden">
            {/* Geometric background */}
            <GeometricLines />

            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Early Beta Badge */}
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 font-mono text-xs uppercase tracking-widest text-minerva-gold/80"
                >
                    Early Beta
                </motion.p>

                {/* H1 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl"
                >
                    Your Legal Backbone
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mt-6 max-w-xl text-base sm:text-lg font-light text-slate-400 md:text-xl"
                >
                    AI-native managed services for law firms.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative mt-10 inline-block text-sm font-medium text-minerva-gold no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
                >
                    Contact Us
                </motion.a>
            </div>
        </section>
    );
}
