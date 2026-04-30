import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";
import { HeroFX } from "../HeroFX";

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
      className="relative min-h-[100svh] flex flex-col md:flex-row bg-tier-1 overflow-hidden"
      style={{ boxShadow: "inset 0 0 240px rgba(0, 0, 0, 0.6)" }}
    >
      {/* Warm radial glow behind headline area */}
      <div
        aria-hidden
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "10%",
          left: 0,
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(220, 38, 39, 0.06) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />
      <HeroFX />
      {/* Mobile: image on top (40vh). Desktop: right side 50% */}
      <div className="order-1 md:order-2 relative w-full md:w-1/2 h-[40vh] md:h-auto md:min-h-[100svh] z-10">
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
      <div className="order-2 md:order-1 relative z-10 w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:py-28 md:min-h-[100svh]">
        <div className="max-w-xl w-full text-left">
          <Reveal>
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#DC2627",
                fontWeight: 600,
              }}
            >
              Natural Lovable Drops
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="text-[44px] md:text-[56px] lg:text-[72px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F2EAE0",
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                marginBottom: "24px",
              }}
            >
              Feel That{" "}
              <span style={{ color: "#DC2627", fontStyle: "italic" }}>Hunger</span>{" "}
              Again.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="text-[17px] md:text-[20px] lg:text-[22px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                color: "rgba(242, 234, 224, 0.78)",
                lineHeight: 1.5,
                maxWidth: "540px",
                marginBottom: "36px",
              }}
            >
              A natural blend for couples ready to want each other like the{" "}
              <span style={{ color: "#B8955A", fontStyle: "normal", fontWeight: 400 }}>
                first time
              </span>
              .
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col items-start gap-5 sm:gap-6">
              <div className="flex flex-col items-start">
                <span
                  className="uppercase"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2.5px",
                    color: "#B8955A",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "9999px",
                      background: "#DC2627",
                      display: "inline-block",
                    }}
                  />
                  For when comfort isn't enough.
                </span>
                <a href="/shop" className="btn-primary">
                  Shop Now →
                </a>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#F5C518", fontSize: "13px", letterSpacing: "1px" }}>★★★★<span style={{ color: "#F5C518", opacity: 0.4 }}>★</span></span>
                  <span style={{ color: "#F2EAE0", fontWeight: 600, fontSize: "13px" }}>4.7</span>
                </div>
                <p style={{ color: "#9A8880", fontSize: "10px", marginTop: "2px" }}>
                  Based on 847 verified reviews
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
                      background: "#A81716",
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
