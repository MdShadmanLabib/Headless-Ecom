import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Shopping cart page</p>
    </Container>
  );
}
