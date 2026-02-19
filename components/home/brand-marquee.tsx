"use client";

const brands = [
    "POLYCARBONATE CO.",
    "CRYSTAL WORKS",
    "NANO GLASS",
    "PRECISION OPTICS",
    "CLEAR TECH",
    "TRANSPARENT LABS",
    "OPTIX MATERIALS",
    "GLASS FORGE",
];

export function BrandMarquee() {
    return (
        <section className="w-full py-12 border-y border-white/5 bg-black/30 overflow-hidden">
            <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.3em] mb-8">
                Trusted Material Partners
            </p>
            <div className="relative flex overflow-hidden">
                <div className="animate-marquee flex shrink-0 items-center gap-16 px-8">
                    {brands.map((brand) => (
                        <span
                            key={brand}
                            className="text-xl md:text-2xl font-heading font-bold text-white/10 whitespace-nowrap select-none"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
                <div
                    className="animate-marquee flex shrink-0 items-center gap-16 px-8"
                    aria-hidden
                >
                    {brands.map((brand) => (
                        <span
                            key={brand}
                            className="text-xl md:text-2xl font-heading font-bold text-white/10 whitespace-nowrap select-none"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
