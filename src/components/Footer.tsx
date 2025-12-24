"use client";

import { motion } from "framer-motion";

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

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-minerva-void">
            {/* CTA Section */}
            <div className="relative py-32 px-6">
                {/* Geometric background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg
                        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.05]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="80"
                            stroke="white"
                            strokeWidth="0.5"
                            fill="none"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.2}
                        />
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="50"
                            stroke="#D4AF37"
                            strokeWidth="0.5"
                            fill="none"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.4}
                        />
                        <motion.line
                            x1="100" y1="0" x2="100" y2="200"
                            stroke="white"
                            strokeWidth="0.3"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.6}
                        />
                        <motion.line
                            x1="0" y1="100" x2="200" y2="100"
                            stroke="white"
                            strokeWidth="0.3"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.8}
                        />
                    </svg>
                </div>

                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-mono text-xs text-slate-500 tracking-widest"
                    >
                        GET IN TOUCH
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-8 font-serif text-4xl text-white md:text-5xl lg:text-6xl font-light"
                    >
                        Ready to strengthen
                        <br />
                        <span className="italic text-slate-400">your backbone?</span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mx-auto mt-10 h-px w-16 bg-minerva-gold"
                    />

                    <motion.a
                        href="mailto:info@minervaholdings.net"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="relative mt-10 inline-block text-sm font-medium text-minerva-gold no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </div>

            {/* Footer bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <a href="#" className="no-underline">
                            <img
                                src="/Minerva_Holdings_Logo.png"
                                alt="Minerva"
                                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </a>

                        {/* Links */}
                        <nav className="flex items-center gap-8 text-sm text-slate-500">
                            <a href="#platform" className="no-underline hover:text-white transition-colors">Services</a>
                            <a href="#why-us" className="no-underline hover:text-white transition-colors">Why Us</a>
                            <a href="mailto:info@minervaholdings.net" className="no-underline hover:text-white transition-colors">Contact</a>
                        </nav>

                        {/* Copyright */}
                        <span className="text-xs text-slate-600">
                            © {new Date().getFullYear()} Minerva Holdings
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
