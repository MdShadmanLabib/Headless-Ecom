import Link from "next/link";
import { Section } from "@/components/layout/section";
import { brands } from "@/data/mock-products";

export function BrandShowcase() {
  return (
    <Section title="Shop by Brand" subtitle="Trusted brands, premium quality">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="group flex h-20 items-center justify-center rounded-xl border border-border-primary bg-bg-secondary transition-all hover:border-border-accent hover:shadow-glow"
          >
            <span className="text-body-sm font-semibold text-text-secondary transition-colors group-hover:text-accent">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
