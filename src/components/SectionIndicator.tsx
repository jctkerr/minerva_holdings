"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Section {
    id: string;
    number: string;
    title: string;
}

const sections: Section[] = [
    { id: "hero", number: "01", title: "INTRO" },
    { id: "value", number: "02", title: "OUR PROMISE" },
    { id: "market-gap", number: "03", title: "THE BROKEN MODEL" },
    { id: "platform", number: "04", title: "WHAT WE DO" },
    { id: "why-us", number: "05", title: "WHY US" },
    { id: "contact", number: "06", title: "CONTACT" },
];

export default function SectionIndicator() {
    const [currentSection, setCurrentSection] = useState<Section>(sections[0]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        // Create observers for each section
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
                            setCurrentSection(section);
                        }
                    });
                },
                {
                    threshold: [0.2, 0.5, 0.8],
                    rootMargin: "-10% 0px -10% 0px",
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        // Track scroll progress within viewport
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollTop / docHeight, 1);
            setProgress(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            observers.forEach((observer) => observer.disconnect());
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Hide indicator when at the contact section (bottom of page)
    const isAtBottom = currentSection.id === "contact" || progress > 0.95;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
                opacity: isAtBottom ? 0 : 1,
                x: isAtBottom ? -20 : 0,
                pointerEvents: isAtBottom ? "none" : "auto"
            }}
            transition={{ delay: isAtBottom ? 0 : 1, duration: 0.5 }}
            className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-4"
        >
            {/* Progress ring */}
            <div className="relative h-10 w-10">
                <svg className="h-10 w-10 -rotate-90" viewBox="0 0 40 40">
                    <circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={100.53}
                        strokeDashoffset={100.53 * (1 - progress)}
                        transition={{ duration: 0.1 }}
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-minerva-gold">
                    {currentSection.number}
                </span>
            </div>

            {/* Section info */}
            <div className="flex items-center gap-3">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentSection.number}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-xs text-slate-500"
                    >
                        SECTION {currentSection.number}
                    </motion.span>
                </AnimatePresence>
                <div className="h-px w-8 bg-slate-700" />
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentSection.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-xs text-white"
                    >
                        {currentSection.title}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
