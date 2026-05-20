"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";

export function RecentlyViewed() {
  const [recentProducts] = useLocalStorage<Product[]>("techvault-recently-viewed", []);

  if (recentProducts.length === 0) return null;

  return (
    <Section title="Recently Viewed" subtitle="Continue where you left off">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {recentProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
