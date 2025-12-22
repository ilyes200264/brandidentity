"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function IntergenerationalResponsibility() {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center text-center space-y-16 max-w-4xl">
                <FadeIn>
                    <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-sinntrag-red mb-4">
                        Intergenerational Responsibility
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white">
                        Carrying Meaning Forward
                    </h3>
                </FadeIn>

                <div className="space-y-8 text-2xl md:text-3xl font-light text-neutral-300">
                    <FadeIn delay={0.3}>
                        <p>What we carry today supports those who build tomorrow.</p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-white">
                            Education is not funded by charity, but by <span className="font-medium text-sinntrag-red">shared responsibility</span>.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
