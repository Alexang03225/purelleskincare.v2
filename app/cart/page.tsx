"use client";

import { useState } from "react";
import Link from "next/link";
import { CartItem } from "@/components/CartItem";
import { Modal } from "@/components/Modal";
import { FadeIn } from "@/components/FadeIn";
import { useCart } from "@/components/providers/CartProvider";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, subtotal, itemCount, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="section-padding pb-20 pt-28 lg:pt-32 lg:pb-28">
      <div className="container-purelle">
        <FadeIn>
          <p className="eyebrow">Cart</p>
          <h1 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
            Your selection
          </h1>
        </FadeIn>

        {items.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="mt-16 border border-dashed border-line py-20 text-center">
              <p className="font-serif text-3xl text-charcoal">Your cart is empty</p>
              <p className="mt-3 text-sm text-muted">
                Discover formulas crafted for calm, clinical results.
              </p>
              <Link href="/shop" className="btn-primary mt-8 inline-flex">
                Continue shopping
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 text-xs uppercase tracking-[0.16em] text-muted transition hover:text-charcoal focus-ring"
              >
                Clear cart
              </button>
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-line bg-sand/20 p-7 lg:sticky lg:top-28">
                <h2 className="font-serif text-2xl text-charcoal">Summary</h2>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Items</dt>
                    <dd>{itemCount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="font-medium">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-3">
                    <dt className="text-muted">Shipping</dt>
                    <dd className="text-muted">Calculated at checkout</dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-3 text-base">
                    <dt className="font-medium">Total</dt>
                    <dd className="font-medium">{formatPrice(subtotal)}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  onClick={() => setCheckoutOpen(true)}
                  className="btn-primary mt-8 w-full"
                >
                  Checkout
                </button>
                <Link
                  href="/shop"
                  className="mt-4 block text-center text-xs uppercase tracking-[0.16em] text-muted hover:text-charcoal focus-ring"
                >
                  Continue shopping
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>

      <Modal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        title="Checkout"
      >
        <p className="text-sm leading-relaxed text-muted">
          Demo checkout — Shopify integration will be connected later.
        </p>
        <p className="mt-4 text-sm text-charcoal">
          Your cart total of {formatPrice(subtotal)} is ready for Storefront API
          checkout when connected.
        </p>
        <button
          type="button"
          onClick={() => setCheckoutOpen(false)}
          className="btn-primary mt-8 w-full"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
