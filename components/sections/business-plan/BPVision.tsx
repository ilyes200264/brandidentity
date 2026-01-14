"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPVision() {
    return (
        <SectionContainer className="bg-gradient-to-t from-neutral-900 to-black">
            <div className="text-center space-y-12">
                <FadeIn>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                        VISION <span className="text-sinntrag-red">LONG TERME</span>
                    </h2>
                </FadeIn>

                <div className="max-w-2xl mx-auto space-y-8">
                    <FadeIn delay={0.2}>
                        <p className="text-2xl text-neutral-300 font-light">
                            Devenir le leader suisse de la récupération de consigne du "dernier kilomètre inverse".
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                        <FadeIn delay={0.4} className="space-y-2">
                            <p className="text-3xl font-semibold text-white">01</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest">Extension Romande</p>
                        </FadeIn>
                        <FadeIn delay={0.6} className="space-y-2">
                            <p className="text-3xl font-semibold text-white">02</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest">Partenariats Villes</p>
                        </FadeIn>
                        <FadeIn delay={0.8} className="space-y-2">
                            <p className="text-3xl font-semibold text-white">03</p>
                            <p className="text-sm text-neutral-500 uppercase tracking-widest">Réplication Nationale</p>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={1.2} className="pt-16">
                    <button className="px-12 py-4 bg-white text-black font-semibold rounded-full hover:bg-sinntrag-red hover:text-white transition-all duration-300 transform hover:scale-105">
                        Prêt pour le pilote
                    </button>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
