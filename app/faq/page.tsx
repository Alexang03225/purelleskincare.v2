import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Purelle formulas, routines, and orders.",
};

export default function FAQPage() {
  return (
    <div className="section-padding pb-20 pt-28 lg:pt-32 lg:pb-28">
      <div className="container-purelle max-w-3xl">
        <FadeIn>
          <p className="eyebrow">Help</p>
          <h1 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
            Frequently asked
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Clear answers on routines, ingredients, and the upcoming Shopify
            experience. Still need help?{" "}
            <Link href="/contact" className="underline underline-offset-4">
              Contact us
            </Link>
            .
          </p>
        </FadeIn>
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}
