import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Compare Products",
};

export default function ComparePage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Product comparison page</p>
    </Container>
  );
}
