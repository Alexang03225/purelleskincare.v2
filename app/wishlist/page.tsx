"use client";

import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/FadeIn";
import { useWishlist } from "@/components/providers/WishlistProvider";

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();

  return (
    <div className="section-padding pb-20 pt-28 lg:pt-32 lg:pb-28">
      <div className="container-purelle">
        <FadeIn>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Wishlist</p>
              <h1 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
                Saved formulas
              </h1>
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearWishlist}
                className="text-xs uppercase tracking-[0.16em] text-muted hover:text-charcoal focus-ring"
              >
                Clear all
              </button>
            )}
          </div>
        </FadeIn>

        {items.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="mt-16 border border-dashed border-line py-20 text-center">
              <p className="font-serif text-3xl text-charcoal">
                Nothing saved yet
              </p>
              <p className="mt-3 text-sm text-muted">
                Tap the heart on any product to keep it here.
              </p>
              <Link href="/shop" className="btn-primary mt-8 inline-flex">
                Browse collection
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {items.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
