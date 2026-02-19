"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Newsletter() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <ScrollReveal>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-black to-purple-500/10 p-8 md:p-16 text-center">
                    {/* Decorative blurs */}
                    <motion.div
                        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -ml-48 -mt-48 pointer-events-none"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -mr-48 -mb-48 pointer-events-none"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                    />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400 font-medium">
                                Join 50k+ tech enthusiasts
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Don&apos;t Miss a Drop
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                            Subscribe to get early access to new products, exclusive discounts,
                            and behind-the-scenes looks at our transparent design process.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 text-base"
                            />
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold h-12 px-8 shrink-0 rounded-xl w-full sm:w-auto">
                                    Subscribe <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        </div>

                        <p className="text-xs text-muted-foreground mt-4">
                            No spam, ever. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
