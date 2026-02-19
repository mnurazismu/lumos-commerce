import { COLLECTIONS } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Collections | LUMOS",
    description:
        "Curated collections of transparent tech for every setup and lifestyle.",
};

export default function CollectionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 text-center space-y-6">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Collections
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Curated sets of transparent tech for every setup and lifestyle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COLLECTIONS.map((collection) => (
                    <Link
                        key={collection.id}
                        href={`/collections/${collection.slug}`}
                        className="group"
                    >
                        <GlassCard className="relative overflow-hidden h-80 p-0 border-white/5 bg-white/[0.02] hover:border-cyan-500/20 transition-all">
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2">
                                    {collection.productIds.length} products
                                </p>
                                <h2 className="font-heading text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {collection.title}
                                </h2>
                                <p className="text-muted-foreground text-sm line-clamp-2 max-w-md">
                                    {collection.description}
                                </p>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </main>
    );
}
