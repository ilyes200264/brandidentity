"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiCover() {
    return (
        <SectionContainer className="bg-black">
            <div className="text-center space-y-8">
                <FadeIn direction="none">
                    <span className="text-sinntrag-red uppercase tracking-[0.4em] text-sm font-medium mb-4 block">
                        Now entering
                    </span>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-none">
                        VÉRANOMI
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-2xl md:text-3xl font-light text-neutral-400 italic">
                        Where meaning speaks clearly.
                    </p>
                </FadeIn>

                <div className="pt-12">
                    <FadeIn delay={0.6}>
                        <div className="h-px w-24 bg-sinntrag-red mx-auto mb-12" />
                    </FadeIn>

                    <FadeIn delay={0.8} className="max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
                            Plateforme intelligente de mise en relation entre interprètes professionnels et clients en temps réel et à la demande.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
