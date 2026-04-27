import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import img1 from "@/assets/lifestyle4.jpg";
import img2 from "@/assets/lifestyle6.jpg";
import img3 from "@/assets/lifestyle8.jpg";
import img4 from "@/assets/lifestyle10.jpg";

type Row = {
  image: string;
  imageSide: "left" | "right";
  bg: string;
  label?: string;
  headline: string;
  body: string;
};

const rows: Row[] = [
  {
    image: img1,
    imageSide: "left",
    bg: "var(--color-noir)",
    label: "Sound Familiar?",
    headline: "You love each other… but something feels different.",
    body: "It's not that the love is gone. It's that something quietly got in the way — stress, time, hormones, life.",
  },
  {
    image: img2,
    imageSide: "right",
    bg: "#1A0A0A",
    headline: "The distance in bed feels wider every night.",
    body: "You're inches apart. But it feels like miles. And neither of you knows how to close that gap.",
  },
  {
    image: img3,
    imageSide: "left",
    bg: "var(--color-noir)",
    headline: "Together physically. Worlds apart emotionally.",
    body: "Same bed. Same house. Same life. But the connection that used to come so naturally — it's just not there anymore.",
  },
  {
    image: img4,
    imageSide: "right",
    bg: "#1A0A0A",
    headline: "Neither of you says it. But you both feel it.",
    body: "There's an unspoken weight between you. You miss each other — even when you're in the same room.",
  },
];

function PainRow({ row, index }: { row: Row; index: number }) {
  const imageLeft = row.imageSide === "left";

  const ImageBlock = (
    <div className="relative w-full h-[55vh] md:h-auto md:min-h-[70vh] overflow-hidden">
      <img
        src={row.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Edge gradient blending into the text side */}
      <div
        className="hidden md:block absolute inset-y-0 w-40 pointer-events-none"
        style={{
          [imageLeft ? "right" : "left"]: 0,
          background: imageLeft
            ? `linear-gradient(to left, ${row.bg} 0%, color-mix(in oklab, ${row.bg} 60%, transparent) 40%, transparent 100%)`
            : `linear-gradient(to right, ${row.bg} 0%, color-mix(in oklab, ${row.bg} 60%, transparent) 40%, transparent 100%)`,
        } as React.CSSProperties}
      />
      {/* Mobile bottom fade */}
      <div
        className="md:hidden absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${row.bg} 100%)`,
        }}
      />
    </div>
  );

  const TextBlock = (
    <div
      className="flex items-center px-6 sm:px-10 lg:px-20 py-16 md:py-24 md:min-h-[70vh]"
      style={{ backgroundColor: row.bg }}
    >
      <Reveal>
        <div className="max-w-xl">
          {row.label && <p className="eyebrow mb-6">{row.label}</p>}
          <h3
            className="font-serif italic text-[var(--color-ivory)] text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.15]"
          >
            {row.headline}
          </h3>
          <p className="mt-7 text-[var(--color-ivory-muted)] text-[16px] leading-[1.9]">
            {row.body}
          </p>
        </div>
      </Reveal>
    </div>
  );

  return (
    <div
      className="grid md:grid-cols-2"
      style={{ backgroundColor: row.bg }}
    >
      {/* Mobile: image always first */}
      <div className="md:hidden">{ImageBlock}</div>
      <div className="md:hidden">{TextBlock}</div>

      {/* Desktop: respect imageSide */}
      <div className="hidden md:block">{imageLeft ? ImageBlock : TextBlock}</div>
      <div className="hidden md:block">{imageLeft ? TextBlock : ImageBlock}</div>
    </div>
  );
}

export function PainPoints() {
  return (
    <section className="relative">
      {rows.map((row, i) => (
        <PainRow key={i} row={row} index={i} />
      ))}

      {/* Closing row */}
      <div className="bg-[var(--color-noir)] py-24 md:py-32 px-6 text-center">
        <Reveal>
          <p className="font-serif italic text-[var(--color-ivory)] text-2xl sm:text-3xl md:text-[36px] leading-[1.25] max-w-3xl mx-auto">
            You're not broken. You just need the right support.
          </p>
          <div className="mt-10">
            <Link to="/shop" className="btn-primary">I'm Ready to Feel Again →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
