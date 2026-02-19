import { FAQ } from "./types";

export const FAQS: FAQ[] = [
    // ── Shipping ─────────────────────────────────────────────
    {
        id: "faq-1",
        question: "How long does shipping take?",
        answer:
            "Standard shipping takes 5-7 business days within the US. Express shipping (2-3 business days) is available at checkout. International orders typically arrive within 10-14 business days depending on your location.",
        category: "shipping",
    },
    {
        id: "faq-2",
        question: "Do you ship internationally?",
        answer:
            "Yes! We ship to over 40 countries worldwide. International shipping costs are calculated at checkout based on your location and order weight. Customs duties and taxes may apply and are the responsibility of the buyer.",
        category: "shipping",
    },
    {
        id: "faq-3",
        question: "Is there free shipping?",
        answer:
            "We offer free standard shipping on all US orders over $99. International orders over $199 qualify for free standard international shipping.",
        category: "shipping",
    },

    // ── Returns ──────────────────────────────────────────────
    {
        id: "faq-4",
        question: "What is your return policy?",
        answer:
            "We offer a 30-day hassle-free return policy. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery. Items must be in original condition with all packaging. We provide a prepaid return label for US customers.",
        category: "returns",
    },
    {
        id: "faq-5",
        question: "How do I request a refund?",
        answer:
            "To request a refund, email support@lumos.store with your order number. We'll process your return within 1-2 business days and send you a prepaid shipping label. Refunds are issued within 5-7 business days after we receive the returned item.",
        category: "returns",
    },

    // ── Product Care ─────────────────────────────────────────
    {
        id: "faq-6",
        question: "How do I clean transparent products?",
        answer:
            "Use a soft microfiber cloth with a small amount of isopropyl alcohol (70% or less) to clean transparent surfaces. Avoid abrasive cleaners, paper towels, or rough fabrics as they can cause micro-scratches. For keyboards, remove keycaps before cleaning.",
        category: "product-care",
    },
    {
        id: "faq-7",
        question: "Will the transparent material yellow over time?",
        answer:
            "Our products use UV-stabilized polycarbonate and anti-yellowing coatings to maintain clarity. Under normal use and indoor conditions, you should not experience yellowing. We recommend avoiding prolonged direct sunlight exposure for best results.",
        category: "product-care",
    },

    // ── Orders ───────────────────────────────────────────────
    {
        id: "faq-8",
        question: "Can I modify or cancel my order?",
        answer:
            "You can modify or cancel your order within 2 hours of placing it by contacting support@lumos.store. After that window, orders enter our fulfillment process and cannot be modified. You can still return the item after receiving it.",
        category: "orders",
    },
    {
        id: "faq-9",
        question: "How can I track my order?",
        answer:
            "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order by logging into your account on our website and visiting the 'My Orders' section.",
        category: "orders",
    },

    // ── General ──────────────────────────────────────────────
    {
        id: "faq-10",
        question: "Do you offer warranty on your products?",
        answer:
            "All LUMOS products come with a 2-year limited warranty that covers manufacturing defects and material failures. This does not cover damage from drops, water exposure (unless rated), or unauthorized modifications. Extended warranty options are available at checkout.",
        category: "general",
    },
];

// ── Helpers ─────────────────────────────────────────────────

export function getFaqsByCategory(category: FAQ["category"]): FAQ[] {
    return FAQS.filter((f) => f.category === category);
}

export const FAQ_CATEGORIES: { slug: FAQ["category"]; label: string }[] = [
    { slug: "shipping", label: "Shipping" },
    { slug: "returns", label: "Returns & Refunds" },
    { slug: "product-care", label: "Product Care" },
    { slug: "orders", label: "Orders" },
    { slug: "general", label: "General" },
];
