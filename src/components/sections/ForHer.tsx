import forher from "@/assets/forher.jpg";
import bottle from "@/assets/product-her.png";
import { Reveal } from "../Reveal";

const benefits = [
  "Supports natural arousal and healthy blood flow",
  "Reduces stress and balances mood naturally",
  "Reconnects you with your body's desires",
  "Boosts energy without artificial stimulants",
  "Helps with dryness and discomfort",
];

export function ForHer() {
  return (
    <section id="forher" className="bg-[var(--color-noir)]">
      <div className="grid lg:grid-cols-2 min-h-[85vh]">
        <div className="relative aspect-[4/5] lg:aspect-auto">
          <img src={forher} alt="Confident Filipino woman in silk robe" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <div className="flex items-center px-6 sm:px-10 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-5">For Her</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[48px] leading-[1.15] max-w-md">
              Feel Balanced, Vibrant, and Alive Again.
            </h2>
            <span className="red-rule mt-7 mb-7" />
            <p className="text-[var(--color-ivory-muted)] text-[16px] leading-[1.9] max-w-md">
              Your body remembers how to feel this way. LOVABLE Drops for Women work with your natural chemistry — not against it — to restore what stress, hormones, and time have quietly taken away. No synthetics. No pressure. Just pure support.
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
              <img src={bottle} alt="LOVABLE for Her dropper bottle" loading="lazy" className="h-52 w-auto object-contain" />
            </div>

            <div className="mt-8">
              <a href="#shop" className="btn-primary">Shop For Her →</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
