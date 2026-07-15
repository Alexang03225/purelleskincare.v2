import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { IngredientCard } from "@/components/IngredientCard";
import { TestimonialSection } from "@/components/TestimonialSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FadeIn } from "@/components/FadeIn";
import { getFeaturedProducts } from "@/data/products";
import {
  skinConcerns,
  ingredientSpotlights,
  beforeAfterResults,
  socialGallery,
} from "@/data/content";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <>
      <HeroSection />

      <section className="section-padding py-20 lg:py-28">
        <div className="container-purelle">
          <FadeIn>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Collection</p>
                <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
                  Featured
                </h2>
              </div>
              <Link href="/shop" className="btn-secondary">
                View all
              </Link>
            </div>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:gap-x-5 lg:gap-y-14">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="soft-wash border-y border-line py-20 lg:py-28">
        <div className="section-padding container-purelle">
          <FadeIn>
            <p className="eyebrow">Skin concerns</p>
            <h2 className="mt-3 max-w-lg font-serif text-5xl text-charcoal lg:text-6xl">
              Find your ritual
            </h2>
          </FadeIn>
          <div className="mt-6 border-b border-line">
            {skinConcerns.map((c, i) => (
              <CategoryCard key={c.id} category={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-20 lg:py-28">
        <div className="container-purelle">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Ingredients</p>
              <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
                Chosen with care
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Actives selected for evidence, purity, and how they live together
                in a formula.
              </p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {ingredientSpotlights.map((ing, i) => (
              <IngredientCard key={ing.id} ingredient={ing} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={socialGallery[1]?.image ?? featured[0].image}
          alt="Purelle philosophy"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="section-padding relative z-10 flex min-h-[70vh] items-center">
          <FadeIn>
            <div className="max-w-xl text-ivory">
              <p className="text-[11px] uppercase tracking-[0.35em] text-ivory/55">
                Philosophy
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-tight lg:text-7xl">
                Less noise.
                <br />
                More that matters.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/75">
                Purelle is edited like a quiet atelier—fewer formulas, longer
                development, barrier-first thinking.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex border-b border-ivory/40 pb-1 text-[11px] uppercase tracking-[0.28em] text-ivory transition hover:border-gold hover:text-gold"
              >
                Read our story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding py-20 lg:py-28">
        <div className="container-purelle">
          <FadeIn>
            <p className="eyebrow">Results</p>
            <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
              Observed over time
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {beforeAfterResults.map((result, i) => (
              <FadeIn key={result.id} delay={i * 0.08}>
                <article className="border-t border-line pt-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                    {result.concern} · {result.duration}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-charcoal">
                    {result.product}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {result.result}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="py-20 lg:py-28">
        <div className="section-padding mb-10">
          <FadeIn>
            <p className="eyebrow">@purelle</p>
            <h2 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
              In the wild
            </h2>
          </FadeIn>
        </div>
        <div className="hide-scrollbar flex gap-0 overflow-x-auto border-y border-line">
          {socialGallery.map((item, i) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] w-[60vw] shrink-0 overflow-hidden border-r border-line sm:w-[40vw] md:w-[28vw] lg:w-[16.666%]"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 60vw, 17vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-80" />
              <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ivory">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
