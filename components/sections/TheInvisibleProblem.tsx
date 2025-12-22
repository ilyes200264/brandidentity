"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function TheInvisibleProblem() {
    return (
        <SectionContainer>
            <div className="space-y-12 max-w-4xl text-left w-full">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        When Meaning Stops, <span className="text-sinntrag-red">Impact Stops</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2} className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed">
                    <p className="mb-8">
                        Every day, critical decisions depend on interpretation.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl md:text-2xl text-neutral-400 font-medium">
                    {["Healthcare.", "Justice.", "Education.", "Humanitarian action."].map((item, i) => (
                        <FadeIn key={i} delay={0.4 + (i * 0.15)}>
                            <span className="block border-l-2 border-sinntrag-red pl-4">{item}</span>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={1.2} className="mt-12 text-3xl font-normal text-white">
                    <p>
                        When meaning is distorted, <span className="italic">consequences are real.</span>
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
