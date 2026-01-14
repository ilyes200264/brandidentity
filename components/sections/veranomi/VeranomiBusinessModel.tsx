"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiDifferent() {
    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">Pourquoi <span className="text-sinntrag-red">VÉRANOMI</span> est différent ?</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FadeIn delay={0.2} className="space-y-4">
                        <h3 className="text-2xl font-medium text-white">Temps Réel</h3>
                        <p className="text-neutral-400 font-light">Interprétation à la demande sans attente prolongée.</p>
                    </FadeIn>
                    <FadeIn delay={0.3} className="space-y-4">
                        <h3 className="text-2xl font-medium text-white">Intelligence</h3>
                        <p className="text-neutral-400 font-light">Matching intelligent par spécialité (médical, légal).</p>
                    </FadeIn>
                    <FadeIn delay={0.4} className="space-y-4">
                        <h3 className="text-2xl font-medium text-white">Qualité</h3>
                        <p className="text-neutral-400 font-light">Traçabilité complète et évaluation constante de la précision.</p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.8} className="pt-16 border-t border-neutral-800">
                    <p className="text-4xl md:text-5xl font-light text-white leading-tight">
                        On ne traduit pas des mots. <br />
                        <span className="text-sinntrag-red italic">On transmet le sens.</span>
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}

export function VeranomiBusinessModel() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">Modèle <br /> Économique</h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} className="flex gap-6 items-start">
                            <span className="text-sinntrag-red font-mono text-xl">01</span>
                            <div>
                                <h4 className="text-white text-xl font-medium">Commission par minute</h4>
                                <p className="text-neutral-500 font-light">2.50$ à 6.00$ / minute selon le contexte et la spécialité.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4} className="flex gap-6 items-start">
                            <span className="text-sinntrag-red font-mono text-xl">02</span>
                            <div>
                                <h4 className="text-white text-xl font-medium">Abonnements B2B</h4>
                                <p className="text-neutral-500 font-light">Accès prioritaire et tarifs préférentiels (99$ – 499$ / mois).</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.6} className="flex gap-6 items-start">
                            <span className="text-sinntrag-red font-mono text-xl">03</span>
                            <div>
                                <h4 className="text-white text-xl font-medium">Packs Entreprises</h4>
                                <p className="text-neutral-500 font-light">Volume d'heures pré-payé pour les grandes institutions.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="flex items-center">
                    <FadeIn delay={0.8} direction="none" className="p-12 bg-neutral-900/50 border border-white/5 rounded-3xl w-full text-center">
                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">Potentiel Premium</p>
                        <p className="text-6xl font-bold text-white tracking-tighter mb-4">$50B+</p>
                        <p className="text-neutral-400 font-light">Taille du marché mondial de l'interprétation.</p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
