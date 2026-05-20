import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "PC Builder",
};

export default function PcBuilderPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">PC Builder tool page</p>
    </Container>
  );
}
