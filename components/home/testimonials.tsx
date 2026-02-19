"use client";

import { TESTIMONIALS } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) {
    return (
        <GlassCard className="flex flex-col border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
            <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.comment}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 relative">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                        {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                    </p>
                </div>
                <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                            key={i}
                            className="w-3 h-3 fill-cyan-400 text-cyan-400"
                        />
                    ))}
                </div>
            </div>
        </GlassCard>
    );
}

export function Testimonials() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <ScrollReveal className="text-center mb-12">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                    What People Say
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                    Loved by Creators
                </h2>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                    <StaggerItem key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} />
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Additional row */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                {TESTIMONIALS.slice(3).map((testimonial) => (
                    <StaggerItem key={testimonial.id}>
                        <TestimonialCard testimonial={testimonial} />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
