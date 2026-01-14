"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionFunnel() {
    const funnel = [
        { stage: "Impression → Clic", rate: "1.5 - 2 %" },
        { stage: "Clic → Inscription", rate: "25 - 35 %" },
        { stage: "Inscription → 1ère collecte", rate: "40 - 50 %" },
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Funnel & <span className="text-sinntrag-red">Scénarios</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        {funnel.map((item, i) => (
                            <FadeIn key={i} delay={0.2 * i} direction="none" className="group">
                                <div className="flex justify-between items-end border-b border-neutral-800 pb-4 group-hover:border-sinntrag-red transition-colors">
                                    <span className="text-xl text-neutral-400 font-light">{item.stage}</span>
                                    <span className="text-2xl font-bold text-white">{item.rate}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.6} className="p-8 bg-neutral-900 border border-white/5 rounded-2xl space-y-6">
                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">Scénario Recommandé</p>
                        <div className="space-y-2">
                            <p className="text-3xl font-bold text-white">120-150</p>
                            <p className="text-neutral-400 font-light text-lg">utilisateurs par mois</p>
                        </div>
                        <div className="h-px bg-white/5" />
                        <p className="text-sm text-neutral-500 italic">
                            Rentabilité locale estimée entre le mois 14 et le mois 18 du pilote.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={1} className="pt-12 text-center">
                    <button className="px-12 py-4 bg-white text-black font-semibold rounded-full hover:bg-sinntrag-red hover:text-white transition-all duration-300 transform hover:scale-105">
                        Lancer la campagne
                    </button>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
