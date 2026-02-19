"use client";

import { useCartStore } from "@/lib/store";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CartSheet() {
    const { items, removeItem, incrementItem, decrementItem, isOpen, toggleCart } = useCartStore();

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent className="w-full sm:max-w-md border-l border-white/10 bg-black/90 backdrop-blur-xl p-0 flex flex-col">
                <SheetHeader className="px-6 py-4 border-b border-white/10">
                    <SheetTitle className="font-heading text-xl text-white flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-cyan-400" /> Your Cart
                        <span className="text-sm text-muted-foreground font-normal ml-auto mr-8">
                            {items.reduce((sum, item) => sum + item.quantity, 0)} items
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
                            <ShoppingBag className="w-16 h-16 opacity-10" />
                            <p className="text-lg">Your cart is empty</p>
                            <p className="text-sm text-center max-w-[200px]">
                                Explore our collection and add transparent tech to your setup.
                            </p>
                            <Button
                                variant="outline"
                                onClick={toggleCart}
                                className="rounded-full border-white/20 hover:bg-white/10"
                            >
                                Start Shopping
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-black/40 shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-white text-sm line-clamp-1">{item.name}</h4>
                                    <p className="text-xs text-muted-foreground capitalize mb-2">{item.category}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-cyan-400 font-bold text-sm">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            {/* Quantity Controls */}
                                            <button
                                                onClick={() => decrementItem(item.id)}
                                                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium text-white">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => incrementItem(item.id)}
                                                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-rose-400 transition-colors ml-1"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t border-white/10 space-y-3 bg-white/[0.03]">
                        {/* Cost Breakdown */}
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Shipping</span>
                                <span className={shipping === 0 ? "text-emerald-400" : ""}>
                                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                                </span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            {shipping > 0 && (
                                <p className="text-[11px] text-muted-foreground/60">
                                    Free shipping on orders over $100
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/5">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <Link href="/checkout" onClick={() => toggleCart()}>
                            <Button className="w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl text-sm mt-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all">
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
