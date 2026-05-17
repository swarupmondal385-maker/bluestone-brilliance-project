import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  // @ts-expect-error dynamic tag
  return (
    <As ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </As>
  );
}

export function CharStagger({ text, className = "", italic }: { text: string; className?: string; italic?: number[] }) {
  return (
    <span className={`char-stagger ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 60}ms` }}
          className={italic?.includes(i) ? "font-accent" : ""}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}
