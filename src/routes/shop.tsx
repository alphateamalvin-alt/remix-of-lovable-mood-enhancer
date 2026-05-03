import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Truck, ShieldCheck, Droplet } from "lucide-react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialProofToast } from "@/components/SocialProofToast";
import { StickyUrgencyBar } from "@/components/StickyUrgencyBar";
import { Reveal } from "@/components/Reveal";
import { setShopState, type ShopVariant } from "@/lib/shop-store";
import { BundleBonusIndicator, BundleIncludesSection } from "@/components/shop/BundleBonus";

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

type Variant = ShopVariant;

type ShopSearch = { variant?: Variant };

const META_BY_VARIANT: Record<Variant, { title: string; description: string }> = {
  her: {
    title: "LOVABLE For Her | Mood Enhancer Drops for Women",
    description: "Support natural arousal and intimate wellness. Premium botanicals for women, formulated by hormonal wellness experts.",
  },
  him: {
    title: "LOVABLE For Him | Mood Enhancer Drops for Men",
    description: "Support stamina, focus, and confidence. Premium botanicals for men, formulated by hormonal wellness experts.",
  },
  couples: {
    title: "LOVABLE Couples Bundle | Sync Your Intimacy",
    description: "For couples na pareho ng goal. Synced formulas for Her and Him, designed to be taken together. Free shipping + 30-day guarantee.",
  },
};

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    const v = search.variant;
    if (v === "her" || v === "him" || v === "couples") return { variant: v };
    return {};
  },
  loaderDeps: ({ search }: { search: ShopSearch }) => ({ variant: search.variant ?? "her" as Variant }),
  loader: ({ deps }) => ({ variant: deps.variant }),
  head: ({ loaderData }) => {
    const v: Variant = (loaderData?.variant as Variant) ?? "her";
    const meta = META_BY_VARIANT[v];
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
      ],
    };
  },
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
        <ComprehensiveFAQ />
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

  // Broadcast active variant to global shop store (for the sticky bar)
  useEffect(() => {
    const defaults: Record<Variant, { price: number; label: string }> = {
      her: { price: 899, label: "2 Bottles" },
      him: { price: 899, label: "2 Bottles" },
      couples: { price: 1899, label: "2 Sets" },
    };
    const d = defaults[tab];
    setShopState({ variant: tab, price: d.price, bundleLabel: d.label });
  }, [tab]);

  const tabs: { id: Variant; label: string }[] = [
    { id: "her", label: "For Her" },
    { id: "him", label: "For Him" },
    { id: "couples", label: "Couples Bundle" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 120);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabClick = (id: Variant) => {
    setTab(id);
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        const target = document.querySelector(".product-display") as HTMLElement | null;
        if (target) {
          const rect = target.getBoundingClientRect();
          const offset = 100;
          const top = rect.top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    }
  };

  return (
    <>
      <style>{`
        .variant-tabs {
          position: sticky;
          top: 64px;
          z-index: 30;
          background: rgba(13, 13, 13, 0.4);
          backdrop-filter: blur(32px) saturate(1.4);
          -webkit-backdrop-filter: blur(32px) saturate(1.4);
          border-bottom: none;
          transition: background 300ms ease,
                      box-shadow 300ms ease,
                      padding 300ms ease,
                      backdrop-filter 300ms ease;
          box-shadow: none;
          padding: 18px 24px;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .variant-tabs::after { display: none; }
        @media (max-width: 767px) {
          .variant-tabs {
            top: 56px;
            padding: 12px 16px;
            margin-top: 16px;
            margin-bottom: 16px;
            backdrop-filter: blur(20px) saturate(1.3);
            -webkit-backdrop-filter: blur(20px) saturate(1.3);
          }
        }
        .variant-tabs.is-stuck {
          background: rgba(13, 13, 13, 0.45);
          backdrop-filter: blur(40px) saturate(1.5);
          -webkit-backdrop-filter: blur(40px) saturate(1.5);
          padding: 14px 24px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 767px) {
          .variant-tabs.is-stuck {
            padding: 10px 16px;
            backdrop-filter: blur(24px) saturate(1.4);
            -webkit-backdrop-filter: blur(24px) saturate(1.4);
          }
        }
        .variant-tabs.is-stuck .tab-pill {
          padding: 9px 18px !important;
          font-size: 10.5px !important;
        }
        .tab-pill {
          box-shadow:
            0 1px 0 rgba(242, 234, 224, 0.06) inset,
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 24px rgba(0, 0, 0, 0.2);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tab-pill:not(.active) {
          background: rgba(13, 13, 13, 0.7) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .tab-pill.active {
          box-shadow:
            0 1px 0 rgba(242, 234, 224, 0.15) inset,
            0 6px 16px rgba(220, 38, 39, 0.35),
            0 12px 32px rgba(0, 0, 0, 0.3);
          transform: translateY(-1px);
        }
        .tab-pill:not(.active):hover {
          transform: translateY(-2px);
          box-shadow:
            0 1px 0 rgba(242, 234, 224, 0.08) inset,
            0 8px 20px rgba(0, 0, 0, 0.4),
            0 16px 32px rgba(220, 38, 39, 0.1);
          border-color: rgba(220, 38, 39, 0.3);
        }
        .variant-tabs.is-stuck .tab-pill.active {
          box-shadow:
            0 1px 0 rgba(242, 234, 224, 0.15) inset,
            0 0 0 3px rgba(220, 38, 39, 0.15),
            0 6px 16px rgba(220, 38, 39, 0.35);
        }
        .variant-tabs-inner {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 10px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .variant-tabs-inner::-webkit-scrollbar { display: none; }
        .variant-tabs-inner > button { scroll-snap-align: center; flex-shrink: 0; }
        @media (min-width: 640px) {
          .variant-tabs-inner { gap: 16px; flex-wrap: wrap; overflow-x: visible; }
        }
        @media (max-width: 639px) {
          .variant-tabs-inner {
            justify-content: flex-start;
            padding: 0 4px;
          }
          .tab-pill {
            padding: 10px 14px !important;
            font-size: 10.5px !important;
            letter-spacing: 0.12em !important;
          }
          .variant-tabs.is-stuck .tab-pill {
            padding: 9px 12px !important;
            font-size: 10px !important;
            letter-spacing: 0.1em !important;
          }
        }
        .product-display { padding-top: 8px; }
      `}</style>
      <div className={`variant-tabs ${scrolled ? "is-stuck" : ""}`}>
        <div className="variant-tabs-inner mx-auto max-w-7xl" role="tablist" aria-label="Product variant">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => handleTabClick(t.id)}
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
      </div>
      <section className="bg-[var(--color-noir)] pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 product-display">

          {tab === "her" && (
            <ProductDetail
              key="her"
              variant="her"
              setTab={setTab}
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
            />
          )}

          {tab === "him" && (
            <ProductDetail
              key="him"
              variant="him"
              setTab={setTab}
              eyebrow="LOVABLE Drops For Him"
              title={<>LOVABLE <span style={{ color: "#A81716", fontStyle: "italic" }}>For Men</span></>}
              rating="4.8"
              reviews="980+"
              description={<>Supports natural stamina, mental focus, and the <span style={{ color: "#F2EAE0", fontWeight: 600 }}>quiet confidence that brings her closer to you</span>.</>}
              mainImage={forhim}
              thumbnails={[forhim, himThumb1, himThumb2, bottleHim]}
              bundles={himBundles}
              bottleImage={BOTTLE_HIM_URL}
              checkoutUrl="https://lovablecouple.shop/lovableforhim"
            />
          )}

          {tab === "couples" && <CouplesBundle setTab={setTab} />}
        </div>
      </section>
    </>
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
  variant,
  setTab,
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
}: {
  variant: Variant;
  setTab: (v: Variant) => void;
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

  // Broadcast selected price/label to global store for the sticky bar
  useEffect(() => {
    setShopState({ variant, price: selectedBundle.price, bundleLabel: selectedBundle.label });
  }, [variant, selectedBundle.price, selectedBundle.label]);


  return (
    <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 items-start">
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
                   {b.id !== "1" && <BundleBonusIndicator tier={b.id as "2" | "3"} />}
                 </div>
                 <div className="text-[var(--color-ivory)] font-serif text-xl">₱{b.price.toLocaleString()}</div>
               </button>
             );
           })}
         </div>

         {/* What's included (bonus + product) */}
         {selectedBundle.id !== "1" && (
           <BundleIncludesSection
             productImage={bottleImage}
             productName={`LOVABLE for ${variant === "her" ? "Her" : "Him"} — ${selectedBundle.label}`}
             tier={selectedBundle.id as "2" | "3"}
           />
         )}

         {/* CTA */}
         <Link
           to="/checkout"
           search={{ variant, bundle: (selectedBundle.id as "1" | "2" | "3") }}
           className="btn-pulse-shine btn-pulse-medium mt-7 !w-full"
         >
           <span>Order Now, ₱{selectedBundle.price.toLocaleString()}</span> <span className="arrow">→</span>
         </Link>

        {/* Trust chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/65">
          <span>🚚 Free Nationwide Shipping</span>
          <span>💳 COD Available</span>
          <span>🛡️ 30-Day Guarantee</span>
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

function CouplesBundle({ setTab }: { setTab: (v: Variant) => void }) {
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

  useEffect(() => {
    setShopState({ variant: "couples", price: selectedBundle.price, bundleLabel: selectedBundle.label });
  }, [selectedBundle.price, selectedBundle.label]);


  return (
    <div className="grid gap-6 md:gap-8 lg:gap-12 lg:grid-cols-2 items-start">
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
          For couples na pareho ng goal: <span style={{ color: "#F2EAE0", fontWeight: 600 }}>bumalik sa kung sino kayo dati</span>. Synced formulas, designed to be taken together.
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
                   <BundleBonusIndicator tier={(b.id === "3" ? "3" : "2") as "2" | "3"} />
                 </div>
                 <div className="text-[var(--color-ivory)] font-serif text-xl">₱{b.price.toLocaleString()}</div>
               </button>
             );
           })}
         </div>

         {/* What's included (couples always include the bonus) */}
         <BundleIncludesSection
           productImage={BOTTLE_HER_URL}
           productName={`LOVABLE Couples Bundle — ${selectedBundle.label}`}
           tier={(selectedBundle.id === "3" ? "3" : "2") as "2" | "3"}
         />

         {/* CTA */}
         <Link
           to="/checkout"
           search={{ variant: "couples" as const, bundle: (selectedBundle.id as "1" | "2" | "3") }}
           className="btn-pulse-shine btn-pulse-medium mt-7 !w-full"
         >
           <span>Get the Couples Bundle, ₱{selectedBundle.price.toLocaleString()}</span> <span className="arrow">→</span>
         </Link>

        {/* Trust chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-wider uppercase text-[var(--color-ivory)]/65">
          <span>🚚 Free Nationwide Shipping</span>
          <span>💳 COD Available</span>
          <span>🛡️ 30-Day Guarantee</span>
        </div>

        {/* What's Inside the Bundle */}
        <WhatsInsideCard />
      </Reveal>
    </div>
  );
}

