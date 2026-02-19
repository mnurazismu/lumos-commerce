"use client";

import { ProductCard } from "@/components/product/product-card";
import { SearchBar } from "@/components/shared/search-bar";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type SortOption = "default" | "price-asc" | "price-desc" | "name" | "rating";

export default function ShopPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const filtered = useMemo(() => {
        let result = [...PRODUCTS];

        // Filter by search
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q)
            );
        }

        // Filter by category
        if (activeCategory !== "all") {
            result = result.filter((p) => p.category === activeCategory);
        }

        // Sort
        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "name":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
        }

        return result;
    }, [search, activeCategory, sortBy]);

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12 text-center space-y-6">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    The Collection
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Curated tech essentials designed with transparency in mind.
                    <br />
                    See through the noise.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                    className="flex-1 max-w-md"
                />

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="h-11 rounded-xl bg-white/5 border border-white/10 text-white text-sm px-4 appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                >
                    <option value="default">Sort: Default</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="name">Name: A → Z</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                <button
                    onClick={() => setActiveCategory("all")}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                        activeCategory === "all"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                            : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-white"
                    )}
                >
                    All ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => {
                    const count = PRODUCTS.filter(
                        (p) => p.category === cat.slug
                    ).length;
                    return (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                activeCategory === cat.slug
                                    ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                                    : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat.name} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
                Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                {search && (
                    <span>
                        {" "}
                        for &ldquo;<span className="text-cyan-400">{search}</span>&rdquo;
                    </span>
                )}
            </p>

            {/* Product Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                    <p className="text-lg mb-2">No products found.</p>
                    <p className="text-sm">Try adjusting your search or filter.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
}
