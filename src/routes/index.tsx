import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { SocialProofToast } from "@/components/SocialProofToast";
import { StickyUrgencyBar } from "@/components/StickyUrgencyBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { VSL } from "@/components/sections/VSL";
import { PainPoints } from "@/components/sections/PainPoints";
import { ForHer } from "@/components/sections/ForHer";
import { ForHim } from "@/components/sections/ForHim";
import { SocialProof } from "@/components/sections/SocialProof";
import { Promise } from "@/components/sections/Promise";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOVABLE — Natural Mood Enhancer Drops for Filipino Couples" },
      {
        name: "description",
        content:
          "Reignite intimacy naturally. LOVABLE Drops for Her & Him — 100% natural, no prescription, 30-day money-back guarantee. Free PH shipping ₱899+.",
      },
      { property: "og:title", content: "LOVABLE — Reignite What Time Tried to Take Away" },
      {
        property: "og:description",
        content:
          "The natural way thousands of Filipino couples are quietly reigniting their connection.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--color-noir)] text-[var(--color-ivory)]">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <VSL />
        <PainPoints />
        <ForHer />
        <ForHim />
        <SocialProof />
        <Promise />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <SocialProofToast />
      <StickyUrgencyBar />
    </div>
  );
}
