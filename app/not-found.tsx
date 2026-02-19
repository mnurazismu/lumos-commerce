import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, SearchX, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[128px] pointer-events-none" />

            <GlassCard className="max-w-lg w-full text-center py-16 border-white/5 bg-white/[0.02] relative z-10">
                <div className="p-4 rounded-full bg-white/5 inline-flex mb-6">
                    <SearchX className="w-12 h-12 text-white/20" />
                </div>

                <h1 className="font-heading text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
                    404
                </h1>

                <h2 className="font-heading text-2xl font-bold text-white mb-2">
                    Page Not Found
                </h2>

                <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                <div className="flex items-center justify-center gap-3">
                    <Link href="/">
                        <Button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-11">
                            <Home className="w-4 h-4 mr-2" /> Home
                        </Button>
                    </Link>
                    <Link href="/shop">
                        <Button
                            variant="outline"
                            className="rounded-full border-white/20 hover:bg-white/10 px-8 h-11"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Shop
                        </Button>
                    </Link>
                </div>
            </GlassCard>
        </main>
    );
}
