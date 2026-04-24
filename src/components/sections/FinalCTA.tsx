import hero from "@/assets/hero.jpg";
import { Reveal } from "../Reveal";

export function FinalCTA() {
  return (
    <section id="shop" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "blur(2px)" }} />
      <div className="absolute inset-0 bg-[var(--color-noir)]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-transparent to-[var(--color-noir)]/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center py-24">
        <Reveal>
          <h2 className="text-display text-[var(--color-ivory)] text-4xl sm:text-5xl md:text-[60px] leading-[1.05]">
            Ready to Feel Like Yourselves Again?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-[var(--color-ivory)]/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Join thousands of Filipino couples who chose to reignite their connection — naturally.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#forher" className="btn-primary">Shop For Her →</a>
            <a href="#forhim" className="btn-outline">Shop For Him →</a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 text-[12px] tracking-[0.18em] uppercase text-[var(--color-ivory)]/60">
            🔒 Secure Checkout · 🚚 Fast Nationwide Delivery · 💳 GCash, Maya, COD
          </p>
        </Reveal>
      </div>
    </section>
  );
}
