import { reviews } from "@/data/content";
import { FadeIn } from "./FadeIn";

export function TestimonialSection() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="soft-wash border-y border-line py-20 lg:py-28">
      <div className="section-padding container-purelle">
        <FadeIn>
          <p className="eyebrow">Voices</p>
          <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
            Loved quietly
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {featured.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.08}>
              <blockquote className="border-t border-line pt-6">
                <p className="font-serif text-2xl leading-snug text-charcoal">
                  “{review.title}”
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {review.content}
                </p>
                <footer className="mt-6 text-[11px] uppercase tracking-[0.2em] text-charcoal">
                  {review.author}
                  {review.skinType ? ` · ${review.skinType}` : ""}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
