"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function TheObservation() {
    return (
        <SectionContainer>
            <div className="space-y-16 max-w-3xl">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-white mb-12">
                        The World Is Full of Words
                    </h2>
                </FadeIn>

                <div className="space-y-8 text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed">
                    <FadeIn delay={0.2}>
                        <p>The world does not lack words.</p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-white">It lacks shared meaning.</p>
                    </FadeIn>

                    <div className="h-4" /> {/* Breathing space */}

                    <FadeIn delay={0.8}>
                        <p className="text-neutral-400">
                            Misunderstanding is not a linguistic failure.
                        </p>
                    </FadeIn>

                    <FadeIn delay={1.0}>
                        <p className="text-sinntrag-red">
                            It is a human one.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
