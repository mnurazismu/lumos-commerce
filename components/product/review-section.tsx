import { GlassCard } from "@/components/ui/glass-card";
import { Review } from "@/lib/data";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ReviewSectionProps {
    reviews: Review[];
    averageRating: number;
    totalReviews: number;
}

export function ReviewSection({
    reviews,
    averageRating,
    totalReviews,
}: ReviewSectionProps) {
    return (
        <div className="space-y-6">
            {/* Summary */}
            <GlassCard className="border-white/5 bg-white/[0.02] flex items-center gap-6">
                <div className="text-center pr-6 border-r border-white/10">
                    <p className="font-heading text-4xl font-bold text-white">
                        {averageRating}
                    </p>
                    <div className="flex gap-0.5 mt-1 justify-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(averageRating)
                                        ? "fill-cyan-400 text-cyan-400"
                                        : "text-white/10"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        {totalReviews} reviews
                    </p>
                </div>

                {/* Rating distribution (simple bar) */}
                <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((star) => {
                        const count = reviews.filter((r) => r.rating === star).length;
                        const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                        return (
                            <div key={star} className="flex items-center gap-2 text-xs">
                                <span className="text-muted-foreground w-3">{star}</span>
                                <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-cyan-500 rounded-full"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <span className="text-muted-foreground w-6 text-right">
                                    {count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </GlassCard>

            {/* Individual Reviews */}
            <div className="space-y-4">
                {reviews.map((review) => (
                    <GlassCard
                        key={review.id}
                        className="border-white/5 bg-white/[0.02]"
                    >
                        <div className="flex items-start gap-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
                                <Image
                                    src={review.avatar}
                                    alt={review.author}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-sm font-medium text-white">
                                        {review.author}
                                    </h4>
                                    {review.verified && (
                                        <span className="flex items-center gap-1 text-xs text-emerald-400">
                                            <CheckCircle className="w-3 h-3" /> Verified
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 ${i < review.rating
                                                        ? "fill-cyan-400 text-cyan-400"
                                                        : "text-white/10"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {new Date(review.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>

                                {review.title && (
                                    <p className="font-medium text-white text-sm mb-1">
                                        {review.title}
                                    </p>
                                )}
                                <p className="text-sm text-muted-foreground">
                                    {review.comment}
                                </p>

                                {review.helpful > 0 && (
                                    <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                                        <ThumbsUp className="w-3 h-3" />
                                        <span>{review.helpful} found this helpful</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
