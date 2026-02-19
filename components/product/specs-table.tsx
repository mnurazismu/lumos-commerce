import { GlassCard } from "@/components/ui/glass-card";

interface SpecsTableProps {
    specs: Record<string, string>;
}

export function SpecsTable({ specs }: SpecsTableProps) {
    const entries = Object.entries(specs);

    return (
        <GlassCard className="border-white/5 bg-white/[0.02] p-0 overflow-hidden">
            <div className="divide-y divide-white/5">
                {entries.map(([key, value], i) => (
                    <div
                        key={key}
                        className={`flex justify-between items-center px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white/[0.01]" : ""
                            }`}
                    >
                        <span className="text-muted-foreground font-medium">{key}</span>
                        <span className="text-white font-medium text-right">{value}</span>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}
