import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const FOR_HIM_IMAGE =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2027,%202026,%2012_03_26%20AM.png";

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

        {/* SEAMLESS IMAGE — bleeds to edges, fades on left into bg */}
        <div className="order-1 lg:order-2 relative overflow-hidden min-h-[70vh] lg:min-h-0">
          <img
            src={FOR_HIM_IMAGE}
            alt="LOVABLE for Him"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Left-edge fade into the warm-noir background */}
          <div
            className="absolute inset-y-0 left-0 w-40 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--color-warm-noir) 0%, rgba(26,10,10,0.6) 40%, rgba(26,10,10,0) 100%)",
            }}
          />
          {/* Mobile: bottom fade */}
          <div
            className="lg:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,10,10,0) 0%, var(--color-warm-noir) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
