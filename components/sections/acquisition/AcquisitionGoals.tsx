"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionGoals() {
    const goals = [
        { label: "Utilisateurs particuliers", value: "3'000" },
        { label: "Collecteurs actifs", value: "300" },
        { label: "CAC global cible", value: "≤ 10 CHF" },
        { label: "Taux d'activation", value: "≥ 40%" }
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Objectifs <span className="text-neutral-500">Phase Pilote</span>
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {goals.map((goal, index) => (
                        <FadeIn key={index} delay={0.2 * index} direction="none" className="p-8 border border-white/5 bg-neutral-900/40 rounded-2xl">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{goal.value}</p>
                            <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider">{goal.label}</p>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.8} className="pt-8">
                    <p className="text-xl text-neutral-400 font-light border-l border-sinntrag-red pl-8 italic">
                        "L'objectif est d'atteindre 1'000 collectes mensuelles dès le douzième mois."
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
