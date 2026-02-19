"use client";

import { Product, Review } from "@/lib/types";
import { ImageGallery } from "./image-gallery";
import { SpecsTable } from "./specs-table";
import { ColorSelector } from "./color-selector";
import { ReviewSection } from "./review-section";
import { AddToCartButton } from "./add-to-cart-button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Star,
    Truck,
    Shield,
    RotateCcw,
    Package,
    ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WishlistButton } from "@/components/product/wishlist-button";
import Link from "next/link";

interface ProductDetailProps {
    product: Product;
    reviews: Review[];
}

export function ProductDetail({ product, reviews }: ProductDetailProps) {
    const avgRating =
        reviews.length > 0
            ? Math.round(
                (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10
            ) / 10
            : product.rating;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link href="/shop" className="hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 inline mr-1" />
                    Shop
                </Link>
                <span>/</span>
                <Link
                    href={`/categories/${product.category}`}
                    className="hover:text-white transition-colors capitalize"
                >
                    {product.category}
                </Link>
                <span>/</span>
                <span className="text-white">{product.name}</span>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Left: Images */}
                <ImageGallery images={product.images} alt={product.name} />

                {/* Right: Info */}
                <div className="space-y-6">
                    {product.badge && (
                        <Badge variant={product.badge} className="text-sm px-4 py-1">
                            {product.badge.toUpperCase()}
                        </Badge>
                    )}

                    <div>
                        <p className="text-cyan-400 text-sm uppercase tracking-widest font-medium mb-2">
                            {product.category}
                        </p>
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(avgRating)
                                            ? "fill-cyan-400 text-cyan-400"
                                            : "text-white/10"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {avgRating} ({product.reviewCount} reviews)
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3">
                        <span className="font-heading text-4xl font-bold text-white">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <>
                                <span className="text-xl text-muted-foreground line-through">
                                    ${product.originalPrice}
                                </span>
                                <Badge variant="sale" className="text-xs">
                                    {Math.round(
                                        ((product.originalPrice - product.price) /
                                            product.originalPrice) *
                                        100
                                    )}
                                    % OFF
                                </Badge>
                            </>
                        )}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                    </p>

                    {/* Color Selector */}
                    {product.colors && product.colors.length > 0 && (
                        <ColorSelector colors={product.colors} />
                    )}

                    {/* Stock Status */}
                    <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-emerald-400" />
                        <span
                            className={`text-sm font-medium ${product.inStock ? "text-emerald-400" : "text-rose-400"
                                }`}
                        >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <AddToCartButton product={product} />
                        <WishlistButton product={product} />
                    </div>

                    {/* Trust badges */}
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>Free shipping</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>2-year warranty</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <RotateCcw className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>30-day returns</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs: Description / Specs / Reviews */}
            <Tabs defaultValue="description" className="max-w-4xl mx-auto">
                <TabsList className="w-full bg-white/5 border border-white/10 rounded-xl h-12">
                    <TabsTrigger
                        value="description"
                        className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-lg flex-1"
                    >
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        value="specs"
                        className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-lg flex-1"
                    >
                        Specifications
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 rounded-lg flex-1"
                    >
                        Reviews ({reviews.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                    <GlassCard className="border-white/5 bg-white/[0.02]">
                        <div className="prose prose-invert max-w-none">
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                {product.longDescription}
                            </p>
                        </div>
                    </GlassCard>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                    <SpecsTable specs={product.specs} />
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                    {reviews.length > 0 ? (
                        <ReviewSection
                            reviews={reviews}
                            averageRating={avgRating}
                            totalReviews={product.reviewCount}
                        />
                    ) : (
                        <GlassCard className="border-white/5 bg-white/[0.02] text-center py-12">
                            <p className="text-muted-foreground">
                                No reviews yet. Be the first to review this product!
                            </p>
                        </GlassCard>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
