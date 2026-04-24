import painImg from "@/assets/painpoints.jpg";
import { Reveal } from "../Reveal";

const pains = [
  { icon: "😔", text: "You love each other but something feels missing" },
  { icon: "🛏️", text: "The distance in bed feels wider every night" },
  { icon: "📱", text: "Together physically, but worlds apart emotionally" },
  { icon: "⚡", text: "Stress and the years have quietly drained your energy" },
  { icon: "💭", text: "You remember how it used to feel — and you miss it" },
  { icon: "🔇", text: "Neither of you talks about it. But you both feel it." },
];

export function PainPoints() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <img
        src={painImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(2px)" }}
      />
      <div className="absolute inset-0 bg-[var(--color-noir)]/[0.72]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-5">Does This Sound Familiar?</p>
          <h2 className="text-display text-[var(--color-ivory)] text-4xl sm:text-5xl md:text-[52px] leading-[1.1] max-w-3xl mx-auto">
            You Love Each Other. But Something Feels… Different.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-7 text-left h-full">
                <div className="text-3xl mb-4">{p.icon}</div>
                <p className="text-[var(--color-ivory)]/90 text-[15px] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 italic font-serif text-[var(--color-ivory)] text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed">
            You're not broken. You just need the right support.
          </p>
          <div className="mt-9">
            <a href="#shop" className="btn-primary">I'm Ready to Feel Again →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
