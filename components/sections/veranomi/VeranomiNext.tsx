"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiBranding() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <div className="space-y-8">
                    <FadeIn>
                        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">VÉRANOMI</h2>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="none">
                        <div className="flex gap-4 items-center">
                            <div className="h-px w-12 bg-sinntrag-red" />
                            <p className="text-xl font-mono text-neutral-500 uppercase tracking-widest">L'Étymologie</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="space-y-12">
                    <FadeIn delay={0.4} className="space-y-2">
                        <span className="text-sinntrag-red font-bold text-4xl">Véra</span>
                        <p className="text-2xl text-white font-light">vrai, exact, authentique.</p>
                    </FadeIn>

                    <FadeIn delay={0.6} className="space-y-2">
                        <span className="text-neutral-500 font-bold text-4xl">Nomi</span>
                        <p className="text-2xl text-white font-light">son, nom, voix, identité.</p>
                    </FadeIn>

                    <FadeIn delay={0.8} className="pt-8 text-neutral-500 italic">
                        Unique. Mémorable. International.
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}

export function VeranomiSlogan() {
    return (
        <SectionContainer className="bg-black">
            <div className="text-center space-y-12">
                <FadeIn direction="none">
                    <h2 className="text-4xl md:text-6xl font-light text-neutral-400 italic">
                        "Where <span className="text-white font-medium not-italic">meaning</span> speaks clearly."
                    </h2>
                </FadeIn>

                <FadeIn delay={0.4} className="space-y-4">
                    <div className="h-px w-24 bg-sinntrag-red mx-auto" />
                    <p className="text-xl text-neutral-500 uppercase tracking-[0.5em] font-medium">Parce que chaque mot compte.</p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}

export function VeranomiNext() {
    return (
        <SectionContainer className="bg-gradient-to-t from-neutral-900 to-black">
            <div className="space-y-16 w-full">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">Prochaine <span className="text-sinntrag-red">Étape</span></h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {["Lancement MVP", "Onboarding Interprètes", "Partenariats B2B", "Déploiement secteurs"].map((step, i) => (
                        <FadeIn key={i} delay={0.1 * i} className="p-8 bg-neutral-900/50 border border-white/5 rounded-xl text-center hover:bg-sinntrag-red/10 transition-colors">
                            <p className="text-white font-medium">{step}</p>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.8} className="text-center pt-24">
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-12">VÉRANOMI est prêt à parler au monde.</h3>
                    <button className="px-16 py-5 bg-white text-black font-bold rounded-full hover:bg-sinntrag-red hover:text-white transition-all duration-500 scale-110">
                        Entrer en contact
                    </button>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
