"use client";

import { motion } from "framer-motion";

export default function ValueStatement() {
    return (
        <section className="relative w-full bg-[#FAF9F6] py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    {/* First paragraph */}
                    <p className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-slate-900">
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
                    <div className="my-8 sm:my-12 md:my-16 flex justify-center">
                        <div className="h-px w-16 bg-slate-300" />
                    </div>

                    {/* Second paragraph */}
                    <p className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-slate-900">
                        <span className="italic text-slate-400 font-light">We extend your capabilities,</span>
                        <br />
                        <span className="font-medium">strengthen your{" "}
                            <span className="relative inline-block">
                                partnerships
                                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                            ,
                        </span>
                        <br />
                        <span className="italic text-slate-400 font-light">and free you to focus</span>
                        <br />
                        <span className="font-medium">on what matters most:</span>
                        <br />
                        <span className="font-medium text-slate-700">advise, protect, and lead.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
