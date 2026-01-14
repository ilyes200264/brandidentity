"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiSolution() {
    const features = [
        "📞 Audio & Vidéo",
        "🌍 Multi-langues",
        "⚡ À la demande",
        "🔒 Sécurisé & Conforme"
    ];

    return (
        <SectionContainer className="bg-gradient-to-b from-black to-neutral-900">
            <div className="space-y-16">
                <div className="space-y-4">
                    <FadeIn>
                        <span className="text-sinntrag-red uppercase tracking-widest text-sm font-semibold">Notre Solution</span>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                            VÉRANOMI
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <FadeIn delay={0.4} className="text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed">
                        Une plateforme qui connecte <span className="text-white border-b border-sinntrag-red">instantanément</span> les clients exigeants et les interprètes qualifiés.
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <FadeIn key={i} delay={0.6 + (i * 0.1)} direction="none" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                                <p className="text-lg text-white font-medium">{f}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}

export function VeranomiHowItWorks() {
    const steps = [
        { title: "1. Le Client", desc: "Choisit la langue et le contexte (médical, légal, etc.), puis lance l'appel." },
        { title: "2. La Plateforme", desc: "Matching automatique intelligent, gestion du paiement et de la qualité." },
        { title: "3. L'Interprète", desc: "Reçoit la mission, intervient en temps réel et est rémunéré instantanément." }
    ];

    return (
        <SectionContainer>
            <div className="space-y-24">
                <FadeIn className="text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">Comment ça fonctionne ?</h2>
                </FadeIn>

                <div className="relative">
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800 hidden md:block -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <FadeIn key={i} delay={0.2 * i} direction="up" className="space-y-6 text-center md:text-left">
                                <div className="w-16 h-16 bg-neutral-900 border border-sinntrag-red rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-[0_0_20px_rgba(128,0,0,0.3)]">
                                    <span className="text-white font-bold text-xl">{i + 1}</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                                    <p className="text-neutral-400 font-light text-lg">{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
