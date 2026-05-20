import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { gamingProducts } from "@/data/mock-products";

export function GamingSection() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-8 md:py-12 lg:py-16">
      {/* Accent glow */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[var(--container-2xl)] px-4 sm:px-6 lg:px-8">
        <Section
          title="Gaming Zone"
          subtitle="Level up your gaming setup"
          className="py-0"
          action={
            <Link
              href="/categories/gaming"
              className="text-body-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Explore Gaming →
            </Link>
          }
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {gamingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
