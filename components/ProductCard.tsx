"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "./ProductImage";
import { useWishlist } from "./providers/WishlistProvider";
import { useToast } from "./providers/ToastProvider";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { toggleItem, isSaved } = useWishlist();
  const { toast } = useToast();
  const saved = isSaved(product.id);
  const shortName = product.name.replace("Purelle ", "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.24) }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-blush">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <ProductImage
            src={product.image}
            name={product.name}
            className="h-full w-full"
          />
        </Link>

        {/* Lookbook hover veil */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] uppercase tracking-[0.22em] text-ivory/70">
            {product.category}
          </p>
          <p className="mt-1 font-serif text-2xl text-ivory">{shortName}</p>
          <p className="mt-1 text-sm text-ivory/80">{formatPrice(product.price)}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            toggleItem(product);
            toast(saved ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="focus-ring absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-mist/90 text-charcoal opacity-100 backdrop-blur-sm transition hover:bg-ink hover:text-ivory sm:opacity-0 sm:group-hover:opacity-100"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-3.5 w-3.5 ${saved ? "fill-current" : ""}`}
            strokeWidth={1.4}
            aria-hidden
          />
        </button>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-mist/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="mt-4 sm:hidden">
        <Link href={`/product/${product.slug}`} className="block focus-ring">
          <h3 className="font-serif text-xl text-charcoal">{shortName}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted">{formatPrice(product.price)}</p>
      </div>

      <div className="mt-4 hidden items-baseline justify-between gap-3 sm:flex">
        <Link href={`/product/${product.slug}`} className="focus-ring">
          <h3 className="font-serif text-xl text-charcoal transition group-hover:opacity-70 lg:text-[1.35rem]">
            {shortName}
          </h3>
        </Link>
        <span className="text-sm text-muted">{formatPrice(product.price)}</span>
      </div>
    </motion.article>
  );
}
