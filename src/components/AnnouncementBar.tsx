const ITEMS = [
  "🚚 Free Nationwide Shipping on orders ₱899+",
  "COD Available",
  "30-Day Money Back Guarantee",
  "100% Natural Ingredients",
  "Made in USA",
];

export function AnnouncementBar() {
  // Duplicate enough items for seamless loop
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative z-50 bg-[var(--color-brand-red)] text-white overflow-hidden">
      <div className="flex w-max animate-[marquee-left_40s_linear_infinite] py-2">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 text-[11px] sm:text-xs font-medium tracking-[0.14em] uppercase whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="text-white/50">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
