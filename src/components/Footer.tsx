import { Link } from "@tanstack/react-router";
const logo = "https://hmavnijneqxnythlehpw.supabase.co/storage/v1/object/public/LOVABLE%20ASSETS/Final%20Lovable%20Logo%20copy.png";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="LOVABLE" className="h-9 w-auto mb-5" />
          <p className="text-sm leading-relaxed text-[var(--color-ivory-muted)] max-w-xs">
            Feel Normal Again. Live Fully Again. Love Deeply Again.
          </p>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-brand-red)] font-semibold mb-5">Shop</h5>
          <ul className="space-y-3 text-sm text-[var(--color-ivory)]/80">
            <li><Link to="/shop" search={{ variant: "her" }} className="hover:text-[var(--color-brand-red)] transition-colors">For Her</Link></li>
            <li><Link to="/shop" search={{ variant: "him" }} className="hover:text-[var(--color-brand-red)] transition-colors">For Him</Link></li>
            <li><Link to="/shop" search={{ variant: "couples" }} className="hover:text-[var(--color-brand-red)] transition-colors">Couples Bundle</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-brand-red)] font-semibold mb-5">Support</h5>
          <ul className="space-y-3 text-sm text-[var(--color-ivory)]/80">
            <li><Link to="/" hash="story" className="hover:text-[var(--color-brand-red)] transition-colors">Our Story</Link></li>
            <li><Link to="/" hash="faq" className="hover:text-[var(--color-brand-red)] transition-colors">FAQ</Link></li>
            <li><a href="mailto:admin@lovablecouple.shop" className="hover:text-[var(--color-brand-red)] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-brand-red)] font-semibold mb-5">Contact</h5>
          <ul className="space-y-3 text-sm text-[var(--color-ivory)]/80">
            <li>admin@lovablecouple.shop</li>
            <li>0935-7314-280</li>
            <li>Lovable Philippines</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[var(--color-ivory-muted)] tracking-wider">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center">
            <span>Payment:</span>
            <span>GCash</span><span>·</span>
            <span>Maya</span><span>·</span>
            <span>Visa</span><span>·</span>
            <span>Mastercard</span><span>·</span>
            <span>COD</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center">
            <span>Delivery:</span>
            <span>J&T Express</span><span>·</span>
            <span>Ninja Van</span><span>·</span>
            <span>Flash</span>
          </div>
          <div>© 2026 LOVABLE Philippines. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
