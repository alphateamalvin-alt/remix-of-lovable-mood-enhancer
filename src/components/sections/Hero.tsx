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
      className="relative min-h-[100svh] flex flex-col md:flex-row overflow-hidden"
      style={{
        background: "#0A0606",
        boxShadow: "inset 0 0 240px rgba(0, 0, 0, 0.6)",
      }}
    >
      <style>{`
        .hero-image-container { position: relative; overflow: hidden; }
        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
        }
        @media (min-width: 768px) {
          .hero-image {
            width: 115%;
            margin-left: -5%;
            object-position: right center;
            transform: translateX(4%);
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0,0,0,0.05) 5%,
              rgba(0,0,0,0.2) 12%,
              rgba(0,0,0,0.5) 22%,
              rgba(0,0,0,0.8) 32%,
              black 42%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0,0,0,0.05) 5%,
              rgba(0,0,0,0.2) 12%,
              rgba(0,0,0,0.5) 22%,
              rgba(0,0,0,0.8) 32%,
              black 42%
            );
          }
        }
        @media (max-width: 767px) {
          .hero-image-container {
            position: absolute !important;
            inset: 0;
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
            z-index: 0 !important;
          }
          .hero-image {
            width: 100%;
            height: 100%;
            margin-left: 0;
            object-fit: cover;
            object-position: 65% 20%;
            mask-image: none;
            -webkit-mask-image: none;
            background: #0A0606;
          }
          .hero-mobile-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(10, 6, 6, 0.85) 0%,
              rgba(10, 6, 6, 0.65) 35%,
              rgba(10, 6, 6, 0.75) 70%,
              rgba(10, 6, 6, 0.95) 100%
            );
            z-index: 1;
            pointer-events: none;
          }
          .hero-bridge { display: none; }
        }
        @media (min-width: 768px) {
          .hero-mobile-overlay { display: none; }
        }
        .hero-bridge {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            #0A0606 0%,
            rgba(10, 6, 6, 0.95) 20%,
            rgba(10, 6, 6, 0.7) 40%,
            rgba(10, 6, 6, 0.3) 65%,
            transparent 100%
          );
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
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
          zIndex: 3,
        }}
      />
      <HeroFX />
      {/* Mobile: image stacks BELOW text (order-2). Desktop: right side 50% */}
      <div
        className="hero-image-container order-2 md:order-2 w-full md:w-1/2 md:h-auto md:min-h-[100svh] z-[1]"
      >
        <img
          src={HERO_IMAGE_URL}
          alt="Filipino couple in tender embrace holding LOVABLE bottles"
          className="hero-image"
        />
        {/* Mobile overlay to darken image so text overlays cleanly */}
        <div aria-hidden className="hero-mobile-overlay" />
        {/* Bridge gradient that paints over any seam on the left edge (desktop only) */}
        <div aria-hidden className="hero-bridge" />
      </div>

      {/* Left side: text content */}
      <div className="order-1 md:order-1 relative z-[10] w-full md:w-1/2 flex items-end md:items-center justify-center px-6 pt-32 pb-24 md:py-28 md:min-h-[100svh] min-h-[100svh] md:min-h-0">
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
              className="hero-headline-mobile text-[40px] md:text-[56px] lg:text-[72px]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F2EAE0",
                lineHeight: 1.1,
                fontWeight: 400,
                letterSpacing: "-0.025em",
                marginBottom: "20px",
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
              <span style={{ color: "#B8955A", fontStyle: "normal", fontWeight: 400 }}>first time</span>.
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
                <a href="/shop" className="btn-pulse-shine btn-mobile-block">
                  <span>Shop Now</span> <span className="arrow">→</span>
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
