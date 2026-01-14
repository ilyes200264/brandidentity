"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPMarket() {
    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Marché & <span className="text-sinntrag-red">Opportunité</span>
                    </h2>
                </FadeIn>

                <div className="space-y-12">
                    {/* TAM */}
                    <FadeIn delay={0.2} direction="none" className="relative pl-12 border-l border-neutral-800">
                        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-neutral-600 -translate-x-1/2" />
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <h3 className="text-2xl font-medium text-neutral-400 w-32">TAM</h3>
                            <p className="text-5xl font-bold text-white tracking-tight">1.2 Milliard <span className="text-xl text-neutral-500 font-normal">CHF</span></p>
                            <p className="text-neutral-500 pb-1">Suisse (Consigne annuelle estimée)</p>
                        </div>
                    </FadeIn>

                    {/* SAM */}
                    <FadeIn delay={0.4} direction="none" className="relative pl-12 border-l border-neutral-700">
                        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-neutral-400 -translate-x-1/2" />
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <h3 className="text-2xl font-medium text-neutral-400 w-32">SAM</h3>
                            <p className="text-5xl font-bold text-white tracking-tight">15 Millions <span className="text-xl text-neutral-500 font-normal">CHF</span></p>
                            <p className="text-neutral-500 pb-1">Suisse Romande (Consigne non exploitée)</p>
                        </div>
                    </FadeIn>

                    {/* SOM */}
                    <FadeIn delay={0.6} direction="none" className="relative pl-12 border-l border-sinntrag-red">
                        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-sinntrag-red -translate-x-1/2" />
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <h3 className="text-2xl font-medium text-sinntrag-red w-32">SOM</h3>
                            <p className="text-5xl font-bold text-white tracking-tight">25'000 <span className="text-xl text-neutral-500 font-normal">CHF / mois</span></p>
                            <p className="text-neutral-500 pb-1">Fribourg (Objectif réaliste année 1)</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
