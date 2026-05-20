import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  return (
    <Container className="py-8">
      <p className="text-text-secondary">
        Category listing page for: <span className="text-text-primary font-medium">{slug}</span>
      </p>
    </Container>
  );
}
