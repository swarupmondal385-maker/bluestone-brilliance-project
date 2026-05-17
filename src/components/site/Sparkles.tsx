import { useMemo } from "react";

type SparkleProps = { count?: number; className?: string; tone?: "rose" | "gold" | "mix" | "lavender" };

export function Sparkles({ count = 24, className = "", tone = "mix" }: SparkleProps) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4,
        tone:
          tone === "mix"
            ? (["rose", "gold", "lavender"] as const)[i % 3]
            : tone,
      })),
    [count, tone],
  );
  const toneClass = (t: string) =>
    t === "rose" ? "bg-rose" : t === "gold" ? "bg-gold" : "bg-lavender";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className={`absolute rounded-full ${toneClass(d.tone)} opacity-0`}
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            boxShadow: `0 0 ${d.size * 3}px currentColor`,
            animation: `sparkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-20 -left-10 size-72 rounded-full border border-rose/40 opacity-60"
        style={{ animation: "float 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-20 size-96 rounded-full border border-lavender/50 opacity-50"
        style={{ animation: "float 18s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-10 left-1/4 size-40 rotate-45 border border-mint/60 opacity-50"
        style={{ animation: "float 12s ease-in-out infinite" }}
      />
      <svg
        className="absolute top-1/2 right-1/3 size-32 opacity-40"
        style={{ animation: "spin-slow 30s linear infinite" }}
        viewBox="0 0 100 100"
      >
        <polygon
          points="50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-gold"
        />
      </svg>
    </div>
  );
}
