import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { componentProducts } from "@/data/mock-products";

export function ComponentsSection() {
  return (
    <Section
      title="PC Components"
      subtitle="Build your dream machine piece by piece"
      action={
        <div className="flex items-center gap-4">
          <Link
            href="/pc-builder"
            className="rounded-lg bg-accent/10 px-3 py-1.5 text-caption font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            PC Builder
          </Link>
          <Link
            href="/categories/components"
            className="text-body-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            All Components →
          </Link>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {componentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
