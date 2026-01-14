"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionDigital() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Meta <br />
                            <span className="text-sinntrag-red">Advertising</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} className="space-y-2">
                            <h3 className="text-xl font-medium text-white italic">Ciblage Géographique</h3>
                            <p className="text-neutral-400 font-light">
                                Rayon de 10-15km autour de Fribourg, segmenté par tranche d'âge (18-35 pour les collecteurs, 30-65 pour les particuliers).
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-2 gap-4">
                            <FadeIn delay={0.4} direction="none" className="p-4 bg-neutral-900/50 border border-white/5 rounded-lg text-center">
                                <p className="text-2xl font-bold text-white">~10 CHF</p>
                                <p className="text-xs text-neutral-500 uppercase">CPA Particuliers</p>
                            </FadeIn>
                            <FadeIn delay={0.6} direction="none" className="p-4 bg-neutral-900/50 border border-white/5 rounded-lg text-center">
                                <p className="text-2xl font-bold text-white">~8 CHF</p>
                                <p className="text-xs text-neutral-500 uppercase">CPA Collecteurs</p>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Google <br />
                            <span className="text-neutral-500">Search & Local</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} className="space-y-2">
                            <h3 className="text-xl font-medium text-white italic">Capter l'intention</h3>
                            <p className="text-neutral-400 font-light">
                                Mots-clés prioritaires : "recyclage bouteilles Fribourg", "retour consigne près de moi".
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="p-6 bg-black border border-neutral-800 rounded-xl">
                            <ul className="space-y-3 text-neutral-400 font-light">
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> 350 CHF : Campagnes Search</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> 150 CHF : Google Maps / Local</li>
                                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> CPA estimé : 7 - 12 CHF</li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
