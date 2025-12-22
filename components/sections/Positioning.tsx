"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function Positioning() {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start justify-center max-w-4xl space-y-12">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Not a Platform. <br />
                        <span className="text-sinntrag-red">A Responsibility.</span>
                    </h2>
                </FadeIn>

                <div className="space-y-4 text-xl md:text-3xl text-neutral-400 font-light">
                    <FadeIn delay={0.4}>
                        <p>Sinntrag is not a marketplace.</p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p>It is not a charity.</p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <p>It is not a slogan.</p>
                    </FadeIn>
                </div>

                <div className="pt-12">
                    <FadeIn delay={1.5} duration={1.5}>
                        <p className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                            Sinntrag is an ethical infrastructure for meaning.
                        </p>
                    </FadeIn>
                </div>

                <div className="pt-24 opacity-30 text-sm font-mono text-neutral-500">
                    <FadeIn delay={2.0}>
                        <p>© SINNTRAG 2025</p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
