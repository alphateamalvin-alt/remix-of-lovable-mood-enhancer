import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const FOR_HER_IMAGE = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/12%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMiAoMSkucG5nIiwiaWF0IjoxNzc3MTMyNzg2LCJleHAiOjE4MDg2Njg3ODZ9.B-AMqN_dXsCpMyXZQlOCFNt-OQtx30ikTNBNvzfd9Kk";

const BOTTLE_URL =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/12.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMi5wbmciLCJpYXQiOjE3NzcwOTM0ODcsImV4cCI6MTgwODYyOTQ4N30.CFf7Np6Mbe2sVkMoi-19pQuRX9bY83BdtGeGzXp1mpU";

const benefits = [
  "Supports natural arousal and healthy blood flow",
  "Reduces stress and balances mood naturally",
  "Reconnects you with your body's desires",
  "Boosts energy without artificial stimulants",
  "Helps with dryness and discomfort",
];

export function ForHer() {
  return (
    <section id="forher" className="bg-[var(--color-noir)]">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        {/* DRAMATIC BOTTLE STAGE */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-warm-noir)] via-[var(--color-noir)] to-black flex items-center justify-center min-h-[70vh] lg:min-h-0">
          <img
            src={forher}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            style={{ filter: "blur(30px) saturate(1.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-noir)] via-transparent to-[var(--color-noir)]/60" />
          {/* Red glow */}
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
            alt="LOVABLE for Her dropper bottle"
            loading="lazy"
            className="relative z-10 h-[70vh] max-h-[640px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(192,57,43,0.45)]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-20 py-20">
          <Reveal>
            <p className="eyebrow mb-5">For Her</p>
            <h2 className="text-display text-[var(--color-ivory)] text-4xl md:text-[48px] leading-[1.15] max-w-md">
              Feel Balanced, Vibrant, and Alive Again.
            </h2>
            <span className="red-rule mt-7 mb-7" />
            <p className="text-[var(--color-ivory-muted)] text-[16px] leading-[1.9] max-w-md">
              Your body remembers how to feel this way. LOVABLE Drops for Women work with your natural chemistry — not against it — to restore what stress, hormones, and time have quietly taken away. No synthetics. No pressure. Just pure support.
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
              <Link to="/shop" search={{ variant: "her" }} className="btn-primary">Shop For Her →</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
