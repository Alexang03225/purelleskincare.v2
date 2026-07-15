import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

const shopLinks = [
  { href: "/shop", label: "All products" },
  { href: "/shop?category=Serum", label: "Serums" },
  { href: "/shop?category=Essence", label: "Essences" },
  { href: "/shop?category=Moisturizer", label: "Moisturizers" },
];

const brandLinks = [
  { href: "/about", label: "Our story" },
  { href: "/about#research", label: "Research" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-blush text-charcoal">
      <div className="section-padding py-16 lg:py-20">
        <div className="mb-14 max-w-xl">
          <Link
            href="/"
            className="font-serif text-5xl tracking-[0.06em] focus-ring lg:text-6xl"
          >
            Purelle
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Laboratory precision with atelier calm — for skin that prefers
            clarity over noise.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Shop</p>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition hover:text-charcoal focus-ring"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Brand</p>
            <ul className="mt-4 space-y-2.5">
              {brandLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition hover:text-charcoal focus-ring"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="eyebrow">Support</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>hello@purelle.demo</li>
              <li>+1 (800) 555-0199</li>
              <li>Mon–Fri · 9am–6pm</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex h-9 w-9 items-center justify-center border border-line transition hover:border-charcoal"
                aria-label="Instagram"
              >
                <Share2 className="h-3.5 w-3.5" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex h-9 w-9 items-center justify-center border border-line transition hover:border-charcoal"
                aria-label="Website"
              >
                <Globe className="h-3.5 w-3.5" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Purelle · Demo</p>
          <p>Shopify-ready frontend</p>
        </div>
      </div>
    </footer>
  );
}
