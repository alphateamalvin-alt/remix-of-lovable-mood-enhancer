import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialProofToast } from "@/components/SocialProofToast";
import { StickyUrgencyBar } from "@/components/StickyUrgencyBar";
import { Reveal } from "@/components/Reveal";

import hero from "@/assets/hero.jpg";
const forher = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/12%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMiAoMSkucG5nIiwiaWF0IjoxNzc3MTMyNzg2LCJleHAiOjE4MDg2Njg3ODZ9.B-AMqN_dXsCpMyXZQlOCFNt-OQtx30ikTNBNvzfd9Kk";
const forhim = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy84LnBuZyIsImlhdCI6MTc3NzEzMjk5NSwiZXhwIjoxODA4NjY4OTk1fQ.1Ze3vH74IZ_9etm09fJzNhJiP9aT2RlVjrb5rirLhIw";
const bottleHer = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Vitamin%20B6%20(3).png";
const bottleHim = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Maca%20root%20(2).png";
const herThumb1 = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/Magnesium%20Glycinate%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy9NYWduZXNpdW0gR2x5Y2luYXRlICgzKS5wbmciLCJpYXQiOjE3NzcxODQyMzksImV4cCI6MTgwODcyMDIzOX0.UkaaTJxm0FjIOST6dsKRBcAPLdSKKpwLAGpyX6YHhrY";
const herThumb2 = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Taurine%20(3).png";
const himThumb1 = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Tongkat%20Ali%20(2).png";
const himThumb2 = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Panax%20Ginseng%20(2).png";

