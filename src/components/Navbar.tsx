import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="LOVABLE"
      className={`inline-flex items-center font-extrabold tracking-tight text-[var(--color-brand-red)] leading-none ${className}`}
      style={{ fontFamily: '"Playfair Display", serif', letterSpacing: "-0.02em" }}
    >
      <span>LO</span>
      <Heart
        className="mx-[1px]"
        size="0.95em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span>ABLE</span>
    </span>
  );
}

const links = [
  { label: "Home", hash: "" },
  { label: "For Her", hash: "forher" },
  { label: "For Him", hash: "forhim" },
  { label: "For Couples", hash: "forcouples" },
  { label: "FAQ", hash: "faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide navbar when hero section has scrolled out of view (only on home)
  useEffect(() => {
    if (!isHome) {
      setHidden(false);
      return;
    }
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (!hash) {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      e.preventDefault();
      navigate({ to: "/", hash });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      } ${
        scrolled
          ? "bg-[var(--color-noir)]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3">
        <Link to="/" onClick={handleNav("")} className="flex items-center">
          <Wordmark className="text-[18px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.hash ? `#${l.hash}` : "/"}
                onClick={handleNav(l.hash)}
                className="text-[12px] font-medium tracking-[0.18em] uppercase text-[var(--color-ivory)]/85 hover:text-[var(--color-brand-red)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/shop" search={{}} className="btn-primary !py-3 !px-6 text-[11px]">
            Shop Now →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-ivory)] hover:text-[var(--color-brand-red)] transition-colors relative z-[60]"
        >
          {mobileOpen ? <Menu size={22} className="opacity-0" /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(40, 14, 14, 0.98) 0%, rgba(10, 6, 6, 0.99) 70%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-5 inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-ivory)] hover:text-[var(--color-brand-red)] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="h-full w-full flex flex-col items-center justify-center px-6">
          <ul className="flex flex-col items-center gap-7 mb-10">
            {links.map((l, i) => (
              <li
                key={l.label}
                className={mobileOpen ? "animate-in fade-in slide-in-from-bottom-2 duration-500" : ""}
                style={{ animationDelay: `${i * 70}ms`, animationFillMode: "both" }}
              >
                <a
                  href={l.hash ? `#${l.hash}` : "/"}
                  onClick={handleNav(l.hash)}
                  className="uppercase text-[var(--color-ivory)] hover:text-[var(--color-brand-red)] transition-colors"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "22px",
                    letterSpacing: "0.18em",
                    fontWeight: 400,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            aria-hidden
            className="h-[1px] w-24 mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(184,149,90,0.6) 50%, transparent 100%)",
            }}
          />

          <Link
            to="/shop"
            search={{}}
            onClick={() => setMobileOpen(false)}
            className="btn-primary !py-3 !px-7 text-[11px]"
          >
            Shop Now →
          </Link>
        </div>
      </div>
    </header>
  );
}
