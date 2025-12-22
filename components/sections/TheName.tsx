"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";
import { motion } from "framer-motion";

export function TheName() {
    const letters = "SINNTRAG".split("");

    return (
        <SectionContainer>
            <div className="flex flex-col items-center space-y-20">

                {/* Animated Title Letters */}
                <div className="flex space-x-2 md:space-x-8 overflow-hidden">
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-9xl font-bold text-white tracking-tighter"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Etymology / Definition */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full max-w-4xl">
                    <div className="space-y-6">
                        <FadeIn delay={0.8} direction="none">
                            <div className="border-l-4 border-sinntrag-red pl-6 py-2">
                                <h3 className="text-3xl text-white font-bold mb-2">Sinn</h3>
                                <p className="text-lg text-neutral-400">Meaning, sense, understanding</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={1.0} direction="none">
                            <div className="border-l-4 border-neutral-800 pl-6 py-2">
                                <h3 className="text-3xl text-white font-bold mb-2">Trag(en)</h3>
                                <p className="text-lg text-neutral-400">To carry, to support, to transmit</p>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <FadeIn delay={1.4} className="text-center md:text-left">
                            <p className="text-xl text-neutral-500 uppercase tracking-widest mb-4">Sinntrag means:</p>
                            <p className="text-4xl text-white font-serif italic">
                                "That which carries meaning."
                            </p>
                        </FadeIn>
                    </div>
                </div>

            </div>
        </SectionContainer>
    );
}
