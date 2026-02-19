import { CATEGORIES, getProductsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
    return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const category = CATEGORIES.find((c) => c.slug === slug);
    if (!category) return { title: "Category Not Found" };
    return {
        title: `${category.name} | LUMOS`,
        description: category.description,
    };
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const category = CATEGORIES.find((c) => c.slug === slug);

    if (!category) notFound();

    const products = getProductsByCategory(category.slug);

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <Link
                href="/categories"
                className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> All Categories
            </Link>

            <div className="mb-16 space-y-4">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    {category.name}
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    {category.description}
                </p>
                <p className="text-sm text-cyan-400">
                    {products.length} product{products.length !== 1 ? "s" : ""}
                </p>
            </div>

            {products.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                    <p className="text-lg">No products in this category yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
}
