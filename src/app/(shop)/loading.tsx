import { Container } from "@/components/layout/container";
import { BannerSkeleton } from "@/components/skeletons/banner-skeleton";
import { ProductGridSkeleton } from "@/components/skeletons/product-grid-skeleton";

export default function Loading() {
  return (
    <Container className="space-y-12 py-8">
      <BannerSkeleton />
      <div className="space-y-4">
        <div className="skeleton h-8 w-48" />
        <ProductGridSkeleton count={8} />
      </div>
    </Container>
  );
}
