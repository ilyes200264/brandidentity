"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiMarket() {
    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">Marché & <span className="text-neutral-500">Opportunité</span></h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <FadeIn delay={0.2} className="space-y-6">
                        <p className="text-2xl text-neutral-300 font-light">Une croissance exponentielle portée par :</p>
                        <div className="space-y-4">
                            {["Immigration & Mobilité", "Santé & Télémédecine", "Télétravail global", "Services digitaux"].map((item, i) => (
                                <p key={i} className="text-xl text-white flex items-center gap-3">
                                    <span className="w-8 h-px bg-sinntrag-red" /> {item}
                                </p>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} className="bg-neutral-900 p-8 rounded-2xl border border-white/5 self-center">
                        <p className="text-lg text-neutral-400 font-light italic">
                            "VÉRANOMI se positionne comme l'infrastructure de référence pour le temps réel et le on-demand, là où les solutions actuelles échouent."
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}

export function VeranomiVision() {
    return (
        <SectionContainer>
            <div className="text-center space-y-12 max-w-4xl mx-auto">
                <FadeIn>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">VISION</h2>
                </FadeIn>

                <div className="space-y-16">
                    <FadeIn delay={0.2}>
                        <p className="text-3xl md:text-4xl font-light text-neutral-300 leading-tight">
                            Devenir la plateforme mondiale de référence pour <span className="text-white italic underline decoration-sinntrag-red underline-offset-8">l'interprétation.</span>
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-neutral-800 pt-16">
                        <FadeIn delay={0.4} className="space-y-2">
                            <h4 className="text-white font-medium">Standard de qualité</h4>
                            <p className="text-neutral-500">Définir l'excellence dans la transmission précise du sens.</p>
                        </FadeIn>
                        <FadeIn delay={0.5} className="space-y-2">
                            <h4 className="text-white font-medium">Pont Culturel</h4>
                            <p className="text-neutral-500">Connecter les cultures, les institutions et les individus sans friction.</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
