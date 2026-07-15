"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchBar } from "@/components/SearchBar";
import { FilterMenu } from "@/components/FilterMenu";
import { FadeIn } from "@/components/FadeIn";
import { products } from "@/data/products";
import { filterAndSortProducts, type SortOption } from "@/lib/utils";
import type { ProductCategory, SkinConcern } from "@/types";

export function ShopClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState<ProductCategory | "All">(
    (searchParams.get("category") as ProductCategory) || "All"
  );
  const [concern, setConcern] = useState<SkinConcern | "All">(
    (searchParams.get("concern") as SkinConcern) || "All"
  );
  const [sort, setSort] = useState<SortOption>("featured");

  useEffect(() => {
    const q = searchParams.get("q");
    const cat = searchParams.get("category") as ProductCategory | null;
    const con = searchParams.get("concern") as SkinConcern | null;
    if (q !== null) setQuery(q);
    if (cat) setCategory(cat);
    if (con) setConcern(con);
  }, [searchParams]);

  const filtered = useMemo(
    () =>
      filterAndSortProducts(products, {
        query,
        category,
        concern,
        sort,
      }),
    [query, category, concern, sort]
  );

  return (
    <div className="section-padding pb-20 pt-28 lg:pb-28 lg:pt-32">
      <div className="container-purelle">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 lg:flex-row lg:items-end">
            <div>
            <p className="eyebrow">Shop</p>
            <h1 className="mt-3 font-serif text-5xl text-charcoal lg:text-7xl">
              The collection
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
            {filtered.length} formula{filtered.length === 1 ? "" : "s"} — ready
            for Shopify catalog replacement.
          </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="space-y-8 border border-line bg-mist/80 p-5 lg:sticky lg:top-28">
              <SearchBar value={query} onChange={setQuery} />
              <FilterMenu
                category={category}
                concern={concern}
                sort={sort}
                onCategoryChange={setCategory}
                onConcernChange={setConcern}
                onSortChange={setSort}
              />
            </div>
          </aside>
          <div className="lg:col-span-9">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}
