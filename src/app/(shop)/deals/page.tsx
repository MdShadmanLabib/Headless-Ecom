import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Deals",
};

export default function DealsPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Deals and offers page</p>
    </Container>
  );
}
