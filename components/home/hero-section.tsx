"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn, Floating } from "@/components/ui/motion";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-4 w-full relative">
            {/* Animated background glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="z-10 text-center space-y-6 max-w-4xl">
                <FadeIn duration={0.8}>
                    <h1 className="font-heading font-bold text-7xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 select-none">
                        LUMOS
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2} duration={0.8}>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto tracking-wide">
                        Transparency is the new luxury. Explore the inner workings of your
                        technology.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4} duration={0.8}>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <Link href="/shop">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="rounded-full bg-white text-black hover:bg-cyan-500 hover:text-white transition-all duration-500 px-8 h-12 text-base font-medium"
                                >
                                    Explore Collection
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="/about">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full border-white/20 hover:bg-white/10 px-8 h-12 text-base font-medium backdrop-blur-md"
                                >
                                    Our Story <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>
                        </Link>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <Floating amplitude={6} duration={2} className="absolute bottom-12 z-10">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <motion.div
                        className="w-1 h-2 bg-white/40 rounded-full"
                        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </Floating>
        </section>
    );
}
