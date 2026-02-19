"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { ShoppingBag, Search, Menu, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Categories", href: "/categories" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

export function Navbar() {
    const { toggleCart, items } = useCartStore();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistItems = useWishlistStore((s) => s.items);
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <GlassCard className="flex items-center gap-8 py-3 px-6 rounded-full hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] transition-all pointer-events-auto bg-black/50 backdrop-blur-2xl">
                    {/* Mobile Menu Trigger */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-white/10 text-white md:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-4 h-4" />
                    </Button>

                    <Link
                        href="/"
                        className="font-heading font-bold text-xl tracking-tighter hover:text-cyan-400 transition-colors text-white"
                    >
                        LUMOS
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "hover:text-white transition-colors",
                                        isActive && "text-cyan-400"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-white/10 text-white"
                            onClick={() => router.push("/shop")}
                        >
                            <Search className="w-4 h-4" />
                        </Button>
                        <Link href="/wishlist">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-white/10 text-white relative"
                            >
                                <Heart className="w-4 h-4" />
                                {wishlistItems.length > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                                        {wishlistItems.length > 9 ? "9+" : wishlistItems.length}
                                    </span>
                                )}
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full hover:bg-white/10 text-white relative"
                            onClick={toggleCart}
                        >
                            <ShoppingBag className="w-4 h-4" />
                            {itemCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-500 rounded-full text-[10px] font-bold text-black flex items-center justify-center">
                                    {itemCount > 9 ? "9+" : itemCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </GlassCard>
            </header>

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
}
