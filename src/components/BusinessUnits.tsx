"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Wireframe } from "@react-three/drei";
import { Shield, FileCode, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BusinessUnits() {
    const [activeUnit, setActiveUnit] = useState<"dataco" | "ipco">("dataco");

    const datacoRef = useRef(null);
    const ipcoRef = useRef(null);
    const isDatacoInView = useInView(datacoRef, { margin: "-50% 0px -50% 0px" });
    const isIpcoInView = useInView(ipcoRef, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isDatacoInView) setActiveUnit("dataco");
        if (isIpcoInView) setActiveUnit("ipco");
    }, [isDatacoInView, isIpcoInView]);

    return (
        <section className="relative bg-minerva-void text-white">
            <div className="flex flex-col lg:flex-row">
                {/* Left: Scrollable Text */}
                <div className="w-full px-8 py-20 lg:w-1/2 lg:px-20 lg:py-32">

                    <div ref={datacoRef} className="mb-40 min-h-[60vh] flex flex-col justify-center">
                        {/* Numbered badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-6 inline-flex items-center gap-3"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-minerva-cyan/20 font-mono text-sm text-minerva-cyan border border-minerva-cyan/30">01</span>
                            <span className="text-xs font-medium uppercase tracking-widest text-minerva-cyan/70">Business Unit</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-4 font-serif text-5xl font-light text-white md:text-6xl"
                        >
                            DataCo
                        </motion.h2>
                        <p className="mb-8 text-xl font-light text-slate-400">
                            Crisis Response & Operational Resilience
                        </p>
                        <ul className="space-y-4">
                            {["Cyber Incident Response", "Digital Forensics", "DPO-as-a-Service"].map((item) => (
                                <li key={item} className="flex items-center text-lg text-slate-300">
                                    <CheckCircle className="mr-3 h-5 w-5 text-minerva-cyan" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div ref={ipcoRef} className="min-h-[60vh] flex flex-col justify-center">
                        {/* Numbered badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-6 inline-flex items-center gap-3"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-minerva-gold/20 font-mono text-sm text-minerva-gold border border-minerva-gold/30">02</span>
                            <span className="text-xs font-medium uppercase tracking-widest text-minerva-gold/70">Business Unit</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-4 font-serif text-5xl font-light text-white md:text-6xl"
                        >
                            IPCo
                        </motion.h2>
                        <p className="mb-8 text-xl font-light text-slate-400">
                            Asset Management & Portfolio Optimization
                        </p>
                        <ul className="space-y-4">
                            {["Trademark Docketing", "Portfolio Analytics", "Global Renewals"].map((item) => (
                                <li key={item} className="flex items-center text-lg text-slate-300">
                                    <CheckCircle className="mr-3 h-5 w-5 text-minerva-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Right: Sticky 3D Graphic */}
                <div className="sticky top-0 hidden h-screen w-1/2 items-center justify-center bg-black/20 lg:flex">
                    <div className="relative h-[600px] w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeUnit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="h-full w-full"
                            >
                                <Canvas>
                                    <ambientLight intensity={0.5} />
                                    <directionalLight position={[10, 10, 5]} intensity={1} />
                                    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                                        {activeUnit === "dataco" ? (
                                            <DataShield />
                                        ) : (
                                            <IpBlueprint />
                                        )}
                                    </Float>
                                </Canvas>
                            </motion.div>
                        </AnimatePresence>

                        {/* 2D Overlay Label */}
                        <motion.div
                            key={activeUnit}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
                        >
                            <p className={cn("text-sm font-bold uppercase tracking-widest", activeUnit === "dataco" ? "text-minerva-cyan" : "text-minerva-gold")}>
                                {activeUnit === "dataco" ? "Shield Active" : "Blueprint Mode"}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DataShield(props: any) {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <group {...props}>
            {/* Outer glow sphere */}
            <mesh scale={2.3}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="#22D3EE" transparent opacity={0.05} />
            </mesh>

            {/* Main shape */}
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 2]} />
                <MeshDistortMaterial
                    color="#22D3EE"
                    emissive="#0e7490"
                    emissiveIntensity={0.5}
                    wireframe
                    distort={0.3}
                    speed={2}
                />
            </mesh>

            {/* Inner core */}
            <mesh scale={0.5}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial
                    color="#22D3EE"
                    emissive="#22D3EE"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </group>
    );
}

function IpBlueprint(props: any) {
    const groupRef = useRef<any>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {/* Main wireframe box */}
            <mesh scale={2}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    wireframe
                    emissive="#8B7222"
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* Inner glowing core */}
            <mesh scale={0.8}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#D4AF37"
                    emissive="#D4AF37"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </group>
    );
}
