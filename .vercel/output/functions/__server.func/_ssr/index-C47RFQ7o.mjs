import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { i as Sun, f as Moon, e as MessageCircle, d as Menu, X, h as Star, D as Diamond, b as Crown, g as Sparkle, G as Gem, H as Heart, A as Award, R as RefreshCw, S as ShieldCheck, T as Truck, B as Baby, c as House, V as Video, a as ChevronDown, P as Phone, M as MapPin, C as Check, I as Instagram, F as Facebook, Y as Youtube } from "../_libs/lucide-react.mjs";
const WHATSAPP_URL = "https://wa.me/911800419006?text=" + encodeURIComponent("Hi BlueStone, I'd love to explore your jewellery collections!");
const PHONE = "tel:18004190066";
const MAPS = "https://maps.app.goo.gl/Kox1aqj2BrZJDMZu6";
const NAV = [
  { label: "Collections", href: "#collections" },
  { label: "Promise", href: "#promise" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" }
];
function useDarkMode() {
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  const [p, setP] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? h.scrollTop / total * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}
function Header() {
  const { dark, toggle } = useDarkMode();
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const progress = useScrollProgress();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-x-0 top-0 z-[60] h-[3px]",
        style: {
          background: `linear-gradient(90deg, var(--rose), var(--lavender), var(--mint))`,
          transform: `translateX(${progress - 100}%)`,
          transition: "transform 80ms linear"
        },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong py-3" : "py-5"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex flex-col leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-display text-2xl font-extrabold tracking-wide text-gradient-bloom transition-all duration-500 group-hover:tracking-widest sm:text-3xl",
                style: { letterSpacing: "0.05em" },
                children: "BlueStone"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-[10px] font-light uppercase tracking-[0.3em] text-muted-foreground", children: "Jewellery" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 lg:flex", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: n.href,
              className: "group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full",
                    style: { background: "var(--rose)" }
                  }
                )
              ]
            },
            n.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "tap-feedback relative flex h-10 w-[68px] items-center rounded-full border border-border bg-card/60 px-1 backdrop-blur transition-colors hover:bg-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute top-1 size-8 rounded-full transition-all duration-500 ease-out",
                      style: {
                        left: dark ? "calc(100% - 36px)" : "4px",
                        background: "linear-gradient(135deg, var(--rose), var(--lavender))",
                        boxShadow: "0 4px 12px -2px color-mix(in oklab, var(--rose) 50%, transparent)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Sun,
                    {
                      className: `relative z-10 size-4 text-ink transition-all duration-500 ${dark ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Moon,
                    {
                      className: `relative z-10 ml-auto size-4 text-cream transition-all duration-500 ${dark ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "tap-feedback hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-105 md:inline-flex",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
                  "WhatsApp Us"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(true),
                className: "tap-feedback flex size-10 items-center justify-center rounded-full border border-border bg-card/60 lg:hidden",
                "aria-label": "Open menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/30 backdrop-blur-sm", onClick: () => setOpen(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "aside",
            {
              className: `absolute right-0 top-0 h-full w-[86%] max-w-sm glass-strong p-7 transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-gradient-bloom", children: "BlueStone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setOpen(false),
                      className: "tap-feedback flex size-10 items-center justify-center rounded-full border border-border",
                      "aria-label": "Close menu",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1", children: NAV.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: n.href,
                    onClick: () => setOpen(false),
                    className: "border-b border-border/50 py-4 font-display text-2xl font-semibold tracking-tight transition-all hover:translate-x-2 hover:text-gradient-rose",
                    style: { animationDelay: `${i * 60}ms` },
                    children: n.label
                  },
                  n.href
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: WHATSAPP_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "tap-feedback mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-4 font-medium text-ink",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }),
                      "Message us on WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Free. No pressure. Reply in minutes." })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function FloatingWhatsApp() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: `fixed bottom-24 right-4 z-40 flex size-14 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-500 md:bottom-6 ${visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`,
      style: { background: "linear-gradient(135deg, var(--rose), oklch(0.7 0.18 350))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute inset-0 rounded-full border-2 border-rose",
            style: { animation: "pulse-ring 3s cubic-bezier(0.4,0,0.6,1) infinite" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "relative size-7" })
      ]
    }
  );
}
function MobileBottomBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: PHONE,
        className: "tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "Call" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: WHATSAPP_URL,
        target: "_blank",
        rel: "noreferrer",
        className: "tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 font-medium text-ink",
        style: { background: "linear-gradient(135deg, var(--rose), var(--lavender))" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "WhatsApp" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: MAPS,
        target: "_blank",
        rel: "noreferrer",
        className: "tap-feedback flex flex-col items-center gap-1 rounded-xl py-2 text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px]", children: "Store" })
        ]
      }
    )
  ] }) });
}
function Sparkles({ count = 24, className = "", tone = "mix" }) {
  const dots = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      tone: tone === "mix" ? ["rose", "gold", "lavender"][i % 3] : tone
    })),
    [count, tone]
  );
  const toneClass = (t) => t === "rose" ? "bg-rose" : t === "gold" ? "bg-gold" : "bg-lavender";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`, "aria-hidden": true, children: dots.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `absolute rounded-full ${toneClass(d.tone)} opacity-0`,
      style: {
        top: `${d.top}%`,
        left: `${d.left}%`,
        width: d.size,
        height: d.size,
        boxShadow: `0 0 ${d.size * 3}px currentColor`,
        animation: `sparkle ${d.duration}s ease-in-out ${d.delay}s infinite`
      }
    },
    d.id
  )) });
}
function FloatingShapes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-20 -left-10 size-72 rounded-full border border-rose/40 opacity-60",
        style: { animation: "float 14s ease-in-out infinite" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-1/3 -right-20 size-96 rounded-full border border-lavender/50 opacity-50",
        style: { animation: "float 18s ease-in-out infinite reverse" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute bottom-10 left-1/4 size-40 rotate-45 border border-mint/60 opacity-50",
        style: { animation: "float 12s ease-in-out infinite" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        className: "absolute top-1/2 right-1/3 size-32 opacity-40",
        style: { animation: "spin-slow 30s linear infinite" },
        viewBox: "0 0 100 100",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "polygon",
          {
            points: "50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "0.8",
            className: "text-gold"
          }
        )
      }
    )
  ] });
}
function Reveal({
  children,
  className = "",
  delay = 0
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal-on-scroll ${className}`, children });
}
function CharStagger({ text, className = "", italic }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `char-stagger ${className}`, "aria-label": text, children: text.split("").map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      style: { animationDelay: `${i * 60}ms` },
      className: italic?.includes(i) ? "font-accent" : "",
      children: ch === " " ? " " : ch
    },
    i
  )) });
}
function Counter({ to, suffix = "", duration = 2e3 }) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustMarquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Collections, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Promise$1, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Numbers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lookbook, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TryAtHome, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Urgency, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClosingTicker, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 md:h-0" })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[100svh] items-center overflow-hidden pt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bloom-soft", style: {
      animation: "breathe 25s ease-in-out infinite"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingShapes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 40 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wider", style: {
          animationDelay: "1.8s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-current text-gold" }),
          "India's Most Trusted Jewellery Brand"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.75rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CharStagger, { text: "Where Every" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CharStagger, { text: "Piece Tells" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient-bloom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CharStagger, { text: "Your Story.", italic: Array.from({
            length: 11
          }, (_, i) => i) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: [
          "10,000+ certified gold, diamond & platinum designs.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-foreground", children: " Crafted for you" }),
          ", from Mumbai to your doorstep."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1700, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#collections", className: "tap-feedback group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-foreground px-8 py-4 text-base font-medium text-background shadow-xl transition-all hover:scale-[1.03] sm:w-auto", style: {
            minHeight: 56
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Explore Collections" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-rose to-lavender transition-transform duration-500 group-hover:translate-x-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10 ml-2 transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "tap-feedback inline-flex items-center justify-center rounded-2xl border-2 border-foreground/20 bg-card/40 px-8 py-4 text-base font-medium backdrop-blur transition-all hover:border-foreground/40 hover:bg-card/70", style: {
            minHeight: 56
          }, children: "Book a Free Consultation" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 2e3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Free. No pressure. Reply in minutes." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden h-[520px] lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 size-[440px] rounded-full opacity-70", style: {
          background: "radial-gradient(circle, var(--rose), transparent 65%)",
          animation: "float 10s ease-in-out infinite"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 size-[320px] rounded-full opacity-60", style: {
          background: "radial-gradient(circle, var(--lavender), transparent 65%)",
          animation: "float 14s ease-in-out infinite reverse"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-12 top-20 glass rounded-3xl p-8 shadow-2xl", style: {
          animation: "float 12s ease-in-out infinite"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Diamond, { className: "size-12 text-rose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-accent text-2xl", children: "Swapna" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Diamond Edit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-12 left-8 glass rounded-3xl p-6 shadow-2xl", style: {
          animation: "float 9s ease-in-out infinite reverse"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "size-10 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-accent text-xl", children: "Bridal Bloom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "22kt Gold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-20 bottom-32 glass rounded-2xl p-4 shadow-xl", style: {
          animation: "float 11s ease-in-out infinite"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "size-7 text-lavender" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent" }) })
  ] });
}
function TrustMarquee() {
  const row1 = "10,000+ Designs ✦ BIS Hallmark Certified ✦ IGI & GIA Diamonds ✦ 30-Day Free Returns ✦ Lifetime Exchange ✦ Free Shipping Across India ✦ 200+ Stores ✦ Trusted Since 2011";
  const row2 = "★★★★★ Rated by Millions ✦ COD Available ✦ Video Call Shopping ✦ Try at Home Available ✦ 100% Refund Policy ✦ In-House Designer Collections";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-6", style: {
    background: "linear-gradient(90deg, var(--rose), var(--lavender), var(--rose))"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { text: row1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { text: row2, reverse: true })
  ] }) });
}
function Marquee({
  text,
  reverse
}) {
  const items = Array.from({
    length: 4
  }, () => text);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group flex overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 gap-10 whitespace-nowrap pr-10 font-accent text-lg text-ink group-hover:[animation-play-state:paused] sm:text-xl", style: {
    animation: `${reverse ? "marquee-reverse" : "marquee"} 50s linear infinite`
  }, children: items.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "size-4 shrink-0 text-ink/70" })
  ] }, i)) }) });
}
function ProblemSection() {
  const pains = ["The gold from local stores is never certified — you never know what you're really paying for.", "Finding something truly unique, that feels like it was made just for you, feels impossible.", "Great jewellery should feel personal. Not mass-produced."];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 sm:py-32", style: {
    background: "var(--blush)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 12, tone: "lavender" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "A quiet truth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-tight", children: [
            "Tired of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "Settling" }),
            " for Generic Jewellery?"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5", children: pains.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:translate-x-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-gradient-rose", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-foreground/85", children: p })
        ] }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#promise", className: "mt-10 inline-flex items-center gap-2 font-accent text-xl text-foreground transition-all hover:gap-4", children: [
          "We built BlueStone differently. Discover how. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↓" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full bg-bloom-soft blur-3xl opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 glass-strong rounded-[3rem] p-10 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gem, { className: "size-10 text-rose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-sm", children: "Since 2011" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "size-48 sm:size-64", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ringg", x1: "0", x2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--rose)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--lavender)" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "80", fill: "none", stroke: "url(#ringg)", strokeWidth: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "60", fill: "none", stroke: "var(--gold)", strokeWidth: "1.5", strokeDasharray: "3 5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,55 115,80 100,105 85,80", fill: "url(#ringg)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "80", r: "4", fill: "var(--gold)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-2xl", children: '"Crafted, not manufactured."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground", children: "— The BlueStone way" })
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
}
function Collections() {
  const cats = [{
    name: "Gold Jewellery",
    sub: "Rings · Bangles · Chains · Mangalsutra",
    icon: Crown,
    tone: "var(--gold)"
  }, {
    name: "Diamond Jewellery",
    sub: "Solitaires · Pendants · Earrings",
    icon: Diamond,
    tone: "var(--rose)"
  }, {
    name: "Platinum Jewellery",
    sub: "Bands · Couples' rings",
    icon: Sparkle,
    tone: "var(--lavender)"
  }, {
    name: "Gemstone Jewellery",
    sub: "Coloured stones · Kundan inspired",
    icon: Gem,
    tone: "var(--mint)"
  }, {
    name: "Everyday Wear",
    sub: "Lightweight · Office-friendly",
    icon: Heart,
    tone: "var(--rose)"
  }, {
    name: "Bridal Collections",
    sub: "Wedding sets · Engagement pieces",
    icon: Crown,
    tone: "var(--lavender)"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "collections", className: "relative overflow-hidden py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bloom-soft opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 20 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
          "Find Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-bloom", children: "Perfect Piece" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-center text-muted-foreground", children: "Six collections. Endless stories. Choose what calls to you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: cats.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "group relative block overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100", style: {
          background: c.tone
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex size-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6", style: {
          background: `color-mix(in oklab, ${c.tone} 35%, transparent)`
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold tracking-tight", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.sub }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-all group-hover:gap-4 group-hover:text-foreground", children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
        ] })
      ] }) }, c.name)) })
    ] })
  ] });
}
function Promise$1() {
  const tiles = [{
    icon: Award,
    title: "BIS Hallmark + IGI & GIA Certified",
    body: "Every piece verified by India's top certification bodies.",
    stat: "100%"
  }, {
    icon: RefreshCw,
    title: "Lifetime Exchange & Buyback",
    body: "Your jewellery is always an investment, never a sunk cost.",
    stat: "Lifetime"
  }, {
    icon: ShieldCheck,
    title: "30-Day Free Returns",
    body: "Not in love? Return it, no questions asked.",
    stat: "30 Days"
  }, {
    icon: Truck,
    title: "Free Shipping + COD",
    body: "Delivered insured to your door, anywhere in India.",
    stat: "Free"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "promise", className: "relative overflow-hidden py-24 text-white sm:py-32", style: {
    background: "linear-gradient(135deg, oklch(0.7 0.15 350), oklch(0.65 0.13 320) 50%, oklch(0.7 0.12 295))"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 28, tone: "gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-white/80", children: "Our promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
          "The BlueStone Promise — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent", children: "Jewellery You Can Trust Forever" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 sm:grid-cols-2", children: tiles.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-xl transition-all hover:bg-white/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold tracking-tight", children: t.stat })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl font-bold leading-tight", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/85", children: t.body })
      ] }) }, t.title)) })
    ] })
  ] });
}
function Numbers() {
  const stats = [{
    v: 1e4,
    suf: "+",
    label: "Designs"
  }, {
    v: 200,
    suf: "+",
    label: "Stores nationwide"
  }, {
    v: 30,
    suf: "",
    label: "Day free returns"
  }, {
    v: 4.8,
    suf: "★",
    label: "Customer rating",
    decimal: true
  }, {
    v: 100,
    suf: "%",
    label: "Certified jewellery"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 text-white sm:py-32", style: {
    background: "var(--ink)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 40, tone: "gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
      background: "radial-gradient(circle at 30% 50%, var(--rose), transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "By the numbers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight", children: [
          "A decade of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "trust" }),
          ", in numbers"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 80, className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none text-gradient-bloom", children: [
          s.decimal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DecimalCounter, { to: s.v }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v }),
          s.suf
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm uppercase tracking-[0.2em] text-white/70", children: s.label })
      ] }, i)) })
    ] })
  ] });
}
function DecimalCounter({
  to
}) {
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / 2e3);
      setVal(Number((p * to).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: val.toFixed(1) });
}
function HowItWorks() {
  const steps = [{
    n: "01",
    t: "Browse 10,000+ designs",
    b: "Online or visit any of our 200+ stores across India."
  }, {
    n: "02",
    t: "Customise everything",
    b: "Choose gold karat, colour, diamond carat, and size."
  }, {
    n: "03",
    t: "Try at home or video call",
    b: "Free consultation with our expert jewellery consultants."
  }, {
    n: "04",
    t: "Delivered, insured, free",
    b: "Love it or return in 30 days. No questions asked."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-24 sm:py-32", style: {
    background: "var(--cream)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
        "Shop BlueStone in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "4 easy steps" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-20 grid gap-12 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute left-0 top-16 hidden h-2 w-full lg:block", preserveAspectRatio: "none", viewBox: "0 0 1000 10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 5 L1000 5", stroke: "var(--gold)", strokeWidth: "2", strokeDasharray: "6 8" }) }),
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 100, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mb-6 flex size-16 items-center justify-center rounded-full glass-strong font-display text-2xl font-bold text-gradient-rose shadow-xl", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.b })
      ] }, s.n))
    ] })
  ] }) });
}
function Lookbook() {
  const items = [{
    name: "Eternal Gold",
    desc: "Daily wear, lightweight elegance for the modern Indian woman.",
    icon: Crown,
    tone: "var(--gold)",
    h: "lg:h-[520px]"
  }, {
    name: "Swapna",
    desc: "Close-set diamonds in 22kt gold, dreamed and crafted in India.",
    icon: Diamond,
    tone: "var(--rose)",
    h: "lg:h-[400px]"
  }, {
    name: "Bridal Bloom",
    desc: "Wedding and engagement sets that bloom with your love story.",
    icon: Heart,
    tone: "var(--lavender)",
    h: "lg:h-[460px]"
  }, {
    name: "Fusion Edit",
    desc: "East-meets-West contemporary designs for the global Indian.",
    icon: Sparkle,
    tone: "var(--mint)",
    h: "lg:h-[420px]"
  }, {
    name: "Men's Gold",
    desc: "Rings, chains and bracelets, crafted for him.",
    icon: Gem,
    tone: "var(--gold)",
    h: "lg:h-[440px]"
  }, {
    name: "Kids' Jewellery",
    desc: "Safe, pure and beautifully crafted for the little ones.",
    icon: Baby,
    tone: "var(--rose)",
    h: "lg:h-[400px]"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "lookbook", className: "relative overflow-hidden py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Lookbook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
        "Collections that ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-bloom", children: "move with your life" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: `group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${it.h}`, style: {
      background: `linear-gradient(160deg, color-mix(in oklab, ${it.tone} 60%, white), color-mix(in oklab, ${it.tone} 25%, white))`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:opacity-90", style: {
        background: "transparent"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "size-10 text-ink/70" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-10 -right-10 size-48 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-125", style: {
        background: it.tone
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-accent text-3xl font-bold text-ink", children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xs text-sm text-ink/75", children: it.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-all group-hover:gap-4", children: [
          "Shop collection ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
        ] })
      ] })
    ] }) }, it.name)) })
  ] }) });
}
function Testimonials() {
  const cards = [{
    name: "Priya R.",
    city: "Bengaluru",
    text: "The diamond solitaire I got is breathtaking. Better than I'd seen in any boutique."
  }, {
    name: "Aanya M.",
    city: "Delhi",
    text: "Try at Home is genius. I tried 5 designs and kept the one that felt like me."
  }, {
    name: "Sneha K.",
    city: "Hyderabad",
    text: "Quality, finish, packaging — everything felt premium. Worth every rupee."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 sm:py-32", style: {
    background: "var(--blush)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 16, tone: "lavender" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Loved by millions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
          "Millions of stories. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-bloom", children: "Each one sparkles." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong relative rounded-3xl p-10 text-center shadow-xl sm:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute left-8 top-8 size-6 text-rose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute right-8 bottom-8 size-6 text-lavender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-2xl leading-relaxed sm:text-4xl", children: `"On Valentine's Day, my husband gifted me a necklace from BlueStone, and I haven't taken it off even once. Everyone asks me where it's from."` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex items-center justify-center gap-2", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-gold text-gold" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground", children: "Mumbai · Verified Buyer" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-3xl glass p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: Array.from({
          length: 5
        }).map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-gold text-gold" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 leading-relaxed", children: [
          '"',
          c.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm font-medium", children: [
          c.name,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            c.city
          ] })
        ] })
      ] }) }, c.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-12 text-center font-display text-2xl", children: [
        "Join ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-rose font-extrabold", children: "10 Million+" }),
        " happy BlueStone customers"
      ] }) })
    ] })
  ] });
}
function TryAtHome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bloom-soft", style: {
      animation: "breathe 30s ease-in-out infinite"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 20 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Unique to BlueStone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
          "Jewellery shopping, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-bloom", children: "reimagined for you" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full overflow-hidden rounded-3xl glass-strong p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 size-40 rounded-full bg-rose opacity-30 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "size-12 text-rose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-3xl font-bold", children: "Try at Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base leading-relaxed text-foreground/80", children: [
            "Pick up to 5 designs. We deliver to your door. Try them on. Keep what you love. Return the rest — ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent", children: "free" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "tap-feedback mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-foreground px-6 py-4 font-medium text-background transition hover:scale-[1.02] sm:w-auto", style: {
            minHeight: 56
          }, children: "Book Try at Home →" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full overflow-hidden rounded-3xl glass-strong p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 size-40 rounded-full bg-lavender opacity-40 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "size-12 text-lavender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-3xl font-bold", children: "Video Call Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base leading-relaxed text-foreground/80", children: [
            "Connect with our jewellery experts live. Get personalised guidance. Book a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent", children: "free 15-minute session" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "tap-feedback mt-8 inline-flex w-full items-center justify-center rounded-2xl border-2 border-foreground/30 px-6 py-4 font-medium transition hover:bg-foreground hover:text-background sm:w-auto", style: {
            minHeight: 56
          }, children: "Schedule Video Call →" })
        ] }) })
      ] })
    ] })
  ] });
}
function Story() {
  const values = [{
    i: ShieldCheck,
    t: "Purity First",
    b: "Every piece BIS Hallmark certified. No exceptions."
  }, {
    i: Sparkle,
    t: "Design Forward",
    b: "Monthly new collections from our in-house design team."
  }, {
    i: Heart,
    t: "You First",
    b: "30-day returns, lifetime exchange. No questions asked."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "story", className: "relative overflow-hidden py-24 sm:py-32", style: {
    background: "var(--cream)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Our story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
        "We started BlueStone because ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "you deserve better" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5 text-lg leading-relaxed text-foreground/85", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Founded in 2011, BlueStone was born from a simple belief — every Indian woman deserves access to certified, beautifully designed jewellery at honest prices, without stepping into a store that makes her feel judged." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Today, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "10,000+ designs and 200+ stores later" }),
          ", that belief hasn't changed."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/50 p-5 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(v.i, { className: "size-7 text-rose" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-lg font-bold", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v.b })
      ] }, v.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[3rem] bg-bloom-soft", style: {
        animation: "breathe 20s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-12 glass-strong flex flex-col items-center justify-center rounded-[2.5rem] p-10 text-center shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "size-40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "storyg", x1: "0", x2: "1", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--rose)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "var(--lavender)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--mint)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "70", fill: "none", stroke: "url(#storyg)", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "100,40 130,80 100,120 70,80", fill: "url(#storyg)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "80", r: "5", fill: "var(--gold)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 font-accent text-2xl", children: [
          '"Honest prices.',
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          'Heartfelt craft."'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Est. 2011 · Mumbai" })
      ] })
    ] }) })
  ] }) });
}
function FAQ() {
  const faqs = [["Is BlueStone jewellery certified?", "Yes — all our gold is BIS Hallmark certified, and all diamonds are IGI & GIA certified. You get original certificates with every order."], ["Can I return jewellery if I don't like it?", "Absolutely. We offer a 30-day free return policy with a 100% refund. No questions asked."], ["Do you offer EMI?", "Yes — easy EMI on all major credit cards, debit cards, and payment apps."], ["Can I customise a design?", "Yes — choose your gold karat, colour (yellow/white/rose), diamond carat, and size. Our team will guide you."], ["Is COD available?", "Yes — Cash on Delivery is available across India for most orders."], ["Are your products available offline too?", "Yes — visit any of our 200+ BlueStone stores across India."], ["How does Try at Home work?", "Pick up to 5 designs. We deliver them to your door. Try them on at home. Keep what you love. Return the rest — completely free."], ["How do I get started?", "The fastest way is to send us a WhatsApp message — our team will guide you within minutes."]];
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden py-24 sm:py-32", style: {
    background: "color-mix(in oklab, var(--mint) 25%, white)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
        "Your questions, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "answered" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-3", children: faqs.map(([q, a], i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), className: "tap-feedback flex w-full items-center justify-between gap-4 p-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold sm:text-xl", children: q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid transition-all duration-500", style: {
          gridTemplateRows: isOpen ? "1fr" : "0fr"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-6 pb-6 leading-relaxed text-foreground/85", children: [
          a,
          i === faqs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "font-accent text-rose underline-offset-4 hover:underline", children: "Message us on WhatsApp →" })
          ] })
        ] }) }) })
      ] }) }, i);
    }) })
  ] }) });
}
function Urgency() {
  const [time, setTime] = reactExports.useState(() => endOfWeekDelta());
  reactExports.useEffect(() => {
    const i = setInterval(() => setTime(endOfWeekDelta()), 1e3);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-24 text-white sm:py-32", style: {
    background: "linear-gradient(135deg, oklch(0.7 0.16 350), oklch(0.6 0.16 320), oklch(0.65 0.13 295))"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 40, tone: "gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-5 text-center sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-white/85", children: "Limited offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-tight", children: [
          "Get ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent", children: "10% Off" }),
          " Your First",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "BlueStone Order"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg text-white/90", children: [
          "Use code ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-white/20 px-3 py-1 font-mono", children: "FIRST10" }),
          " at checkout. Valid this week only."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-4 gap-3 sm:gap-6", children: ["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
        const val = [time.d, time.h, time.m, time.s][idx];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-extrabold tabular-nums sm:text-5xl", children: String(val).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.25em] text-white/75 sm:text-xs", children: label })
        ] }, label);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 300, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "tap-feedback mt-12 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-5 text-lg font-semibold text-ink transition hover:scale-[1.02] sm:w-auto", style: {
          minHeight: 56
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }),
          "Claim Your Offer on WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm italic text-white/80", children: "No commitment. Just beautiful jewellery." })
      ] })
    ] })
  ] });
}
function endOfWeekDelta() {
  const now = /* @__PURE__ */ new Date();
  const end = new Date(now);
  const dow = now.getDay();
  const daysToSun = (7 - dow) % 7 || 7;
  end.setDate(now.getDate() + daysToSun);
  end.setHours(23, 59, 59, 999);
  let diff = Math.max(0, end.getTime() - now.getTime());
  const d = Math.floor(diff / 864e5);
  diff -= d * 864e5;
  const h = Math.floor(diff / 36e5);
  diff -= h * 36e5;
  const m = Math.floor(diff / 6e4);
  diff -= m * 6e4;
  const s = Math.floor(diff / 1e3);
  return {
    d,
    h,
    m,
    s
  };
}
function FinalCTA() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden py-24 text-white sm:py-32", style: {
    background: "var(--ink)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { count: 30, tone: "gold" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25", style: {
      background: "radial-gradient(circle at 70% 30%, var(--rose), transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm font-medium uppercase tracking-[0.3em] text-rose", children: "Visit us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight", children: [
          "BlueStone Mumbai — ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-gradient-rose", children: "Your perfect piece is waiting" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "tap-feedback flex h-full flex-col rounded-3xl p-8 transition hover:scale-[1.02]", style: {
          background: "linear-gradient(135deg, var(--rose), oklch(0.72 0.16 340))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-9 text-ink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold text-ink", children: "WhatsApp Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-ink/85", children: "The fastest way to reach our team. Reply in minutes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-auto pt-6 text-ink", children: "Chat now →" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE, className: "tap-feedback flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold", children: "Call us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/80", children: "1800-419-0066 — toll-free, 7 days a week." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-auto pt-6", children: "Call now →" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: MAPS, target: "_blank", rel: "noreferrer", className: "tap-feedback flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-bold", children: "Find a store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/80", children: "200+ stores across India. Visit your nearest one." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-auto pt-6", children: "Open map →" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-6 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "BlueStone Mumbai", src: "https://www.google.com/maps?q=BlueStone%20Mumbai&output=embed", className: "h-[420px] w-full", loading: "lazy" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSubmitted(true);
        }, className: "flex h-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "Send us a message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-white/70", children: "Your name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose", placeholder: "Priya Sharma" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-white/70", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", className: "w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose", placeholder: "+91 ••••• •••••" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs uppercase tracking-[0.2em] text-white/70", children: "What are you looking for?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, className: "w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose", placeholder: "A diamond pendant for my anniversary..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "tap-feedback inline-flex items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-4 font-medium text-ink transition hover:scale-[1.02]", style: {
            minHeight: 56
          }, children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5" }),
            " We'll be in touch"
          ] }) : "Send message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-white/60", children: "Free. No pressure. Reply in minutes." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/80", children: ["BIS Hallmark", "IGI Certified", "30-Day Returns", "Free Shipping"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-rose" }),
        " ",
        b
      ] }, b)) }) })
    ] })
  ] });
}
function ClosingTicker() {
  const text = "BlueStone Jewellery ✦ Crafted With Love ✦ Certified Always ✦ Delivered Free ✦ 10,000+ Designs ✦ Your Story Starts Here ✦ India's Most Loved Jewellery Brand";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden py-5", style: {
    background: "var(--rose)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { text, reverse: true }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden bg-card pt-16 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px", style: {
      background: "linear-gradient(90deg, transparent, var(--rose), var(--lavender), var(--mint), transparent)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-extrabold text-gradient-bloom", children: "BlueStone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Jewellery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xs text-sm text-muted-foreground", children: "India's most loved fine jewellery brand. Every piece tells your story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [Instagram, Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "social", className: "tap-feedback flex size-10 items-center justify-center rounded-full border border-border transition hover:border-rose hover:text-rose", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Quick links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm", children: [["Collections", "#collections"], ["Promise", "#promise"], ["Lookbook", "#lookbook"], ["Story", "#story"], ["Contact", "#contact"]].map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "text-muted-foreground transition hover:text-foreground", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Collections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm", children: ["Gold", "Diamond", "Platinum", "Gemstone", "Bridal", "Everyday"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noreferrer", className: "text-muted-foreground transition hover:text-foreground", children: c }) }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE, className: "hover:text-foreground", children: "1800-419-0066" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:cs@bluestone.com", className: "hover:text-foreground", children: "cs@bluestone.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: MAPS, target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "Store locator →" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-5 pt-8 text-xs text-muted-foreground sm:flex-row sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2025 BlueStone Jewellery. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Website by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition hover:text-rose", children: "Pixorra" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
