import Link from "next/link";
import { Section } from "@/components/layout/section";
import { featuredCategories } from "@/data/mock-products";

export function FeaturedCategories() {
  return (
    <Section title="Featured Categories" subtitle="Browse by product category">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 xl:grid-cols-8">
        {featuredCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="group flex flex-col items-center gap-3 rounded-xl border border-border-primary bg-bg-secondary p-4 transition-all hover:border-border-accent hover:shadow-glow lg:p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-tertiary text-2xl transition-transform group-hover:scale-110">
              {cat.icon}
            </div>
            <div className="text-center">
              <span className="text-body-sm font-medium text-text-primary group-hover:text-accent">
                {cat.name}
              </span>
              <p className="mt-0.5 text-caption text-text-tertiary">
                {cat.productCount}+ Products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
