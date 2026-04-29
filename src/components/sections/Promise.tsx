import { Reveal } from "../Reveal";

const RED = { color: "#A81716", fontWeight: 600 } as const;

const promises = [
  { icon: "🌿", title: <>Chemical-Free, Without Pressure</>, desc: "No synthetic drugs. Just pure botanicals that work with your body." },
  { icon: "💯", title: <>Results You'll Feel, <span style={RED}>Or You Don't Pay</span></>, desc: "30-day full money-back guarantee. No questions asked." },
  { icon: "🔬", title: <>Completely Natural. <span style={RED}>Works Naturally.</span></>, desc: "Formulated to work with your body, never against it." },
  { icon: "❤️", title: <>Stronger Relationships. <span style={RED}>Real Intimacy.</span></>, desc: "Supporting your connection, not just a symptom." },
  { icon: "🌟", title: <>Supporting the WHOLE You</>, desc: "Mind, body, energy, and confidence. Not just one thing." },
];

// also update Promise headline below
export function Promise() {
  return (
    <section className="bg-[var(--color-noir)] py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="eyebrow mb-5">The LOVABLE Promise</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[44px] leading-[1.15]">
              We Stand Behind <span style={{ color: "#B8955A", fontStyle: "italic" }}>Every Drop.</span>
            </h2>
          </div>
        </Reveal>

        <div>
          {promises.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="gold-divider" />
              <div className="flex items-start gap-6 py-8 sm:py-10">
                <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[var(--color-brand-red-soft)] border border-[var(--color-brand-red)]/30 flex items-center justify-center text-2xl">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-serif text-[var(--color-ivory)] text-xl sm:text-[22px] leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[var(--color-ivory-muted)] text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="gold-divider" />
        </div>
      </div>
    </section>
  );
}
