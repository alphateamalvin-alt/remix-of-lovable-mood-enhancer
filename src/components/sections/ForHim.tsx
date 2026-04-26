import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const FOR_HIM_IMAGE = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy84LnBuZyIsImlhdCI6MTc3NzEzMjk5NSwiZXhwIjoxODA4NjY4OTk1fQ.1Ze3vH74IZ_9etm09fJzNhJiP9aT2RlVjrb5rirLhIw";

const BOTTLE_URL = "/for-him-product.png";

const benefits = [
  "Supports healthy testosterone levels naturally",
  "Boosts stamina, energy, and endurance",
  "Improves circulation and physical response",
  "Enhances mental confidence and clarity",
  "100% natural. No synthetic drugs.",
];

export function ForHim() {
  return (
    <section id="forhim" className="bg-[var(--color-warm-noir)]">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* CONTENT */}
        <div className="order-2 lg:order-1 flex items-center px-6 sm:px-10 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-5">For Him</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[48px] leading-[1.15] max-w-md">
              Bring Back the Fire. Reclaim Your Confidence.
            </h2>
            <span className="red-rule mt-7 mb-7" />
            <p className="text-[var(--color-ivory-muted)] text-[16px] leading-[1.9] max-w-md">
              When your mind is ready but your body hesitates, LOVABLE Drops for Men work with your body's natural systems to help you show up strong, present, and confident. Backed by nature. Built for real men.
            </p>

            <ul className="mt-8 space-y-3 max-w-md">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[15px]">
                  <span className="mt-2 inline-block w-4 h-px bg-[var(--color-brand-red)] flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link to="/shop" search={{ variant: "him" }} className="btn-primary">Shop For Him →</Link>
            </div>
          </Reveal>
        </div>

        {/* DRAMATIC BOTTLE STAGE */}
        <div className="order-1 lg:order-2 relative overflow-hidden bg-gradient-to-bl from-black via-[var(--color-warm-noir)] to-[var(--color-noir)] flex items-center justify-center min-h-[70vh] lg:min-h-0">
          <img
            src={FOR_HIM_IMAGE}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            style={{ filter: "blur(30px) saturate(1.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-warm-noir)] via-transparent to-[var(--color-warm-noir)]/60" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[55%] w-[55%] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--color-brand-red) 55%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <img
            src={BOTTLE_URL}
            alt="LOVABLE for Him dropper bottle"
            loading="lazy"
            className="relative z-10 h-[70vh] max-h-[640px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(192,57,43,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
