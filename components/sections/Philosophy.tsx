"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function Philosophy() {
    return (
        <SectionContainer>
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 flex flex-col justify-center space-y-12 text-left">
                    <FadeIn>
                        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Meaning Has <span className="text-sinntrag-red">Weight</span>.
                        </h2>
                    </FadeIn>

                    <div className="space-y-8 text-2xl md:text-4xl font-light text-neutral-300">
                        <FadeIn delay={0.3}>
                            <p>Meaning is not neutral.</p>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <p>Meaning carries responsibility.</p>
                        </FadeIn>

                        <FadeIn delay={0.9}>
                            <p className="pt-8 text-white">
                                What we choose to understand today shapes what will exist tomorrow.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Negative space on the right (implicit) */}
            </div>
        </SectionContainer>
    );
}
