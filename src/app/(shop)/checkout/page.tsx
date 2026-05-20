import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Checkout page</p>
    </Container>
  );
}
