"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPModel() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Modèle <br />
                            <span className="text-sinntrag-red">Économique</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} className="space-y-2">
                            <h3 className="text-xl font-medium text-white italic">01. Commission sur collecte</h3>
                            <p className="text-neutral-400 font-light">
                                15% de commission sur chaque panier moyen (est. 25 CHF), soit 3.75 CHF par transaction.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="space-y-2">
                            <h3 className="text-xl font-medium text-white italic">02. Abonnements B2B</h3>
                            <p className="text-neutral-400 font-light">
                                Forfaits pour immeubles et régies immobilières (49 à 99 CHF / mois).
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.6} className="space-y-2">
                            <h3 className="text-xl font-medium text-white italic">03. Partenariats publics</h3>
                            <p className="text-neutral-400 font-light">
                                Subventions environnementales et contrats de gestion municipale.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6">
                    <FadeIn delay={0.8} direction="none" className="p-8 bg-neutral-900 border border-white/5 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <div className="w-24 h-24 bg-sinntrag-red rounded-full blur-3xl" />
                        </div>
                        <p className="text-sm font-mono text-neutral-500 uppercase mb-4">Unit Economics</p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                <span className="text-neutral-400">CAC (Acquisition)</span>
                                <span className="text-2xl font-semibold text-white">10 CHF</span>
                            </div>
                            <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                <span className="text-neutral-400">LTV (12 mois)</span>
                                <span className="text-2xl font-semibold text-sinntrag-red">22.5 CHF</span>
                            </div>
                            <div className="pt-2">
                                <p className="text-xs text-neutral-500 italic">LTV {">"} CAC → Modèle sain et rentable</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={1.0} direction="none" className="p-8 bg-black border border-white/5 rounded-2xl">
                        <p className="text-sm font-mono text-neutral-500 uppercase mb-4">Break-even</p>
                        <p className="text-3xl font-bold text-white tracking-tight">~2'500 <span className="text-lg font-normal text-neutral-500">collectes / mois</span></p>
                        <p className="text-neutral-500 mt-2">Cible : Entre mois 14 et 18</p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