function WhatsInsideCard() {
  const items: {
    icon: React.ReactNode;
    title: string;
    sub: string;
    free?: boolean;
  }[] = [
    {
      icon: <Droplet size={22} className="text-[#B8955A]" strokeWidth={1.4} style={{ transform: "rotate(-8deg)" }} />,
      title: "LOVABLE For Her",
      sub: "30ml · 1-month supply",
    },
    {
      icon: <Droplet size={22} className="text-[#B8955A]" strokeWidth={1.4} style={{ transform: "rotate(8deg)" }} />,
      title: "LOVABLE For Him",
      sub: "30ml · 1-month supply",
    },
    {
      icon: <Truck size={22} className="text-[#B8955A]" strokeWidth={1.4} />,
      title: "FREE Nationwide Shipping",
      sub: "Discreet packaging via J&T, Ninja Van, or Flash",
    },
    {
      icon: <ShieldCheck size={22} className="text-[#B8955A]" strokeWidth={1.4} />,
      title: "30-Day Money-Back Guarantee",
      sub: "Full refund. No questions asked.",
    },
  ];

  return (
    <div
      className="mt-7 rounded-2xl p-6 md:p-7"
      style={{
        background: "linear-gradient(180deg, #1A0A0A 0%, #110707 100%)",
        border: "0.5px solid rgba(184, 149, 90, 0.3)",
        boxShadow: "0 1px 0 rgba(242,234,224,0.05) inset, 0 16px 36px rgba(0,0,0,0.4)",
      }}
    >
      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: 11,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#B8955A",
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        What's Inside the Bundle
      </h3>
      <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((it, i) => (
          <li
            key={it.title}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              paddingBottom: i === items.length - 1 ? 0 : 16,
              borderBottom: i === items.length - 1 ? "none" : "0.5px solid rgba(184, 149, 90, 0.15)",
            }}
          >
            <span style={{ flexShrink: 0, marginTop: 2 }}>{it.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: 14,
                    color: "#F2EAE0",
                    fontWeight: 500,
                  }}
                >
                  {it.title}
                </span>
                {it.free && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(184, 149, 90, 0.15)",
                      border: "0.5px solid rgba(184, 149, 90, 0.4)",
                      color: "#B8955A",
                      fontSize: 9,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: 999,
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#DC2627" }} />
                    Free
                  </span>
                )}
              </div>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: 11,
                  color: "rgba(154, 136, 128, 0.85)",
                  marginTop: 3,
                  lineHeight: 1.5,
                }}
              >
                {it.sub}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div
        style={{
          marginTop: 16,
          paddingTop: 16,
          borderTop: "0.5px solid rgba(184, 149, 90, 0.3)",
          fontFamily: "Montserrat, sans-serif",
          fontStyle: "italic",
          fontSize: 12,
          color: "#B8955A",
          textAlign: "center",
        }}
      >
        You save ₱398 vs buying separately.
      </div>
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
          width: 250px;
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
          width: 120px;
          height: auto;
          position: relative;
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.5))
                  drop-shadow(0 4px 8px rgba(220, 38, 39, 0.15));
        }
        .howuse-bottle-him {
          transform: rotate(-4deg);
          z-index: 1;
          margin-right: -20px;
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
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 btn-shine-group">
            <Link to="/shop" search={{ variant: "her" }} className="btn-primary btn-shine btn-shine-primary"><span>Shop For Her →</span></Link>
            <Link to="/shop" search={{ variant: "him" }} className="btn-secondary btn-shine btn-shine-glass"><span>Shop For Him →</span></Link>
            <Link to="/shop" search={{ variant: "couples" }} className="btn-secondary btn-shine btn-shine-glass"><span>Couples Bundle →</span></Link>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <ChevronDown className="mt-12 mx-auto text-[var(--color-ivory)]/40" size={22} />
        </Reveal>
      </div>
    </section>
  );
}

