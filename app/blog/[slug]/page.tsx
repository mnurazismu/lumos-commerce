import { BLOG_POSTS, PRODUCTS } from "@/lib/data";
import { GlassCard } from "@/components/ui/glass-card";
import { ProductCard } from "@/components/product/product-card";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
        title: `${post.title} | LUMOS Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
            publishedTime: post.date,
            authors: [post.author.name],
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) notFound();

    // Get related posts (other posts in same tags)
    const related = BLOG_POSTS.filter(
        (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
    ).slice(0, 2);

    // Get some featured products for sidebar
    const featuredProducts = PRODUCTS.slice(0, 2);

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <article className="max-w-4xl mx-auto">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-muted-foreground hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                {/* Hero Image */}
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-white/5">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 896px) 100vw, 896px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                    {post.title}
                </h1>

                {/* Author & Meta */}
                <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-white">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min read
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none mb-16 prose-headings:font-heading prose-headings:tracking-tight prose-a:text-cyan-400 prose-strong:text-white prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:leading-relaxed">
                    {post.content.split("\n\n").map((paragraph, i) => {
                        if (paragraph.startsWith("## ")) {
                            return (
                                <h2 key={i}>{paragraph.replace("## ", "")}</h2>
                            );
                        }
                        if (paragraph.startsWith("- ")) {
                            const items = paragraph.split("\n").filter(Boolean);
                            return (
                                <ul key={i}>
                                    {items.map((item, j) => (
                                        <li key={j}>{item.replace("- ", "")}</li>
                                    ))}
                                </ul>
                            );
                        }
                        if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                            return (
                                <p key={i} className="text-cyan-400/80 italic text-center text-lg border-l-2 border-cyan-500/30 pl-6 my-8">
                                    {paragraph.replace(/^\*|\*$/g, "")}
                                </p>
                            );
                        }
                        return (
                            <p
                                key={i}
                                dangerouslySetInnerHTML={{
                                    __html: paragraph
                                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                        .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                                }}
                            />
                        );
                    })}
                </div>

                {/* Share / Related */}
                {related.length > 0 && (
                    <section className="border-t border-white/5 pt-12">
                        <h2 className="font-heading text-2xl font-bold text-white mb-8">
                            Continue Reading
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {related.map((relPost) => (
                                <Link
                                    key={relPost.id}
                                    href={`/blog/${relPost.slug}`}
                                    className="group"
                                >
                                    <GlassCard className="flex gap-4 p-4 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                                        <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-black/40">
                                            <Image
                                                src={relPost.image}
                                                alt={relPost.title}
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-xs text-muted-foreground mb-1">
                                                {relPost.readTime} min read
                                            </p>
                                            <h3 className="font-heading text-sm font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                {relPost.title}
                                            </h3>
                                        </div>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Featured Products */}
                <section className="mt-16 border-t border-white/5 pt-12">
                    <h2 className="font-heading text-2xl font-bold text-white mb-8">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
