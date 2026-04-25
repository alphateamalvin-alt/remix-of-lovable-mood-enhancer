import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Reveal } from "../Reveal";

export function VSL() {
  return (
    <section id="story" className="bg-[var(--color-warm-noir)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:gap-16 lg:grid-cols-[55fr_45fr] items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(192,57,43,0.35)]">
            <video
              controls
              preload="metadata"
              poster={hero}
              src="https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/0425.mov?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8wNDI1Lm1vdiIsImlhdCI6MTc3NzEzMjQzMiwiZXhwIjoxODA4NjY4NDMyfQ.zWaZ-jUbuawlObjN1VUhDqCRnkKwbGySjP_dy2wVtRg"
              className="w-full h-auto block aspect-video bg-black"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mb-5">Watch This First</p>
          <h2 className="text-display text-[var(--color-ivory)] text-3xl sm:text-4xl md:text-[38px] leading-[1.15]">
            When Was the Last Time You Truly Felt… Connected?
          </h2>
          <p className="mt-6 text-[var(--color-ivory-muted)] text-base leading-[1.85] max-w-xl">
            Before you scroll, watch this short video. It's the story of thousands of Filipino couples and maybe yours too. What you'll see might be the most honest conversation about intimacy you've heard in years.
          </p>

          <ul className="mt-7 space-y-3 max-w-xl">
            {[
              "What's actually stealing your connection (it's not what you think)",
              "Why most solutions fail and what works instead",
              "How LOVABLE helps your body remember how to feel again",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[15px] leading-relaxed">
                <span className="mt-2 inline-block w-5 h-px bg-[var(--color-brand-red)] flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link to="/shop" className="btn-primary">Get LOVABLE Now →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
