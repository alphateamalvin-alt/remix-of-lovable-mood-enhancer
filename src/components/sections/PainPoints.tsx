import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { useIsMobile } from "@/hooks/use-mobile";

type Panel = {
  image: string;
  alt: string;
  number: string;
  label: string;
  quote: string;
  description: string;
};

const panels: Panel[] = [
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/1.%20Couple%20Drifting%20Apart.png",
    alt: "Couple drifting apart",
    number: "01",
    label: "Drifting",
    quote:
      "It's been weeks since we last <span style='color:#DC2627; font-style:italic;'>touched</span> without it being routine.",
    description: "When intimacy becomes habit, you stop feeling each other.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/2.%20Distance%20in%20Bed.png",
    alt: "Distance in bed",
    number: "02",
    label: "Distance",
    quote:
      "The distance in bed feels <span style='color:#DC2627; font-style:italic;'>wider every night</span>, and neither of you knows how to close it.",
    description: "Same bed. Same house. But miles between you.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/3.%20Together%20But%20Apart.png",
    alt: "Together but worlds apart",
    number: "03",
    label: "Disconnect",
    quote:
      "Together physically. <span style='color:#DC2627; font-style:italic;'>Worlds apart</span> emotionally.",
    description:
      "The connection that used to come naturally. It's just not there anymore.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/4.%20Drained%20Energy.png",
    alt: "Drained energy",
    number: "04",
    label: "Drained",
    quote:
      "Stress and the years have <span style='color:#DC2627; font-style:italic;'>quietly drained</span> the energy you used to share.",
    description: "Your body remembers — but your energy doesn't keep up anymore.",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/5.%20Missing%20The%20Past.png",
    alt: "Missing the past",
    number: "05",
    label: "Missing",
    quote:
      "You remember how it used to feel. <span style='color:#DC2627; font-style:italic;'>And you miss it.</span>",
    description: "The energy. The wanting. The spontaneity. Where did it go?",
  },
  {
    image:
      "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/6.%20Silent%20Struggle.png",
    alt: "Silent struggle",
    number: "06",
    label: "Silent",
    quote:
      "Neither of you talks about it. <span style='color:#DC2627; font-style:italic;'>But you both feel it.</span>",
    description:
      "An unspoken weight. You miss each other — even in the same room.",
  },
];

export function PainPoints() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const useTap = isMobile || isTablet;

  const handleEnter = (i: number) => {
    if (!useTap) setActive(i);
  };

  const handleClick = (i: number) => {
    if (useTap) {
      setActive((prev) => (prev === i && isMobile ? -1 : i));
    }
  };

  const handleKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive((prev) => (prev === i && isMobile ? -1 : i));
    }
  };

  return (
    <section
      id="pain-points"
      style={{ background: "#0D0D0D" }}
      className="w-full py-[60px] px-6 md:py-20 md:px-10"
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <Reveal>
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "720px", marginBottom: "48px" }}
          >
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
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
              <span style={{ color: "#DC2627", fontStyle: "italic" }}>
                Different.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            className={isMobile ? "flex flex-col" : "flex flex-row"}
            style={{
              gap: "4px",
              borderRadius: "12px",
              overflow: "hidden",
              maxWidth: "1200px",
              margin: "0 auto",
              height: isMobile ? "auto" : isTablet ? "380px" : "420px",
            }}
          >
            {panels.map((p, i) => {
              const isActive = active === i;
              const flex = isActive ? 4 : 1;
              const mobileHeight = isActive ? "280px" : "100px";

              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  aria-label={p.label}
                  aria-expanded={isActive}
                  onMouseEnter={() => handleEnter(i)}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) => handleKey(e, i)}
                  className="relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2627]"
                  style={{
                    flex: isMobile ? "0 0 auto" : flex,
                    height: isMobile ? mobileHeight : "100%",
                    width: isMobile ? "100%" : "auto",
                    transition: isMobile
                      ? "height 0.6s cubic-bezier(0.4,0,0.2,1)"
                      : "flex 0.6s cubic-bezier(0.4,0,0.2,1)",
                    minWidth: 0,
                    background: "#1A0A0A",
                  }}
                >
                  {/* Background image */}
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.85) 100%)"
                        : "linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.95) 100%)",
                      transition: "background 0.5s ease",
                    }}
                  />

                  {/* Number */}
                  <span
                    style={{
                      position: "absolute",
                      top: "24px",
                      left: isActive ? "32px" : "50%",
                      transform: isActive
                        ? "translateX(0)"
                        : "translateX(-50%)",
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#DC2627",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {p.number}
                  </span>

                  {/* Collapsed vertical label */}
                  {!isMobile && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "32px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(-90deg)",
                        transformOrigin: "center",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "rgba(242,234,224,0.5)",
                        whiteSpace: "nowrap",
                        opacity: isActive ? 0 : 1,
                        transition: "opacity 0.3s ease",
                        pointerEvents: "none",
                      }}
                    >
                      {p.label}
                    </span>
                  )}

                  {/* Mobile collapsed label (horizontal) */}
                  {isMobile && !isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "24px",
                        left: "32px",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "rgba(242,234,224,0.6)",
                      }}
                    >
                      {p.label}
                    </span>
                  )}

                  {/* Expanded content */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      left: "32px",
                      right: "32px",
                      opacity: isActive ? 1 : 0,
                      transition: isActive
                        ? "opacity 0.4s ease 0.2s"
                        : "opacity 0.2s ease",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <p
                      className="text-[18px] md:text-[26px]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#F2EAE0",
                        lineHeight: 1.3,
                      }}
                      dangerouslySetInnerHTML={{ __html: p.quote }}
                    />
                    <p
                      className="text-[12px] md:text-[13px]"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "#B8955A",
                        lineHeight: 1.6,
                        marginTop: "12px",
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className="text-center" style={{ marginTop: "56px" }}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "22px",
                color: "#9A8880",
                marginBottom: "24px",
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
                marginTop: "18px",
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
