import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import bgImage from "@/assets/painpoints.jpg";

const statements = [
  "You love each other... but something feels different.",
  "The distance in bed feels wider every night.",
  "Together physically. Worlds apart emotionally.",
  "Neither of you says it. But you both feel it.",
];

export function PainPoints() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.72)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-24 md:py-32">
        <Reveal>
          <div className="max-w-[700px] mx-auto text-center">
            {/* Top label */}
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-10"
              style={{ color: "var(--color-red, #C8102E)" }}
            >
              Does This Sound Familiar?
            </p>

            {/* Statements with gold dividers */}
            <div className="flex flex-col items-center">
              {statements.map((statement, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  {i > 0 && (
                    <div
                      className="my-8 md:my-10"
                      style={{
                        width: "40px",
                        height: "1px",
                        backgroundColor: "var(--color-gold, #C9A961)",
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <p
                    className="font-serif italic text-[var(--color-ivory)] text-[26px] md:text-[38px] leading-[1.4]"
                  >
                    {statement}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing line */}
            <p className="mt-14 md:mt-16 italic text-[var(--color-ivory-muted)] text-[20px] leading-[1.6]">
              You're not broken. You just need the right support.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: "var(--color-red, #C8102E)" }}
              >
                I'm Ready to Feel Again →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
