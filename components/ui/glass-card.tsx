import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "dark" | "neon";
}

export function GlassCard({ children, className, variant = "default", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/20",
                variant === "dark" && "bg-black/40",
                variant === "neon" && "border-cyan-500/30 bg-cyan-900/10 shadow-[0_0_30px_-10px_rgba(0,255,255,0.2)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
