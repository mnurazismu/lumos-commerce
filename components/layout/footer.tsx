"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = {
    Shop: [
        { label: "All Products", href: "/shop" },
        { label: "Keyboards", href: "/categories/keyboards" },
        { label: "Audio", href: "/categories/audio" },
        { label: "Peripherals", href: "/categories/peripherals" },
        { label: "Accessories", href: "/categories/accessories" },
    ],
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Collections", href: "/collections" },
        { label: "Contact", href: "/contact" },
    ],
    Support: [
        { label: "FAQ", href: "/faq" },
        { label: "Shipping", href: "/faq" },
        { label: "Returns", href: "/faq" },
        { label: "Warranty", href: "/faq" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                {/* Newsletter CTA */}
                <GlassCard className="p-8 md:p-12 mb-16 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-2">
                                Stay in the Loop
                            </h3>
                            <p className="text-muted-foreground">
                                Get notified about new drops, exclusive offers, and transparent
                                tech stories.
                            </p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 md:w-64 h-11"
                            />
                            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium h-11 px-6 shrink-0">
                                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </GlassCard>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            className="font-heading font-bold text-2xl tracking-tighter text-white hover:text-cyan-400 transition-colors"
                        >
                            LUMOS
                        </Link>
                        <p className="text-muted-foreground text-sm mt-3 max-w-xs">
                            Transparency is the new luxury. We celebrate the inner beauty of
                            engineering through crystal-clear design.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                                {title}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} LUMOS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {["Twitter", "Instagram", "YouTube", "GitHub"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-sm text-muted-foreground hover:text-white transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
