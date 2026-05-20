import type { Metadata } from "next";

interface OrderDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: OrderDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Order #${id}`,
  };
}

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-h3 font-bold text-text-primary">Order #{id}</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        Order detail page
      </p>
    </div>
  );
}
