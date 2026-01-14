"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function VeranomiTarget() {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white">Pour <span className="text-sinntrag-red">qui ?</span></h2>
                    </FadeIn>

                    <FadeIn delay={0.2} className="p-8 bg-neutral-900/50 rounded-2xl border border-white/5 space-y-6">
                        <h3 className="text-2xl font-bold text-white tracking-tight italic decoration-sinntrag-red underline decoration-1 underline-offset-4">Les Clients</h3>
                        <ul className="grid grid-cols-1 gap-3 text-neutral-400 font-light">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> Entreprises</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> Hôpitaux & Cliniques</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> Cabinets Juridiques</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> Institutions Publiques</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-sinntrag-red rounded-full" /> Particuliers (Immigration, Santé)</li>
                        </ul>
                    </FadeIn>
                </div>

                <div className="flex flex-col justify-end">
                    <FadeIn delay={0.4} className="p-8 bg-black rounded-2xl border border-neutral-800 space-y-6">
                        <h3 className="text-2xl font-bold text-white tracking-tight italic decoration-neutral-500 underline decoration-1 underline-offset-4">Les Interprètes</h3>
                        <ul className="grid grid-cols-1 gap-3 text-neutral-400 font-light">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full" /> Freelances professionnels</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full" /> Agences d'interprétation</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full" /> Experts certifiés & spécialisés</li>
                        </ul>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}

export function VeranomiUseCases() {
    const cases = [
        "Consultation médicale multilingue",
        "Audience ou rendez-vous juridique",
        "Immigration & démarches administratives",
        "Réunions d'affaires internationales",
        "Service client multilingue",
        "Déménagement & Contrats"
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">Cas d'usage <span className="text-neutral-500">concrets</span></h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((c, i) => (
                        <FadeIn key={i} delay={0.1 * i} direction="up" className="p-8 border border-neutral-800 bg-neutral-900/20 rounded-xl hover:border-sinntrag-red transition-all cursor-default">
                            <p className="text-xl text-neutral-300 font-light">{c}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
