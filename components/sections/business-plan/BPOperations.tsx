"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPOperations() {
    const risks = [
        { label: "Adoption lente", solution: "Focus hyper-local, ciblage immeubles." },
        { label: "Logistique", solution: "Rayons courts, volumes optimisés." },
        { label: "Réglementation", solution: "Uniquement consigne, pas de déchets." }
    ];

    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Déploiement <br />
                            <span className="text-sinntrag-red">Opérationnel</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} className="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
                            <h3 className="text-lg font-medium text-white mb-2">MVP (3 mois)</h3>
                            <ul className="text-neutral-400 space-y-1 font-light list-disc list-inside">
                                <li>App mobile native (matching géo)</li>
                                <li>Backend de gestion des flux</li>
                                <li>Paiements différés</li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.4} className="p-6 bg-neutral-900/50 rounded-xl border border-white/5">
                            <h3 className="text-lg font-medium text-white mb-2">Équipe Initiale</h3>
                            <ul className="text-neutral-400 space-y-1 font-light list-disc list-inside">
                                <li>1 Fondateur Tech (Fullstack)</li>
                                <li>1 Fondateur Business / Ops</li>
                                <li>Marketing local ponctuel</li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>

                <div className="space-y-12">
                    <FadeIn delay={0.6}>
                        <h3 className="text-2xl font-medium text-white italic underline decoration-sinntrag-red underline-offset-8">Risques & Mitigations</h3>
                    </FadeIn>

                    <div className="space-y-6">
                        {risks.map((risk, index) => (
                            <FadeIn key={index} delay={0.8 + (index * 0.1)} direction="none" className="group">
                                <div className="flex flex-col gap-1 border-l-2 border-neutral-800 pl-6 group-hover:border-sinntrag-red transition-colors">
                                    <span className="text-white font-medium">{risk.label}</span>
                                    <span className="text-neutral-500 font-light">{risk.solution}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={1.2} className="pt-4">
                        <div className="p-4 bg-sinntrag-red/10 border border-sinntrag-red/20 rounded-lg">
                            <p className="text-sm text-neutral-300">
                                <span className="text-sinntrag-red font-bold">Burn rate initial :</span> ~1'700 CHF / mois
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
