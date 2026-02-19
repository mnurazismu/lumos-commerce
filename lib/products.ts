/**
 * LUMOS Commerce - Transparent Tech E-Commerce
 * Product & Category Data
 *
 * @author Muhammad Nur Azis Mujiono
 * @github https://github.com/mnurazismu
 * @year 2026
 *
 * Licensed under MIT. See LICENSE file for full terms.
 */

import { Product, Category } from "./types";

// ============================================================
// Categories
// ============================================================

export const CATEGORIES: Category[] = [
    {
        slug: "keyboards",
        name: "Keyboards",
        description: "Transparent mechanical keyboards with exposed switches and RGB.",
        icon: "Keyboard",
        productCount: 3,
    },
    {
        slug: "audio",
        name: "Audio",
        description: "Crystal-clear sound meets crystal-clear design.",
        icon: "Headphones",
        productCount: 3,
    },
    {
        slug: "peripherals",
        name: "Peripherals",
        description: "Precision tools with skeleton aesthetics.",
        icon: "Mouse",
        productCount: 2,
    },
    {
        slug: "accessories",
        name: "Accessories",
        description: "Essential desk companions in tempered glass.",
        icon: "Cable",
        productCount: 2,
    },
    {
        slug: "phone-cases",
        name: "Phone Cases",
        description: "Show off your phone's engineering with transparent protection.",
        icon: "Smartphone",
        productCount: 2,
    },
    {
        slug: "speakers",
        name: "Speakers",
        description: "Visible sound. Premium transparent speaker systems.",
        icon: "Speaker",
        productCount: 1,
    },
];

// ============================================================
// Products (12+)
// ============================================================

