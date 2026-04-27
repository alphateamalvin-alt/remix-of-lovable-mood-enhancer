import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "../Reveal";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const VIDEO_ID = "gWyNJb5d6Kk";

export function VSL() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = () => {
      if (!containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          showinfo: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          loop: 1,
          playlist: VIDEO_ID,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
            setReady(true);
          },
          onStateChange: (e: any) => {
            if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
            if (e.data === window.YT.PlayerState.PAUSED) setPlaying(false);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
    }
  }, []);

  const handleUnmute = () => {
    const p = playerRef.current;
    if (!p) return;
    p.unMute();
    p.setVolume(100);
    p.playVideo();
    setMuted(false);
    setPlaying(true);
  };

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) {
      p.pauseVideo();
      setPlaying(false);
    } else {
      p.playVideo();
      setPlaying(true);
    }
  };

  return (
    <section id="story" className="bg-[var(--color-warm-noir)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:gap-16 lg:grid-cols-[55fr_45fr] items-center">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(192,57,43,0.35)] bg-black">
            <div className="aspect-video w-full relative">
              <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

              {/* Tap-to-unmute overlay */}
              {ready && muted && (
                <button
                  type="button"
                  onClick={handleUnmute}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                  aria-label="Tap for sound"
                >
                  <div className="flex flex-col items-center gap-3 text-white">
                    <div className="w-20 h-20 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                      {/* Speaker icon */}
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium tracking-wide uppercase">Tap for sound</span>
                  </div>
                </button>
              )}

              {/* Play/Pause control (shown after unmute) */}
              {ready && !muted && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute bottom-4 right-4 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur flex items-center justify-center text-white transition-colors"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mb-5">Watch This First</p>
          <h2 className="text-display text-[var(--color-ivory)] text-3xl sm:text-4xl md:text-[38px] leading-[1.15]">
            When Was the Last Time You Truly Felt… Connected?
          </h2>
          <p className="mt-6 text-[var(--color-ivory-muted)] text-base leading-[1.85] max-w-xl">
            Before you scroll, watch this short video. It's the story of thousands of Filipino couples and maybe yours too. What you'll see might be the most honest conversation about intimacy you've heard in years.
          </p>

          <ul className="mt-7 space-y-3 max-w-xl">
            {[
              "What's actually stealing your connection (it's not what you think)",
              "Why most solutions fail and what works instead",
              "How LOVABLE helps your body remember how to feel again",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start text-[var(--color-ivory)]/90 text-[15px] leading-relaxed">
                <span className="mt-2 inline-block w-5 h-px bg-[var(--color-brand-red)] flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link to="/shop" className="btn-primary">Get LOVABLE Now →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
