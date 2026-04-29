import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";

const cards = [
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/Gemini_Generated_Image_qtby4dqtby4dqtby.png",
    number: "01",
    quote: "It's been weeks since we last touched without it being a routine.",
    tease: "Couples like you found their way back in 2 weeks.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/Gemini_Generated_Image_cqs8wjcqs8wjcqs8.png",
    number: "02",
    quote: "Together in the same room. But somehow worlds apart.",
    tease: "Real connection — naturally restored.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/Gemini_Generated_Image_fys7j3fys7j3fys7.png",
    number: "03",
    quote: "Stress and the years quietly took the energy you used to share.",
    tease: "Your body remembers — it just needs a little help.",
  },
];

export function PainPoints() {
  return (
    <section
      id="pain-points"
      style={{ background: "#0D0D0D" }}
      className="w-full py-[60px] px-6 md:py-20 md:px-10"
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <Reveal>
          <div className="text-center mx-auto" style={{ maxWidth: "720px", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#DC2627",
                marginBottom: "16px",
              }}
            >
              Does This Sound Familiar?
            </p>
            <h2
              className="text-[32px] md:text-[44px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#F2EAE0",
                lineHeight: 1.25,
                textAlign: "center",
              }}
            >
              You Love Each Other. But Something Feels...{" "}
              <span style={{ color: "#DC2627", fontStyle: "italic" }}>Different.</span>
            </h2>
          </div>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "16px" }}
        >
          {cards.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.08}>
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  borderRadius: "12px",
                  aspectRatio: "3 / 4",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(13,13,13,0.95) 100%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col"
                  style={{ padding: "28px 24px", gap: "10px" }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#DC2627",
                    }}
                  >
                    {c.number}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#F2EAE0",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.quote}
                  </p>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "#B8955A",
                      marginTop: "4px",
                    }}
                  >
                    {c.tease}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center" style={{ marginTop: "48px" }}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "#9A8880",
                marginBottom: "20px",
              }}
            >
              If even ONE of these felt familiar...
            </p>
            <Link
              to="/shop"
              className="inline-block"
              style={{
                background: "#DC2627",
                color: "#FFFFFF",
                padding: "16px 38px",
                borderRadius: "8px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B8221F";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#DC2627";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              See How LOVABLE Brings It Back →
            </Link>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                color: "#9A8880",
                fontWeight: 400,
                letterSpacing: "1px",
                marginTop: "16px",
              }}
            >
              30-Day Money Back{" "}
              <span style={{ color: "#DC2627" }}>•</span> 1,200+ Filipino Couples{" "}
              <span style={{ color: "#DC2627" }}>•</span> Discreet Shipping
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
