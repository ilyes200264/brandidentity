"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionKPIs() {
    const kpis = [
        "CAC par canal",
        "Coût par collecte",
        "Taux d'activation",
        "Volume de consigne",
        "Rétention 30 jours"
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Indicateurs <br />
                        <span className="text-neutral-500">de Performance (KPIs)</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {kpis.map((kpi, index) => (
                        <FadeIn key={index} delay={0.1 * index} direction="up" className="p-8 bg-neutral-900/20 border border-white/5 rounded-xl flex items-center gap-4 group hover:bg-sinntrag-red/10 transition-colors">
                            <span className="text-sinntrag-red font-mono text-lg">0{index + 1}</span>
                            <span className="text-xl text-white font-light group-hover:translate-x-2 transition-transform">{kpi}</span>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} className="pt-8">
                    <p className="text-sm text-neutral-500 uppercase tracking-widest border-t border-neutral-800 pt-8">
                        Suivi hebdomadaire rigoureux pour optimisation en temps réel.
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
