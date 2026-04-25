import { Star } from "lucide-react";
import bg1 from "@/assets/lifestyle3.jpg";
import bg2 from "@/assets/lifestyle7.jpg";
import bg3 from "@/assets/lifestyle11.jpg";
import { Reveal } from "../Reveal";

const testimonials = [
  {
    bg: bg1,
    quote:
      "By week 2, I felt like myself again. My husband noticed before I even said anything. It was like I came back to life.",
    who: "Ana M., 38 · Manila",
  },
  {
    bg: bg2,
    quote:
      "The confidence came back quietly. She started looking at me differently. Best decision I've made in years.",
    who: "Carlo R., 44 · Cebu",
  },
  {
    bg: bg3,
    quote:
      "We laugh again. We talk again. LOVABLE gave us back something we honestly thought was gone for good.",
    who: "Jasmine & Paolo · Davao",
  },
];

export function SocialProof() {
  return (
    <section className="bg-[var(--color-warm-noir)] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="eyebrow mb-5">Real People. Real Results.</p>
          <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[44px] leading-[1.15] max-w-3xl mx-auto">
            Thousands of Couples Are Already Feeling the Difference
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.who} delay={i * 0.08}>
            <article className="relative rounded-2xl overflow-hidden h-full min-h-[420px] ring-1 ring-white/10">
              <img
                src={t.bg}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "blur(6px) brightness(0.5)" }}
              />
              <div className="absolute inset-0 bg-[var(--color-noir)]/65" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-[var(--color-noir)]/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 text-center">
                <div className="flex justify-center gap-1 text-[var(--color-brand-red)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif italic text-[var(--color-ivory)] text-lg sm:text-xl leading-relaxed mt-6">
                  "{t.quote}"
                </p>
                <p className="mt-8 text-[12px] tracking-[0.18em] uppercase text-[var(--color-ivory)]/70">
                  — {t.who}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
