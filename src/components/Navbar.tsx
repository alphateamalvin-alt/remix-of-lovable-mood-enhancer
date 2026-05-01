import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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

      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col safe-top animate-in fade-in duration-300"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,10,10,0.98) 0%, rgba(13,13,13,0.99) 70%, rgba(8,8,8,1) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between px-6 py-4">
            <Wordmark className="text-[18px]" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="tap-target -mr-2 text-[var(--color-ivory)]/80 hover:text-[var(--color-brand-red)] transition-colors"
            >
              <X size={26} />
            </button>
          </div>

          {/* Centered content */}
          <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-8">
            <ul className="flex flex-col items-center gap-7 w-full">
              {links.map((l, i) => (
                <li
                  key={l.label}
                  className="animate-in fade-in slide-in-from-bottom-2"
                  style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both", animationDuration: "400ms" }}
                >
                  <a
                    href={l.hash ? `#${l.hash}` : "/"}
                    onClick={handleNav(l.hash)}
                    className="block text-center text-[22px] font-medium tracking-[0.22em] uppercase text-[var(--color-ivory)] hover:text-[var(--color-brand-red)] active:text-[var(--color-brand-red)] transition-colors"
                    style={{ fontFamily: '"Playfair Display", serif', letterSpacing: "0.18em" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Subtle divider */}
            <div
              className="my-10 h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, rgba(184,149,90,0.4), transparent)" }}
              aria-hidden="true"
            />

            <Link
              to="/shop"
              search={{}}
              onClick={() => setMobileOpen(false)}
              className="btn-primary !px-10 !py-4 text-[12px] tracking-[0.22em]"
            >
              Shop Now →
            </Link>
          </div>

          {/* Footer tagline */}
          <div
            className="text-center pb-8 safe-bottom text-[10px] tracking-[0.32em] uppercase"
            style={{ color: "rgba(184,149,90,0.55)" }}
          >
            Mood Drops · Made with Love
          </div>
        </div>
      )}
    </header>
  );
}
