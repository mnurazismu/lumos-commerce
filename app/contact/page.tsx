"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "support@lumos.store",
        description: "We'll respond within 24 hours",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "San Francisco, CA",
        description: "Design studio & fulfillment",
    },
    {
        icon: Clock,
        label: "Hours",
        value: "Mon–Fri, 9AM–6PM PST",
        description: "Weekend emails answered Monday",
    },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="mb-16 text-center space-y-6">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                    Get in Touch
                </p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Contact Us
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    Have a question, feedback, or just want to say hi? We&apos;d love to
                    hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info Cards */}
                <div className="space-y-4">
                    {contactInfo.map((info) => (
                        <GlassCard
                            key={info.label}
                            className="flex items-start gap-4 border-white/5 bg-white/[0.02]"
                        >
                            <div className="p-3 rounded-xl bg-cyan-500/10 shrink-0">
                                <info.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                                    {info.label}
                                </p>
                                <p className="text-white font-medium">{info.value}</p>
                                <p className="text-sm text-muted-foreground mt-0.5">
                                    {info.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <GlassCard className="border-white/5 bg-white/[0.02]">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="p-4 rounded-full bg-emerald-500/10 inline-flex mb-4">
                                    <Send className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                                    Message Sent!
                                </h3>
                                <p className="text-muted-foreground max-w-md mx-auto">
                                    Thanks for reaching out. We&apos;ll get back to you within 24
                                    hours.
                                </p>
                                <Button
                                    onClick={() => setSubmitted(false)}
                                    variant="outline"
                                    className="mt-6 rounded-full border-white/20 hover:bg-white/10"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setSubmitted(true);
                                }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-white"
                                        >
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            required
                                            placeholder="Your name"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-white"
                                        >
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-white"
                                    >
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        required
                                        placeholder="How can we help?"
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us more..."
                                        className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-12"
                                >
                                    Send Message <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        )}
                    </GlassCard>
                </div>
            </div>
        </main>
    );
}
