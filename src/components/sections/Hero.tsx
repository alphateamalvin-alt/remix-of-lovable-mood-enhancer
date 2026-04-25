import { ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Reveal } from "../Reveal";

function scrollTo(hash: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={hero}
        alt="Filipino couple in tender embrace"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(2px)" }}
      />
      <div className="absolute inset-0 bg-[var(--color-noir)]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-noir)]/40 via-transparent to-[var(--color-noir)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-28">
        <Reveal>
          <p className="eyebrow mb-6">Natural Mood Enhancer Drops</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-display text-[var(--color-ivory)] text-[42px] sm:text-5xl md:text-[68px] leading-[1.05] max-w-3xl mx-auto">
            What If You Could Feel That Deep, Unshakable Connection Again?
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-base sm:text-lg text-[var(--color-ivory)]/75 max-w-xl mx-auto leading-relaxed">
            The natural way thousands of Filipino couples are quietly reigniting what time tried to take away.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#forher" onClick={scrollTo("forher")} className="btn-primary">For Her →</a>
            <a href="#forhim" onClick={scrollTo("forhim")} className="btn-outline">For Him →</a>
            <a href="#forcouples" onClick={scrollTo("forcouples")} className="btn-gold">For Couples →</a>
          </div>
        </Reveal>
        <Reveal delay={0.45}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[12px] tracking-wider uppercase text-[var(--color-ivory)]/60">
            <li>✓ 100% Natural</li>
            <li>✓ No Prescription</li>
            <li>✓ Made in USA</li>
            <li>✓ 30-Day Guarantee</li>
          </ul>
        </Reveal>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-[bounce-slow_2s_ease-in-out_infinite] text-[var(--color-ivory)]/50">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
