// ============================================================
// LUMOS Commerce — Central Type Definitions
// ============================================================

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    category: CategorySlug;
    badge?: "new" | "bestseller" | "limited" | "sale";
    specs: Record<string, string>;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    colors?: ProductColor[];
}

export interface ProductColor {
    name: string;
    hex: string;
}

export type CategorySlug =
    | "keyboards"
    | "audio"
    | "peripherals"
    | "accessories"
    | "phone-cases"
    | "speakers";

export interface Category {
    slug: CategorySlug;
    name: string;
    description: string;
    icon: string; // Lucide icon name
    productCount: number;
}

export interface Collection {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    productIds: string[];
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Full markdown-style content
    image: string;
    author: BlogAuthor;
    date: string; // ISO date string
    tags: string[];
    readTime: number; // minutes
}

export interface BlogAuthor {
    name: string;
    avatar: string;
    role: string;
}

export interface Review {
    id: string;
    productId: string;
    author: string;
    avatar: string;
    rating: number; // 1-5
    title: string;
    comment: string;
    date: string; // ISO date string
    verified: boolean;
    helpful: number;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "shipping" | "returns" | "product-care" | "orders" | "general";
}

export interface Testimonial {
    id: string;
    author: string;
    role: string;
    company: string;
    comment: string;
    avatar: string;
    rating: number;
}
