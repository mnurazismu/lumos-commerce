"use client";

import { ProductColor } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ColorSelectorProps {
    colors: ProductColor[];
}

export function ColorSelector({ colors }: ColorSelectorProps) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
                Color:{" "}
                <span className="text-white font-medium">{colors[selected].name}</span>
            </p>
            <div className="flex gap-3">
                {colors.map((color, i) => (
                    <button
                        key={color.name}
                        onClick={() => setSelected(i)}
                        className={cn(
                            "w-8 h-8 rounded-full border-2 transition-all",
                            i === selected
                                ? "border-white ring-2 ring-white/20 scale-110"
                                : "border-white/20 hover:border-white/50"
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                    />
                ))}
            </div>
        </div>
    );
}
