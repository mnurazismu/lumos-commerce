import { GlassCard } from "@/components/ui/glass-card";
import { BlogPost } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden border-white/5 bg-white/[0.02] hover:bg-white/5 transition-all">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">
                        {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-white/10">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                    sizes="28px"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-white">
                                    {post.author.name}
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                        </div>
                    </div>
                </div>
            </GlassCard>
        </Link>
    );
}
