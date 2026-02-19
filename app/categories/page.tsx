import { CATEGORIES } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import {
    Keyboard,
    Headphones,
    Mouse,
    Cable,
    Smartphone,
    Speaker,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Categories | LUMOS",
    description: "Browse our transparent tech by category.",
};

const iconMap: Record<string, React.ElementType> = {
    Keyboard,
    Headphones,
    Mouse,
    Cable,
    Smartphone,
    Speaker,
};

export default function CategoriesPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 text-center space-y-6">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Categories
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Find exactly what you need. Browse our collection by product type.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CATEGORIES.map((category) => {
                    const Icon = iconMap[category.icon] || Keyboard;
                    return (
                        <Link key={category.slug} href={`/categories/${category.slug}`}>
                            <GlassCard className="group flex items-start gap-6 p-8 h-full border-white/5 bg-white/[0.02] hover:bg-cyan-500/10 hover:border-cyan-500/20 cursor-pointer transition-all">
                                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors shrink-0">
                                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <div>
                                    <h2 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {category.name}
                                    </h2>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        {category.description}
                                    </p>
                                    <span className="text-xs text-cyan-400/70 font-medium">
                                        {category.productCount} products →
                                    </span>
                                </div>
                            </GlassCard>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}
