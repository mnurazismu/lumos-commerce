import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground",
                secondary:
                    "border-transparent bg-secondary text-secondary-foreground",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground",
                outline: "text-foreground",
                new: "border-transparent bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
                bestseller: "border-transparent bg-amber-500/20 text-amber-400 border-amber-500/30",
                limited: "border-transparent bg-purple-500/20 text-purple-400 border-purple-500/30",
                sale: "border-transparent bg-rose-500/20 text-rose-400 border-rose-500/30",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({
    className,
    variant,
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
    return (
        <div
            data-slot="badge"
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        />
    )
}

export { Badge, badgeVariants }
