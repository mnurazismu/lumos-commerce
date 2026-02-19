import { Collection } from "./types";

export const COLLECTIONS: Collection[] = [
    {
        id: "col-1",
        slug: "work-from-home",
        title: "Work From Home",
        description:
            "Elevate your home office with transparent tech that turns heads on every video call. Curated essentials for the modern remote worker.",
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
        productIds: ["1", "9", "10", "13", "8"],
    },
    {
        id: "col-2",
        slug: "gaming-setup",
        title: "Gaming Setup",
        description:
            "Build the ultimate transparent gaming rig. From rapid-trigger keyboards to ultralight mice, every piece is designed to perform — and to be seen.",
        image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80",
        productIds: ["3", "7", "2", "13"],
    },
    {
        id: "col-3",
        slug: "audio-essentials",
        title: "Audio Essentials",
        description:
            "Crystal-clear sound meets crystal-clear design. Our audio lineup delivers premium acoustics in housings you can see through.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        productIds: ["4", "5", "6"],
    },
    {
        id: "col-4",
        slug: "new-arrivals",
        title: "New Arrivals",
        description:
            "The latest additions to the LUMOS family. Be the first to own our newest transparent creations.",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
        productIds: ["2", "5", "8", "13"],
    },
];

// ── Helpers ─────────────────────────────────────────────────

export function getCollectionBySlug(slug: string): Collection | undefined {
    return COLLECTIONS.find((c) => c.slug === slug);
}
