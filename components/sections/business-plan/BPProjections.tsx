"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function BPProjections() {
    const projections = [
        {
            month: "Mois 12",
            users: "1'200",
            collects: "1'000",
            revenue: "3'750 CHF",
            volume: "25'000 CHF"
        },
        {
            month: "Mois 24",
            users: "3'500",
            collects: "3'000",
            revenue: "11'250 CHF",
            volume: "75'000 CHF"
        },
        {
            month: "Mois 36",
            users: "7'000",
            collects: "6'000",
            revenue: "22'500 CHF",
            volume: "150'000 CHF"
        }
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Projections <br />
                        <span className="text-neutral-500">de Croissance</span>
                    </h2>
                </FadeIn>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-neutral-800">
                                <th className="py-6 px-4 text-sm font-mono text-neutral-500 uppercase">Période</th>
                                <th className="py-6 px-4 text-sm font-mono text-neutral-500 uppercase">Utilisateurs</th>
                                <th className="py-6 px-4 text-sm font-mono text-neutral-500 uppercase">Collectes / mois</th>
                                <th className="py-6 px-4 text-sm font-mono text-neutral-500 uppercase">Revenu Plateforme</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projections.map((row, index) => (
                                <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                    <td className="py-8 px-4">
                                        <FadeIn delay={0.2 * index} direction="none">
                                            <span className="text-2xl font-semibold text-white group-hover:text-sinntrag-red transition-colors">{row.month}</span>
                                        </FadeIn>
                                    </td>
                                    <td className="py-8 px-4 text-xl text-neutral-400 font-light">{row.users}</td>
                                    <td className="py-8 px-4 text-xl text-neutral-400 font-light">{row.collects}</td>
                                    <td className="py-8 px-4 text-xl text-white font-medium">{row.revenue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <FadeIn delay={0.8} className="pt-8">
                    <p className="text-neutral-500 italic">
                        *Basé sur des hypothèses prudentes d'activation locale et un panier moyen de 25 CHF.
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
