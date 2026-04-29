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
      autoPlay: active,
      particles: {
        number: {
          value: isMobile ? 12 : 22,
          density: { enable: true, area: 800 },
        },
        color: { value: ["#DC2627", "#DC2627", "#DC2627", "#B8955A", "#B8955A"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.2, max: 0.55 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
            startValue: "random" as const,
          },
        },
        size: {
          value: { min: 0.8, max: 2 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            startValue: "random" as const,
          },
        },
        move: {
          enable: true,
          direction: "top" as const,
          speed: { min: 0.2, max: 0.6 },
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        wobble: {
          enable: true,
          distance: 6,
          speed: { min: -1.5, max: 1.5 },
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
    [isMobile, active]
  );

  return (
    <>
      <div ref={sentinelRef} className="absolute inset-0 pointer-events-none" aria-hidden />
      {ready && (
        <div
          aria-hidden
          className="hero-embers"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: isMobile ? "100%" : "55%",
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <Particles id="hero-embers" options={options} />
        </div>
      )}
    </>
  );
}
