import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";

const BASE = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS";

type Story = {
  src: string;
  alt: string;
  name: string;
  quote: string;
};

const stories: Story[] = [
  {
    src: `${BASE}/Beth.png`,
    alt: "Beth shares her LOVABLE experience",
    name: "Beth",
    quote: "Sa gabi, pakiramdam ko hindi na ako babae.",
  },
  {
    src: `${BASE}/Geraldine%202.png`,
    alt: "Geraldine shares her LOVABLE experience",
    name: "Geraldine",
    quote: "Hindi mo na kailangang magpanggap.",
  },
  {
    src: `${BASE}/Grace%202.png`,
    alt: "Grace shares her LOVABLE experience",
    name: "Grace",
    quote: "Hindi siya magic, support lang para bumalik.",
  },
  {
    src: `${BASE}/Joan%202.png`,
    alt: "Joan shares her LOVABLE experience",
    name: "Joan",
    quote: "Bumalik yung connection na akala ko wala na.",
  },
  {
    src: `${BASE}/Luis%202.png`,
    alt: "Luis shares his LOVABLE experience",
    name: "Luis",
    quote: "Feel it before they do.",
  },
  {
    src: `${BASE}/Mark%202.png`,
    alt: "Mark shares his LOVABLE experience",
    name: "Mark",
    quote: "Saan galing yung bagsik na 'to?",
  },
  {
    src: `${BASE}/Nicole%202.png`,
    alt: "Nicole shares her LOVABLE experience",
    name: "Nicole",
    quote: "Ibalik ang iyong ningning.",
  },
];

const SLIDE_MS = 7000;
const RESUME_MS = 8000;

