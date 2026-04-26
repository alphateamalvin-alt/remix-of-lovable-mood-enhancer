import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";

const HERO_IMAGE_URL =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/1%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xICgxKS5wbmciLCJpYXQiOjE3NzcxODQ3MTEsImV4cCI6MTgwODcyMDcxMX0.tSs6xKIvVmlA0vyMJzsKEE0i3LLV96lOkVU4oG2ORKY";

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
      className="relative min-h-[100svh] flex flex-col md:flex-row bg-[#0D0D0D] overflow-hidden"
    >
      {/* Mobile: image on top (40vh). Desktop: right side 50% */}
      <div className="order-1 md:order-2 relative w-full md:w-1/2 h-[40vh] md:h-auto md:min-h-[100svh]">
        <img
          src={HERO_IMAGE_URL}
          alt="Filipino couple in tender embrace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle dark gradient on the LEFT edge to blend into text section (desktop only) */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.6) 40%, rgba(13,13,13,0) 100%)",
          }}
        />
        {/* Mobile: gradient on bottom edge to blend into text below */}
        <div
          className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0) 0%, #0D0D0D 100%)",
          }}
        />
      </div>

      {/* Left side: text content */}
      <div className="order-2 md:order-1 relative w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:py-28 md:min-h-[100svh]">
        <div className="max-w-xl w-full text-center md:text-left">
          <Reveal>
            <p className="eyebrow mb-6">Natural Mood Enhancer Drops</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display text-[var(--color-ivory)] text-[36px] sm:text-5xl md:text-[56px] lg:text-[64px] leading-[1.05]">
              What If You Could Feel That Deep, Unshakable Connection Again?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-base sm:text-lg text-[var(--color-ivory)]/75 leading-relaxed">
              The natural way thousands of Filipino couples are quietly reigniting what time tried to take away.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4">
              <a href="#forher" onClick={scrollTo("forher")} className="btn-primary">For Her →</a>
              <a href="#forhim" onClick={scrollTo("forhim")} className="btn-outline">For Him →</a>
              <a href="#forcouples" onClick={scrollTo("forcouples")} className="btn-gold">For Couples →</a>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <ul className="mt-12 flex flex-wrap items-center md:justify-start justify-center gap-x-6 gap-y-3 text-[12px] tracking-wider uppercase text-[var(--color-ivory)]/60">
              <li>✓ 100% Natural</li>
              <li>✓ No Prescription</li>
              <li>✓ Made in USA</li>
              <li>✓ 30-Day Guarantee</li>
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-[bounce-slow_2s_ease-in-out_infinite] text-[var(--color-ivory)]/50">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
