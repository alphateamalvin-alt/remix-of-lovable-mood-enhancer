import forhim from "@/assets/forhim.jpg";
import bottle from "@/assets/product-him.png";
import { Reveal } from "../Reveal";

const benefits = [
  "Supports healthy testosterone levels naturally",
  "Boosts stamina, energy, and endurance",
  "Improves circulation and physical response",
  "Enhances mental confidence and clarity",
  "100% natural. No synthetic drugs.",
];

export function ForHim() {
  return (
    <section id="forhim" className="bg-[var(--color-warm-noir)]">
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        <div className="order-2 lg:order-1 flex items-center px-6 sm:px-10 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-5">For Him</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[48px] leading-[1.15] max-w-md">
              Bring Back the Fire. Reclaim Your Confidence.
            </h2>
            <span className="red-rule mt-7 mb-7" />
            <p className="text-[var(--color-ivory-muted)] text-[16px] leading-[1.9] max-w-md">
              When your mind is ready but your body hesitates — LOVABLE Drops for Men work with your body's natural systems to help you show up strong, present, and confident. Backed by nature. Built for real men.
            </p>

            <ul className="mt-8 space-y-3 max-w-md">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[15px]">
                  <span className="mt-2 inline-block w-4 h-px bg-[var(--color-brand-red)] flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <img src={bottle} alt="LOVABLE for Him dropper bottle" loading="lazy" className="h-52 w-auto object-contain" />
            </div>

            <div className="mt-8">
              <a href="#shop" className="btn-primary">Shop For Him →</a>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-auto">
          <img src={forhim} alt="Confident Filipino man portrait" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
