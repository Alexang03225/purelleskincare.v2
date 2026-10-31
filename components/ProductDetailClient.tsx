"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn } from "@/components/FadeIn";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
import { useToast } from "@/components/providers/ToastProvider";
import { reviews } from "@/data/content";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({
  product,
  related,
}: ProductDetailClientProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [tab, setTab] = useState<"ingredients" | "how" | "details">(
    "ingredients"
  );
  const { addItem } = useCart();
  const { toggleItem, isSaved } = useWishlist();
  const { toast } = useToast();
  const saved = isSaved(product.id);
  const productReviews = reviews
    .filter((r) => r.productId === product.id || !r.productId)
    .slice(0, 3);
  const shortName = product.name.replace("Purelle ", "");

  function handleAdd() {
    addItem(product);
    toast(`${product.name} added to cart`);
  }

  function handleBuy() {
    addItem(product);
    toast("Demo checkout — Shopify integration coming later");
  }

  return (
    <div className="pb-20 pt-16 lg:pb-28">
      <div className="border-b border-line bg-mist">
        <div className="section-padding flex flex-wrap items-center justify-between gap-3 py-4 text-[11px] uppercase tracking-[0.2em] text-muted">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/shop" className="hover:text-charcoal focus-ring">
                  Shop
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`/shop?category=${product.category}`}
                  className="hover:text-charcoal focus-ring"
                >
                  {product.category}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-charcoal">{shortName}</li>
            </ol>
          </nav>
          <span>
            {product.details.volume}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Sticky visual panel */}
        <div className="relative border-b border-line lg:sticky lg:top-16 lg:h-[calc(100svh-4rem)] lg:border-b-0 lg:border-r">
          <motion.div
            key={galleryIndex}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="h-[60vh] lg:h-full"
          >
            <ProductImage
              src={product.gallery[galleryIndex] ?? product.image}
              name={product.name}
              className="h-full w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 flex border-t border-line bg-mist/90 backdrop-blur-sm">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setGalleryIndex(i)}
                className={`focus-ring relative h-16 flex-1 overflow-hidden border-r border-line last:border-r-0 transition ${
                  galleryIndex === i ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
                aria-label={`View image ${i + 1}`}
                aria-pressed={galleryIndex === i}
              >
                <ProductImage
                  src={product.gallery[i] ?? product.image}
                  name={`${product.name} view ${i + 1}`}
                  className="h-full w-full"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Datasheet panel */}
        <div className="section-padding py-10 lg:py-14">
          <FadeIn direction="none">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                {product.category}
              </span>
              {product.badge && (
                <span className="border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-charcoal">
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-charcoal lg:text-6xl">
              {shortName}
            </h1>

            <div className="mt-6 flex flex-wrap items-baseline gap-6 border-y border-line py-4">
              <p className="text-xl text-charcoal">
                {formatPrice(product.price)}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </p>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
              {product.description}
            </p>

            <ul className="mt-8 space-y-0 border-t border-line">
              {product.benefits.slice(0, 4).map((b, i) => (
                <li
                  key={b}
                  className="flex gap-4 border-b border-line py-3 text-sm text-charcoal"
                >
                  <span className="text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                type="button"
                onClick={handleAdd}
                className="btn-primary flex-1"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={handleBuy}
                className="btn-gold flex-1"
              >
                Buy now
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                toggleItem(product);
                toast(saved ? "Removed from wishlist" : "Saved to wishlist");
              }}
              className="btn-secondary mt-5"
            >
              <Heart
                className={`h-3.5 w-3.5 ${saved ? "fill-charcoal" : ""}`}
                strokeWidth={1.5}
              />
              {saved ? "Saved" : "Save"}
            </button>

            {/* Spec tabs */}
            <div className="mt-12">
              <div className="flex gap-0 border border-line">
                {(
                  [
                    ["ingredients", "Actives"],
                    ["how", "Protocol"],
                    ["details", "Spec"],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTab(key)}
                    className={`focus-ring flex-1 py-3 text-[11px] uppercase tracking-[0.18em] transition ${
                      tab === key
                        ? "bg-ink text-ivory"
                        : "bg-transparent text-muted hover:text-charcoal"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="border border-t-0 border-line bg-paper/40 p-5 text-sm leading-relaxed text-muted">
                {tab === "ingredients" && (
                  <ul className="space-y-4">
                    {product.keyIngredients.map((ing) => (
                      <li
                        key={ing.name}
                        className="grid gap-1 sm:grid-cols-[1fr_1.2fr]"
                      >
                        <p className="text-xs tracking-wide text-charcoal">
                          {ing.name}
                        </p>
                        <p>{ing.benefit}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {tab === "how" && (
                  <ol className="space-y-3">
                    {product.howToUse.map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="text-[11px] text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {tab === "details" && (
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-5">
                    {[
                      ["Volume", product.details.volume],
                      ["Texture", product.details.texture],
                      ["Skin type", product.details.skinType.join(", ")],
                      ["Scent", product.details.scent],
                      ["Concerns", product.details.concerns.join(", ")],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[10px] uppercase tracking-[0.18em] text-muted">
                          {label}
                        </dt>
                        <dd className="mt-1 text-charcoal">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Reviews as notes */}
      <section className="section-padding border-t border-line py-16">
        <div className="container-purelle">
          <FadeIn>
            <p className="eyebrow">Field notes</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal lg:text-4xl">
              Reviews
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-0 border-t border-line md:grid-cols-3">
            {productReviews.map((r, i) => (
              <article
                key={r.id}
                className={`border-b border-line p-6 md:border-b-0 ${
                  i < productReviews.length - 1 ? "md:border-r" : ""
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted">
                  {r.rating.toFixed(1)} / 5.0
                </p>
                <h3 className="mt-3 font-serif text-xl text-charcoal">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {r.content}
                </p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-charcoal">
                  {r.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding border-t border-line py-16">
          <div className="container-purelle">
            <FadeIn>
              <p className="eyebrow">Related</p>
              <h2 className="mt-2 font-serif text-3xl text-charcoal lg:text-4xl">
                Adjacent formulas
              </h2>
            </FadeIn>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
