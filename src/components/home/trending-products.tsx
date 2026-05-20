import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { trendingProducts } from "@/data/mock-products";

export function TrendingProducts() {
  return (
    <Section
      title="Trending Now"
      subtitle="Most popular products this week"
      action={
        <Link
          href="/products?sort=trending"
          className="text-body-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View All →
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
