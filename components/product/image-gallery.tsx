"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
    images: string[];
    alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/5">
                <Image
                    src={images[selectedIndex]}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-3">
                    {images.map((image, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={cn(
                                "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                                i === selectedIndex
                                    ? "border-cyan-500 ring-2 ring-cyan-500/20"
                                    : "border-white/10 opacity-60 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`${alt} - ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
