import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function SectionContainer({ children, className = "", id }: SectionContainerProps) {
    return (
        <section
            id={id}
            className={`h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-8 md:px-24 snap-start ${className}`}
        >
            <div className="max-w-4xl w-full">
                {children}
            </div>
        </section>
    );
}
