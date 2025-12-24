"use client";

import { motion } from "framer-motion";

export default function ValueStatement() {
    return (
        <section className="relative w-full bg-[#FAF9F6] py-32 px-6">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* First paragraph */}
                    <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-slate-900">
                        <span className="font-medium">Minerva is your legal backbone</span>
                        <br />
                        <span className="italic text-slate-400 font-light">that responds, protects, and scales,</span>
                        <br />
                        <span className="font-medium">turning{" "}
                            <span className="relative inline-block">
                                complexity
                                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                            {" "}into clarity
                        </span>
                        <br />
                        <span className="italic text-slate-400 font-light">without the overhead burden.</span>
                    </p>

                    {/* Divider */}
                    <div className="my-16 flex justify-center">
                        <div className="h-px w-16 bg-slate-300" />
                    </div>

                    {/* Second paragraph */}
                    <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-slate-900">
                        <span className="italic text-slate-400 font-light">We understand your practice,</span>
                        <br />
                        <span className="font-medium">preserve what makes you{" "}
                            <span className="relative inline-block">
                                exceptional
                                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                            ,
                        </span>
                        <br />
                        <span className="italic text-slate-400 font-light">and extend your capabilities</span>
                        <br />
                        <span className="font-medium">freeing you to focus on what you do best:</span>
                        <br />
                        <span className="font-medium text-slate-700">counsel, strategize, and win.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