export function SocialProof() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const resumeTimer = useRef<number | null>(null);

  const handleCTA = () => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/shop";
  };

  const goTo = (i: number) => {
    setActive((i + stories.length) % stories.length);
    setProgressKey((k) => k + 1);
  };

  const userInteract = (i: number) => {
    goTo(i);
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  };

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => {
      setActive((a) => (a + 1) % stories.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [active, paused]);

  // Keyboard nav when section is in viewport
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        userInteract(active - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        userInteract(active + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  const story = stories[active];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
        setPaused(false);
      }}
      className="bg-tier-3 section-divider relative py-[60px] md:py-[100px] overflow-hidden"
      style={{ background: "#160808" }}
    >
      <style>{`
        @keyframes sp-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes sp-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sp-fade { animation: sp-fade-in 500ms ease-out; }
        .sp-thumbs::-webkit-scrollbar { display: none; }
        .sp-thumbs { scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-6 text-center">
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
              marginBottom: "56px",
            }}
          >
            Stories from couples na nagbalik sa bawat isa.
          </p>
        </Reveal>

        {/* Featured story */}
        <Reveal delay={0.15}>
          <div
            className="grid gap-8 md:gap-12 text-left"
            style={{
              gridTemplateColumns: "1fr",
              minHeight: "auto",
            }}
          >
            <div
              className="md:grid md:gap-12 md:items-center"
              style={{
                gridTemplateColumns: "60% 40%",
                display: "grid",
              }}
            >
              {/* Image */}
              <div
                key={`img-${active}`}
                className="sp-fade relative w-full overflow-hidden"
                style={{
                  borderRadius: "14px",
                  border: "0.5px solid rgba(184, 149, 90, 0.22)",
                  boxShadow:
                    "0 1px 0 rgba(242, 234, 224, 0.05) inset, 0 16px 48px rgba(0, 0, 0, 0.5), 0 24px 64px rgba(0, 0, 0, 0.3)",
                  aspectRatio: "16 / 9",
                  background: "#1A0A0A",
                }}
              >
                <img
                  src={story.src}
                  alt={story.alt}
                  width={1280}
                  height={720}
                  className="block w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <span
                  className="absolute uppercase"
                  style={{
                    top: "16px",
                    left: "16px",
                    background: "#DC2627",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "2.5px",
                    color: "#F2EAE0",
                    fontWeight: 600,
                    boxShadow: "0 4px 12px rgba(220, 38, 39, 0.3)",
                  }}
                >
                  Featured Story
                </span>
              </div>

              {/* Content */}
              <div key={`content-${active}`} className="sp-fade mt-8 md:mt-0">
                <span
                  aria-hidden
                  style={{
                    color: "#DC2627",
                    fontSize: "48px",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "16px",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  ❝
                </span>
                <p
                  className="text-[20px] md:text-[26px]"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    color: "#F2EAE0",
                    lineHeight: 1.5,
                    marginBottom: "32px",
                  }}
                >
                  {story.quote}
                </p>
                <div
                  style={{
                    width: "60px",
                    height: "0.5px",
                    background: "rgba(184, 149, 90, 0.6)",
                    marginBottom: "20px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#F2EAE0",
                    marginBottom: "6px",
                  }}
                >
                  {story.name}
                </div>
                <div
                  className="uppercase inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    color: "#B8955A",
                    fontWeight: 500,
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M8 1l1.8 1.4 2.3-.2.5 2.2 2 1.2-.8 2.1.8 2.1-2 1.2-.5 2.2-2.3-.2L8 14.6 6.2 13.2l-2.3.2-.5-2.2-2-1.2.8-2.1-.8-2.1 2-1.2.5-2.2 2.3.2L8 1z"
                      fill="#B8955A"
                    />
                    <path
                      d="M5.5 8l1.8 1.8L10.7 6.4"
                      stroke="#160808"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Thumbnails */}
        <div
          className="sp-thumbs flex gap-3 justify-start md:justify-center overflow-x-auto"
          style={{ marginTop: "40px", padding: "8px 0", scrollSnapType: "x mandatory" }}
        >
          {stories.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.src}
                onClick={() => userInteract(i)}
                aria-label={`Show story from ${s.name}`}
                aria-current={isActive}
                className="shrink-0 overflow-hidden focus:outline-none"
                style={{
                  width: "var(--sp-thumb-w, 110px)",
                  aspectRatio: "16 / 9",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: isActive
                    ? "1px solid #DC2627"
                    : "0.5px solid rgba(184, 149, 90, 0.22)",
                  opacity: isActive ? 1 : 0.55,
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  boxShadow: isActive
                    ? "0 8px 20px rgba(220, 38, 39, 0.25)"
                    : "none",
                  transition: "all 300ms ease",
                  scrollSnapAlign: "center",
                  background: "#1A0A0A",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.opacity = "0.85";
                    e.currentTarget.style.border = "0.5px solid rgba(184, 149, 90, 0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.opacity = "0.55";
                    e.currentTarget.style.border = "0.5px solid rgba(184, 149, 90, 0.22)";
                  }
                }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={220}
                  height={124}
                  className="block w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </button>
            );
          })}
          <style>{`
            @media (max-width: 767px) {
              .sp-thumbs button { --sp-thumb-w: 80px; width: 80px !important; }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .sp-thumbs button { --sp-thumb-w: 90px; width: 90px !important; }
            }
          `}</style>
        </div>

        {/* Progress bar */}
        <div
          aria-hidden
          style={{
            width: "200px",
            height: "1.5px",
            background: "rgba(154, 136, 128, 0.2)",
            margin: "20px auto 0",
            overflow: "hidden",
            borderRadius: "999px",
          }}
        >
          <div
            key={`p-${progressKey}-${paused ? "p" : "r"}`}
            style={{
              height: "100%",
              background: "#DC2627",
              width: paused ? undefined : "100%",
              animation: paused
                ? "none"
                : `sp-progress ${SLIDE_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>

      {/* CTA */}
      <div
        className="flex flex-col items-center px-6"
        style={{ marginTop: "64px" }}
      >
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            color: "#9A8880",
            marginBottom: "20px",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Join thousands of couples who already feel the difference.
        </p>
        <button onClick={handleCTA} className="btn-primary">
          I've Seen Enough, Order Mine
        </button>
      </div>
    </section>
  );
}
