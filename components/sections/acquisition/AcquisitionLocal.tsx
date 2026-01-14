"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionLocal() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Actions <br />
                            <span className="text-sinntrag-red">Offline</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="none" className="grid grid-cols-1 gap-4">
                        <div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl group hover:border-sinntrag-red transition-all">
                            <h3 className="text-white font-medium mb-1">Flyers & QR Codes</h3>
                            <p className="text-neutral-500 text-sm font-light">Distribution ciblée dans les boîtes aux lettres et halls d'immeubles.</p>
                        </div>
                        <div className="p-6 bg-neutral-900/30 border border-white/5 rounded-xl group hover:border-sinntrag-red transition-all">
                            <h3 className="text-white font-medium mb-1">Affichage Local</h3>
                            <p className="text-neutral-500 text-sm font-light">Présence dans les lieux stratégiques de la ville de Fribourg.</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">
                            Programme <br />
                            <span className="text-neutral-500">Parrainage</span>
                        </h2>
                    </FadeIn>

                    <div className="bg-neutral-900 p-12 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sinntrag-red/20 blur-3xl rounded-full" />
                        <FadeIn delay={0.4} className="space-y-6 relative z-10">
                            <p className="text-5xl font-bold text-white">+5 CHF</p>
                            <p className="text-xl text-neutral-400 font-light leading-snug">
                                Crédit de collecte offert pour le parrain et le filleul.
                            </p>
                            <div className="h-px w-12 bg-sinntrag-red" />
                            <p className="text-sm text-neutral-500 uppercase tracking-widest">Favoriser la croissance organique</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
