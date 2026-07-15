import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Purelle cart — frontend demo checkout.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
