import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const messages = [
  "🛒 Ana from Quezon City just ordered 2 Bottles!",
  "❤️ Miguel from Cebu just ordered the Duo Pack!",
  "⭐ Jasmine from Manila just ordered 3 Bottles!",
  "🔥 Carlo from Davao just ordered For Him!",
  "💕 Sarah & Paolo just ordered the Couples Bundle!",
];

export function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    let hideTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setTimeout>;

    const show = () => {
      if (!mounted) return;
      setVisible(true);
      hideTimer = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        cycleTimer = setTimeout(() => {
          if (!mounted) return;
          setIdx((i) => (i + 1) % messages.length);
          show();
        }, 60000);
      }, 5000);
    };

    const initial = setTimeout(show, 5000);
    return () => {
      mounted = false;
      clearTimeout(initial);
      clearTimeout(hideTimer);
      clearTimeout(cycleTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="glass-card flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5 shadow-2xl shadow-black/40 max-w-[90vw]">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-red)]">
          <Heart size={14} className="text-white fill-white" />
        </span>
        <span className="text-[12px] sm:text-sm text-[var(--color-ivory)] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
          {messages[idx]}
        </span>
      </div>
    </div>
  );
}
