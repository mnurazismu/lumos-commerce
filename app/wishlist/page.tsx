"use client";

import { useWishlistStore } from "@/lib/store";
import { ProductCard } from "@/components/product/product-card";
import { GlassCard } from "@/components/ui/glass-card";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WishlistPage() {
    const { items, removeItem } = useWishlistStore();

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12 text-center space-y-6">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                    Your Picks
                </p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Wishlist
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    Products you&apos;ve saved for later. Ready when you are.
                </p>
            </div>

            {items.length === 0 ? (
                <GlassCard className="max-w-lg mx-auto text-center py-16 border-white/5 bg-white/[0.02]">
                    <Heart className="w-12 h-12 text-white/10 mx-auto mb-4" />
                    <h2 className="font-heading text-2xl font-bold text-white mb-2">
                        Your wishlist is empty
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Browse our collection and save items you love.
                    </p>
                    <Link href="/shop">
                        <Button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-11">
                            <ShoppingBag className="w-4 h-4 mr-2" /> Explore Shop
                        </Button>
                    </Link>
                </GlassCard>
            ) : (
                <>
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-muted-foreground">
                            {items.length} item{items.length !== 1 ? "s" : ""} saved
                        </p>
                        <Link href="/shop">
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full border-white/20 hover:bg-white/10"
                            >
                                Continue Shopping <ArrowRight className="ml-2 w-3 h-3" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {items.map((product) => (
                            <div key={product.id} className="relative">
                                <ProductCard product={product} />
                                <button
                                    onClick={() => removeItem(product.id)}
                                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-colors backdrop-blur-md"
                                    title="Remove from wishlist"
                                >
                                    <Heart className="w-4 h-4 fill-rose-400" />
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </main>
    );
}
