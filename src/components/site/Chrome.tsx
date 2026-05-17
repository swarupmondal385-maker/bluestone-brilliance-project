import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/911800419006?text=" +
  encodeURIComponent("Hi BlueStone, I'd love to explore your jewellery collections!");
const PHONE = "tel:18004190066";
const MAPS = "https://maps.app.goo.gl/Kox1aqj2BrZJDMZu6";

const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Promise", href: "#promise" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("bs-theme");
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : !!prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("bs-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

export function Header() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[3px]"
        style={{
          background: `linear-gradient(90deg, var(--rose), var(--lavender), var(--mint))`,
          transform: `translateX(${progress - 100}%)`,
          transition: "transform 80ms linear",
        }}
        aria-hidden
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex flex-col leading-none">
            <span
              className="font-display text-2xl font-extrabold tracking-wide text-gradient-bloom transition-all duration-500 group-hover:tracking-widest sm:text-3xl"
              style={{ letterSpacing: "0.05em" }}
            >
              BlueStone
            </span>
            <span className="mt-0.5 text-[10px] font-light uppercase tracking-[0.3em] text-muted-foreground">
              Jewellery
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {n.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--rose)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="tap-feedback relative flex h-10 w-[68px] items-center rounded-full border border-border bg-card/60 px-1 backdrop-blur transition-colors hover:bg-card"
            >
              <span
                className="absolute top-1 size-8 rounded-full transition-all duration-500 ease-out"
                style={{
                  left: dark ? "calc(100% - 36px)" : "4px",
                  background: "linear-gradient(135deg, var(--rose), var(--lavender))",
                  boxShadow: "0 4px 12px -2px color-mix(in oklab, var(--rose) 50%, transparent)",
                }}
              />
              <Sun
                className={`relative z-10 size-4 text-ink transition-all duration-500 ${
                  dark ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <Moon
                className={`relative z-10 ml-auto size-4 text-cream transition-all duration-500 ${
                  dark ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                }`}
              />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="tap-feedback hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-105 md:inline-flex"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>

            <button
              onClick={() => setOpen(true)}
              className="tap-feedback flex size-10 items-center justify-center rounded-full border border-border bg-card/60 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm glass-strong p-7 transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-gradient-bloom">BlueStone</span>
            <button
              onClick={() => setOpen(false)}
              className="tap-feedback flex size-10 items-center justify-center rounded-full border border-border"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-display text-2xl font-semibold tracking-tight transition-all hover:translate-x-2 hover:text-gradient-rose"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="tap-feedback mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-4 font-medium text-ink"
          >
            <MessageCircle className="size-5" />
            Message us on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">Free. No pressure. Reply in minutes.</p>
        </aside>
      </div>
    </>
  );
}

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-24 right-4 z-40 flex size-14 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-500 md:bottom-6 ${
        visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
      style={{ background: "linear-gradient(135deg, var(--rose), oklch(0.7 0.18 350))" }}
    >
      <span
        className="absolute inset-0 rounded-full border-2 border-rose"
        style={{ animation: "pulse-ring 3s cubic-bezier(0.4,0,0.6,1) infinite" }}
      />
      <MessageCircle className="relative size-7" />
    </a>
  );
}

export function MobileBottomBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={PHONE}
          className="tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 text-foreground"
        >
          <Phone className="size-5" />
          <span className="text-[11px]">Call</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 font-medium text-ink"
          style={{ background: "linear-gradient(135deg, var(--rose), var(--lavender))" }}
        >
          <MessageCircle className="size-5" />
          <span className="text-[11px]">WhatsApp</span>
        </a>
        <a
          href={MAPS}
          target="_blank"
          rel="noreferrer"
          className="tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 text-foreground"
        >
          <MapPin className="size-5" />
          <span className="text-[11px]">Store</span>
        </a>
      </div>
    </nav>
  );
}

export { WHATSAPP_URL, PHONE, MAPS };
