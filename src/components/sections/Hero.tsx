import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";

const HERO_IMAGE_URL = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/ChatGPT%20Image%20Apr%2028,%202026,%2001_47_05%20AM.png";

function scrollTo(hash: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col md:flex-row bg-[#0D0D0D] overflow-hidden"
    >
      {/* Mobile: image on top (40vh). Desktop: right side 50% */}
      <div className="order-1 md:order-2 relative w-full md:w-1/2 h-[40vh] md:h-auto md:min-h-[100svh]">
        <img
          src={HERO_IMAGE_URL}
          alt="Filipino couple in tender embrace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Subtle dark gradient on the LEFT edge to blend into text section (desktop only) */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.6) 40%, rgba(13,13,13,0) 100%)",
          }}
        />
        {/* Mobile: gradient on bottom edge to blend into text below */}
        <div
          className="md:hidden absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0) 0%, #0D0D0D 100%)",
          }}
        />
      </div>

      {/* Left side: text content */}
      <div className="order-2 md:order-1 relative w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:py-28 md:min-h-[100svh]">
        <div className="max-w-xl w-full text-center md:text-left">
          <Reveal>
            <p className="eyebrow mb-6">Natural Lovable Drops</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display text-[var(--color-ivory)] text-[36px] sm:text-5xl md:text-[56px] lg:text-[64px] leading-[1.05]">
              What If You Could Feel That Deep, Unshakable Connection Again?
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-base sm:text-lg text-[var(--color-ivory)]/75 leading-relaxed">
              The natural way thousands of Filipino couples are quietly reigniting what time tried to take away.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-5 sm:gap-6">
              <a
                href="/shop"
                className="inline-block bg-[#C0392B] text-white hover:bg-[#a83122] transition-colors"
                style={{
                  padding: "15px 36px",
                  borderRadius: "8px",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Shop Now →
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#C0392B", fontSize: "13px", letterSpacing: "1px" }}>★★★★★</span>
                  <span style={{ color: "#F2EAE0", fontWeight: 600, fontSize: "13px" }}>4.9</span>
                </div>
                <p style={{ color: "#9A8880", fontSize: "10px", marginTop: "2px" }}>
                  Based on 1,200+ verified reviews
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <ul className="mt-8 flex flex-wrap items-center md:justify-start justify-center gap-x-4 gap-y-2">
              {["30-Day Money Back", "100% Natural", "Made in USA"].map((item) => (
                <li key={item} className="flex items-center gap-2" style={{ color: "#9A8880", fontSize: "10px" }}>
                  <span
                    aria-hidden
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "9999px",
                      background: "#C0392B",
                      display: "inline-block",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-[bounce-slow_2s_ease-in-out_infinite] text-[var(--color-ivory)]/50">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
