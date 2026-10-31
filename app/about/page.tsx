import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { aboutImage } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Purelle story — research, ingredient philosophy, sustainability, and brand values.",
};

const values = [
  {
    title: "Barrier first",
    text: "Every formula begins with respect for skin’s acid mantle. Actives are only as good as the barrier that carries them.",
  },
  {
    title: "Measured claims",
    text: "We publish what we can substantiate. No overnight miracles—just consistent, clinical progress.",
  },
  {
    title: "Quiet luxury",
    text: "Design that feels like a Tokyo aesthetic clinic, not a marketplace aisle. Packaging is intentional, recyclable where possible.",
  },
  {
    title: "Long rituals",
    text: "Skincare is patience. We create formulas meant for months of use, not one viral week.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding soft-wash border-b border-line py-24 lg:py-32">
        <div className="container-purelle">
          <FadeIn>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-charcoal lg:text-7xl">
              Born between the laboratory and the ritual.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
              Purelle exists for people who want scientific clarity without
              clinical coldness—formulas shaped by Japanese discipline and
              Korean fermentation craft.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-t border-line py-20 lg:py-28">
        <div className="container-purelle grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal">
              A quieter kind of beauty house
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-5 text-sm leading-relaxed text-muted lg:text-base">
              <p>
                Purelle began with a simple dissatisfaction: skincare that
                shouted more than it delivered. We partnered with formulation
                chemists in Seoul and sensory designers in Tokyo to build a
                house of fewer, better products.
              </p>
              <p>
                Each formula is developed over months—stability, irritation
                panels, texture iterations—before it earns a place in the
                collection. The result is a lineup that feels edited, not
                endless.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* R&D */}
      <section
        id="research"
        className="section-padding border-t border-line bg-sand/30 py-20 lg:py-28"
      >
        <div className="container-purelle">
          <FadeIn>
            <p className="eyebrow">Research & Development</p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl text-charcoal lg:text-5xl">
              Evidence before elegance. Then both.
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Molecule selection",
                text: "Actives are chosen for published data, stability profiles, and compatibility within multi-step routines.",
              },
              {
                step: "02",
                title: "Barrier testing",
                text: "Formulas are evaluated for TEWL impact, pH balance, and comfort on reactive skin panels.",
              },
              {
                step: "03",
                title: "Sensorial finish",
                text: "Only once efficacy holds do we refine texture, absorption speed, and finish for daily ritual.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <article className="h-full border border-line bg-paper/70 p-7">
                  <p className="font-serif text-4xl text-gold/80">{item.step}</p>
                  <h3 className="mt-4 font-serif text-2xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient philosophy */}
      <section className="section-padding border-t border-line py-20 lg:py-28">
        <div className="container-purelle grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper">
              <Image
                src={aboutImage}
                alt="Purelle ingredient and ritual photography"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow">Ingredient Philosophy</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal lg:text-5xl">
              Concentration with conscience
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              We prefer proven percentages over trendy stacks. Centella when
              calm is needed. Encapsulated retinol when renewal is the goal.
              Multi-weight hyaluronic acid when moisture must travel. Nothing
              ornamental—everything intentional.
            </p>
            <Link href="/shop" className="btn-secondary mt-8 inline-flex">
              Explore formulas
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding border-t border-line bg-ink py-20 text-ivory lg:py-28">
        <div className="container-purelle max-w-3xl">
          <FadeIn>
            <p className="eyebrow text-ivory/45">Sustainability</p>
            <h2 className="mt-3 font-serif text-4xl lg:text-5xl">
              Packaging that earns its place
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory/65">
              Glass where integrity matters. Recyclable cartons printed with
              soy-based inks. Concentrated formulas that last. We are not
              perfect—and we will not claim to be. We are committed to
              continuous reduction of excess in every SKU we release.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-line py-20 lg:py-28">
        <div className="container-purelle">
          <FadeIn>
            <p className="eyebrow">Brand Values</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal lg:text-5xl">
              What we protect
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-serif text-2xl text-charcoal">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
