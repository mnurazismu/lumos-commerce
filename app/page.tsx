import { FeaturedCarousel } from "@/components/home/featured-carousel";
import { CategoryGrid } from "@/components/home/category-grid";
import { NewArrivals } from "@/components/home/new-arrivals";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";
import { BrandMarquee } from "@/components/home/brand-marquee";
import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start relative overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Brand Marquee */}
      <BrandMarquee />

      {/* 3. Shop by Category */}
      <CategoryGrid />

      {/* 4. Featured Carousel */}
      <section className="w-full bg-black/50 backdrop-blur-sm z-10 border-t border-b border-white/5">
        <FeaturedCarousel />
      </section>

      {/* 5. New Arrivals */}
      <NewArrivals />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Newsletter CTA */}
      <Newsletter />
    </main>
  );
}
