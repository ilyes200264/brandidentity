"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function ImpactModel() {
    const steps = [
        "Understanding",
        "Value creation",
        "Redistribution",
        "Education",
        "Future capacity"
    ];

    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                        From Understanding to Impact
                    </h2>
                </FadeIn>

                <div className="flex flex-col items-center space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <FadeIn delay={0.2 + (index * 0.2)} direction="up">
                                <div className="text-2xl md:text-4xl font-light text-white border border-neutral-800 px-8 py-4 rounded-sm bg-neutral-900/30 min-w-[300px] text-center">
                                    {step}
                                </div>
                            </FadeIn>

                            {index < steps.length - 1 && (
                                <FadeIn delay={0.3 + (index * 0.2)} direction="none">
                                    <div className="h-8 w-px bg-sinntrag-red my-2 opacity-50" />
                                    <div className="text-sinntrag-red text-xl">↓</div>
                                </FadeIn>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
