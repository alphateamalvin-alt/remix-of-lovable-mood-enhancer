import { Star } from "lucide-react";
import l1 from "@/assets/lifestyle1.jpg";
import l2 from "@/assets/lifestyle2.jpg";
import l3 from "@/assets/lifestyle3.jpg";
import l4 from "@/assets/lifestyle4.jpg";
import l5 from "@/assets/lifestyle5.jpg";
import l6 from "@/assets/lifestyle6.jpg";
import l7 from "@/assets/lifestyle7.jpg";
import l8 from "@/assets/lifestyle8.jpg";
import l9 from "@/assets/lifestyle9.jpg";
import l10 from "@/assets/lifestyle10.jpg";
import l11 from "@/assets/lifestyle11.jpg";
import l12 from "@/assets/lifestyle12.jpg";
import { Reveal } from "../Reveal";

const row1 = [l1, l2, l3, l4, l5, l6];
const row2 = [l7, l8, l9, l10, l11, l12];

const testimonials = [
  { quote: "By week 2, I felt like myself again. My husband noticed before I even said anything.", who: "Ana M., 38, Manila" },
  { quote: "The confidence came back. She looks at me differently now. Best purchase I've made.", who: "Carlo R., 44, Cebu" },
  { quote: "We laugh again. We talk again. LOVABLE gave us back something we thought was gone.", who: "Jasmine & Paolo, Davao" },
];

function Strip({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden mask-fade">
      <div
        className={`flex gap-5 w-max ${direction === "left" ? "animate-[marquee-left_60s_linear_infinite]" : "animate-[marquee-right_60s_linear_infinite]"}`}
      >
        {doubled.map((src, i) => (
          <div key={i} className="w-[200px] sm:w-[260px] aspect-[260/360] rounded-2xl overflow-hidden flex-shrink-0">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

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

      <div className="mt-14 space-y-5">
        <Strip images={row1} direction="left" />
        <Strip images={row2} direction="right" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-20 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.who} delay={i * 0.08}>
            <div className="glass-card rounded-2xl p-8 h-full text-center">
              <div className="flex justify-center gap-1 text-[var(--color-brand-red)] mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif italic text-[var(--color-ivory)] text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <p className="mt-5 text-[12px] tracking-[0.18em] uppercase text-[var(--color-ivory-muted)]">
                — {t.who}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
