"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function ThePostulate() {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center text-center space-y-12 max-w-5xl">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase mb-12">
                        Translation Is Not About Words
                    </h2>
                </FadeIn>

                <div className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-300">
                    <FadeIn delay={0.3}>
                        <p className="mb-4">Translation is <span className="text-sinntrag-red underline decoration-1 underline-offset-8">not</span> about moving words.</p>
                    </FadeIn>

                    <FadeIn delay={0.8} duration={1}>
                        <p className="text-white">
                            It is about <span className="font-semibold">carrying meaning</span> from one human to another.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
