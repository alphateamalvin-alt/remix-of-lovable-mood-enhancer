import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Plus, ShieldCheck } from "lucide-react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialProofToast } from "@/components/SocialProofToast";
import { Reveal } from "@/components/Reveal";

import hero from "@/assets/hero.jpg";
import forher from "@/assets/forher.jpg";
import forhim from "@/assets/forhim.jpg";
import bottleHer from "@/assets/product-her.png";
import bottleHim from "@/assets/product-him.png";
import herThumb1 from "@/assets/her-thumb1.jpg";
import herThumb2 from "@/assets/her-thumb2.jpg";
import himThumb1 from "@/assets/him-thumb1.jpg";
import himThumb2 from "@/assets/him-thumb2.jpg";

type Variant = "her" | "him" | "couples";

type ShopSearch = { variant?: Variant };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const v = search.variant;
    if (v === "her" || v === "him" || v === "couples") return { variant: v };
    return {};
  },
  head: () => ({
    meta: [
      { title: "Shop LOVABLE — Mood Enhancer Drops for Filipino Couples" },
      {
        name: "description",
        content:
          "Order LOVABLE Drops for Her, Him, or the Couples Bundle. Free PH shipping ₱899+, COD available, 30-day money-back guarantee.",
      },
      { property: "og:title", content: "Shop LOVABLE — Reignite Naturally" },
      {
        property: "og:description",
        content: "Choose your LOVABLE: For Her, For Him, or the Couples Bundle.",
      },
    ],
  }),
  component: ShopPage,
});

type Bundle = {
  id: string;
  label: string;
  price: number;
  save?: number;
  badge?: "BEST SELLER" | "BEST VALUE";
};

const herBundles: Bundle[] = [
  { id: "1", label: "1 Bottle", price: 599 },
  { id: "2", label: "2 Bottles", price: 899, save: 299, badge: "BEST SELLER" },
  { id: "3", label: "3 Bottles", price: 1199, save: 598, badge: "BEST VALUE" },
];

const himBundles: Bundle[] = [
  { id: "1", label: "1 Bottle", price: 599 },
  { id: "2", label: "2 Bottles", price: 899, save: 299, badge: "BEST SELLER" },
  { id: "3", label: "3 Bottles", price: 1199, save: 598, badge: "BEST VALUE" },
];

const couplesBundles: Bundle[] = [
  { id: "1", label: "1 Set", price: 1099, save: 99 },
  { id: "2", label: "2 Sets", price: 1899, save: 299, badge: "BEST SELLER" },
  { id: "3", label: "3 Sets", price: 2699, save: 598, badge: "BEST VALUE" },
];

function ShopPage() {
  const { variant } = Route.useSearch();

  return (
    <div className="min-h-screen bg-[var(--color-noir)] text-[var(--color-ivory)]">
      <AnnouncementBar />
      <Navbar />
      <main>
        <ShopHero />
        <ProductTabs initial={variant} />
        <GuaranteeUrgency />
        <HowToOrder />
        <FinalShopCTA />
      </main>
      <Footer />
      <SocialProofToast />
    </div>
  );
}

