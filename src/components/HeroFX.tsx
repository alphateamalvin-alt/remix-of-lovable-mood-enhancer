import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useIsMobile } from "@/hooks/use-mobile";

let enginePromise: Promise<void> | null = null;

export function HeroFX() {
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(true);
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enginePromise) {
      enginePromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    }
    enginePromise.then(() => setReady(true));
  }, []);

  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = inView && visible;

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: {
          value: isMobile ? 14 : 28,
          density: { enable: true, area: 1200 },
        },
        color: { value: ["#DC2627", "#DC2627", "#DC2627", "#B8955A"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.15, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
            startValue: "random" as const,
          },
        },
        size: { value: { min: 1, max: 2.5 } },
        move: {
          enable: true,
          direction: "top" as const,
          speed: { min: 0.15, max: 0.5 },
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        wobble: {
          enable: true,
          distance: 8,
          speed: { min: -2, max: 2 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [isMobile]
  );

  return (
    <>
      <div ref={sentinelRef} className="absolute inset-0 pointer-events-none" aria-hidden />
      {/* Layer 0: Heartbeat pulse glow */}
      <div
        aria-hidden
        className="hero-heartbeat-pulse"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: isMobile ? 320 : 480,
          height: isMobile ? 320 : 480,
          marginLeft: isMobile ? -160 : -240,
          marginTop: isMobile ? -160 : -240,
          background:
            "radial-gradient(circle, rgba(220,38,39,0.20) 0%, rgba(220,38,39,0.10) 35%, rgba(220,38,39,0.04) 60%, transparent 75%)",
          borderRadius: "50%",
          filter: "blur(24px)",
          mixBlendMode: "screen",
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          zIndex: 0,
          pointerEvents: "none",
          animationPlayState: active ? "running" : "paused",
        }}
      />
      {/* Layer 1: Sparse embers */}
      {ready && (
        <div
          aria-hidden
          className="hero-embers"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Particles id="hero-embers" options={options} />
        </div>
      )}
    </>
  );
}
