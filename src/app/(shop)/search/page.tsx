import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <Container className="py-8">
      <p className="text-text-secondary">Search results page</p>
    </Container>
  );
}
