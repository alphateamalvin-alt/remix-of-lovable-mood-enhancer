import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import bgImage from "@/assets/painpoints.jpg";

const cards = [
  { emoji: "😔", text: "You love each other but something feels missing" },
  { emoji: "🛏️", text: "The distance in bed feels wider every night" },
  { emoji: "📱", text: "Together physically, but worlds apart emotionally" },
  { emoji: "⚡", text: "Stress and the years have quietly drained your energy" },
  { emoji: "💭", text: "You remember how it used to feel — and you miss it" },
  { emoji: "🔇", text: "Neither of you talks about it. But you both feel it." },
];

export function PainPoints() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-5" style={{ color: "var(--color-brand-red)" }}>
              Does This Sound Familiar?
            </p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[52px] leading-[1.1]">
              You Love Each Other. But Something Feels... Different.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.text} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-7 md:p-8 h-full flex items-start gap-5 transition-transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl leading-none flex-shrink-0">{c.emoji}</div>
                <p className="font-serif italic text-[var(--color-ivory)] text-lg md:text-xl leading-[1.5]">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 text-center italic text-[var(--color-ivory-muted)] text-lg md:text-xl">
            You're not broken. You just need the right support.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "var(--color-brand-red)" }}
            >
              I'm Ready to Feel Again →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
