import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  { q: "How soon will I feel a difference?", a: "Most feel increased energy and mood within 7-14 days. Peak results after 20-30 days of consistent daily use." },
  { q: "Is LOVABLE safe? Any side effects?", a: "Completely safe. Formulated with natural amino acids, minerals, and botanicals. No synthetic drugs, no hormones, no known side effects." },
  { q: "How do I take it?", a: "2-3 drops under the tongue or mixed in water, coffee, or any drink. 1-2 times daily. Takes 5 seconds." },
  { q: "Is this like a blue pill?", a: "No. LOVABLE nourishes your body's own natural systems over time — not a quick artificial fix. It's wellness, not a drug." },
  { q: "What's your return policy?", a: "30-day full money-back guarantee. Return unused portion for a complete refund — no questions, no hassle." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[var(--color-warm-noir)] py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-14">
            <p className="eyebrow mb-5">Questions & Answers</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[44px] leading-[1.15]">
              Everything You Need to Know
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-white/[0.08]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-white/[0.08]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-[var(--color-ivory)] text-lg sm:text-[20px] leading-snug">{it.q}</h3>
                  <span
                    className={`flex-shrink-0 h-9 w-9 rounded-full border border-[var(--color-brand-red)]/40 text-[var(--color-brand-red)] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[var(--color-ivory-muted)] text-[15px] leading-[1.85] max-w-2xl">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
