import {
    PRODUCTS,
    CATEGORIES,
    getProductsByCategory,
} from "@/lib/data";
import { getReviewsByProductId } from "@/lib/reviews";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductCard } from "@/components/product/product-card";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
    return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return { title: "Product Not Found" };
    const category = CATEGORIES.find((c) => c.slug === product.category);
    return {
        title: `${product.name} | LUMOS`,
        description: product.description,
        openGraph: {
            title: `${product.name} | LUMOS`,
            description: product.description,
            images: [product.image],
        },
        keywords: [
            product.name,
            product.category,
            category?.name ?? "",
            "transparent",
            "LUMOS",
        ],
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) notFound();

    const reviews = getReviewsByProductId(product.id);
    const related = getProductsByCategory(product.category)
        .filter((p) => p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="min-h-screen pt-32 pb-20">
            <ProductDetail product={product} reviews={reviews} />

            {/* Related Products */}
            {related.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
                    <h2 className="font-heading text-3xl font-bold text-white mb-8">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {related.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
