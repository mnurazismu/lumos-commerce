"use client";

import * as React from "react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Accordion({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div data-slot="accordion" className={cn("space-y-2", className)} {...props}>
            {children}
        </div>
    );
}

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

function AccordionItem({
    title,
    children,
    defaultOpen = false,
    className,
}: AccordionItemProps) {
    const [open, setOpen] = React.useState(defaultOpen);

    return (
        <CollapsiblePrimitive.Root open={open} onOpenChange={setOpen}>
            <div
                data-slot="accordion-item"
                className={cn(
                    "rounded-xl border border-white/5 bg-white/[0.02] transition-colors overflow-hidden",
                    open && "bg-white/[0.04] border-white/10",
                    className
                )}
            >
                <CollapsiblePrimitive.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-white hover:text-cyan-400 transition-colors group">
                    <span>{title}</span>
                    <svg
                        className={cn(
                            "w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0",
                            open && "rotate-180"
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </CollapsiblePrimitive.Trigger>

                <CollapsiblePrimitive.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:slide-out-to-top-1">
                    <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {children}
                    </div>
                </CollapsiblePrimitive.Content>
            </div>
        </CollapsiblePrimitive.Root>
    );
}

export { Accordion, AccordionItem };
