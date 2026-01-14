"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionSegmentation() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Demande <br />
                            <span className="text-sinntrag-red">Particuliers</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-mono text-neutral-500 uppercase">Cibles prioritaires</p>
                            <p className="text-xl text-neutral-300 font-light italic">Familles, seniors, personnes sans véhicule.</p>
                        </div>
                        <div className="p-6 bg-neutral-900 rounded-xl border-l-4 border-sinntrag-red">
                            <p className="text-sm text-neutral-500 uppercase mb-2">Message Clé</p>
                            <p className="text-2xl text-white font-medium italic">"Vos bouteilles récupérées chez vous, sans déplacement."</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Offre <br />
                            <span className="text-neutral-500">Collecteurs</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm font-mono text-neutral-500 uppercase">Profils</p>
                            <p className="text-xl text-neutral-300 font-light italic">Étudiants, indépendants, revenus complémentaires.</p>
                        </div>
                        <div className="p-6 bg-neutral-900 rounded-xl border-l-4 border-neutral-700">
                            <p className="text-sm text-neutral-500 uppercase mb-2">Motivation</p>
                            <p className="text-2xl text-white font-medium italic">"Gagnez de l'argent en collectant près de chez vous."</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
