"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPProblem() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                            L'opportunité <br />
                            <span className="text-sinntrag-red">Fribourgeoise</span>
                        </h2>
                    </FadeIn>

                    <div className="space-y-6 text-xl text-neutral-400 font-light leading-relaxed">
                        <FadeIn delay={0.2}>
                            <p>
                                À Fribourg, <span className="text-white">35% des ménages</span> ne retournent pas leurs consignes régulièrement par manque de temps ou de motivation.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <p>
                                Cela représente une valeur dormante de <span className="text-white">200 CHF / an</span> par ménage concerné.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="bg-neutral-900/50 p-12 rounded-2xl border border-white/5 space-y-8">
                    <FadeIn delay={0.6} direction="none">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-widest text-neutral-500">Valeur non exploitée</p>
                            <p className="text-6xl font-bold text-white tracking-tighter">1.26M <span className="text-2xl text-sinntrag-red">CHF</span></p>
                            <p className="text-neutral-400">par an (ville seule)</p>
                        </div>
                    </FadeIn>

                    <div className="h-px w-full bg-white/10" />

                    <div className="grid grid-cols-2 gap-8">
                        <FadeIn delay={0.8} direction="none">
                            <div className="space-y-1">
                                <p className="text-sm text-neutral-500 uppercase">Ménages Ville</p>
                                <p className="text-2xl font-semibold text-white">18'000</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={1.0} direction="none">
                            <div className="space-y-1">
                                <p className="text-sm text-neutral-500 uppercase">Ménages Canton</p>
                                <p className="text-2xl font-semibold text-white">150'000</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
