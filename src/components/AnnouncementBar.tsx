import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative z-50 bg-[var(--color-brand-red)] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-[11px] sm:text-xs font-medium tracking-wider">
        <span className="hidden sm:inline">🚚 Free Nationwide Shipping on orders ₱899+ · COD Available · 30-Day Money Back Guarantee</span>
        <span className="sm:hidden">🚚 Free Shipping ₱899+ · COD · 30-Day Guarantee</span>
      </div>
      <button
        onClick={() => setOpen(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white"
        aria-label="Dismiss announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
