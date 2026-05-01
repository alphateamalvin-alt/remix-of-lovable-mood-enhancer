import { useEffect, useState } from "react";

const FOR_HER_IMG =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/12.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMi5wbmciLCJpYXQiOjE3NzcwODkxODksImV4cCI6MTgwODYyNTE4OX0.lwk9AUb9CE31IDWqJDTuZOZtmes59bZ4FO-lUxOVd4s";
const FOR_HIM_IMG =
  "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/11.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy8xMS5wbmciLCJpYXQiOjE3NzcwODkyNTksImV4cCI6MTgwODYyNTI1OX0.K5QMIKYRD65B8p2BagU6a3SVO0gCmuwFYS78qwdHmPU";

type Toast = { name: string; city: string; product: string; time: string };

const toasts: Toast[] = [
  { name: "Maria", city: "Quezon City", product: "Couples Bundle", time: "3 minutes ago" },
  { name: "John", city: "Makati", product: "2 bottles For Him", time: "7 minutes ago" },
  { name: "Beth", city: "Cebu", product: "1 bottle For Her", time: "12 minutes ago" },
  { name: "Carlo", city: "Davao", product: "3 bottles For Him", time: "18 minutes ago" },
  { name: "Jasmine", city: "Pasig", product: "Couples Bundle", time: "24 minutes ago" },
  { name: "Mark", city: "BGC, Taguig", product: "2 bottles For Him", time: "31 minutes ago" },
  { name: "Anna", city: "Manila", product: "1 bottle For Her", time: "38 minutes ago" },
  { name: "Paolo & Liza", city: "Antipolo", product: "Couples Bundle", time: "45 minutes ago" },
];

const URGENCY_DISMISSED_KEY = "lovable-urgency-dismissed";

function imageFor(product: string) {
  if (/for him/i.test(product)) return FOR_HIM_IMG;
  return FOR_HER_IMG;
}

export function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [urgencyDismissed, setUrgencyDismissed] = useState(false);
  const [onCheckout, setOnCheckout] = useState(false);
  const [heroInView, setHeroInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setOnCheckout(window.location.pathname.startsWith("/checkout"));
  }, []);

  // Track hero visibility — used to hide the toast on mobile while hero is on screen
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hero = document.getElementById("top");
    if (!hero) {
      setHeroInView(false);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Mobile detection
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Watch urgency bar dismissal (poll sessionStorage; cheap)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      setUrgencyDismissed(sessionStorage.getItem(URGENCY_DISMISSED_KEY) === "1");
    };
    check();
    const id = setInterval(check, 500);
    return () => clearInterval(id);
  }, []);

  // Rotation
  useEffect(() => {
    if (closed) return;
    let mounted = true;
    let hideTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setTimeout>;

    const visibleDuration = isMobile ? 5000 : 8000;

    const show = () => {
      if (!mounted) return;
      setVisible(true);
      hideTimer = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        cycleTimer = setTimeout(() => {
          if (!mounted) return;
          setIdx((i) => (i + 1) % toasts.length);
          show();
        }, 8000);
      }, visibleDuration);
    };

    const initial = setTimeout(show, 5000);
    return () => {
      mounted = false;
      clearTimeout(initial);
      clearTimeout(hideTimer);
      clearTimeout(cycleTimer);
    };
  }, [closed, isMobile]);

  if (closed) return null;
  if (onCheckout) return null;
  if (isMobile && heroInView) return null;

  const t = toasts[idx];
  const bottom = isMobile
    ? urgencyDismissed ? 16 : 70
    : urgencyDismissed ? 20 : 90;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: `calc(${bottom}px + env(safe-area-inset-bottom, 0px))`,
        right: isMobile ? 16 : 20,
        left: "auto",
        maxWidth: isMobile ? 240 : 300,
        zIndex: 40,
        background: "rgba(13, 13, 13, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "0.5px solid rgba(184, 149, 90, 0.3)",
        borderRadius: 12,
        padding: "14px 16px",
        boxShadow:
          "0 1px 0 rgba(242, 234, 224, 0.06) inset, 0 16px 36px rgba(0, 0, 0, 0.55), 0 4px 8px rgba(0, 0, 0, 0.3)",
        fontFamily: "Montserrat, sans-serif",
        display: "grid",
        gridTemplateColumns: "48px 1fr 24px",
        gap: 12,
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(110%)",
        transition: visible
          ? "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1), bottom 0.3s ease"
          : "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1), bottom 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <img
        src={imageFor(t.product)}
        alt=""
        width={48}
        height={48}
        style={{
          width: 48,
          height: 48,
          borderRadius: 6,
          objectFit: "cover",
          flexShrink: 0,
          background: "#2a0d0d",
        }}
      />
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#F2EAE0",
            fontWeight: 500,
            fontSize: 13,
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {t.name} from {t.city}
        </div>
        <div style={{ color: "rgba(154,136,128,0.85)", fontSize: 11, lineHeight: 1.4, marginTop: 2 }}>
          ordered {t.product}
        </div>
        <div style={{ color: "rgba(154,136,128,0.7)", fontSize: 10, lineHeight: 1.4, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: "#DC2627", fontSize: 10 }}>✓</span>
          {t.time} · Verified
        </div>
      </div>
      <button
        onClick={() => setClosed(true)}
        aria-label="Close notification"
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "transparent",
          border: "0.5px solid rgba(154,136,128,0.3)",
          color: "rgba(154,136,128,0.8)",
          fontSize: 12,
          lineHeight: 1,
          cursor: "pointer",
          padding: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 200ms ease",
        }}
      >
        ×
      </button>
    </div>
  );
}

