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

export function SocialProof() {
  const handleCTA = () => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/shop";
  };

  const loop = [...slides, ...slides];

  return (
    <section className="bg-[#0D0D0D] py-[60px] md:py-[100px] overflow-hidden">
      <style>{`
        @keyframes sp-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .sp-marquee-track {
          animation: sp-marquee 60s linear infinite;
          will-change: transform;
        }
        @media (max-width: 767px) {
          .sp-marquee-track {
            animation-duration: 45s;
          }
        }
        .sp-marquee-wrap:hover .sp-marquee-track {
          animation-play-state: paused;
        }
        .sp-card {
          transition: transform 300ms ease-out, border 300ms ease-out, box-shadow 300ms ease-out;
        }
        .sp-card:hover {
          transform: scale(1.03);
          border: 0.5px solid rgba(220, 38, 39, 0.4) !important;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5) !important;
          z-index: 10;
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
        <div
          className="sp-marquee-wrap relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="sp-marquee-track flex" style={{ width: "max-content" }}>
            {loop.map((s, i) => (
              <div
                key={i}
                className="sp-card shrink-0 overflow-hidden"
                style={{
                  width: "var(--sp-card-w, 340px)",
                  marginRight: "24px",
                  borderRadius: "14px",
                  border: "0.5px solid rgba(184, 149, 90, 0.22)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  background: "#1A0A0A",
                }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={680}
                  height={850}
                  className="block w-full h-auto object-cover"
                  style={{ aspectRatio: "4 / 5" }}
                />
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 767px) {
              .sp-card { --sp-card-w: 280px; width: 280px !important; }
            }
          `}</style>
        </div>
      </Reveal>

      <div className="flex flex-col items-center px-6" style={{ marginTop: "72px" }}>
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
        <button onClick={handleCTA} className="btn-primary">
          I've Seen Enough, Order Mine
        </button>
      </div>
    </section>
  );
}
