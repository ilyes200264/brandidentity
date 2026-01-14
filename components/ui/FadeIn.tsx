"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "none";
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.8,
    className = "",
    direction = "up",
    ...props
}: FadeInProps) {

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Custom slow ease
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }} // trigger when 10% in view? Or maybe center.
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
