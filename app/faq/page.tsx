import { FAQS, FAQ_CATEGORIES } from "@/lib/data";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | LUMOS",
    description:
        "Frequently asked questions about LUMOS products, shipping, returns, and care.",
};

export default function FaqPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
            <div className="mb-16 text-center space-y-6">
                <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                    Support
                </p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    FAQ
                </h1>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                    Got questions? We&apos;ve got answers. If you can&apos;t find what
                    you&apos;re looking for, don&apos;t hesitate to reach out.
                </p>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-12">
                {FAQ_CATEGORIES.map((category) => {
                    const categoryFaqs = FAQS.filter(
                        (faq) => faq.category === category.slug
                    );
                    if (categoryFaqs.length === 0) return null;

                    return (
                        <section key={category.slug}>
                            <h2 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-0.5 bg-cyan-500 rounded-full" />
                                {category.label}
                            </h2>

                            <Accordion>
                                {categoryFaqs.map((faq, i) => (
                                    <AccordionItem
                                        key={faq.id}
                                        title={faq.question}
                                        defaultOpen={i === 0}
                                    >
                                        {faq.answer}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    );
                })}
            </div>

            {/* Still Need Help CTA */}
            <GlassCard className="mt-16 text-center py-12 border-white/10 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
                <div className="p-3 rounded-full bg-cyan-500/10 inline-flex mb-4">
                    <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    Still Need Help?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Can&apos;t find the answer you&apos;re looking for? Our support team
                    is ready to help.
                </p>
                <Link href="/contact">
                    <Button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 h-11">
                        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </GlassCard>
        </main >
    );
}
