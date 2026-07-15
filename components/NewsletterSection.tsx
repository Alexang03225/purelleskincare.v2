"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "./FadeIn";
import { useToast } from "./providers/ToastProvider";

export function NewsletterSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast("You’re on the list — demo subscription recorded.");
    setEmail("");
  }

  return (
    <section className="section-padding py-20 lg:py-28">
      <div className="container-purelle">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Stay close</p>
            <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
              Soft notes, never noise
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ritual guides and limited releases — no clutter.
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4"
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 border-b border-charcoal/25 bg-transparent py-3 text-center font-serif text-xl text-charcoal placeholder:text-muted/45 focus:border-charcoal focus:outline-none sm:text-left"
              />
              <button type="submit" className="btn-primary sm:shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