function _CrossTabNav({ active, setTab }: { active: Variant; setTab: (v: Variant) => void }) {
  const tabs: { id: Variant; label: string }[] = [
    { id: "her", label: "For Her" },
    { id: "him", label: "For Him" },
    { id: "couples", label: "Couples Bundle" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
        fontFamily: "Montserrat, sans-serif",
        fontSize: 10,
        letterSpacing: "1.8px",
        textTransform: "uppercase",
      }}
    >
      {tabs.map((t, i) => {
        const isActive = active === t.id;
        return (
          <span key={t.id} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setTab(t.id)}
              className="cross-tab-link"
              data-active={isActive}
              style={{
                background: "transparent",
                border: "none",
                padding: "4px 0",
                cursor: "pointer",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#DC2627" : "rgba(154,136,128,0.85)",
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: 4,
                letterSpacing: "1.8px",
                transition: "color 200ms ease",
              }}
            >
              {t.label}
            </button>
            {i < tabs.length - 1 && (
              <span style={{ color: "rgba(184,149,90,0.4)" }}>·</span>
            )}
          </span>
        );
      })}
      <style>{`
        .cross-tab-link[data-active="false"]:hover {
          color: #B8955A !important;
        }
      `}</style>
    </div>
  );
}

function ComprehensiveFAQ() {
  const faqs: { q: string; a: string }[] = [
    {
      q: "How do I use it?",
      a: "Place half a dropper (about 0.5 ml) under your tongue. Hold for 30 seconds before swallowing. Take 1 to 2 times daily.",
    },
    {
      q: "When will I feel the difference?",
      a: "Most couples report a noticeable shift within 7 to 14 days. Effects build gradually and peak around week 3.",
    },
    {
      q: "Is this safe for daily use?",
      a: "Yes. LOVABLE is formulated with clinically-researched botanicals and contains no synthetic hormones. Safe for long-term consistent use.",
    },
    {
      q: "Are For Him and For Her different formulas?",
      a: "Yes. Each formula is precision-built for hormonal differences. For Her focuses on mood balance and arousal. For Him supports stamina and mental focus.",
    },
    {
      q: "Will my partner know I'm taking it?",
      a: "That's your choice. LOVABLE has no taste and no scent. The packaging arrives in plain unmarked boxes via J&T, Ninja Van, or Flash. Many couples take it together as a shared ritual, others use it privately.",
    },
    {
      q: "What if it doesn't work for me?",
      a: "Try LOVABLE for 30 days risk-free. If you don't feel the difference, we refund every peso. No questions, no awkwardness.",
    },
    {
      q: "How do I pay? Pwede ba COD?",
      a: "Pwede COD nationwide. Pwede din via GCash, Maya, Visa, or Mastercard. Choose what's easiest for you at checkout.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[#0A0606] section-divider py-[80px] md:py-[110px]">
      <div className="mx-auto max-w-[820px] px-6">
        <Reveal>
          <p className="eyebrow text-center mb-4">Frequently Asked</p>
          <h2 className="text-display text-center text-[var(--color-ivory)] text-[32px] md:text-[44px] leading-[1.1] mb-12">
            Questions, <span style={{ color: "#B8955A", fontStyle: "italic" }}>Answered.</span>
          </h2>
        </Reveal>
        <div
          style={{
            border: "0.5px solid rgba(184, 149, 90, 0.2)",
            borderRadius: 14,
            background: "linear-gradient(180deg, rgba(26,10,10,0.6) 0%, rgba(13,6,6,0.6) 100%)",
            overflow: "hidden",
          }}
        >
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={f.q}
                style={{
                  borderBottom: i === faqs.length - 1 ? "none" : "0.5px solid rgba(184, 149, 90, 0.2)",
                  background: isOpen ? "rgba(220, 38, 39, 0.04)" : "transparent",
                  transition: "background 250ms ease",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#F2EAE0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {f.q}
                  </span>
                  <Plus
                    size={16}
                    color="#B8955A"
                    style={{
                      flexShrink: 0,
                      transition: "transform 300ms ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    overflow: "hidden",
                    transition: "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    style={{
                      padding: "0 24px 20px",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "rgba(154, 136, 128, 0.95)",
                      margin: 0,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
