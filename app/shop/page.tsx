import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopClient } from "@/components/ShopClient";
import { ProductGridSkeleton } from "@/components/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse Purelle laboratory skincare — cleansers, essences, serums, moisturizers, and more.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="section-padding pb-20 pt-28 lg:pt-32">
          <div className="container-purelle">
            <div className="mb-12 h-16 w-64 animate-pulse bg-sand/70" />
            <ProductGridSkeleton />
          </div>
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}
