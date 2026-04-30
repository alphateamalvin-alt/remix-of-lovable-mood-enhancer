import { useEffect, useState } from "react";

const SESSION_KEY = "lovable-urgency-dismissed";

function format(n: number) {
  return n.toString().padStart(2, "0");
}

export function StickyUrgencyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [count, setCount] = useState(247);
  const [seconds, setSeconds] = useState(23 * 3600 + 47 * 60 + 12);
  const [isMobile, setIsMobile] = useState(false);

  // Init from session + viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setDismissed(true);
    }
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Scroll trigger (mobile = always visible)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Countdown
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 23 * 3600 + 59 * 60 + 59 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Counter increment
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
      id = setTimeout(tick, 30000 + Math.random() * 30000);
    };
    id = setTimeout(tick, 30000 + Math.random() * 30000);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <>
      <style>{`
        @keyframes lovable-pulse-dot {
          0% { box-shadow: 0 0 0 0 rgba(220,38,39,0.8); }
          100% { box-shadow: 0 0 0 8px rgba(220,38,39,0); }
        }
      `}</style>
      <div
        role="region"
        aria-label="Promotional urgency bar"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          background: "linear-gradient(90deg, #1A0A0A 0%, #2a0d0d 100%)",
          borderTop: "0.5px solid rgba(184, 149, 90, 0.2)",
          padding: isMobile ? "12px 16px" : "14px 32px",
          boxShadow:
            "0 -4px 16px rgba(0, 0, 0, 0.4), 0 -1px 0 rgba(184, 149, 90, 0.2)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: visible ? "auto" : "none",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  aria-hidden
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#DC2627", display: "inline-block",
                    animation: "lovable-pulse-dot 1.5s infinite",
                  }}
                />
                <span style={{ fontSize: 11, color: "#F2EAE0", fontWeight: 500 }}>
                  <strong style={{ color: "#DC2627", fontWeight: 700 }}>{count} bottles</strong> ordered this week
                </span>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 8, color: "#9A8880", letterSpacing: 1, textTransform: "uppercase" }}>
                  Free Shipping Ends In
                </div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 14, color: "#DC2627", fontWeight: 700 }}>
                  {format(h)} : {format(m)} : {format(s)}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <a href="/shop" className="btn-primary" style={{ flex: 1, padding: "10px 20px", fontSize: 11, letterSpacing: "1.5px" }}>
                Order Now →
              </a>
              <button
                onClick={dismiss}
                aria-label="Dismiss"
                style={{ background: "transparent", border: "none", color: "#9A8880", fontSize: 16, cursor: "pointer", padding: 4 }}
              >
                ×
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                aria-hidden
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#DC2627", display: "inline-block",
                  animation: "lovable-pulse-dot 1.5s infinite",
                }}
              />
              <span style={{ fontSize: 12, color: "#F2EAE0", fontWeight: 500 }}>
                <strong style={{ color: "#DC2627", fontWeight: 700 }}>{count} bottles</strong> ordered this week
              </span>
              <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 9, color: "#9A8880", letterSpacing: 1, textTransform: "uppercase" }}>
                  Free Shipping Ends In
                </span>
                <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, color: "#DC2627", fontWeight: 700 }}>
                  {format(h)} : {format(m)} : {format(s)}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a href="/shop" className="btn-primary" style={{ padding: "10px 24px", fontSize: 11, letterSpacing: "1.5px" }}>
                Order Now →
              </a>
              <button
                onClick={dismiss}
                aria-label="Dismiss"
                style={{ background: "transparent", border: "none", color: "#9A8880", fontSize: 16, cursor: "pointer", padding: 4 }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
