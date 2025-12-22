"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn } from "../ui/FadeIn";

export function HumanDimension() {
    return (
        <SectionContainer className="bg-neutral-950/50"> {/* Very subtle lighten from pure black if global is black */}
            <div className="flex flex-col items-start justify-center max-w-5xl space-y-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold text-neutral-100">
                        Meaning Does Not End <br /> With Understanding.
                    </h2>
                </FadeIn>

                <div className="text-xl md:text-3xl text-neutral-400 font-light space-y-10 leading-relaxed max-w-3xl">
                    <FadeIn delay={0.2} direction="up">
                        <p>Meaning must go further than the moment it is spoken.</p>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <p className="text-white border-l-4 border-sinntrag-red pl-6">
                            The value created through understanding can sustain what is built next.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
