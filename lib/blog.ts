import { BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "blog-1",
        slug: "why-transparency-matters",
        title: "Why Transparency Matters: The Philosophy Behind LUMOS",
        excerpt:
            "In a world of sealed black boxes, we chose to reveal. Here's the story of why we believe technology should be seen, not hidden.",
        content: `
Every piece of technology you own is a marvel of engineering. Thousands of components, millions of transistors, intricate circuits — all hidden behind opaque plastic and aluminum shells. At LUMOS, we asked a simple question: **why?**

## The Beauty of Engineering

When you look at a mechanical watch, the transparent caseback isn't just a design choice — it's an invitation to appreciate craftsmanship. We apply the same philosophy to modern technology.

Our transparent polycarbonate housings don't just look different. They tell a story. Every solder joint, every trace on the PCB, every component placement — these are the fingerprints of the engineers who built them.

## Transparency as Trust

There's a deeper meaning to transparency. When we show you what's inside, we're saying: **we have nothing to hide.** No shortcuts, no cheap components hidden behind fancy marketing. What you see is literally what you get.

## The Inspiration

The LUMOS journey started in a small workshop where our founder would disassemble every gadget he owned, just to understand how it worked. The question was always: "Why do I need to break it to see it?"

That question became our mission: **to reveal is to empower.**

## What's Next

We're constantly pushing the boundaries of transparent design. From new materials to innovative manufacturing processes, every day brings us closer to a world where technology is celebrated, not concealed.

*Because the most beautiful part of any machine is the one you can see working.*
    `.trim(),
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        author: {
            name: "Alex Tran",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
            role: "Founder & CEO",
        },
        date: "2026-02-10",
        tags: ["philosophy", "design", "transparency"],
        readTime: 5,
    },
    {
        id: "blog-2",
        slug: "anatomy-of-mechanical-keyboard",
        title: "Anatomy of a Mechanical Keyboard: What's Under the Keycaps",
        excerpt:
            "A deep dive into what makes our transparent keyboards tick — from PCBs to stabilizers, here's everything happening beneath your fingertips.",
        content: `
Mechanical keyboards have experienced a renaissance in the past decade, but most people never see what makes them special. With our transparent keyboards, every layer is visible. Let's explore them.

## Layer 1: The PCB

The printed circuit board is the brain of your keyboard. Our PCBs use a 1.6mm FR4 substrate with gold-plated contacts for reliable switch connections. The traces are designed not just for function, but for aesthetics — creating symmetric, flowing patterns visible through the clear case.

## Layer 2: The Switches

We use custom-designed Lumos Crystal switches. The transparent housing allows RGB light to pass through evenly, while the stem design provides a smooth linear feel with 45g actuation force.

## Layer 3: The Plate

An aluminum plate sits between the switches and PCB. In our gasket-mount designs, silicone gaskets decouple the plate from the case, creating a softer, more cushioned typing feel.

## Layer 4: Sound Dampening

Between the PCB and bottom case, we place:
- **IXPE foam** for switch sound consistency
- **PE foam** for a "poppy" sound signature
- **Silicone pour** in the bottom case for bass absorption

## The Case

Our cases are CNC-machined from optical-grade polycarbonate, then hand-polished to achieve 92% light transmission. It's the same material used in bulletproof glass — tough enough for daily use, clear enough to show everything inside.

*Every keystroke is a performance, and now you have front-row seats.*
    `.trim(),
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
        author: {
            name: "Mika Chen",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
            role: "Lead Product Engineer",
        },
        date: "2026-01-28",
        tags: ["keyboards", "engineering", "deep-dive"],
        readTime: 7,
    },
    {
        id: "blog-3",
        slug: "transparent-materials-science",
        title: "The Science of Transparent Materials in Consumer Tech",
        excerpt:
            "From polycarbonate to acrylic to glass — how we choose the right transparent material for each product.",
        content: `
Not all transparent materials are created equal. Each LUMOS product uses a carefully selected material based on its specific requirements. Here's our material selection process.

## Polycarbonate (PC)

**Used in:** Keyboards, Mouse, Earbuds

Polycarbonate is our workhorse material. It offers:
- **Impact resistance** 250x greater than glass
- **92% light transmission** when polished
- **Heat resistance** up to 135°C
- **Lightweight** — 50% lighter than glass

The challenge? Polycarbonate is prone to micro-scratches. We apply a nano-coating that provides scratch resistance while maintaining clarity.

## Tempered Glass

**Used in:** Crystal Dock, Phantom Trackpad

When we need absolute scratch resistance and a premium feel, we turn to tempered glass. Our glass components undergo a chemical strengthening process (ion exchange) that creates a compression layer on the surface.

## Acrylic (PMMA)

**Used in:** Crystal Speaker, Desk Pad

Acrylic offers the highest optical clarity (93% transmission) of any plastic. It's easier to machine into complex shapes and can be polished to an optically perfect finish. The trade-off is lower impact resistance compared to polycarbonate.

## The Future: Transparent Ceramics

We're experimenting with transparent aluminum oxynitride (ALON) — a ceramic material that's harder than sapphire and optically transparent. It's currently used in military applications, but we're working on making it viable for consumer products.

*The material is the message. When it's transparent, the message is clear.*
    `.trim(),
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
        author: {
            name: "Dr. Sarah Park",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
            role: "Materials Scientist",
        },
        date: "2026-01-15",
        tags: ["materials", "science", "engineering"],
        readTime: 6,
    },
    {
        id: "blog-4",
        slug: "building-perfect-desk-setup",
        title: "Building the Perfect Transparent Desk Setup",
        excerpt:
            "A complete guide to creating a cohesive, all-transparent workstation that looks like it belongs in a sci-fi movie.",
        content: `
You've got one LUMOS product. Then another. Before you know it, you're building the ultimate transparent desk setup. Here's our guide to making it perfect.

## The Foundation: Desk Pad

Start with the Lumos Desk Pad. Its edge-lit RGB creates an ambient glow that sets the stage for everything else. Pro tip: set it to a soft cyan to match our signature color.

## The Core: Keyboard + Mouse

The Lumos Key 60 (or 75 if you need function keys) paired with the Ghost Mouse creates a striking centerpiece. Position them on the desk pad so the RGB underglow illuminates through their transparent cases.

## The Audio

Place the Crystal Speaker behind your monitor. The visible drivers and beat-sync lighting add movement to your setup. For personal listening, the ClearBuds Pro sit beautifully on a transparent stand.

## Connectivity

The Crystal Dock handles all your connections while looking like a piece of art. Route your Glass Cables visibly — they're designed to be seen, not hidden.

## The Phone

Keep your phone in a Lumos Case Pro on a transparent wireless charger. The visible MagSafe magnets connecting to the charger create a satisfying visual.

## Lighting Tips

- Keep room lighting low to let the RGB shine
- Use a monitor light bar with warm white to create contrast
- Consider a transparent LED strip behind your desk for wall wash

## The Result

When everything comes together, you don't just have a desk — you have a transparent tech gallery. Every component reveals its inner workings, creating a cohesive aesthetic that's uniquely LUMOS.

*Your setup isn't just where you work. It's how you express yourself.*
    `.trim(),
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
        author: {
            name: "Alex Tran",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
            role: "Founder & CEO",
        },
        date: "2026-01-05",
        tags: ["setup", "guide", "lifestyle"],
        readTime: 8,
    },
];

// ── Helpers ─────────────────────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
    return BLOG_POSTS.filter((p) => p.tags.includes(tag));
}

export function getAllBlogTags(): string[] {
    const tags = new Set<string>();
    BLOG_POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
}
