"use client";

import { Product } from "@/lib/data";
import { useWishlistStore } from "@/lib/store";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
    product: Product;
    size?: "sm" | "md";
    className?: string;
}

export function WishlistButton({
    product,
    size = "md",
    className,
}: WishlistButtonProps) {
    const { items, addItem, removeItem } = useWishlistStore();
    const isInWishlist = items.some((item) => item.id === product.id);

    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isInWishlist) {
            removeItem(product.id);
        } else {
            addItem(product);
        }
    };

    return (
        <button
            onClick={toggle}
            className={cn(
                "rounded-full border backdrop-blur-md transition-all",
                size === "sm" ? "p-2" : "p-3",
                isInWishlist
                    ? "bg-rose-500/20 border-rose-500/30 text-rose-400"
                    : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white",
                className
            )}
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            <Heart
                className={cn(
                    size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4",
                    isInWishlist && "fill-rose-400"
                )}
            />
        </button>
    );
}
