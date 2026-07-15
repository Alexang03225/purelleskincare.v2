import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Purelle customer support — demo form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
