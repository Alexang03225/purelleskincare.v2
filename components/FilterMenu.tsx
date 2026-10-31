"use client";

import { cn } from "@/lib/utils";
import { productCategories } from "@/data/products";
import type { ProductCategory, SkinConcern } from "@/types";
import type { SortOption } from "@/lib/utils";

const concerns: Array<SkinConcern | "All"> = [
  "All",
  "Hydration",
  "Brightening",
  "Anti-aging",
  "Sensitive Skin",
];

interface FilterMenuProps {
  category: ProductCategory | "All";
  concern: SkinConcern | "All";
  sort: SortOption;
  onCategoryChange: (category: ProductCategory | "All") => void;
  onConcernChange: (concern: SkinConcern | "All") => void;
  onSortChange: (sort: SortOption) => void;
}

export function FilterMenu({
  category,
  concern,
  sort,
  onCategoryChange,
  onConcernChange,
  onSortChange,
}: FilterMenuProps) {
  const categories: Array<ProductCategory | "All"> = [
    "All",
    ...productCategories,
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-4">Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange(c)}
              className={cn(
                "focus-ring border px-3 py-2 text-[11px] uppercase tracking-[0.14em] transition",
                category === c
                  ? "border-ink bg-ink text-ivory"
                  : "border-line bg-transparent text-muted hover:border-charcoal/40 hover:text-charcoal"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-4">Skin Concern</p>
        <div className="flex flex-wrap gap-2">
          {concerns.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onConcernChange(c)}
              className={cn(
                "focus-ring border px-3 py-2 text-[11px] uppercase tracking-[0.14em] transition",
                concern === c
                  ? "border-ink bg-ink text-ivory"
                  : "border-line bg-transparent text-muted hover:border-charcoal/40 hover:text-charcoal"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="sort" className="eyebrow mb-4 block">
          Sort
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="focus-ring w-full border border-line bg-paper/60 px-4 py-3 text-sm text-charcoal"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  );
}