export const PRODUCTS: Product[] = [
    // ── Keyboards ──────────────────────────────────────────────
    {
        id: "1",
        name: "Lumos Key 60",
        slug: "lumos-key-60",
        description: "Transparent mechanical keyboard with custom switches.",
        longDescription:
            "The Lumos Key 60 is our flagship compact keyboard, built with a fully transparent polycarbonate chassis that reveals every switch, PCB trace, and LED beneath the surface. Featuring hot-swappable mechanical switches, per-key RGB lighting, and a sound-dampening foam layer, this keyboard delivers both visual spectacle and serious typing performance. The 60% layout keeps your desk clean while retaining all essential keys through intuitive layer functions.",
        price: 199,
        originalPrice: 249,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
        ],
        category: "keyboards",
        badge: "bestseller",
        specs: {
            Layout: "60% Compact",
            Switches: "Lumos Crystal Linear",
            Keycaps: "Transparent PBT Double-shot",
            Connectivity: "USB-C / Bluetooth 5.1",
            "Battery Life": "72 hours (wireless)",
            Backlight: "Per-key RGB",
            Weight: "680g",
            Material: "Polycarbonate + Aluminum Plate",
        },
        rating: 4.8,
        reviewCount: 124,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Smoke Black", hex: "#37474F" },
            { name: "Frost White", hex: "#FAFAFA" },
        ],
    },
    {
        id: "2",
        name: "Lumos Key 75",
        slug: "lumos-key-75",
        description: "75% layout with knob control and transparent frame.",
        longDescription:
            "The Lumos Key 75 extends our keyboard lineup with a 75% layout that includes function row, arrow keys, and a premium aluminum rotary knob for volume and custom controls. The transparent gasket-mount design ensures a soft, cushioned typing feel while showcasing the internal components. Triple-mode connectivity lets you switch between wired, 2.4GHz wireless, and Bluetooth seamlessly.",
        price: 249,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
            "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
        ],
        category: "keyboards",
        badge: "new",
        specs: {
            Layout: "75% with Knob",
            Switches: "Lumos Crystal Tactile",
            Keycaps: "Transparent PBT Double-shot",
            Connectivity: "USB-C / 2.4GHz / Bluetooth 5.1",
            "Battery Life": "60 hours (wireless)",
            Backlight: "Per-key RGB + Side glow",
            Weight: "850g",
            Material: "Polycarbonate + Gasket Mount",
        },
        rating: 4.9,
        reviewCount: 67,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Midnight Blue", hex: "#1A237E" },
        ],
    },
    {
        id: "3",
        name: "Lumos Key TKL",
        slug: "lumos-key-tkl",
        description: "Tenkeyless layout for the competitive gamer.",
        longDescription:
            "Designed for gamers who demand speed and precision, the Lumos Key TKL features a tenkeyless layout with rapid-trigger switches capable of 0.1mm actuation. The transparent housing lets you watch the optical switches fire in real-time, turning every keystroke into a visual event. With 8000Hz polling rate and N-key rollover, every input is registered with zero delay.",
        price: 279,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
            "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
        ],
        category: "keyboards",
        specs: {
            Layout: "TKL (Tenkeyless)",
            Switches: "Lumos Rapid Optical",
            Keycaps: "Transparent ABS Shine-through",
            Connectivity: "USB-C (Wired)",
            "Polling Rate": "8000Hz",
            Backlight: "Per-key RGB + Underglow",
            Weight: "920g",
            Material: "Polycarbonate + Steel Plate",
        },
        rating: 4.7,
        reviewCount: 42,
        inStock: true,
    },

    // ── Audio ──────────────────────────────────────────────────
    {
        id: "4",
        name: "ClearBuds Pro",
        slug: "clearbuds-pro",
        description: "Noise cancelling earbuds with transparent casing.",
        longDescription:
            "ClearBuds Pro redefines what wireless earbuds can be. The transparent shell reveals custom-tuned 10mm drivers, active noise cancellation circuitry, and a compact battery — all visible through medical-grade polycarbonate. With adaptive ANC, transparency mode, and spatial audio support, these earbuds deliver audiophile-grade sound in a design that's unmistakably LUMOS.",
        price: 149,
        originalPrice: 179,
        image: "/clearbuds-pro.png",
        images: [
            "/clearbuds-pro.png",
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
        ],
        category: "audio",
        badge: "bestseller",
        specs: {
            Driver: "10mm Custom Dynamic",
            ANC: "Adaptive Active Noise Cancellation",
            "Battery Life": "8h (buds) / 32h (case)",
            Connectivity: "Bluetooth 5.3",
            Codec: "AAC, LDAC, aptX Adaptive",
            "Water Resistance": "IPX5",
            Weight: "5.2g per bud",
            Material: "Medical-grade Polycarbonate",
        },
        rating: 4.6,
        reviewCount: 203,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Rose Quartz", hex: "#F8BBD0" },
            { name: "Onyx", hex: "#212121" },
        ],
    },
    {
        id: "5",
        name: "ClearBuds Lite",
        slug: "clearbuds-lite",
        description: "Lightweight transparent earbuds for everyday use.",
        longDescription:
            "The ClearBuds Lite brings the signature LUMOS transparency to an everyday price point. These lightweight earbuds feature 8mm drivers tuned for balanced sound, environmental noise cancellation, and a comfortable semi-in-ear design that lets you wear them all day. The transparent case charges via USB-C and supports wireless charging.",
        price: 79,
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
        ],
        category: "audio",
        badge: "new",
        specs: {
            Driver: "8mm Dynamic",
            ANC: "Environmental Noise Cancellation",
            "Battery Life": "6h (buds) / 24h (case)",
            Connectivity: "Bluetooth 5.2",
            Codec: "AAC, SBC",
            "Water Resistance": "IPX4",
            Weight: "4.1g per bud",
            Material: "Polycarbonate",
        },
        rating: 4.3,
        reviewCount: 89,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Lavender", hex: "#CE93D8" },
        ],
    },
    {
        id: "6",
        name: "Crystal Speaker",
        slug: "crystal-speaker",
        description: "Desktop speaker with visible woofer and transparent enclosure.",
        longDescription:
            "The Crystal Speaker transforms your desk into a concert stage. Twin 3-inch full-range drivers and a passive radiator sit inside a hand-polished transparent acrylic enclosure, creating a mesmerizing visual experience as the drivers pulse with your music. The integrated DAC/amp delivers clean, detailed sound while RGB ring lighting syncs with the beat.",
        price: 299,
        originalPrice: 349,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
        ],
        category: "speakers",
        badge: "limited",
        specs: {
            Drivers: "2x 3\" Full Range + Passive Radiator",
            Power: "30W RMS",
            Frequency: "60Hz - 20kHz",
            Connectivity: "USB-C / Bluetooth 5.1 / 3.5mm AUX",
            DAC: "Built-in 24bit/96kHz",
            Lighting: "RGB Ring (beat-sync)",
            Weight: "1.8kg",
            Material: "Acrylic + Aluminum Base",
        },
        rating: 4.9,
        reviewCount: 31,
        inStock: true,
    },

    // ── Peripherals ────────────────────────────────────────────
    {
        id: "7",
        name: "Ghost Mouse",
        slug: "ghost-mouse",
        description: "Ergonomic wireless mouse with skeleton design.",
        longDescription:
            "The Ghost Mouse strips away convention to reveal the engineering marvel inside every mouse. Through its transparent shell, you can see the precision optical sensor, scroll wheel mechanism, and internal PCB in all their glory. Weighing just 58g with a PAW3395 sensor, it's built for both gaming precision and ergonomic all-day comfort.",
        price: 89,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
        ],
        category: "peripherals",
        badge: "bestseller",
        specs: {
            Sensor: "PAW3395 Optical",
            DPI: "100 - 26,000",
            "Polling Rate": "1000Hz (4000Hz optional)",
            Buttons: "6 Programmable",
            Connectivity: "USB-C / 2.4GHz / Bluetooth",
            "Battery Life": "80 hours",
            Weight: "58g",
            Material: "Transparent Polycarbonate",
        },
        rating: 4.7,
        reviewCount: 156,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Smoke Black", hex: "#37474F" },
        ],
    },
    {
        id: "8",
        name: "Phantom Trackpad",
        slug: "phantom-trackpad",
        description: "Multi-touch glass trackpad with transparent haptic surface.",
        longDescription:
            "The Phantom Trackpad reimagines the pointing device with a fully transparent glass surface that hovers above its base, revealing the haptic motor array beneath. Supporting multi-touch gestures, haptic feedback, and customizable zones, it seamlessly switches between Mac and Windows. The edge-to-edge glass surface provides 30% more tracking area than standard trackpads.",
        price: 129,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
        ],
        category: "peripherals",
        badge: "new",
        specs: {
            Surface: "Tempered Glass",
            "Touch Points": "10-point Multi-touch",
            Haptics: "Linear Resonant Actuator Array",
            Connectivity: "USB-C / Bluetooth 5.1",
            Compatibility: "macOS / Windows / Linux",
            "Battery Life": "60 days",
            Dimensions: "160 × 115 × 8mm",
            Material: "Glass + Aluminum",
        },
        rating: 4.5,
        reviewCount: 38,
        inStock: true,
    },

    // ── Accessories ────────────────────────────────────────────
    {
        id: "9",
        name: "Crystal Dock",
        slug: "crystal-dock",
        description: "Universal USB-C dock in tempered glass.",
        longDescription:
            "The Crystal Dock combines powerful connectivity with LUMOS aesthetics. This transparent USB-C dock features 12 ports — including dual HDMI 2.1, 10Gbps USB-A, SD/microSD slots, and 100W passthrough charging — all visible through its tempered glass enclosure. LED indicators glow softly beneath the surface, showing active connections at a glance.",
        price: 129,
        originalPrice: 159,
        image: "https://images.unsplash.com/photo-1542487354-feaf93476caa?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1542487354-feaf93476caa?w=800&q=80",
        ],
        category: "accessories",
        badge: "sale",
        specs: {
            Ports: "12-in-1 (2x HDMI, 3x USB-A, 2x USB-C, Ethernet, SD, microSD, 3.5mm, DC)",
            "Video Output": "Dual 4K@60Hz / Single 8K@30Hz",
            "Data Speed": "USB 3.2 Gen 2 (10Gbps)",
            "Power Delivery": "100W Passthrough",
            Compatibility: "USB-C / Thunderbolt 3/4",
            Weight: "340g",
            Material: "Tempered Glass + Aluminum",
        },
        rating: 4.4,
        reviewCount: 72,
        inStock: true,
    },
    {
        id: "10",
        name: "Glass Cable",
        slug: "glass-cable",
        description: "Transparent braided USB-C cable with visible shielding.",
        longDescription:
            "Not just a cable — a statement. The Glass Cable features a transparent PVC jacket that reveals the individually color-coded internal wires and braided EMI shielding. Supporting 240W USB PD charging and 40Gbps Thunderbolt 4 data transfer, it's the world's first cable that looks as good as it performs. Available in 1m and 2m lengths.",
        price: 39,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
        ],
        category: "accessories",
        specs: {
            Type: "USB-C to USB-C",
            "Data Speed": "Thunderbolt 4 (40Gbps)",
            "Power Delivery": "240W USB PD 3.1",
            "Video Support": "8K@60Hz",
            Length: "1m / 2m",
            Certification: "USB-IF Certified",
            Material: "Transparent PVC + Braided Shield",
        },
        rating: 4.8,
        reviewCount: 215,
        inStock: true,
        colors: [
            { name: "Clear", hex: "#E0F7FA" },
            { name: "Neon Cyan", hex: "#00E5FF" },
            { name: "Neon Pink", hex: "#FF4081" },
        ],
    },

    // ── Phone Cases ────────────────────────────────────────────
    {
        id: "11",
        name: "Lumos Case Pro",
        slug: "lumos-case-pro",
        description: "MagSafe-compatible transparent case with circuit board print.",
        longDescription:
            "The Lumos Case Pro wraps your iPhone in a clear, impact-resistant shell that features a precision-printed circuit board pattern on the interior. The result? Your phone looks like it has a visible motherboard. MagSafe magnets are integrated and visible through the transparent back, and the raised bezels provide camera and screen protection without hiding your device.",
        price: 49,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
        ],
        category: "phone-cases",
        badge: "bestseller",
        specs: {
            Compatibility: "iPhone 15 Pro / 15 Pro Max",
            Protection: "MIL-STD-810G (2m drop)",
            MagSafe: "Built-in (visible magnets)",
            Material: "Hybrid TPU + Polycarbonate",
            "Bezel Raise": "1.2mm (camera) / 0.8mm (screen)",
            Weight: "32g",
            Design: "Circuit Board Print Interior",
        },
        rating: 4.6,
        reviewCount: 340,
        inStock: true,
    },
    {
        id: "12",
        name: "Lumos Case Mini",
        slug: "lumos-case-mini",
        description: "Ultra-thin transparent case — pure minimalism.",
        longDescription:
            "For those who want maximum transparency with minimum bulk. The Lumos Case Mini is just 0.35mm thin — so thin you'll forget it's there. Made from aerospace-grade PP material, it protects against micro-scratches while letting your phone's original design shine through completely. No branding, no prints, just pure clarity.",
        price: 29,
        image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=800&q=80",
        ],
        category: "phone-cases",
        specs: {
            Compatibility: "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max",
            Thickness: "0.35mm",
            Protection: "Anti-scratch / Anti-yellowing",
            MagSafe: "Compatible (no magnets)",
            Material: "Aerospace PP",
            Weight: "8g",
            Design: "Zero branding, full transparency",
        },
        rating: 4.2,
        reviewCount: 178,
        inStock: true,
        colors: [
            { name: "Crystal Clear", hex: "#E0F7FA" },
            { name: "Frosted", hex: "#B0BEC5" },
        ],
    },
    {
        id: "13",
        name: "Lumos Desk Pad",
        slug: "lumos-desk-pad",
        description: "Transparent edge-lit desk pad with RGB underglow.",
        longDescription:
            "Transform your workspace with the Lumos Desk Pad. This clear acrylic desk pad features edge-lit RGB lighting that creates a stunning underglow effect on your desk surface. The smooth, anti-static surface is perfect for mouse tracking, while the raised edges prevent items from sliding off. Customize the lighting through the companion app or physical touch controls on the side.",
        price: 79,
        originalPrice: 99,
        image: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&q=80",
        ],
        category: "accessories",
        badge: "new",
        specs: {
            Size: "800 × 300 × 4mm",
            Surface: "Anti-static Acrylic",
            Lighting: "Edge-lit RGB (16.8M colors)",
            Power: "USB-C",
            Controls: "Touch / App",
            Weight: "950g",
            Material: "Clear Acrylic + Silicone Base",
        },
        rating: 4.5,
        reviewCount: 53,
        inStock: true,
    },
];

// ── Helper Functions ─────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
    return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
    return PRODUCTS.filter((p) => p.category === category);
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return CATEGORIES.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
    return PRODUCTS.filter((p) => p.badge === "bestseller" || p.badge === "new").slice(0, 6);
}

export function getNewArrivals(): Product[] {
    return PRODUCTS.filter((p) => p.badge === "new");
}

export function getSaleProducts(): Product[] {
    return PRODUCTS.filter((p) => p.badge === "sale" || p.badge === "limited");
}
