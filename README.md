# LUMOS Commerce

**Transparency is the new luxury.**

A premium e-commerce storefront for transparent tech accessories — built with Next.js 16, Tailwind CSS 4, Framer Motion, and Zustand. Features a glassmorphism dark aesthetic, fully animated UI, and a complete shopping flow from browsing to checkout.

---

## ✨ Features

### 🛍️ Shopping Experience
- **13 products** across 6 categories with detailed specs, reviews, and color variants
- **Product cards** with X-Ray hover effect, wishlist toggle, and quick-add-to-cart
- **Advanced shop page** — search, category filters, sort (price/name/rating)
- **4 curated collections** (Work from Home, Gaming Setup, Audio Essentials, New Arrivals)
- **Product detail** with image gallery, specifications tab, customer reviews, and related products

### 🛒 Cart & Checkout
- **Persistent cart** (Zustand + localStorage) with quantity controls (+/−)
- **Cost breakdown** — subtotal, shipping (free over $100), estimated tax, total
- **Multi-step checkout** — Shipping → Payment → Confirmation
- **Order summary sidebar** with item thumbnails and live totals

### ❤️ Wishlist
- **Persistent wishlist** with heart toggle on every product card
- **Dedicated wishlist page** with empty state CTA

### 📝 Content
- **Blog** with tag cloud, featured post hero, and article detail pages
- **FAQ** with categorized accordion sections
- **Contact page** with info cards and form
- **About page** with company timeline, core values, and stats

### 🎨 Design & UX
- **Glassmorphism** dark theme with cyan/purple accents
- **Framer Motion animations** — scroll reveals, staggered grids, floating elements, hover micro-interactions
- **Custom scrollbar** and smooth scrolling
- **Responsive** — mobile menu, adaptive grids
- **Custom 404 page**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, SSG) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| State | Zustand (persist middleware) |
| UI Components | Radix UI + shadcn/ui |
| Fonts | Inter + Outfit (Google Fonts) |
| Icons | Lucide React |
| Language | TypeScript |

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/mnurazismu/lumos-commerce.git
cd lumos-commerce

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
lumos-commerce/
├── app/
│   ├── page.tsx              # Homepage (7 sections)
│   ├── layout.tsx            # Root layout (navbar, cart, footer)
│   ├── not-found.tsx         # Custom 404
│   ├── shop/page.tsx         # Shop with search/filter/sort
│   ├── product/[id]/page.tsx # Product detail (SSG)
│   ├── categories/           # Category listing + dynamic pages
│   ├── collections/          # Collection listing + dynamic pages
│   ├── checkout/page.tsx     # Multi-step checkout
│   ├── blog/                 # Blog listing + [slug] detail
│   ├── wishlist/page.tsx     # Wishlist page
│   ├── about/page.tsx        # About with timeline & stats
│   ├── contact/page.tsx      # Contact form + info
│   └── faq/page.tsx          # FAQ with accordions
├── components/
│   ├── ui/                   # Reusable UI (button, input, glass-card, motion, skeleton, etc.)
│   ├── layout/               # Navbar, Footer, MobileMenu
│   ├── home/                 # Homepage sections (hero, category-grid, new-arrivals, etc.)
│   ├── product/              # ProductCard, WishlistButton, AddToCartButton
│   ├── cart/                  # CartSheet
│   ├── blog/                 # BlogCard
│   └── shared/               # Skeletons
├── lib/
│   ├── data.ts               # Barrel export
│   ├── products.ts           # 13 products with full data
│   ├── collections.ts        # 4 collections
│   ├── blog.ts               # 4 blog posts
│   ├── reviews.ts            # Customer reviews
│   ├── store.ts              # Zustand stores (cart + wishlist)
│   └── utils.ts              # Utilities
└── public/
    └── images/               # Product and blog images
```

---

## 📊 Build Output

```
40 static pages — 0 errors — 0 warnings

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

---

## 👤 Author

**Muhammad Nur Azis Mujiono** — [@mnurazismu](https://github.com/mnurazismu)

---

## 📄 License

MIT © 2026 [Muhammad Nur Azis Mujiono](https://github.com/mnurazismu)
