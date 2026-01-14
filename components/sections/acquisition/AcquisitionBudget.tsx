"use client";

import { SectionContainer } from "../../ui/SectionContainer";
import { FadeIn } from "../../ui/FadeIn";

export function AcquisitionBudget() {
    const channels = [
        { name: "Meta Ads", amount: "700", pct: "47%", color: "bg-sinntrag-red" },
        { name: "Google Ads", amount: "500", pct: "33%", color: "bg-neutral-600" },
        { name: "Offline Local", amount: "200", pct: "13%", color: "bg-neutral-800" },
        { name: "Parrainage", amount: "100", pct: "7%", color: "bg-neutral-900" },
    ];

    return (
        <SectionContainer>
            <div className="space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white">
                        Allocation du <span className="text-neutral-500">Budget</span>
                    </h2>
                </FadeIn>

                <div className="space-y-8">
                    <div className="flex h-12 w-full rounded-full overflow-hidden border border-white/10">
                        {channels.map((ch, i) => (
                            <div
                                key={i}
                                className={`${ch.color} h-full transition-all duration-1000`}
                                style={{ width: ch.pct }}
                            />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {channels.map((ch, i) => (
                            <FadeIn key={i} delay={0.2 * i} direction="none" className="p-6 border border-white/5 bg-black rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={`w-3 h-3 rounded-full ${ch.color}`} />
                                    <span className="text-lg font-medium text-white">{ch.name}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-3xl font-bold text-white">{ch.amount} <span className="text-sm font-normal text-neutral-500">CHF</span></p>
                                    <p className="text-sm text-neutral-500">{ch.pct} du budget total</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={1} className="text-center pt-8">
                    <p className="text-4xl font-bold text-white tracking-tighter">
                        1'500 <span className="text-xl text-sinntrag-red">CHF / MOIS</span>
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
