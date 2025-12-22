"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function Cover() {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center justify-center text-center space-y-8">
                <FadeIn delay={0.2} duration={1.2}>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-white">
                        SINNTRAG
                    </h1>
                </FadeIn>

                <FadeIn delay={1.0} duration={1.0}>
                    <p className="text-xl md:text-2xl font-light text-neutral-400 tracking-widest uppercase">
                        Carrying meaning. Creating impact.
                    </p>
                </FadeIn>
            </div>
        </SectionContainer>
    );
}
