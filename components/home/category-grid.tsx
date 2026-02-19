"use client";

import { CATEGORIES } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Keyboard,
    Headphones,
    Mouse,
    Cable,
    Smartphone,
    Speaker,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Keyboard,
    Headphones,
    Mouse,
    Cable,
    Smartphone,
    Speaker,
};

export function CategoryGrid() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <ScrollReveal className="text-center mb-12">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                    Browse By
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                    Shop by Category
                </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {CATEGORIES.map((category) => {
                    const Icon = iconMap[category.icon] || Keyboard;
                    return (
                        <StaggerItem key={category.slug}>
                            <Link href={`/categories/${category.slug}`}>
                                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <GlassCard className="group flex flex-col items-center justify-center text-center p-6 h-full border-white/5 bg-white/[0.02] hover:bg-cyan-500/10 hover:border-cyan-500/20 cursor-pointer">
                                        <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors mb-4">
                                            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                                        </div>
                                        <h3 className="font-heading font-semibold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            {category.productCount} products
                                        </p>
                                    </GlassCard>
                                </motion.div>
                            </Link>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </section>
    );
}
