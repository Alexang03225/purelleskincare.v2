"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";

const FALLBACK =
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80";

interface ProductImageProps {
  src?: string;
  category?: ProductCategory;
  name: string;
  variant?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProductImage({
  src,
  name,
  className,
  priority = false,
  sizes = "(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px",
}: ProductImageProps) {
  const [current, setCurrent] = useState(src || FALLBACK);

  useEffect(() => {
    setCurrent(src || FALLBACK);
  }, [src]);

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden bg-paper", className)}
    >
      <Image
        key={current}
        src={current}
        alt={name}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        onError={() => {
          if (current !== FALLBACK) setCurrent(FALLBACK);
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/[0.06] via-transparent to-ivory/[0.08]"
        aria-hidden
      />
    </div>
  );
}
