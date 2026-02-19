"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Categories", href: "/categories" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Wishlist", href: "/wishlist" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="left"
                className="w-full sm:max-w-sm border-r border-white/10 bg-black/90 backdrop-blur-xl p-0"
            >
                <SheetHeader className="px-6 py-6 border-b border-white/10">
                    <SheetTitle className="font-heading text-2xl tracking-tighter text-white">
                        LUMOS
                    </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col p-6 gap-1">
                    {navLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            (link.href !== "/" && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className={cn(
                                    "px-4 py-3 rounded-xl text-lg font-medium transition-all",
                                    isActive
                                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                    <p className="text-xs text-muted-foreground text-center">
                        © {new Date().getFullYear()} LUMOS. Transparency is the new luxury.
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}
