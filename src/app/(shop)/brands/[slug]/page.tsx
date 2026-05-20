import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;

  return (
    <Container className="py-8">
      <p className="text-text-secondary">
        Brand page for: <span className="text-text-primary font-medium">{slug}</span>
      </p>
    </Container>
  );
}