function ShopHero() {
  return (
    <section className="relative min-h-[45svh] flex items-center justify-center overflow-hidden">
      <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "blur(2px)" }} />
      <div className="absolute inset-0 bg-[var(--color-noir)]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-noir)]/40 via-transparent to-[var(--color-noir)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center py-20">
        <Reveal>
          <p className="eyebrow mb-5">Choose Your LOVABLE</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-display text-[var(--color-ivory)] text-3xl sm:text-4xl md:text-[48px] leading-[1.1]">
            Start Your Journey Back to Each Other
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[var(--color-ivory)]/75 text-base sm:text-lg max-w-xl mx-auto">
            Natural. Powerful. Built for real couples.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProductTabs({ initial }: { initial: Variant }) {
  const [tab, setTab] = useState<Variant>(initial);

  useEffect(() => {
    setTab(initial);
  }, [initial]);

  const tabs: { id: Variant; label: string }[] = [
    { id: "her", label: "For Her" },
    { id: "him", label: "For Him" },
    { id: "couples", label: "Couples Bundle" },
  ];

  return (
    <section className="bg-[var(--color-noir)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-6 sm:px-8 py-3 rounded-full text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold transition-all ${
                  active
                    ? "bg-[var(--color-brand-red)] text-white border border-[var(--color-brand-red)]"
                    : "bg-transparent text-[var(--color-ivory)] border border-[var(--color-ivory)]/40 hover:border-[var(--color-ivory)]"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "her" && (
          <ProductDetail
            key="her"
            eyebrow="LOVABLE Drops For Her"
            title="Mood Enhancer Drops For Women"
            rating="4.9"
            reviews="1,200+"
            description="Formulated with clinically-studied amino acids and vitamins. Supports natural arousal, mood balance, and intimate wellness — safely and naturally."
            mainImage={forher}
            thumbnails={[forher, herThumb1, herThumb2, bottleHer]}
            bundles={herBundles}
            checkoutUrl="https://lovablecouple.shop/lovableforher"
            faq={[
              { q: "How do I use it?", a: "2-3 drops under tongue or in any drink, 1-2x daily." },
              { q: "When will I feel results?", a: "Most feel a difference in 7-14 days." },
              { q: "What's in it?", a: "L-Citrulline, Magnesium Glycinate, Taurine, Vitamin B6." },
            ]}
          />
        )}

        {tab === "him" && (
          <ProductDetail
            key="him"
            eyebrow="LOVABLE Drops For Him"
            title="Mood Enhancer Drops For Men"
            rating="4.8"
            reviews="980+"
            description="Powered by Maca Root, Panax Ginseng, and Tongkat Ali. Supports stamina, natural testosterone, circulation, and the confidence to show up fully — every time."
            mainImage={forhim}
            thumbnails={[forhim, himThumb1, himThumb2, bottleHim]}
            bundles={himBundles}
            checkoutUrl="https://lovablecouple.shop/lovableforhim"
            faq={[
              { q: "Is this like a blue pill?", a: "No. Works naturally with your body's own systems." },
              { q: "How fast does it work?", a: "Energy in 7-14 days. Peak results at 30 days." },
              { q: "Safe daily?", a: "Yes. 100% natural, no known side effects." },
            ]}
          />
        )}

        {tab === "couples" && <CouplesBundle />}
      </div>
    </section>
  );
}

