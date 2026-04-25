import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
const LOGO_URL = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/sign/LOVABLE%20ASSETS/Final%20Lovable%20Logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kNmM0OTM0Ny0zYWQ3LTRiMTAtYmI4NC04N2E3N2VmMWM3NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMT1ZBQkxFIEFTU0VUUy9GaW5hbCBMb3ZhYmxlIExvZ28ucG5nIiwiaWF0IjoxNzc3MDkzMjU1LCJleHAiOjE4MDg2MjkyNTV9.xOqIe60Yvp_a435B6fNgTkvMicsiSazYYU7KHxMF_dA";

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
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        scrolled
          ? "bg-[var(--color-noir)]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3">
        <Link to="/" onClick={handleNav("")} className="flex items-center">
          <img src={LOGO_URL} alt="LOVABLE" className="h-10 w-auto" />
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
          className="md:hidden text-ivory p-2"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-noir)]/98 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
            <img src={LOGO_URL} alt="LOVABLE" className="h-10 w-auto" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.hash ? `#${l.hash}` : "/"}
                  onClick={handleNav(l.hash)}
                  className="font-serif text-3xl text-[var(--color-ivory)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/shop" search={{}} onClick={() => setMobileOpen(false)} className="btn-primary mt-6">
                Shop Now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
