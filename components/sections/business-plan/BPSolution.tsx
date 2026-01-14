"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPSolution() {
    const steps = [
        {
            role: "Particulier",
            content: "Déclare une collecte (sacs/créneaux) et choisit le mode de partage de la consigne.",
        },
        {
            role: "Collecteur",
            content: "Récupère les contenants à proximité et les rapporte aux points de collecte officiels.",
        },
        {
            role: "Plateforme",
            content: "Gère le matching local, la traçabilité et le partage automatisé des revenus.",
        }
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        La Solution <span className="text-neutral-500">Logistique</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={0.2 * index} className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-xl space-y-4 hover:border-sinntrag-red transition-colors duration-500">
                            <span className="text-sinntrag-red font-mono text-sm uppercase">{step.role}</span>
                            <p className="text-xl text-neutral-300 font-light leading-relaxed">
                                {step.content}
                            </p>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.8} className="pt-8">
                    <p className="text-2xl text-white font-light border-l-4 border-sinntrag-red pl-8 md:max-w-2xl">
                        Un système humain, local et traçable pour augmenter le taux de recyclage réel.
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
