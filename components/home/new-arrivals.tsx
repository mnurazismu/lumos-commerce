"use client";

import { getNewArrivals } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function NewArrivals() {
    const products = getNewArrivals();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <ScrollReveal>
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                            Just Dropped
                        </p>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                            New Arrivals
                        </h2>
                    </div>
                    <Link href="/shop">
                        <Button
                            variant="outline"
                            className="hidden md:inline-flex rounded-full border-white/20 hover:bg-white/10 backdrop-blur-md"
                        >
                            View All <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <StaggerItem key={product.id}>
                        <Link
                            href={`/product/${product.id}`}
                            className="group"
                        >
                            <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                                <GlassCard className="h-full border-white/5 bg-white/[0.02] hover:bg-white/10 transition-all p-0 overflow-hidden">
                                    <div className="relative aspect-square overflow-hidden bg-black/40">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        {product.badge && (
                                            <Badge
                                                variant={product.badge}
                                                className="absolute top-3 left-3"
                                            >
                                                {product.badge.toUpperCase()}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">
                                            {product.category}
                                        </p>
                                        <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                                            {product.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">
                                                ${product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-muted-foreground text-sm line-through">
                                                    ${product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
