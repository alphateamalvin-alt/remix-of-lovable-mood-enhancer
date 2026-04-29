import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../Reveal";

const BASE = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS";

const slides = [
  { src: `${BASE}/Ching.png`, alt: "Ching shares her LOVABLE experience" },
  { src: `${BASE}/Geraldine.png`, alt: "Geraldine shares her LOVABLE experience" },
  { src: `${BASE}/Grace.png`, alt: "Grace shares her LOVABLE experience" },
  { src: `${BASE}/Joan.png`, alt: "Joan shares her LOVABLE experience" },
  { src: `${BASE}/Luis.png`, alt: "Luis shares his LOVABLE experience" },
  { src: `${BASE}/Mark.png`, alt: "Mark shares his LOVABLE experience" },
  { src: `${BASE}/Nicole.png`, alt: "Nicole shares her LOVABLE experience" },
];

const AUTO_MS = 6000;
const RESUME_MS = 8000;

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
}

export function SocialProof() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const visible = useVisibleCount();
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = slides.length;

  const goTo = (n: number) => {
    setIndex(((n % total) + total) % total);
    setProgressKey((k) => k + 1);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % total);
      setProgressKey((k) => k + 1);
    }, AUTO_MS);
    return () => clearTimeout(t);
  }, [index, paused, total]);

  const userInteract = () => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
  };

  const handleCTA = () => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/shop";
  };

  // Build display order: center is `index`, with surrounding slides
  const half = Math.floor(visible / 2);
  const visibleSlides = Array.from({ length: visible }, (_, i) => {
    const offset = visible === 1 ? 0 : i - half;
    const slideIdx = (((index + offset) % total) + total) % total;
    return { ...slides[slideIdx], slideIdx, isCenter: offset === 0 };
  });

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      userInteract();
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="bg-[#0D0D0D] py-[60px] md:py-[100px] overflow-hidden">
      <style>{`
        @keyframes sp-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <Reveal>
            <p
              className="uppercase mb-5"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#DC2627",
                fontWeight: 600,
              }}
            >
              Real Couples, Real Results
            </p>
            <h2
              className="text-[28px] md:text-[36px] mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F2EAE0",
                lineHeight: 1.15,
              }}
            >
              In Their{" "}
              <span style={{ fontStyle: "italic", color: "#B8955A" }}>Own Words.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                color: "#9A8880",
                maxWidth: "480px",
                marginBottom: "64px",
              }}
            >
              Stories from couples na nagbalik sa bawat isa, in their own voice.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              if (resumeTimer.current) clearTimeout(resumeTimer.current);
              setPaused(false);
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Carousel viewport */}
            <div
              className="flex items-center justify-center"
              style={{ gap: "24px", minHeight: "440px" }}
            >
              {visibleSlides.map((s, i) => (
                <div
                  key={`${s.slideIdx}-${i}`}
                  className="overflow-hidden rounded-[14px] shrink-0"
                  style={{
                    width: visible === 1 ? "100%" : visible === 2 ? "280px" : "320px",
                    maxWidth: "100%",
                    opacity: s.isCenter ? 1 : 0.7,
                    transform: s.isCenter ? "scale(1)" : "scale(0.94)",
                    transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1), border 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                    border: s.isCenter
                      ? "0.5px solid rgba(220, 38, 39, 0.3)"
                      : "0.5px solid rgba(184, 149, 90, 0.22)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="block w-full h-auto object-cover"
                    style={{ aspectRatio: "4 / 5" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.background = "#1A0A0A";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              aria-label="Previous"
              onClick={() => {
                userInteract();
                prev();
              }}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300"
              style={{
                left: "-20px",
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "rgba(26, 10, 10, 0.8)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "0.5px solid rgba(184, 149, 90, 0.4)",
                color: "#B8955A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "0.5px solid #DC2627";
                e.currentTarget.style.color = "#DC2627";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "0.5px solid rgba(184, 149, 90, 0.4)";
                e.currentTarget.style.color = "#B8955A";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="Next"
              onClick={() => {
                userInteract();
                next();
              }}
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300"
              style={{
                right: "-20px",
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "rgba(26, 10, 10, 0.8)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "0.5px solid rgba(184, 149, 90, 0.4)",
                color: "#B8955A",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "0.5px solid #DC2627";
                e.currentTarget.style.color = "#DC2627";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "0.5px solid rgba(184, 149, 90, 0.4)";
                e.currentTarget.style.color = "#B8955A";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-8" style={{ gap: "12px" }}>
            {slides.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    userInteract();
                    goTo(i);
                  }}
                  style={{
                    width: active ? "10px" : "8px",
                    height: active ? "10px" : "8px",
                    borderRadius: "9999px",
                    background: active ? "#DC2627" : "rgba(154, 136, 128, 0.5)",
                    boxShadow: active ? "0 0 12px rgba(220, 38, 39, 0.6)" : "none",
                    transition: "all 300ms ease-out",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="flex justify-center" style={{ marginTop: "16px" }}>
            <div
              style={{
                width: "160px",
                height: "1.5px",
                background: "rgba(154, 136, 128, 0.2)",
                overflow: "hidden",
              }}
            >
              <div
                key={progressKey}
                style={{
                  height: "100%",
                  background: "#DC2627",
                  width: "0%",
                  animation: paused ? "none" : `sp-progress ${AUTO_MS}ms linear forwards`,
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <div className="flex flex-col items-center" style={{ marginTop: "64px" }}>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "12px",
              color: "#9A8880",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Join thousands of couples who already feel the difference.
          </p>
          <button
            onClick={handleCTA}
            className="rounded-full uppercase transition-all duration-300 ease-out hover:scale-[1.04]"
            style={{
              backgroundColor: "#DC2627",
              color: "#F2EAE0",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "13px",
              letterSpacing: "2px",
              fontWeight: 600,
              padding: "16px 40px",
              boxShadow: "0 8px 24px rgba(220, 38, 39, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(220, 38, 39, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(220, 38, 39, 0.25)";
            }}
          >
            I've Seen Enough, Order Mine
          </button>
        </div>
      </div>
    </section>
  );
}
