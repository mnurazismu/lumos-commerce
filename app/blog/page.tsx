import { BLOG_POSTS, getAllBlogTags } from "@/lib/data";
import { BlogCard } from "@/components/blog/blog-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | LUMOS",
    description:
        "Stories about transparent tech, design philosophy, materials science, and the future of visible engineering.",
};

export default function BlogPage() {
    const tags = getAllBlogTags();

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-16 text-center space-y-6">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                    The LUMOS Journal
                </p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Blog
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Deep dives into transparent tech, engineering stories, and the
                    philosophy behind making the invisible visible.
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs uppercase tracking-wider text-muted-foreground bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors cursor-pointer"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Featured Post */}
            <div className="mb-12">
                <BlogCard post={BLOG_POSTS[0]} />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_POSTS.slice(1).map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
}
