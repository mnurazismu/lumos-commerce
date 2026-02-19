"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FeaturedCarousel() {
    const products = getFeaturedProducts();

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20">
            <div className="text-center mb-10">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                    Featured
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                    Trending Drops
                </h2>
            </div>
            <Carousel>
                <CarouselContent className="-ml-4">
                    {products.map((product) => (
                        <CarouselItem
                            key={product.id}
                            className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <GlassCard className="group h-full flex flex-col justify-between overflow-hidden relative border-white/5 bg-white/5 hover:bg-white/10">
                                <Link
                                    href={`/product/${product.id}`}
                                    className="aspect-square relative mb-4 rounded-xl overflow-hidden bg-black/50 block"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {product.badge && (
                                        <Badge
                                            variant={product.badge}
                                            className="absolute top-3 left-3"
                                        >
                                            {product.badge.toUpperCase()}
                                        </Badge>
                                    )}
                                </Link>

                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">
                                                {product.category}
                                            </p>
                                            <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-lg font-medium text-white">
                                                ${product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="block text-sm text-muted-foreground line-through">
                                                    ${product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 line-clamp-2 mb-6">
                                        {product.description}
                                    </p>
                                </div>

                                <Link href={`/product/${product.id}`} className="w-full">
                                    <Button className="w-full rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-white transition-all text-white border border-white/10 backdrop-blur-md group-hover:border-cyan-500/50">
                                        View Details{" "}
                                        <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </GlassCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 border-white/10 bg-black/50 hover:bg-cyan-500 hover:border-cyan-500 text-white" />
                <CarouselNext className="hidden md:flex -right-12 border-white/10 bg-black/50 hover:bg-cyan-500 hover:border-cyan-500 text-white" />
            </Carousel>
        </div>
    );
}
