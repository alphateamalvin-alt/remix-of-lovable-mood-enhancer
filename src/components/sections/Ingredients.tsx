import { useState } from "react";
import maca from "@/assets/maca.jpg";
import ginseng from "@/assets/ginseng.jpg";
import tongkat from "@/assets/tongkat.jpg";
import citrulline from "@/assets/citrulline.jpg";
import magnesium from "@/assets/magnesium.jpg";
import taurine from "@/assets/taurine.jpg";
import b6 from "@/assets/b6.jpg";
import { Reveal } from "../Reveal";

const him = [
  { img: maca, name: "Maca Root", desc: "Boosts energy, stamina, and natural drive" },
  { img: ginseng, name: "Panax Ginseng", desc: "Enhances endurance and mental clarity" },
  { img: tongkat, name: "Tongkat Ali", desc: "Supports healthy testosterone levels naturally" },
];

const her = [
  { img: citrulline, name: "L-Citrulline", desc: "Supports healthy blood flow and natural arousal" },
  { img: magnesium, name: "Magnesium Glycinate", desc: "Calms stress, supports hormonal balance" },
  { img: taurine, name: "Taurine", desc: "Boosts energy and emotional wellbeing" },
  { img: b6, name: "Vitamin B6", desc: "Supports mood, energy, and hormonal health" },
];

export function Ingredients() {
  const [tab, setTab] = useState<"him" | "her">("him");
  const items = tab === "him" ? him : her;

  return (
    <section className="bg-[var(--color-noir)] py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-5">What's Inside</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[44px] leading-[1.15]">
              Every Drop Backed by Nature and Science
            </h2>
            <p className="mt-5 text-[var(--color-ivory-muted)] text-base leading-relaxed">
              No fillers. No synthetics. Just pure researched ingredients that work with your body.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1 rounded-full border border-white/10 bg-white/[0.03]">
            {(["him", "her"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 sm:px-8 py-2.5 rounded-full text-[11px] tracking-[0.22em] uppercase font-semibold transition-all ${
                  tab === t
                    ? "bg-[var(--color-brand-red)] text-white"
                    : "text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)]"
                }`}
              >
                For {t === "him" ? "Him" : "Her"}
              </button>
            ))}
          </div>
        </div>

        <div className={`mt-14 grid gap-6 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.07}>
              <div className="glass-card rounded-2xl overflow-hidden h-full transition-transform duration-500 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[var(--color-ivory)] text-xl mb-2">{it.name}</h3>
                  <p className="text-[var(--color-ivory-muted)] text-sm leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
