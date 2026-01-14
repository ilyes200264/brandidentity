"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiConstat() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight underline decoration-sinntrag-red underline-offset-8 decoration-2">
                            Le Constat
                        </h2>
                    </FadeIn>

                    <div className="space-y-8">
                        <FadeIn delay={0.2} direction="up">
                            <p className="text-2xl text-neutral-300 font-light">
                                Dans un monde globalisé, les barrières linguistiques bloquent :
                            </p>
                        </FadeIn>

                        <ul className="space-y-4 text-xl text-neutral-400 font-light list-none">
                            <FadeIn delay={0.4} direction="up" className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-sinntrag-red" />
                                <li>L’accès aux services essentiels</li>
                            </FadeIn>
                            <FadeIn delay={0.5} direction="up" className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-sinntrag-red" />
                                <li>La compréhension juridique et médicale</li>
                            </FadeIn>
                            <FadeIn delay={0.6} direction="up" className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-sinntrag-red" />
                                <li>La communication professionnelle</li>
                            </FadeIn>
                        </ul>
                    </div>
                </div>

                <div className="bg-neutral-900/40 p-12 rounded-2xl border border-white/5 space-y-8">
                    <FadeIn delay={0.8} direction="none">
                        <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Statut Quo</p>
                        <div className="space-y-6 text-2xl text-white font-light italic">
                            <p className="opacity-50">Lent. Coûteux.</p>
                            <p className="opacity-75">Rigide. Inefficace.</p>
                            <p className="text-sinntrag-red font-medium">Le sens se perd là où la précision est cruciale.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}

export function VeranomiProblem() {
    return (
        <SectionContainer>
            <div className="max-w-3xl">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16">
                        Aujourd'hui, le fossé se creuse.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FadeIn delay={0.2} className="space-y-4 border-l border-neutral-800 pl-8">
                        <h3 className="text-white text-xl font-medium">L'impatience</h3>
                        <p className="text-neutral-400 font-light italic">Trouver un interprète fiable prend du temps que nous n'avons plus.</p>
                    </FadeIn>
                    <FadeIn delay={0.4} className="space-y-4 border-l border-neutral-800 pl-8">
                        <h3 className="text-white text-xl font-medium">Le manque d'outils</h3>
                        <p className="text-neutral-400 font-light italic">Les interprètes manquent de solutions modernes et de visibilité.</p>
                    </FadeIn>
                    <FadeIn delay={0.6} className="space-y-4 border-l border-neutral-800 pl-8">
                        <h3 className="text-white text-xl font-medium">L'insécurité</h3>
                        <p className="text-neutral-400 font-light italic">Les particuliers sont souvent mal accompagnés dans les moments critiques.</p>
                    </FadeIn>
                    <FadeIn delay={0.8} className="space-y-4 border-l border-sinntrag-red pl-8">
                        <h3 className="text-sinntrag-red text-xl font-medium">La conséquence</h3>
                        <p className="text-white font-light italic">Un mauvais mot peut avoir de lourdes conséquences irréversibles.</p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
