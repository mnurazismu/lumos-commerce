"use client";

import { useCartStore } from "@/lib/store";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    ShoppingBag,
    Truck,
    CreditCard,
    CheckCircle,
    ArrowLeft,
    ArrowRight,
    Package,
    Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, label: "Shipping", icon: Truck },
    { id: 2, label: "Payment", icon: CreditCard },
    { id: 3, label: "Confirmation", icon: CheckCircle },
];

export default function CheckoutPage() {
    const { items, clearCart } = useCartStore();
    const [step, setStep] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        setStep(3);
        clearCart();
    };

    if (items.length === 0 && !orderPlaced) {
        return (
            <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
                <GlassCard className="text-center py-16 border-white/5 bg-white/[0.02]">
                    <ShoppingBag className="w-16 h-16 text-white/10 mx-auto mb-4" />
                    <h2 className="font-heading text-2xl font-bold text-white mb-2">
                        Your cart is empty
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Add items to your cart before checking out.
                    </p>
                    <Link href="/shop">
                        <Button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-11">
                            Browse Shop
                        </Button>
                    </Link>
                </GlassCard>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-10">
                <Link
                    href="/shop"
                    className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
                </Link>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Checkout
                </h1>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 mb-12">
                {STEPS.map((s, i) => (
                    <div key={s.id} className="flex items-center">
                        <div
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                                step >= s.id
                                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                    : "bg-white/5 text-muted-foreground border border-white/10"
                            )}
                        >
                            <s.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{s.label}</span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div
                                className={cn(
                                    "w-8 h-px mx-2",
                                    step > s.id ? "bg-cyan-500/50" : "bg-white/10"
                                )}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Step 1: Shipping */}
                    {step === 1 && (
                        <GlassCard className="border-white/5 bg-white/[0.02]">
                            <h2 className="font-heading text-2xl font-bold text-white mb-6">
                                Shipping Information
                            </h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setStep(2);
                                }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            First Name
                                        </label>
                                        <Input
                                            required
                                            placeholder="John"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            Last Name
                                        </label>
                                        <Input
                                            required
                                            placeholder="Doe"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">
                                        Address
                                    </label>
                                    <Input
                                        required
                                        placeholder="123 Main Street"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                    />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            City
                                        </label>
                                        <Input
                                            required
                                            placeholder="San Francisco"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            State
                                        </label>
                                        <Input
                                            required
                                            placeholder="CA"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                    <div className="space-y-2 col-span-2 sm:col-span-1">
                                        <label className="text-sm font-medium text-white">
                                            ZIP
                                        </label>
                                        <Input
                                            required
                                            placeholder="94102"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                </div>

                                {/* Shipping Method */}
                                <div className="pt-4 border-t border-white/5">
                                    <h3 className="text-sm font-medium text-white mb-3">
                                        Shipping Method
                                    </h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                defaultChecked
                                                className="accent-cyan-500"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-white">
                                                    Standard Shipping
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    5-7 business days
                                                </p>
                                            </div>
                                            <span className="text-sm font-bold text-white">
                                                {subtotal > 100 ? "FREE" : "$9.99"}
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] cursor-pointer hover:border-white/20 transition-colors">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                className="accent-cyan-500"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-white">
                                                    Express Shipping
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    2-3 business days
                                                </p>
                                            </div>
                                            <span className="text-sm font-bold text-white">
                                                $19.99
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl mt-4"
                                >
                                    Continue to Payment <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </GlassCard>
                    )}

                    {/* Step 2: Payment */}
                    {step === 2 && (
                        <GlassCard className="border-white/5 bg-white/[0.02]">
                            <h2 className="font-heading text-2xl font-bold text-white mb-6">
                                Payment Details
                            </h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handlePlaceOrder();
                                }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">
                                        Card Number
                                    </label>
                                    <Input
                                        required
                                        placeholder="4242 4242 4242 4242"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 font-mono"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">
                                        Cardholder Name
                                    </label>
                                    <Input
                                        required
                                        placeholder="John Doe"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            Expiry
                                        </label>
                                        <Input
                                            required
                                            placeholder="MM / YY"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 font-mono"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">
                                            CVC
                                        </label>
                                        <Input
                                            required
                                            placeholder="123"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 font-mono"
                                        />
                                    </div>
                                </div>

                                {/* Security Note */}
                                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                                    <Shield className="w-4 h-4 text-emerald-400" />
                                    <span>
                                        Your payment information is encrypted and secure.
                                    </span>
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setStep(1)}
                                        className="rounded-xl border-white/20 hover:bg-white/10 h-12 flex-1"
                                    >
                                        <ArrowLeft className="mr-2 w-4 h-4" /> Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="h-12 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl flex-[2] shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                    >
                                        Place Order — ${total.toFixed(2)}
                                    </Button>
                                </div>
                            </form>
                        </GlassCard>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && orderPlaced && (
                        <GlassCard className="border-white/5 bg-white/[0.02] text-center py-12">
                            <div className="p-4 rounded-full bg-emerald-500/10 inline-flex mb-6">
                                <CheckCircle className="w-12 h-12 text-emerald-400" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-white mb-2">
                                Order Confirmed!
                            </h2>
                            <p className="text-muted-foreground mb-2 max-w-md mx-auto">
                                Thank you for your order. We'll send a confirmation email with
                                tracking details shortly.
                            </p>
                            <p className="text-sm text-muted-foreground mb-8">
                                Order #{Math.random().toString(36).substring(2, 10).toUpperCase()}
                            </p>

                            <div className="flex items-center justify-center gap-3">
                                <Link href="/shop">
                                    <Button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-11">
                                        Continue Shopping
                                    </Button>
                                </Link>
                                <Link href="/">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-white/20 hover:bg-white/10 px-8 h-11"
                                    >
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </GlassCard>
                    )}
                </div>

                {/* Order Summary Sidebar */}
                {!orderPlaced && (
                    <div className="lg:col-span-1">
                        <GlassCard className="border-white/5 bg-white/[0.02] sticky top-32">
                            <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Package className="w-4 h-4 text-cyan-400" />
                                Order Summary
                            </h3>

                            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-black/40 shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                                sizes="56px"
                                            />
                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium line-clamp-1">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                ${item.price} × {item.quantity}
                                            </p>
                                        </div>
                                        <span className="text-sm font-medium text-white shrink-0">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 text-sm border-t border-white/5 pt-4">
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
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-white font-bold text-lg pt-3 mt-3 border-t border-white/5">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </GlassCard>
                    </div>
                )}
            </div>
        </main>
    );
}
