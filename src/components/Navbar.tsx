import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
const logo = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Final%20Lovable%20Logo%20copy.png";

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
          <img src={logo} alt="LOVABLE" className="h-5 w-auto" />
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

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-ivory tap-target -mr-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-noir)]/98 backdrop-blur-xl flex flex-col safe-top">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
            <img src={logo} alt="LOVABLE" className="h-5 w-auto" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="tap-target -mr-2">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col items-stretch flex-1 px-6 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.hash ? `#${l.hash}` : "/"}
                  onClick={handleNav(l.hash)}
                  className="flex items-center min-h-[56px] text-[16px] font-medium tracking-[0.18em] uppercase text-[var(--color-ivory)] border-b border-white/[0.05] active:bg-[var(--color-brand-red)] active:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-8 safe-bottom">
            <Link to="/shop" search={{}} onClick={() => setMobileOpen(false)} className="btn-primary btn-mobile-block">
              Shop Now →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
