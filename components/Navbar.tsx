"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "./providers/CartProvider";
import { useWishlist } from "./providers/WishlistProvider";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { items: wishlist } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const isHome = pathname === "/";
  const light = isHome && !scrolled && !open && !searchOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          light
            ? "bg-transparent"
            : "border-b border-line/80 bg-mist/90 backdrop-blur-md"
        )}
      >
        <div className="section-padding flex h-16 items-center justify-between lg:h-[4.5rem]">
          <nav className="hidden flex-1 items-center gap-8 lg:flex" aria-label="Primary">
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.28em] transition focus-ring",
                  light
                    ? "text-ivory/80 hover:text-ivory"
                    : pathname.startsWith(link.href)
                      ? "text-charcoal"
                      : "text-muted hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className={cn(
              "font-serif text-[1.85rem] tracking-[0.12em] focus-ring lg:text-[2.1rem]",
              light ? "text-ivory" : "text-charcoal"
            )}
            aria-label="Purelle home"
          >
            Purelle
          </Link>

          <div className="flex flex-1 items-center justify-end gap-1">
            <nav className="mr-3 hidden items-center gap-8 lg:flex" aria-label="Secondary">
              {links.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.28em] transition focus-ring",
                    light
                      ? "text-ivory/80 hover:text-ivory"
                      : pathname.startsWith(link.href)
                        ? "text-charcoal"
                        : "text-muted hover:text-charcoal"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                "focus-ring p-2.5 transition hover:opacity-70",
                light ? "text-ivory" : "text-charcoal"
              )}
              aria-label="Search products"
              aria-expanded={searchOpen}
            >
              <Search className="h-4 w-4" strokeWidth={1.4} />
            </button>
            <Link
              href="/wishlist"
              className={cn(
                "focus-ring relative p-2.5 transition hover:opacity-70",
                light ? "text-ivory" : "text-charcoal"
              )}
              aria-label={`Wishlist, ${wishlist.length} items`}
            >
              <Heart className="h-4 w-4" strokeWidth={1.4} />
              {wishlist.length > 0 && (
                <span
                  className={cn(
                    "absolute right-2 top-2 h-1.5 w-1.5 rounded-full",
                    light ? "bg-gold" : "bg-sage"
                  )}
                />
              )}
            </Link>
            <Link
              href="/cart"
              className={cn(
                "focus-ring relative p-2.5 transition hover:opacity-70",
                light ? "text-ivory" : "text-charcoal"
              )}
              aria-label={`Cart, ${itemCount} items`}
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 top-1 min-w-[1rem] text-center text-[9px] tracking-wide",
                    light ? "text-ivory" : "text-charcoal"
                  )}
                >
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className={cn(
                "focus-ring p-2.5 lg:hidden",
                light ? "text-ivory" : "text-charcoal"
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line bg-mist"
            >
              <form
                action="/shop"
                className="section-padding flex items-center gap-4 py-5"
              >
                <Search className="h-4 w-4 text-muted" strokeWidth={1.4} aria-hidden />
                <input
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the collection"
                  className="w-full bg-transparent font-serif text-2xl text-charcoal placeholder:text-muted/40 focus:outline-none"
                  aria-label="Search"
                  autoFocus
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute inset-x-0 top-0 bg-mist px-6 pb-12 pt-24"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              {[{ href: "/", label: "Home" }, ...links].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-line py-5 font-serif text-4xl text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
