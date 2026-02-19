"use client";

import { Product } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
    product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const addItem = useCartStore((s) => s.addItem);
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        if (!product.inStock) return;
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <Button
            size="lg"
            onClick={handleClick}
            disabled={!product.inStock}
            className={`flex-1 rounded-xl font-bold h-12 transition-all ${added
                    ? "bg-emerald-500 hover:bg-emerald-400"
                    : "bg-cyan-500 hover:bg-cyan-400"
                } text-black shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]`}
        >
            {added ? (
                <>
                    <Check className="w-5 h-5 mr-2" /> Added!
                </>
            ) : (
                <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                </>
            )}
        </Button>
    );
}
