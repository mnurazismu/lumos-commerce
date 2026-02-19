import { GlassCard } from "@/components/ui/glass-card";
import {
    Eye,
    Lightbulb,
    Shield,
    Heart,
    Sparkles,
    Users,
    Globe,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | LUMOS",
    description:
        "The story behind the transparency revolution. Meet the team that's making technology beautiful.",
};

const values = [
    {
        icon: Eye,
        title: "Radical Transparency",
        description:
            "We believe the most beautiful part of technology is the engineering inside. We design every product to celebrate, not conceal.",
    },
    {
        icon: Lightbulb,
        title: "Design Innovation",
        description:
            "Every LUMOS product pushes the boundary between art and engineering. We prototype relentlessly until form and function are inseparable.",
    },
    {
        icon: Shield,
        title: "Uncompromising Quality",
        description:
            "Optical-grade polycarbonate. CNC-machined aluminum. Gold-plated contacts. We never cut corners — even the ones you can see.",
    },
    {
        icon: Heart,
        title: "User Obsession",
        description:
            "Beautiful tech that performs poorly is just decoration. Every product is tuned for daily use, not just shelf appeal.",
    },
];

const timeline = [
    {
        year: "2022",
        title: "The Idea",
        description:
            'Our founder dismantled his keyboard and thought: "Why do I need to break it to see how it works?"',
    },
    {
        year: "2023",
        title: "First Prototype",
        description:
            "The first transparent keyboard was built in a garage using custom-molded polycarbonate. It was ugly — but it worked.",
    },
    {
        year: "2024",
        title: "LUMOS Is Born",
        description:
            "With funding from a successful Kickstarter, LUMOS officially launched with 3 products and a manifesto.",
    },
    {
        year: "2025",
        title: "Full Lineup",
        description:
            "13 products across 6 categories. Featured in Wired, The Verge, and Dezeen. 50,000+ customers worldwide.",
    },
    {
        year: "2026",
        title: "What's Next",
        description:
            "Transparent displays. See-through laptops. The future is clear — literally.",
    },
];

const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "13", label: "Products" },
    { value: "40+", label: "Countries" },
    { value: "4.8", label: "Avg Rating" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                        Our Story
                    </p>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                        Nothing to Hide
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        We started LUMOS with a simple conviction:{" "}
                        <span className="text-white">
                            technology is beautiful, and it deserves to be seen.
                        </span>{" "}
                        Every circuit, every component, every solder joint is a testament to
                        human ingenuity. Why hide it?
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-white/5 bg-black/50 py-12 mb-20">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-white">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                        What Drives Us
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Our Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value) => (
                        <GlassCard
                            key={value.title}
                            className="flex items-start gap-6 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors"
                        >
                            <div className="p-3 rounded-2xl bg-cyan-500/10 shrink-0">
                                <value.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="font-heading text-xl font-bold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-3xl mx-auto px-4 md:px-8 mb-20">
                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
                        Our Journey
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Timeline
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

                    <div className="space-y-8">
                        {timeline.map((event, i) => (
                            <div key={event.year} className="flex gap-6 items-start">
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0">
                                    <span className="font-heading text-xs font-bold text-cyan-400">
                                        {event.year}
                                    </span>
                                </div>
                                <GlassCard className="flex-1 border-white/5 bg-white/[0.02]">
                                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {event.description}
                                    </p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission / Impact */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <GlassCard className="border-white/5 bg-gradient-to-br from-cyan-500/5 to-transparent">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-2xl bg-cyan-500/10">
                                <Globe className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white pt-2">
                                Global Impact
                            </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            LUMOS products are used in 40+ countries. Our transparent design
                            language has inspired a movement — from home offices in Tokyo to
                            gaming setups in São Paulo, the see-through revolution is global.
                        </p>
                    </GlassCard>

                    <GlassCard className="border-white/5 bg-gradient-to-br from-purple-500/5 to-transparent">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 rounded-2xl bg-purple-500/10">
                                <Users className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white pt-2">
                                Community First
                            </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Our Discord community of 15,000+ members drives product
                            development. From color choices to switch preferences, our
                            customers are co-creators. Transparency isn&apos;t just our
                            design — it&apos;s our process.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <GlassCard className="py-12 px-8 border-white/10 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                    <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to See Through?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                        Join the transparency revolution. Explore our full collection and
                        find the perfect piece for your setup.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="/shop">
                            <Button
                                size="lg"
                                className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-12"
                            >
                                Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full border-white/20 hover:bg-white/10 px-8 h-12 backdrop-blur-md"
                            >
                                Read Our Blog
                            </Button>
                        </Link>
                    </div>
                </GlassCard>
            </section>
        </main>
    );
}
