import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { label: "Our Story", hash: "#story" },
  { label: "For Her", hash: "#forher" },
  { label: "For Him", hash: "#forhim" },
  { label: "FAQ", hash: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-noir)]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LOVABLE" className="h-8 sm:h-9 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.hash}>
              {isHome ? (
                <a
                  href={l.hash}
                  className="text-[12px] font-medium tracking-[0.18em] uppercase text-[var(--color-ivory)]/85 hover:text-[var(--color-brand-red)] transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to="/"
                  hash={l.hash.slice(1)}
                  className="text-[12px] font-medium tracking-[0.18em] uppercase text-[var(--color-ivory)]/85 hover:text-[var(--color-brand-red)] transition-colors"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="/shop" className="btn-primary !py-3 !px-6 text-[11px]">
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
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
            <img src={logo} alt="LOVABLE" className="h-8 w-auto" />
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((l) => (
              <li key={l.hash}>
                {isHome ? (
                  <a
                    href={l.hash}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl text-[var(--color-ivory)]"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to="/"
                    hash={l.hash.slice(1)}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl text-[var(--color-ivory)]"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="btn-primary mt-6">
                Shop Now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
