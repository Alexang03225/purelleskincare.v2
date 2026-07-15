"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { FAQAccordion } from "@/components/FAQAccordion";
import { useToast } from "@/components/providers/ToastProvider";
import { faqs } from "@/data/content";

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast("Message recorded — demo form only, no email sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="section-padding pb-20 pt-28 lg:pt-32 lg:pb-28">
      <div className="container-purelle">
        <FadeIn>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-serif text-5xl text-charcoal lg:text-6xl">
            We’re here, quietly.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Questions about routines, ingredients, or the upcoming Shopify
            store? Reach out—demo responses are simulated.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="focus-ring w-full border border-line bg-white/50 px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="focus-ring w-full border border-line bg-white/50 px-4 py-3 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="eyebrow mb-2 block">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subject: e.target.value }))
                  }
                  className="focus-ring w-full border border-line bg-white/50 px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="focus-ring w-full resize-y border border-line bg-white/50 px-4 py-3 text-sm"
                />
              </div>
              <button type="submit" className="btn-primary">
                Send message
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="space-y-8 border border-line bg-sand/20 p-8">
              <div>
                <p className="eyebrow">Support</p>
                <ul className="mt-5 space-y-4 text-sm text-charcoal">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-muted" aria-hidden />
                    hello@purelle.demo
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-muted" aria-hidden />
                    +1 (800) 555-0199
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted" aria-hidden />
                    Studio demo — Seoul / Tokyo inspiration
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow">Social</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex h-10 w-10 items-center justify-center border border-line transition hover:border-charcoal"
                    aria-label="Instagram"
                  >
                    <Share2 className="h-4 w-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex h-10 w-10 items-center justify-center border border-line transition hover:border-charcoal"
                    aria-label="YouTube"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <section className="mt-24 border-t border-line pt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-2 font-serif text-3xl text-charcoal">
                Common questions
              </h2>
            </div>
            <Link
              href="/faq"
              className="text-[11px] uppercase tracking-[0.18em] text-muted hover:text-charcoal focus-ring"
            >
              View all
            </Link>
          </div>
          <FAQAccordion items={faqs.slice(0, 4)} />
        </section>
      </div>
    </div>
  );
}
