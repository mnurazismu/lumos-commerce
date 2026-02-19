"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { WishlistButton } from "@/components/product/wishlist-button";
import { useCartStore } from "@/lib/store";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((s) => s.addItem);

    const handleQuickAdd = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (product.inStock) addItem(product);
    };

    return (
        <Link href={`/product/${product.id}`} className="block group">
            <GlassCard className="h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 p-0">
                {/* Image Container with X-Ray Effect */}
                <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* X-Ray Revealed Image */}
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 [filter:invert(1)_hue-rotate(180deg)_brightness(1.2)]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Badge */}
                    {product.badge && (
                        <Badge variant={product.badge} className="absolute top-3 left-3 z-10">
                            {product.badge.toUpperCase()}
                        </Badge>
                    )}

                    {/* Wishlist + Quick Add */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                        <WishlistButton product={product} size="sm" />
                        <Button
                            size="icon"
                            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 w-8 h-8"
                            onClick={handleQuickAdd}
                            disabled={!product.inStock}
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                        </Button>
                    </div>

                    {/* Out of Stock Overlay */}
                    {!product.inStock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                            <span className="text-white font-medium">Out of Stock</span>
                        </div>
                    )}
                </div>

                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs text-cyan-400 uppercase tracking-widest font-medium">
                            {product.category}
                        </p>
                        <div className="text-right">
                            <span className="font-heading font-bold text-white text-lg">
                                ${product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="block text-xs text-muted-foreground line-through">
                                    ${product.originalPrice}
                                </span>
                            )}
                        </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-3 h-3 ${i < Math.floor(product.rating)
                                        ? "fill-cyan-400 text-cyan-400"
                                        : "text-white/10"
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                            ({product.reviewCount})
                        </span>
                    </div>
                </div>
            </GlassCard>
        </Link>
    );
}