const BOTTLE_HER_URL =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/12.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMi5wbmciLCJpYXQiOjE3NzcwODkxODksImV4cCI6MTgwODYyNTE4OX0.lwk9AUb9CE31IDWqJDTuZOZtmes59bZ4FO-lUxOVd4s";
const BOTTLE_HIM_URL =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/11.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMS5wbmciLCJpYXQiOjE3NzcwODkyNTksImV4cCI6MTgwODYyNTI1OX0.K5QMIKYRD65B8p2BagU6a3SVO0gCmuwFYS78qwdHmPU";

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
      { title: "Shop LOVABLE: Lovable Drops for Filipino Couples" },
      {
        name: "description",
        content:
          "Order LOVABLE Drops for Her, Him, or the Couples Bundle. Free PH shipping ₱899+, COD available, 30-day money-back guarantee.",
      },
      { property: "og:title", content: "Shop LOVABLE: Reignite Naturally" },
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
  const search = Route.useSearch();
  const variant: Variant = search.variant ?? "her";

  return (
    <div className="min-h-screen bg-[var(--color-noir)] text-[var(--color-ivory)]">
      <AnnouncementBar />
      <Navbar />
      <main>
        <ProductTabs initial={variant} />
        <TrustAssurance />
        <HowToOrder />
        <FinalShopCTA />
      </main>
      <Footer />
      <SocialProofToast />
      <StickyUrgencyBar />
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
            Start Your Journey <span style={{ color: "#A81716", fontStyle: "italic" }}>Back to Each Other</span>
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
    <section className="bg-[var(--color-noir)] pt-5 md:pt-8 pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-10">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`tab-pill ${active ? "active" : ""} px-6 sm:px-8 py-3 rounded-full text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold transition-all ${
                  active
                    ? "bg-[var(--color-brand-red)] text-white border border-[var(--color-brand-red)]"
                    : "bg-transparent text-[var(--color-ivory)] border border-[var(--color-ivory)]/40"
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
            title={<>LOVABLE <span style={{ color: "#A81716", fontStyle: "italic" }}>For Women</span></>}
            rating="4.9"
            reviews="1,200+"
            description={<>Supports natural arousal, <span style={{ color: "#F2EAE0", fontWeight: 600 }}>mood balance, and intimate wellness</span>, safely and naturally.</>}
            mainImage={forher}
            thumbnails={[forher, herThumb1, herThumb2, bottleHer]}
            bundles={herBundles}
            bottleImage={BOTTLE_HER_URL}
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
            title={<>LOVABLE <span style={{ color: "#A81716", fontStyle: "italic" }}>For Men</span></>}
            rating="4.8"
            reviews="980+"
            description={<>Supports stamina, natural testosterone, circulation, and the <span style={{ color: "#F2EAE0", fontWeight: 600 }}>confidence to show up fully</span>, every time.</>}
            mainImage={forhim}
            thumbnails={[forhim, himThumb1, himThumb2, bottleHim]}
            bundles={himBundles}
            bottleImage={BOTTLE_HIM_URL}
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

function BottleStack({ src, count }: { src: string; count: number }) {
  const items = Array.from({ length: Math.max(1, Math.min(count, 3)) });
  return (
    <div className="relative flex-shrink-0 h-[65px] w-[88px] flex items-center justify-center">
      {items.map((_, i) => {
        const offset = (i - (items.length - 1) / 2) * 16;
        const z = items.length - i;
        return (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            aria-hidden={i > 0}
            className="absolute h-[65px] w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
            style={{ transform: `translateX(${offset}px)`, zIndex: z }}
          />
        );
      })}
    </div>
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
  bottleImage,
  checkoutUrl,
  faq,
}: {
  eyebrow: string;
  title: React.ReactNode;
  rating: string;
  reviews: string;
  description: React.ReactNode;
  mainImage: string;
  thumbnails: string[];
  bundles: Bundle[];
  bottleImage: string;
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
    <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 items-center">
      {/* LEFT: image gallery */}
      <Reveal>
        <div
          className="relative w-full overflow-hidden group lift-image lift-halo"
          style={{
            aspectRatio: "1 / 1",
            border: "0.5px solid rgba(184, 149, 90, 0.22)",
            background: "transparent",
          }}
        >
          <img
            src={active}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full block object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <GalleryArrows images={thumbnails} active={active} setActive={setActive} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
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

      {/* RIGHT: details */}
      <Reveal delay={0.1}>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-display text-[var(--color-ivory)] text-[28px] md:text-[36px] leading-[1.15]">
          {title}
        </h2>
        <div className="mt-3 flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
          <span className="text-[var(--color-gold)] tracking-wider">★★★★★</span>
          <span>{rating} · {reviews} reviews</span>
        </div>
        <p className="mt-4 text-[var(--color-ivory-muted)] text-[15px] leading-[1.7]">
          {description}
        </p>

        {/* Bundles */}
        <div className="mt-6 space-y-3">
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
                } p-4 transition-all hover:bg-white/[0.03] flex items-center gap-4`}
                style={
                  isSelected
                    ? {
                        boxShadow:
                          "inset 0 0 0 1px rgba(220, 38, 39, 0.4), 0 12px 32px rgba(220, 38, 39, 0.15)",
                      }
                    : undefined
                }
              >
                <span
                  className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected ? "border-[var(--color-brand-red)]" : "border-white/40"
                  }`}
                >
                {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-red)]" />}
                </span>
                <BottleStack src={bottleImage} count={Number(b.id) || 1} />
                <div className="flex-1 min-w-0">
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
          className="btn-pulse-shine btn-pulse-medium mt-7 !w-full"
        >
          <span>Order Now, ₱{selectedBundle.price.toLocaleString()}</span> <span className="arrow">→</span>
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

function GalleryArrows({
  images,
  active,
  setActive,
}: {
  images: string[];
  active: string;
  setActive: (s: string) => void;
}) {
  const idx = Math.max(0, images.indexOf(active));
  const go = (dir: -1 | 1) => {
    const next = (idx + dir + images.length) % images.length;
    setActive(images[next]);
  };
  const btn =
    "absolute top-1/2 -translate-y-1/2 z-[5] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-[250ms] text-[#B8955A] hover:text-[#DC2627] hover:scale-[1.08]";
  const arrowStyle: React.CSSProperties = {
    background: "rgba(13, 13, 13, 0.7)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "0.5px solid rgba(184, 149, 90, 0.4)",
  };
  return (
    <>
      <button
        type="button"
        aria-label="Previous image"
        onClick={() => go(-1)}
        className={`${btn} left-4`}
        style={arrowStyle}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => go(1)}
        className={`${btn} right-4`}
        style={arrowStyle}
      >
        <ChevronRight size={20} />
      </button>
    </>
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
  const couplesMain =
    "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2029,%202026,%2011_46_31%20PM.png";
  const couples2 =
    "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2028,%202026,%2001_47_05%20AM%20(1).png";
  const couples3 =
    "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2028,%202026,%2002_19_52%20AM%20(1).png";
  const couples4 =
    "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2029,%202026,%2004_28_13%20PM.png";
  const thumbnails = [couplesMain, couples2, couples3, couples4];

  const [active, setActive] = useState(couplesMain);
  const defaultB = couplesBundles.find((b) => b.badge === "BEST SELLER") ?? couplesBundles[0];
  const [selected, setSelected] = useState(defaultB.id);
  const selectedBundle = couplesBundles.find((b) => b.id === selected) ?? defaultB;

  return (
    <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 items-center">
      {/* LEFT: image gallery */}
      <Reveal>
        <div
          className="relative w-full overflow-hidden group"
          style={{
            aspectRatio: "1 / 1",
            borderRadius: 14,
            border: "0.5px solid rgba(184, 149, 90, 0.22)",
            background: "transparent",
          }}
        >
          <img
            src={active}
            alt="LOVABLE Couples Bundle"
            loading="lazy"
            className="absolute inset-0 h-full w-full block object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <GalleryArrows images={thumbnails} active={active} setActive={setActive} />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
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

      {/* RIGHT: details */}
      <Reveal delay={0.1}>
        <p className="eyebrow mb-3">LOVABLE Couples Bundle</p>
        <h2 className="text-display text-[var(--color-ivory)] text-[28px] md:text-[36px] leading-[1.15]">
          The Complete <span style={{ color: "#A81716", fontStyle: "italic" }}>Couples Bundle</span>
        </h2>
        <div className="mt-3 flex items-center gap-3 text-sm text-[var(--color-ivory)]/85">
          <span className="text-[var(--color-gold)] tracking-wider">★★★★★</span>
          <span>4.9 · 2,000+ reviews</span>
        </div>
        <p className="mt-4 text-[var(--color-ivory-muted)] text-[15px] leading-[1.7]">
          One For Her. One For Him. <span style={{ color: "#F2EAE0", fontWeight: 600 }}>One goal: feel each other again.</span>
        </p>

        {/* Bundles */}
        <div className="mt-6 space-y-3">
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
                } p-4 transition-all hover:bg-white/[0.03] flex items-center gap-4`}
              >
                <span
                  className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected ? "border-[var(--color-brand-red)]" : "border-white/40"
                  }`}
                >
                  {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-red)]" />}
                </span>
                <div className="relative flex-shrink-0 h-[60px] w-[88px] flex items-center justify-center">
                  {Array.from({ length: Number(b.id) || 1 }).slice(0, 3).flatMap((_, setIdx, arr) => {
                    const sets = arr.length;
                    const setOffset = (setIdx - (sets - 1) / 2) * 22;
                    return [BOTTLE_HER_URL, BOTTLE_HIM_URL].map((src, j) => (
                      <img
                        key={`${setIdx}-${j}`}
                        src={src}
                        alt=""
                        loading="lazy"
                        aria-hidden
                        className="absolute h-[60px] w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                        style={{
                          transform: `translateX(${setOffset + (j === 0 ? -7 : 7)}px)`,
                          zIndex: 10 - setIdx * 2 + (j === 0 ? 1 : 0),
                        }}
                      />
                    ));
                  })}
                </div>
                <div className="flex-1 min-w-0">
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
          href="https://lovablecouple.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pulse-shine btn-pulse-medium mt-7 !w-full"
        >
          <span>Get the Couples Bundle, ₱{selectedBundle.price.toLocaleString()}</span> <span className="arrow">→</span>
        </a>

        {/* Trust chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/65">
          <span>🚚 Free Shipping</span>
          <span>💳 GCash, Maya, COD</span>
          <span>🔄 30-Day Guarantee</span>
        </div>

        {/* What's Included */}
        <div className="glass-card rounded-2xl p-6 mt-7">
          <h3 className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-brand-red)] font-semibold mb-4">
            What's Included
          </h3>
          <ul className="space-y-2.5">
            {[
              "1x LOVABLE For Her (30ml)",
              "1x LOVABLE For Him (30ml)",
              "FREE Couples Intimacy Guide (₱800 value)",
              "FREE Nationwide Shipping",
              "30-Day Money Back Guarantee",
            ].map((line) => (
              <li key={line} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[14px]">
                <span className="text-[var(--color-brand-red)] mt-0.5">✓</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function TrustAssurance() {
  const items = [
    {
      num: "01",
      head: "Try it",
      accent: "risk-free",
      desc: "30-day full refund. No questions, no awkwardness.",
    },
    {
      num: "02",
      head: "Shipped",
      accent: "discreetly",
      desc: "Plain unmarked packaging via J&T, Ninja Van, or Flash.",
    },
    {
      num: "03",
      head: "Backed by",
      accent: "the FDA",
      desc: "FDA-registered, GMP-certified USA facility.",
    },
  ];

  return (
    <section className="bg-[#0D0D0D] py-[40px] md:py-[60px]">
      <div className="mx-auto max-w-[1100px] px-6">
        <p
          className="text-center mb-8"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#B8955A",
          }}
        >
          Why Couples Trust LOVABLE
        </p>
        <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 py-6">
          {items.map((it, i) => (
            <Reveal key={it.num} delay={i * 0.08}>
              <div className="trust-item h-full">
                <span className="trust-num">{it.num}</span>
                <h3 className="trust-head">
                  {it.head}{" "}
                  <span className="trust-accent">{it.accent}</span>
                </h3>
                <p className="trust-desc">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .trust-item {
          padding: 0 0 0 20px;
          border-left: 1px solid rgba(184, 149, 90, 0.3);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .trust-item:hover {
          padding-left: 24px;
          border-left: 2px solid rgba(220, 38, 39, 0.5);
        }
        .trust-item:hover .trust-num { color: #D4B27A; }
        .trust-num {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #B8955A;
          font-size: 13px;
          letter-spacing: 2px;
          margin-bottom: 8px;
          transition: color 300ms ease;
        }
        .trust-head {
          font-family: 'Playfair Display', Georgia, serif;
          color: #F2EAE0;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .trust-accent {
          color: #DC2627;
          font-style: italic;
        }
        .trust-desc {
          font-family: 'Montserrat', sans-serif;
          color: rgba(154, 136, 128, 0.85);
          font-size: 12px;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 767px) {
          .trust-item { border-left-width: 2px; }
        }
      `}</style>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    {
      n: "01",
      titleBefore: "Half a dropper, ",
      accent: "sublingual",
      titleAfter: ".",
      desc: "Place half a dropper (about 0.5 ml) under your tongue. Hold for 30 seconds before swallowing for best absorption.",
    },
    {
      n: "02",
      titleBefore: "Once or twice ",
      accent: "daily",
      titleAfter: ".",
      desc: "Take in the morning to start your day, or about 30 minutes before intimacy. Pick the rhythm that fits your day.",
    },
    {
      n: "03",
      titleBefore: "Stay ",
      accent: "consistent",
      titleAfter: ".",
      desc: "Effects build gradually over 2 to 3 weeks. Most couples feel a noticeable shift by week 2. The longer you stay on, the deeper the effect.",
    },
  ];

  return (
    <section className="howuse-section">
      <div className="howuse-container">
        <Reveal>
          <div className="howuse-header">
            <p className="howuse-eyebrow">HOW TO USE LOVABLE</p>
            <h2 className="howuse-headline">
              Simple as <span className="howuse-headline-accent">one drop a day.</span>
            </h2>
            <p className="howuse-subtitle">No prep, no rituals. Just consistency.</p>
          </div>
        </Reveal>

        <div className="howuse-grid">
          <Reveal delay={0.2} className="howuse-anchor-wrap">
            <div className="howuse-anchor">
              <div className="howuse-bottles">
                <img
                  src={BOTTLE_HIM_URL}
                  alt="LOVABLE For Him bottle"
                  className="howuse-bottle howuse-bottle-him"
                  loading="lazy"
                />
                <img
                  src={BOTTLE_HER_URL}
                  alt="LOVABLE For Her bottle"
                  className="howuse-bottle howuse-bottle-her"
                  loading="lazy"
                />
              </div>
              <p className="howuse-dose">0.5 ml</p>
              <p className="howuse-dose-unit">PER DROP</p>
              <span className="howuse-divider" />
              <p className="howuse-dose-detail">
                Half a dropper sublingually. 1 to 2 times daily. Effects build over 2 to 3 weeks.
              </p>
            </div>
          </Reveal>

          <div className="howuse-steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.3 + i * 0.1}>
                <div className="howuse-step">
                  <div className="howuse-step-num">{s.n}</div>
                  <div>
                    <h3 className="howuse-step-title">
                      {s.titleBefore}
                      <em className="howuse-step-accent">{s.accent}</em>
                      {s.titleAfter}
                    </h3>
                    <p className="howuse-step-desc">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.7}>
          <div className="howuse-tip">
            <span className="howuse-tip-icon">i</span>
            <p className="howuse-tip-text">
              For best results, take LOVABLE on an empty stomach or 30 minutes before meals. Store in a cool, dry place.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        .howuse-section {
          background: #160808;
          padding: 100px 0;
        }
        .howuse-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .howuse-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .howuse-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #DC2627;
          margin: 0 0 20px;
          font-weight: 600;
        }
        .howuse-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 36px;
          color: #F2EAE0;
          margin: 0 0 16px;
          font-weight: 500;
          line-height: 1.15;
        }
        .howuse-headline-accent {
          font-style: italic;
          color: #B8955A;
        }
        .howuse-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          color: #9A8880;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .howuse-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 48px;
          max-width: 960px;
          margin: 0 auto;
          align-items: start;
        }
        .howuse-anchor-wrap {
          position: sticky;
          top: 80px;
        }
        .howuse-anchor {
          position: relative;
          background: linear-gradient(180deg, #1F0F0C 0%, #0D0606 100%);
          border: 0.5px solid rgba(184, 149, 90, 0.3);
          border-radius: 14px;
          padding: 36px 24px;
          text-align: center;
          box-shadow:
            0 1px 0 rgba(242, 234, 224, 0.06) inset,
            0 16px 48px rgba(0, 0, 0, 0.5);
        }
        .howuse-bottles {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 0;
          margin: 0 auto 24px;
          width: 200px;
        }
        .howuse-bottles::before {
          content: '';
          position: absolute;
          inset: -10% -10% -10% -10%;
          background: radial-gradient(circle, rgba(220, 38, 39, 0.18) 0%, transparent 60%);
          filter: blur(20px);
          z-index: 0;
          pointer-events: none;
        }
        .howuse-bottle {
          width: 95px;
          height: auto;
          position: relative;
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5))
                  drop-shadow(0 4px 8px rgba(220, 38, 39, 0.15));
        }
        .howuse-bottle-him {
          transform: rotate(-4deg);
          z-index: 1;
          margin-right: -16px;
        }
        .howuse-bottle-her {
          transform: rotate(4deg);
          z-index: 2;
        }
        .howuse-dose {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #F2EAE0;
          font-size: 36px;
          font-weight: 400;
          line-height: 1;
          margin: 0;
        }
        .howuse-dose-unit {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #B8955A;
          margin: 8px 0 0;
        }
        .howuse-divider {
          display: block;
          width: 30px;
          height: 0.5px;
          background: rgba(184, 149, 90, 0.5);
          margin: 18px auto;
        }
        .howuse-dose-detail {
          font-family: 'Montserrat', sans-serif;
          font-style: italic;
          font-size: 11px;
          color: rgba(154, 136, 128, 0.85);
          line-height: 1.6;
          margin: 0 auto;
          max-width: 220px;
        }
        .howuse-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .howuse-step {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 0.5px solid rgba(184, 149, 90, 0.18);
          align-items: start;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .howuse-steps > div:last-child .howuse-step {
          border-bottom: none;
        }
        .howuse-step:hover {
          padding-left: 8px;
          border-bottom-color: rgba(220, 38, 39, 0.3);
        }
        .howuse-step:hover .howuse-step-num {
          color: #D4B27A;
        }
        .howuse-step-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #B8955A;
          font-size: 36px;
          line-height: 1;
          transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .howuse-step-title {
          font-family: 'Playfair Display', Georgia, serif;
          color: #F2EAE0;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.3;
          margin: 0 0 8px;
        }
        .howuse-step-accent {
          font-style: italic;
          color: #DC2627;
        }
        .howuse-step-desc {
          font-family: 'Montserrat', sans-serif;
          color: rgba(154, 136, 128, 0.85);
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }
        .howuse-tip {
          margin: 40px auto 0;
          max-width: 960px;
          padding: 18px 24px;
          background: rgba(184, 149, 90, 0.06);
          border: 0.5px solid rgba(184, 149, 90, 0.22);
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .howuse-tip-icon {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          border: 0.5px solid #B8955A;
          color: #B8955A;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .howuse-tip-text {
          font-family: 'Montserrat', sans-serif;
          font-style: italic;
          font-size: 12px;
          color: rgba(242, 234, 224, 0.7);
          margin: 0;
          line-height: 1.5;
        }
        @media (max-width: 1023px) {
          .howuse-grid {
            grid-template-columns: 280px 1fr;
            gap: 36px;
          }
        }
        @media (max-width: 767px) {
          .howuse-section {
            padding: 60px 0;
          }
          .howuse-headline {
            font-size: 28px;
          }
          .howuse-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .howuse-anchor-wrap {
            position: static;
          }
          .howuse-bottles {
            width: 180px;
          }
          .howuse-bottle {
            width: 85px;
          }
          .howuse-step-num {
            font-size: 30px;
          }
          .howuse-step-title {
            font-size: 17px;
          }
        }
      `}</style>
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
            You've Read Enough. <span style={{ color: "#A81716", fontStyle: "italic" }}>Now Feel It.</span>
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
            <Link to="/shop" search={{ variant: "him" }} className="btn-secondary">Shop For Him →</Link>
            <Link to="/shop" search={{ variant: "couples" }} className="btn-secondary">Couples Bundle →</Link>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <ChevronDown className="mt-12 mx-auto text-[var(--color-ivory)]/40" size={22} />
        </Reveal>
      </div>
    </section>
  );
}
