// ============================================================
// LUMOS Commerce — Barrel Export
// Central re-export of all data, types, and helpers.
// ============================================================

// Types
export type {
    Product,
    ProductColor,
    CategorySlug,
    Category,
    Collection,
    BlogPost,
    BlogAuthor,
    Review,
    FAQ,
    Testimonial,
} from "./types";

// Products & Categories
export {
    PRODUCTS,
    CATEGORIES,
    getProductById,
    getProductBySlug,
    getProductsByCategory,
    getCategoryBySlug,
    getFeaturedProducts,
    getNewArrivals,
    getSaleProducts,
} from "./products";

// Collections
export { COLLECTIONS, getCollectionBySlug } from "./collections";

// Blog
export {
    BLOG_POSTS,
    getBlogPostBySlug,
    getBlogPostsByTag,
    getAllBlogTags,
} from "./blog";

// Reviews
export {
    REVIEWS,
    getReviewsByProductId,
    getAverageRating,
} from "./reviews";

// FAQs
export { FAQS, getFaqsByCategory, FAQ_CATEGORIES } from "./faqs";

// Testimonials
export { TESTIMONIALS } from "./testimonials";
