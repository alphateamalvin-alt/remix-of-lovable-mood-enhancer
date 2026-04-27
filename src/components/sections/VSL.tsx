import { Link } from "@tanstack/react-router";

import { Reveal } from "../Reveal";

export function VSL() {
  return (
    <section id="story" className="bg-[var(--color-warm-noir)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:gap-16 lg:grid-cols-[55fr_45fr] items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(192,57,43,0.35)] bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/gWyNJb5d6Kk?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=gWyNJb5d6Kk"
              title="LOVABLE Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-auto block aspect-video bg-black pointer-events-none"
            />
            {/* Overlay strips covering YouTube branding (top title bar + bottom watermark) */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-black pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-12 bg-black pointer-events-none" />
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
