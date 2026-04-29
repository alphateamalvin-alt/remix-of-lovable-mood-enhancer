import { Reveal } from "../Reveal";

type Card = {
  image: string;
  alt: string;
  title: string;
  description: string;
  badge?: boolean;
};

const cards: Card[] = [
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Pure%20Botanicals.png",
    alt: "Pure botanical ingredients in LOVABLE drops",
    title: "Pure Botanicals",
    description:
      "No synthetic hormones, no dangerous chemicals. Only clinically-researched ingredients that work with your body's chemistry.",
  },
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Peer-reviewed%20Scientific%20Research.png",
    alt: "Peer-reviewed scientific research backing LOVABLE ingredients",
    title: "Backed by Science",
    description:
      "Ingredients studied in the British Journal of Nutrition, Journal of Sexual Medicine, and Fertility and Sterility Journal.",
  },
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Separate%20Formulas%20for%20him%20and%20for%20her.png",
    alt: "Separate precision formulas for him and for her",
    title: "Couple-Formulated",
    description:
      "Separate precision formulas for Him and Her, designed by hormonal wellness experts. Not one-size-fits-all.",
  },
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Third%20party%20tested.png",
    alt: "Third-party laboratory tested for purity and potency",
    title: "Third-Party Tested",
    description:
      "Every batch verified for purity and potency. Certificate of Analysis available upon request.",
  },
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Built%20For%20Daily%20Use.png",
    alt: "Safe for consistent daily long-term use",
    title: "Built for Daily Use",
    description:
      "Safe for consistent, long-term use with cumulative benefits over 2 to 3 months. No tolerance buildup, no dependency.",
  },
  {
    image: "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/FDA-Reg%20-%20GMP%20Certified.png",
    alt: "FDA-registered and GMP-certified USA facility",
    title: "Made in USA",
    description:
      "Manufactured in FDA-registered, GMP-certified USA facilities with premium-grade ingredients and verified safety.",
    badge: true,
  },
];

const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

export function Promise() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(220,38,39,0.06), transparent 60%), #1A0A0A",
      }}
      className="w-full py-[60px] md:py-[100px]"
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1200px", padding: "0 24px" }}
      >
        <Reveal>
          <div className="text-center mx-auto" style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#DC2627",
                marginBottom: "20px",
              }}
            >
              The Lovable Promise
            </p>
            <h2
              className="text-[28px] md:text-[36px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#F2EAE0",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              We Stand Behind{" "}
              <span style={{ color: "#B8955A", fontStyle: "italic" }}>
                Every Drop.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "13px",
                color: "#9A8880",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Six commitments behind every bottle. No exceptions, no fine print.
            </p>
          </div>
        </Reveal>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "24px" }}
        >
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article
                className="group h-full flex flex-col"
                style={{
                  background: "#0D0D0D",
                  border: "0.5px solid rgba(184, 149, 90, 0.22)",
                  borderRadius: "14px",
                  padding: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  transition: `all 400ms ${EASE}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(220, 38, 39, 0.3)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(220, 38, 39, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(184, 149, 90, 0.22)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.3)";
                }}
              >
                <div
                  style={{
                    aspectRatio: "16 / 9",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "0.5px solid rgba(184, 149, 90, 0.3)",
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.background =
                        "#1A0A0A";
                    }}
                  />
                </div>

                {c.badge && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(184, 149, 90, 0.1)",
                      border: "0.5px solid rgba(184, 149, 90, 0.3)",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      marginTop: "16px",
                      marginBottom: "8px",
                      alignSelf: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "#DC2627",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "9px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#B8955A",
                        fontWeight: 600,
                      }}
                    >
                      FDA-Registered · GMP-Certified
                    </span>
                  </div>
                )}

                <div
                  style={{
                    width: "30px",
                    height: "0.6px",
                    background: "rgba(184, 149, 90, 0.6)",
                    margin: "20px 0 0 4px",
                  }}
                />

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    color: "#F2EAE0",
                    marginTop: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "12px",
                    color: "#9A8880",
                    lineHeight: 1.6,
                    marginTop: "8px",
                  }}
                >
                  {c.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