function ProductDetail({
  eyebrow,
  title,
  rating,
  reviews,
  description,
  mainImage,
  thumbnails,
  bundles,
  checkoutUrl,
  faq,
}: {
  eyebrow: string;
  title: string;
  rating: string;
  reviews: string;
  description: string;
  mainImage: string;
  thumbnails: string[];
  bundles: Bundle[];
  checkoutUrl: string;
  faq: { q: string; a: string }[];
}) {
  const [active, setActive] = useState(mainImage);
  const defaultBundle = bundles.find((b) => b.badge === "BEST SELLER") ?? bundles[0];
  const [selected, setSelected] = useState<string>(defaultBundle.id);

  useEffect(() => {
    setActive(mainImage);
    setSelected(defaultBundle.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainImage]);

  const selectedBundle = bundles.find((b) => b.id === selected) ?? defaultBundle;

  return (
    <div className="grid gap-12 lg:grid-cols-[55fr_45fr] items-start">
      {/* LEFT — image gallery */}
      <Reveal>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[var(--color-warm-noir)] aspect-[4/5]">
          <img src={active} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {thumbnails.slice(1, 4).map((thumb, i) => (
            <button
              key={i}
              onClick={() => setActive(thumb)}
              className={`aspect-square rounded-xl overflow-hidden ring-1 transition-all ${
                active === thumb ? "ring-[var(--color-brand-red)]" : "ring-white/10 hover:ring-white/30"
              }`}
            >
              <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </Reveal>

      {/* RIGHT — details */}
      <Reveal delay={0.1}>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="text-display text-[var(--color-ivory)] text-3xl md:text-[36px] leading-[1.15]">
          {title}
        </h2>
        <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
          <span className="text-[var(--color-gold)] tracking-wider">★★★★★</span>
          <span>{rating} · {reviews} reviews</span>
        </div>
        <p className="mt-5 text-[var(--color-ivory-muted)] text-[15px] leading-[1.85]">
          {description}
        </p>

        {/* Bundles */}
        <div className="mt-8 space-y-3">
          {bundles.map((b) => {
            const isSelected = selected === b.id;
            const borderClass =
              b.badge === "BEST SELLER"
                ? "border-[var(--color-brand-red)]"
                : b.badge === "BEST VALUE"
                ? "border-[var(--color-gold)]"
                : isSelected
                ? "border-[var(--color-ivory)]/60"
                : "border-white/10";
            return (
              <button
                key={b.id}
                onClick={() => setSelected(b.id)}
                className={`w-full text-left rounded-2xl border-2 ${borderClass} ${
                  isSelected ? "bg-white/[0.04]" : "bg-transparent"
                } p-5 transition-all hover:bg-white/[0.03] flex items-center gap-4`}
              >
                <span
                  className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected ? "border-[var(--color-brand-red)]" : "border-white/40"
                  }`}
                >
                  {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-red)]" />}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[var(--color-ivory)] font-semibold text-base">{b.label}</span>
                    {b.badge && (
                      <span
                        className={`text-[10px] tracking-[0.18em] uppercase font-semibold px-2 py-0.5 rounded ${
                          b.badge === "BEST SELLER"
                            ? "bg-[var(--color-brand-red)] text-white"
                            : "bg-[var(--color-gold)] text-[var(--color-noir)]"
                        }`}
                      >
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-[var(--color-ivory-muted)] mt-0.5">
                    ₱{b.price.toLocaleString()}
                    {b.save ? ` · Save ₱${b.save}` : ""}
                  </div>
                </div>
                <div className="text-[var(--color-ivory)] font-serif text-xl">₱{b.price.toLocaleString()}</div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-7 !w-full !py-4 text-[12px]"
        >
          Order Now — ₱{selectedBundle.price.toLocaleString()} →
        </a>

        {/* Trust chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/65">
          <span>🚚 Free Shipping ₱899+</span>
          <span>💳 GCash, Maya, COD</span>
          <span>🔄 30-Day Guarantee</span>
        </div>

        {/* Mini FAQ */}
        <div className="mt-9 border-t border-white/[0.08]">
          {faq.map((f) => (
            <MiniFaq key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function MiniFaq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-[var(--color-ivory)] text-[15px] font-medium">{q}</span>
        <Plus
          size={18}
          className={`text-[var(--color-brand-red)] transition-transform ${open ? "rotate-45" : ""}`}
        />
      </button>
      {open && <p className="pb-4 pr-8 text-[14px] text-[var(--color-ivory-muted)] leading-relaxed">{a}</p>}
    </div>
  );
}

function CouplesBundle() {
  const defaultB = couplesBundles.find((b) => b.badge === "BEST SELLER") ?? couplesBundles[0];
  const [selected, setSelected] = useState(defaultB.id);
  const selectedBundle = couplesBundles.find((b) => b.id === selected) ?? defaultB;

  return (
    <div className="mx-auto max-w-2xl">
      <Reveal>
        <div className="relative rounded-2xl overflow-hidden h-[300px] mb-10">
          <img src={hero} alt="LOVABLE Couples Bundle" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-[var(--color-noir)]/50 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center p-8">
            <h2 className="text-display text-[var(--color-ivory)] text-3xl md:text-[40px] text-center leading-[1.1]">
              The Complete Couples Bundle
            </h2>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-center text-[var(--color-ivory-muted)] text-base sm:text-lg max-w-xl mx-auto">
          One For Her. One For Him. One goal — feel each other again.
        </p>

        <div className="glass-card rounded-2xl p-7 mt-9">
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-brand-red)] font-semibold mb-5">
            What's Included
          </h3>
          <ul className="space-y-3">
            {[
              "1x LOVABLE For Her (30ml)",
              "1x LOVABLE For Him (30ml)",
              "FREE Couples Intimacy Guide (₱800 value)",
              "FREE Nationwide Shipping",
              "30-Day Money Back Guarantee",
            ].map((line) => (
              <li key={line} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[15px]">
                <span className="text-[var(--color-brand-red)] mt-0.5">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3">
          {couplesBundles.map((b) => {
            const isSelected = selected === b.id;
            const borderClass =
              b.badge === "BEST SELLER"
                ? "border-[var(--color-brand-red)]"
                : b.badge === "BEST VALUE"
                ? "border-[var(--color-gold)]"
                : isSelected
                ? "border-[var(--color-ivory)]/60"
                : "border-white/10";
            return (
              <button
                key={b.id}
                onClick={() => setSelected(b.id)}
                className={`w-full text-left rounded-2xl border-2 ${borderClass} ${
                  isSelected ? "bg-white/[0.04]" : "bg-transparent"
                } p-5 transition-all hover:bg-white/[0.03] flex items-center gap-4`}
              >
                <span
                  className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected ? "border-[var(--color-brand-red)]" : "border-white/40"
                  }`}
                >
                  {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-red)]" />}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[var(--color-ivory)] font-semibold text-base">{b.label}</span>
                    {b.badge && (
                      <span
                        className={`text-[10px] tracking-[0.18em] uppercase font-semibold px-2 py-0.5 rounded ${
                          b.badge === "BEST SELLER"
                            ? "bg-[var(--color-brand-red)] text-white"
                            : "bg-[var(--color-gold)] text-[var(--color-noir)]"
                        }`}
                      >
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-[var(--color-ivory-muted)] mt-0.5">
                    ₱{b.price.toLocaleString()}
                    {b.save ? ` · Save ₱${b.save}` : ""}
                  </div>
                </div>
                <div className="text-[var(--color-ivory)] font-serif text-xl">₱{b.price.toLocaleString()}</div>
              </button>
            );
          })}
        </div>

        <a
          href="https://lovablecouple.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-7 !w-full !py-4 text-[12px]"
        >
          Get the Couples Bundle — ₱{selectedBundle.price.toLocaleString()} →
        </a>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/65">
          <span>🚚 Free Shipping</span>
          <span>💳 GCash, Maya, COD</span>
          <span>🔄 30-Day Guarantee</span>
        </div>
      </Reveal>
    </div>
  );
}

function GuaranteeUrgency() {
  return (
    <section className="bg-[var(--color-warm-noir)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-10 lg:grid-cols-2 items-stretch">
        {/* Guarantee */}
        <Reveal>
          <div className="h-full flex flex-col">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-brand-red-soft)] text-[var(--color-brand-red)] mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-display text-[var(--color-ivory)] text-2xl sm:text-3xl md:text-[32px] leading-[1.15] max-w-md">
              Try LOVABLE Risk-Free for 30 Days
            </h3>
            <p className="mt-5 text-[var(--color-ivory-muted)] text-[15px] leading-[1.85] max-w-md">
              Not satisfied? Return within 30 days for a full refund — no questions, no hassle.
            </p>
            <ul className="mt-6 space-y-3 max-w-md">
              {["Full refund guaranteed", "No questions asked", "Easy return process"].map((b) => (
                <li key={b} className="flex gap-3 items-center text-[var(--color-ivory)]/90 text-[15px]">
                  <span className="text-[var(--color-brand-red)]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Urgency */}
        <Reveal delay={0.1}>
          <UrgencyCard />
        </Reveal>
      </div>
    </section>
  );
}

function UrgencyCard() {
  const [time, setTime] = useState(() => 24 * 60 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(time / 3600)).padStart(2, "0");
  const mm = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");

  return (
    <div className="glass-card rounded-2xl p-7 sm:p-9 border-t-2 border-t-[var(--color-brand-red)]">
      <h3 className="font-serif text-[var(--color-gold)] text-xl sm:text-2xl mb-7">
        ⚠️ Stock Running Low
      </h3>

      <div className="space-y-5">
        <StockBar label="For Her" filled={8} text="Only 23 bottles left" />
        <StockBar label="For Him" filled={7} text="Only 31 bottles left" />
      </div>

      <div className="mt-8 pt-7 border-t border-white/[0.08]">
        <p className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-ivory)]/70 mb-3 text-center">
          Current promo price expires in:
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {[hh, mm, ss].map((d, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              <div className="font-serif text-[var(--color-gold)] text-4xl sm:text-5xl tabular-nums">{d}</div>
              {i < 2 && <div className="text-[var(--color-gold)]/60 text-3xl">:</div>}
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://lovablecouple.shop/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-8 !w-full !py-4 text-[12px]"
      >
        Secure My Order Now →
      </a>
    </div>
  );
}

function StockBar({ label, filled, text }: { label: string; filled: number; text: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[13px] mb-2">
        <span className="text-[var(--color-ivory)]/85 font-medium">{label}</span>
        <span className="text-[var(--color-brand-red)] font-medium">{text}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-sm ${i < filled ? "bg-[var(--color-brand-red)]" : "bg-white/10"}`}
          />
        ))}
      </div>
    </div>
  );
}

function HowToOrder() {
  const steps = [
    { icon: "🛒", text: "Choose your bundle" },
    { icon: "💳", text: "Checkout — GCash, Maya, Card, or COD" },
    { icon: "📦", text: "We ship within 24-48 hours" },
    { icon: "❤️", text: "Receive in 2-5 days. Feel the difference." },
  ];

  return (
    <section className="bg-[var(--color-noir)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="eyebrow mb-5">How It Works</p>
          <h2 className="text-display text-[var(--color-ivory)] text-3xl sm:text-4xl md:text-[44px] leading-[1.1]">
            Getting LOVABLE Is Simple
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.text} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-7 h-full text-left">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-brand-red)] font-semibold mb-2">
                  Step {i + 1}
                </div>
                <p className="text-[var(--color-ivory)]/90 text-[15px] leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/70">
              <span className="text-[var(--color-brand-red)] font-semibold">Payment:</span>
              <span>GCash</span><span>·</span><span>Maya</span><span>·</span><span>Visa</span><span>·</span><span>Mastercard</span><span>·</span><span>COD</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/70">
              <span className="text-[var(--color-brand-red)] font-semibold">Delivery:</span>
              <span>J&T Express</span><span>·</span><span>Ninja Van</span><span>·</span><span>Flash</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalShopCTA() {
  return (
    <section className="relative min-h-[50svh] flex items-center justify-center overflow-hidden">
      <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "blur(2px)" }} />
      <div className="absolute inset-0 bg-[var(--color-noir)]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-transparent to-[var(--color-noir)]/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center py-24">
        <Reveal>
          <h2 className="text-display text-[var(--color-ivory)] text-4xl sm:text-5xl md:text-[52px] leading-[1.05]">
            You've Read Enough. Now Feel It.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[var(--color-ivory)]/80 text-base sm:text-lg max-w-xl mx-auto">
            The connection you're looking for is one decision away.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop" search={{ variant: "her" }} className="btn-primary">Shop For Her →</Link>
            <Link to="/shop" search={{ variant: "him" }} className="btn-outline">Shop For Him →</Link>
            <Link to="/shop" search={{ variant: "couples" }} className="btn-outline">Couples Bundle →</Link>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <ChevronDown className="mt-12 mx-auto text-[var(--color-ivory)]/40" size={22} />
        </Reveal>
      </div>
    </section>
  );
}
