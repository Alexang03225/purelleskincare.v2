"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroImage } from "@/data/images";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt="Purelle skincare atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/70"
          aria-hidden
        />
      </motion.div>

      <div className="section-padding relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pt-28 lg:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="max-w-md text-sm leading-relaxed text-ivory/80"
        >
          Pure science. Naturally beautiful skin.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-serif text-[clamp(4.5rem,18vw,13rem)] leading-[0.85] tracking-[0.04em] text-ivory"
        >
          Purelle
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center gap-8"
        >
          <Link
            href="/shop"
            className="inline-flex bg-ivory px-8 py-3.5 text-[11px] uppercase tracking-[0.28em] text-ink transition hover:bg-ivory/90 focus-ring"
          >
            Shop the collection
          </Link>
          <Link
            href="/about"
            className="border-b border-ivory/40 pb-1 text-[11px] uppercase tracking-[0.28em] text-ivory/85 transition hover:border-gold hover:text-gold focus-ring"
          >
            Our story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
