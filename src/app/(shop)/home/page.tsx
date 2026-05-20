import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { HeroBanner } from "@/components/home/hero-banner";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { PromotionalBanners } from "@/components/home/promotional-banners";
import { BrandShowcase } from "@/components/home/brand-showcase";
import { BlogPreviews } from "@/components/home/blog-previews";
import { ProductGridSkeleton } from "@/components/skeletons";

const FlashDeals = dynamic(
  () => import("@/components/home/flash-deals").then((mod) => mod.FlashDeals),
);

const TrendingProducts = dynamic(
  () =>
    import("@/components/home/trending-products").then(
      (mod) => mod.TrendingProducts,
    ),
);

const GamingSection = dynamic(
  () =>
    import("@/components/home/gaming-section").then((mod) => mod.GamingSection),
);

const LaptopSection = dynamic(
  () =>
    import("@/components/home/laptop-section").then((mod) => mod.LaptopSection),
);

const ComponentsSection = dynamic(
  () =>
    import("@/components/home/components-section").then(
      (mod) => mod.ComponentsSection,
    ),
);

const RecentlyViewed = dynamic(
  () =>
    import("@/components/home/recently-viewed").then(
      (mod) => mod.RecentlyViewed,
    ),
);

export const metadata: Metadata = {
  title: `Home | ${siteConfig.name}`,
  description: siteConfig.description,
};

function SectionSkeleton() {
  return (
    <div className="space-y-4 py-8 md:py-12">
      <div className="skeleton h-8 w-48" />
      <ProductGridSkeleton count={4} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
        <FeaturedCategories />

        <Suspense fallback={<SectionSkeleton />}>
          <FlashDeals />
        </Suspense>

        <PromotionalBanners />

        <Suspense fallback={<SectionSkeleton />}>
          <TrendingProducts />
        </Suspense>
      </div>

      <Suspense fallback={<SectionSkeleton />}>
        <GamingSection />
      </Suspense>

      <div className="mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<SectionSkeleton />}>
          <LaptopSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ComponentsSection />
        </Suspense>

        <BrandShowcase />

        <BlogPreviews />

        <RecentlyViewed />
      </div>
    </>
  );
}
