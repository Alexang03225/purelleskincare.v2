import type { Product, ProductCategory, SkinConcern } from "@/types";

export function formatPrice(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export interface ProductFilters {
  category?: ProductCategory | "All";
  concern?: SkinConcern | "All";
  query?: string;
  sort?: SortOption;
}

export function filterAndSortProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  let result = [...products];

  if (filters.category && filters.category !== "All") {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.concern && filters.concern !== "All") {
    result = result.filter((p) =>
      p.details.concerns.includes(filters.concern as SkinConcern)
    );
  }

  if (filters.query?.trim()) {
    const q = filters.query.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.ingredients.some((i) => i.toLowerCase().includes(q))
    );
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      result.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
      break;
    case "featured":
    default:
      result.sort(
        (a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating
      );
      break;
  }

  return result;
}

export function calculateCartTotal(
  items: { product: Product; quantity: number }[]
): { subtotal: number; itemCount: number } {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, itemCount };
}
