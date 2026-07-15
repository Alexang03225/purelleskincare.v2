import Link from "next/link";
import Image from "next/image";
import type { CategoryItem } from "@/types";
import { FadeIn } from "./FadeIn";

interface CategoryCardProps {
  category: CategoryItem;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <FadeIn delay={index * 0.06}>
      <Link
        href={category.href}
        className="group grid grid-cols-[1fr_6.5rem] items-center gap-6 border-t border-line py-7 focus-ring sm:grid-cols-[1fr_8rem] lg:gap-10 lg:py-9"
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-serif text-3xl text-charcoal transition group-hover:opacity-70 lg:text-4xl">
              {category.name}
            </h3>
            <span className="text-[11px] uppercase tracking-[0.24em] text-muted opacity-0 transition group-hover:opacity-100">
              Explore
            </span>
          </div>
          <p className="mt-2 max-w-md text-sm text-muted">
            {category.description}
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-blush">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="128px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
    </FadeIn>
  );
}
