import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Order Tracking",
};

export default function OrderTrackingPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Order tracking page</p>
    </Container>
  );
}
