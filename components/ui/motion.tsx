"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

// ─── Fade In ────────────────────────────────────────────

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className,
    direction = "up",
    distance = 24,
}: FadeInProps) {
    const directionMap = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionMap[direction] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Scroll Reveal ──────────────────────────────────────

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
}

export function ScrollReveal({
    children,
    delay = 0,
    duration = 0.6,
    className,
    direction = "up",
    distance = 40,
    once = true,
}: ScrollRevealProps) {
    const directionMap = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionMap[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger Container ──────────────────────────────────

const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className,
    once = true,
}: StaggerContainerProps) {
    return (
        <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-30px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div variants={staggerItemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// ─── Scale On Hover ─────────────────────────────────────

interface ScaleOnHoverProps {
    children: ReactNode;
    className?: string;
    scale?: number;
}

export function ScaleOnHover({
    children,
    className,
    scale = 1.03,
}: ScaleOnHoverProps) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Page Transition Wrapper ────────────────────────────

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Counter Animation ──────────────────────────────────

interface CounterProps {
    value: number;
    duration?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
}

export function AnimatedCounter({
    value,
    duration = 2,
    className,
    prefix = "",
    suffix = "",
}: CounterProps) {
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {prefix}
                <motion.span>{value}</motion.span>
                {suffix}
            </motion.span>
        </motion.span>
    );
}

// ─── Floating Animation ─────────────────────────────────

interface FloatingProps {
    children: ReactNode;
    className?: string;
    amplitude?: number;
    duration?: number;
}

export function Floating({
    children,
    className,
    amplitude = 10,
    duration = 3,
}: FloatingProps) {
    return (
        <motion.div
            animate={{ y: [-amplitude, amplitude, -amplitude] }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Pulse / Glow ───────────────────────────────────────

export function PulseGlow({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            animate={{
                boxShadow: [
                    "0 0 0px rgba(6, 182, 212, 0)",
                    "0 0 20px rgba(6, 182, 212, 0.3)",
                    "0 0 0px rgba(6, 182, 212, 0)",
                ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
