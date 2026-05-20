import Link from "next/link";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product/product-card";
import { laptopProducts } from "@/data/mock-products";

export function LaptopSection() {
  return (
    <Section
      title="Laptops"
      subtitle="From ultrabooks to gaming powerhouses"
      action={
        <Link
          href="/categories/laptop"
          className="text-body-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          All Laptops →
        </Link>
      }
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {laptopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
