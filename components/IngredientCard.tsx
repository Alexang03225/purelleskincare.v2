import type { IngredientSpotlight } from "@/types";
import { FadeIn } from "./FadeIn";

interface IngredientCardProps {
  ingredient: IngredientSpotlight;
  index?: number;
}

export function IngredientCard({ ingredient, index = 0 }: IngredientCardProps) {
  return (
    <FadeIn delay={index * 0.08}>
      <article className="h-full">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
          {ingredient.origin}
        </p>
        <h3 className="mt-3 font-serif text-2xl text-charcoal lg:text-3xl">
          {ingredient.name}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {ingredient.description}
        </p>
        <ul className="mt-5 space-y-1.5">
          {ingredient.benefits.map((b) => (
            <li key={b} className="text-xs tracking-wide text-charcoal/70">
              · {b}
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}
