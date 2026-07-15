import { Star } from "lucide-react";
import type { Review } from "@/types";
import { FadeIn } from "./FadeIn";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="flex h-full flex-col border-t border-line pt-6">
        <div
          className="flex gap-0.5"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < review.rating
                  ? "fill-charcoal text-charcoal"
                  : "fill-transparent text-line"
              }`}
              strokeWidth={1.25}
              aria-hidden
            />
          ))}
        </div>
        <h3 className="mt-4 font-serif text-xl text-charcoal">{review.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          “{review.content}”
        </p>
        <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]">
          <div>
            <p className="text-charcoal">{review.author}</p>
            {review.skinType && (
              <p className="mt-0.5 text-muted">{review.skinType}</p>
            )}
          </div>
          {review.verified && <span className="text-sage">Verified</span>}
        </div>
      </article>
    </FadeIn>
  );
}
