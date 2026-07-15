# Purelle — Laboratory Skincare Demo

Premium frontend-only e-commerce demo for **Purelle**, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

Designed to connect later to the **Shopify Storefront API** — product data lives in `data/` so UI components stay decoupled from commerce backend.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured, concerns, ingredients, philosophy, results, reviews, gallery, newsletter |
| `/shop` | Product grid with search, category/concern filters, sorting |
| `/product/[slug]` | Product detail — gallery, ingredients, reviews, related |
| `/about` | Brand story, R&D, sustainability, values |
| `/contact` | Contact form UI + FAQ preview |
| `/cart` | Frontend cart with demo checkout modal |
| `/wishlist` | Saved products |
| `/faq` | Accordion FAQ |

## Project structure

```
app/           # Routes & layouts
components/    # Reusable UI
data/          # Mock products & content (Shopify-ready seam)
lib/           # Utils (format, filter, sort)
types/         # Shared TypeScript types
```

## Shopify readiness

Cart and wishlist use `localStorage`. Replace `data/products.ts` queries with Storefront API responses using the same `Product` type in `types/index.ts`.

Checkout currently shows: *Demo checkout — Shopify integration will be connected later.*

## Scripts

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```
