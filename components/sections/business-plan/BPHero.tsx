"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPHero() {
    return (
        <SectionContainer className="bg-gradient-to-b from-neutral-900 to-black">
            <div className="space-y-8">
                <FadeIn delay={0.2}>
                    <span className="text-sinntrag-red uppercase tracking-widest text-sm font-medium">
                        Stratégie & Développement
                    </span>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                        BUSINESS <br />
                        <span className="text-neutral-500">PLAN</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="h-1 w-24 bg-sinntrag-red" />
                </FadeIn>

                <FadeIn delay={0.8} className="space-y-4">
                    <p className="text-2xl md:text-3xl font-light text-neutral-300 max-w-2xl">
                        Application mobile de collecte de contenants consignés.
                    </p>
                    <div className="flex gap-8 text-sm uppercase tracking-widest text-neutral-500 font-medium">
                        <p>Zil pilote: Fribourg</p>
                        <p>Monnaie: CHF</p>
                    </div>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
