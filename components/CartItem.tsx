"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ProductImage } from "./ProductImage";
import { useCart } from "./providers/CartProvider";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <article className="flex gap-4 border-b border-line py-6 sm:gap-6">
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden sm:w-28"
      >
        <ProductImage
          src={product.image}
          name={product.name}
          className="h-full w-full"
          sizes="112px"
        />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
              {product.category}
            </p>
            <Link
              href={`/product/${product.slug}`}
              className="mt-1 block font-serif text-xl text-charcoal focus-ring sm:text-2xl"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-sm text-charcoal">
              {formatPrice(product.price)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="focus-ring rounded p-2 text-muted transition hover:text-charcoal"
            aria-label={`Remove ${product.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="inline-flex items-center border border-line">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="focus-ring p-2.5 text-charcoal"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-[2rem] text-center text-sm" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="focus-ring p-2.5 text-charcoal"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-sm font-medium text-charcoal">
            {formatPrice(product.price * quantity)}
          </p>
        </div>
      </div>
    </article>
  );
}
