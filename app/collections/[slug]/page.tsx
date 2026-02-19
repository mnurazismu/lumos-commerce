import { COLLECTIONS, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
    return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const collection = COLLECTIONS.find((c) => c.slug === slug);
    if (!collection) return { title: "Collection Not Found" };
    return {
        title: `${collection.title} | LUMOS`,
        description: collection.description,
    };
}

export default async function CollectionDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const collection = COLLECTIONS.find((c) => c.slug === slug);

    if (!collection) notFound();

    const products = PRODUCTS.filter((p) =>
        collection.productIds.includes(p.id)
    );

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-3xl mb-12 h-64 md:h-80">
                <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover opacity-50"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    <Link
                        href="/collections"
                        className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-4 w-fit"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> All Collections
                    </Link>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
                        {collection.title}
                    </h1>
                    <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
                        {collection.description}
                    </p>
                </div>
            </div>

            {/* Products */}
            <p className="text-sm text-cyan-400 mb-6">
                {products.length} product{products.length !== 1 ? "s" : ""} in this
                collection
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
