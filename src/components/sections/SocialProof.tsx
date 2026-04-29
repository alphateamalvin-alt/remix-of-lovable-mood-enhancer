import { Reveal } from "../Reveal";

const BASE = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS";

const row1 = [
  { src: `${BASE}/Ching.png`, alt: "Ching shares her LOVABLE experience" },
  { src: `${BASE}/Geraldine.png`, alt: "Geraldine shares her LOVABLE experience" },
  { src: `${BASE}/Grace.png`, alt: "Grace shares her LOVABLE experience" },
  { src: `${BASE}/Joan.png`, alt: "Joan shares her LOVABLE experience" },
];

const row2 = [
  { src: `${BASE}/Luis.png`, alt: "Luis shares his LOVABLE experience" },
  { src: `${BASE}/Mark.png`, alt: "Mark shares his LOVABLE experience" },
  { src: `${BASE}/Nicole.png`, alt: "Nicole shares her LOVABLE experience" },
];

function Card({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative shrink-0 mr-5 overflow-hidden rounded-[14px] transition-all duration-300 ease-out hover:scale-[1.03] hover:z-10"
      style={{
        width: "var(--card-w, 300px)",
        border: "0.5px solid rgba(184, 149, 90, 0.22)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "0.5px solid rgba(220, 38, 39, 0.4)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "0.5px solid rgba(184, 149, 90, 0.22)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={600}
        height={750}
        className="block w-full h-auto object-cover"
        style={{ aspectRatio: "4 / 5" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.background = "#1A0A0A";
        }}
      />
    </div>
  );
}

export function SocialProof() {
  const handleCTA = () => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/shop";
  };

  return (
    <section className="bg-[#0D0D0D] py-[60px] md:py-[100px] overflow-hidden">
      <style>{`
        @keyframes sp-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes sp-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .sp-row { display: flex; width: max-content; will-change: transform; }
        .sp-row-1 { animation: sp-marquee-left 50s linear infinite; }
        .sp-row-2 { animation: sp-marquee-right 45s linear infinite; }
        .sp-marquee:hover .sp-row { animation-play-state: paused; }
        .sp-mask {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        @media (max-width: 767px) {
          .sp-row-1 { animation-duration: 35s; }
          .sp-row-2 { animation-duration: 32s; }
          .sp-card-wrap { --card-w: 240px; }
        }
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
              marginBottom: "64px",
            }}
          >
            Stories from couples na nagbalik sa bawat isa, in their own voice.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="sp-card-wrap">
          <div className="sp-marquee sp-mask overflow-hidden">
            <div className="sp-row sp-row-1">
              {[...row1, ...row1].map((c, i) => (
                <Card key={`r1-${i}`} src={c.src} alt={c.alt} />
              ))}
            </div>
          </div>

          <div className="sp-marquee sp-mask overflow-hidden mt-6">
            <div className="sp-row sp-row-2">
              {[...row2, ...row2, ...row2].map((c, i) => (
                <Card key={`r2-${i}`} src={c.src} alt={c.alt} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-[72px] flex justify-center px-6">
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
    </section>
  );
}
