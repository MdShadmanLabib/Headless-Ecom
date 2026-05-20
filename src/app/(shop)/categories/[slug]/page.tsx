import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { CategoryContent } from "@/components/category";
import {
  allCategoryProducts,
  categoryInfoMap,
} from "@/data/mock-category-products";
import type { BreadcrumbItem } from "@/types";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const info = categoryInfoMap[slug];
  const name =
    info?.name ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${name} - TechVault`,
    description:
      info?.description ??
      `Shop the best ${name} products at TechVault. Premium quality, competitive prices.`,
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const info = categoryInfoMap[slug];
  const categoryName =
    info?.name ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbs: BreadcrumbItem[] = [];
  if (info?.parentSlug && info?.parentName) {
    breadcrumbs.push({
      label: info.parentName,
      href: `/categories/${info.parentSlug}`,
    });
  }
  breadcrumbs.push({ label: categoryName });

  return (
    <Container className="py-4 sm:py-6">
      <Breadcrumb items={breadcrumbs} />

      {/* Category Header */}
      <div className="mb-6 mt-2">
        <h1 className="text-h2 font-bold tracking-tight text-text-primary md:text-h1">
          {categoryName}
        </h1>
        {info?.description && (
          <p className="mt-2 max-w-2xl text-body-sm text-text-secondary">
            {info.description}
          </p>
        )}
      </div>

      <CategoryContent
        products={allCategoryProducts}
        categorySlug={slug}
      />
    </Container>
  );
}
