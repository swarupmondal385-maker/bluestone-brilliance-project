import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Diamond, Crown, Heart, Sparkle, Gem, Baby, ShieldCheck, RefreshCw,
  Truck, Award, Star, Phone, MapPin, MessageCircle, ChevronDown, Instagram,
  Facebook, Youtube, Video, Home, Check,
} from "lucide-react";
import { Header, FloatingWhatsApp, MobileBottomBar, WHATSAPP_URL, PHONE, MAPS } from "@/components/site/Chrome";
import { Sparkles, FloatingShapes } from "@/components/site/Sparkles";
import { Reveal, CharStagger, Counter } from "@/components/site/Motion";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <ProblemSection />
        <Collections />
        <Promise />
        <Numbers />
        <HowItWorks />
        <Lookbook />
        <Testimonials />
        <TryAtHome />
        <Story />
        <FAQ />
        <Urgency />
        <FinalCTA />
        <ClosingTicker />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <MobileBottomBar />
      <div className="h-20 md:h-0" />
    </div>
  );
}

/* ─────────────── 1. HERO ─────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div
        className="absolute inset-0 bg-bloom-soft"
        style={{ animation: "breathe 25s ease-in-out infinite" }}
      />
      <FloatingShapes />
      <Sparkles count={40} />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wider"
              style={{ animationDelay: "1.8s" }}
            >
              <Star className="size-3 fill-current text-gold" />
              India's Most Trusted Jewellery Brand
            </div>
          </Reveal>
          <h1
            className="font-display text-[clamp(2.75rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            <span className="block">
              <CharStagger text="Where Every" />
            </span>
            <span className="block">
              <CharStagger text="Piece Tells" />
            </span>
            <span className="block text-gradient-bloom">
              <CharStagger text="Your Story." italic={Array.from({ length: 11 }, (_, i) => i)} />
            </span>
          </h1>
          <Reveal delay={1400}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              10,000+ certified gold, diamond &amp; platinum designs.
              <span className="font-accent text-foreground"> Crafted for you</span>, from Mumbai to your doorstep.
            </p>
          </Reveal>
          <Reveal delay={1700}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#collections"
                className="tap-feedback group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-foreground px-8 py-4 text-base font-medium text-background shadow-xl transition-all hover:scale-[1.03] sm:w-auto"
                style={{ minHeight: 56 }}
              >
                <span className="relative z-10">Explore Collections</span>
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose to-lavender transition-transform duration-500 group-hover:translate-x-0"
                />
                <span className="relative z-10 ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="tap-feedback inline-flex items-center justify-center rounded-2xl border-2 border-foreground/20 bg-card/40 px-8 py-4 text-base font-medium backdrop-blur transition-all hover:border-foreground/40 hover:bg-card/70"
                style={{ minHeight: 56 }}
              >
                Book a Free Consultation
              </a>
            </div>
          </Reveal>
          <Reveal delay={2000}>
            <p className="mt-4 text-xs text-muted-foreground">
              Free. No pressure. Reply in minutes.
            </p>
          </Reveal>
        </div>

        {/* Floating jewellery composition */}
        <div className="relative hidden h-[520px] lg:block">
          <div
            className="absolute right-0 top-0 size-[440px] rounded-full opacity-70"
            style={{
              background: "radial-gradient(circle, var(--rose), transparent 65%)",
              animation: "float 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 size-[320px] rounded-full opacity-60"
            style={{
              background: "radial-gradient(circle, var(--lavender), transparent 65%)",
              animation: "float 14s ease-in-out infinite reverse",
            }}
          />
          <div className="absolute right-12 top-20 glass rounded-3xl p-8 shadow-2xl" style={{ animation: "float 12s ease-in-out infinite" }}>
            <Diamond className="size-12 text-rose" />
            <p className="mt-4 font-accent text-2xl">Swapna</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Diamond Edit</p>
          </div>
          <div className="absolute bottom-12 left-8 glass rounded-3xl p-6 shadow-2xl" style={{ animation: "float 9s ease-in-out infinite reverse" }}>
            <Crown className="size-10 text-gold" />
            <p className="mt-3 font-accent text-xl">Bridal Bloom</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">22kt Gold</p>
          </div>
          <div className="absolute right-20 bottom-32 glass rounded-2xl p-4 shadow-xl" style={{ animation: "float 11s ease-in-out infinite" }}>
            <Sparkle className="size-7 text-lavender" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
}

/* ─────────────── 2. TRUST MARQUEE ─────────────── */
function TrustMarquee() {
  const row1 = "10,000+ Designs ✦ BIS Hallmark Certified ✦ IGI & GIA Diamonds ✦ 30-Day Free Returns ✦ Lifetime Exchange ✦ Free Shipping Across India ✦ 200+ Stores ✦ Trusted Since 2011";
  const row2 = "★★★★★ Rated by Millions ✦ COD Available ✦ Video Call Shopping ✦ Try at Home Available ✦ 100% Refund Policy ✦ In-House Designer Collections";
  return (
    <section className="relative overflow-hidden py-6" style={{ background: "linear-gradient(90deg, var(--rose), var(--lavender), var(--rose))" }}>
      <div className="flex flex-col gap-3">
        <Marquee text={row1} />
        <Marquee text={row2} reverse />
      </div>
    </section>
  );
}
function Marquee({ text, reverse }: { text: string; reverse?: boolean }) {
  const items = Array.from({ length: 4 }, () => text);
  return (
    <div className="group flex overflow-hidden">
      <div
        className="flex shrink-0 gap-10 whitespace-nowrap pr-10 font-accent text-lg text-ink group-hover:[animation-play-state:paused] sm:text-xl"
        style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 50s linear infinite` }}
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <Sparkle className="size-4 shrink-0 text-ink/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── 3. PROBLEM ─────────────── */
function ProblemSection() {
  const pains = [
    "The gold from local stores is never certified — you never know what you're really paying for.",
    "Finding something truly unique, that feels like it was made just for you, feels impossible.",
    "Great jewellery should feel personal. Not mass-produced.",
  ];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--blush)" }}>
      <Sparkles count={12} tone="lavender" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-rose">A quiet truth</p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-tight">
              Tired of <span className="font-accent text-gradient-rose">Settling</span> for Generic Jewellery?
            </h2>
          </Reveal>
          <div className="mt-10 space-y-5">
            {pains.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-all hover:translate-x-1">
                  <span className="font-display text-3xl text-gradient-rose">{i + 1}</span>
                  <p className="text-base leading-relaxed text-foreground/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <a
              href="#promise"
              className="mt-10 inline-flex items-center gap-2 font-accent text-xl text-foreground transition-all hover:gap-4"
            >
              We built BlueStone differently. Discover how. <span>↓</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="relative aspect-square">
            <div className="absolute inset-8 rounded-full bg-bloom-soft blur-3xl opacity-70" />
            <div className="absolute inset-0 glass-strong rounded-[3rem] p-10 shadow-2xl">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Gem className="size-10 text-rose" />
                  <span className="font-accent text-sm">Since 2011</span>
                </div>
                <div className="flex justify-center">
                  <svg viewBox="0 0 200 200" className="size-48 sm:size-64">
                    <defs>
                      <linearGradient id="ringg" x1="0" x2="1">
                        <stop offset="0%" stopColor="var(--rose)" />
                        <stop offset="100%" stopColor="var(--lavender)" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="url(#ringg)" strokeWidth="3" />
                    <circle cx="100" cy="100" r="60" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="3 5" />
                    <polygon points="100,55 115,80 100,105 85,80" fill="url(#ringg)" />
                    <circle cx="100" cy="80" r="4" fill="var(--gold)" />
                  </svg>
                </div>
                <div>
                  <p className="font-accent text-2xl">"Crafted, not manufactured."</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">— The BlueStone way</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 4. COLLECTIONS ─────────────── */
function Collections() {
  const cats = [
    { name: "Gold Jewellery", sub: "Rings · Bangles · Chains · Mangalsutra", icon: Crown, tone: "var(--gold)" },
    { name: "Diamond Jewellery", sub: "Solitaires · Pendants · Earrings", icon: Diamond, tone: "var(--rose)" },
    { name: "Platinum Jewellery", sub: "Bands · Couples' rings", icon: Sparkle, tone: "var(--lavender)" },
    { name: "Gemstone Jewellery", sub: "Coloured stones · Kundan inspired", icon: Gem, tone: "var(--mint)" },
    { name: "Everyday Wear", sub: "Lightweight · Office-friendly", icon: Heart, tone: "var(--rose)" },
    { name: "Bridal Collections", sub: "Wedding sets · Engagement pieces", icon: Crown, tone: "var(--lavender)" },
  ];
  return (
    <section id="collections" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-bloom-soft opacity-30" />
      <Sparkles count={20} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">Explore</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Find Your <span className="font-accent text-gradient-bloom">Perfect Piece</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-muted-foreground">
            Six collections. Endless stories. Choose what calls to you.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="absolute -inset-px -z-10 rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: c.tone }}
                />
                <div
                  className="mb-8 flex size-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `color-mix(in oklab, ${c.tone} 35%, transparent)` }}
                >
                  <c.icon className="size-8" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.sub}</p>
                <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-all group-hover:gap-4 group-hover:text-foreground">
                  Explore <span>→</span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 5. PROMISE ─────────────── */
function Promise() {
  const tiles = [
    { icon: Award, title: "BIS Hallmark + IGI & GIA Certified", body: "Every piece verified by India's top certification bodies.", stat: "100%" },
    { icon: RefreshCw, title: "Lifetime Exchange & Buyback", body: "Your jewellery is always an investment, never a sunk cost.", stat: "Lifetime" },
    { icon: ShieldCheck, title: "30-Day Free Returns", body: "Not in love? Return it, no questions asked.", stat: "30 Days" },
    { icon: Truck, title: "Free Shipping + COD", body: "Delivered insured to your door, anywhere in India.", stat: "Free" },
  ];
  return (
    <section
      id="promise"
      className="relative overflow-hidden py-24 text-white sm:py-32"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.7 0.15 350), oklch(0.65 0.13 320) 50%, oklch(0.7 0.12 295))",
      }}
    >
      <Sparkles count={28} tone="gold" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-white/80">Our promise</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            The BlueStone Promise — <br />
            <span className="font-accent">Jewellery You Can Trust Forever</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur-xl transition-all hover:bg-white/15">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <t.icon className="size-7" />
                  </div>
                  <span className="font-display text-3xl font-bold tracking-tight">{t.stat}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold leading-tight">{t.title}</h3>
                <p className="mt-3 text-white/85">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 6. NUMBERS ─────────────── */
function Numbers() {
  const stats = [
    { v: 10000, suf: "+", label: "Designs" },
    { v: 200, suf: "+", label: "Stores nationwide" },
    { v: 30, suf: "", label: "Day free returns" },
    { v: 4.8, suf: "★", label: "Customer rating", decimal: true },
    { v: 100, suf: "%", label: "Certified jewellery" },
  ];
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32" style={{ background: "var(--ink)" }}>
      <Sparkles count={40} tone="gold" />
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, var(--rose), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">By the numbers</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight">
            A decade of <span className="font-accent text-gradient-rose">trust</span>, in numbers
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <div className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none text-gradient-bloom">
                {s.decimal ? <DecimalCounter to={s.v} /> : <Counter to={s.v} />}
                {s.suf}
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function DecimalCounter({ to }: { to: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / 2000);
      setVal(Number((p * to).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{val.toFixed(1)}</span>;
}

/* ─────────────── 7. HOW IT WORKS ─────────────── */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Browse 10,000+ designs", b: "Online or visit any of our 200+ stores across India." },
    { n: "02", t: "Customise everything", b: "Choose gold karat, colour, diamond carat, and size." },
    { n: "03", t: "Try at home or video call", b: "Free consultation with our expert jewellery consultants." },
    { n: "04", t: "Delivered, insured, free", b: "Love it or return in 30 days. No questions asked." },
  ];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">How it works</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Shop BlueStone in <span className="font-accent text-gradient-rose">4 easy steps</span>
          </h2>
        </Reveal>
        <div className="relative mt-20 grid gap-12 lg:grid-cols-4">
          <svg className="absolute left-0 top-16 hidden h-2 w-full lg:block" preserveAspectRatio="none" viewBox="0 0 1000 10">
            <path d="M0 5 L1000 5" stroke="var(--gold)" strokeWidth="2" strokeDasharray="6 8" />
          </svg>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="relative">
              <div className="relative z-10 mb-6 flex size-16 items-center justify-center rounded-full glass-strong font-display text-2xl font-bold text-gradient-rose shadow-xl">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 8. LOOKBOOK ─────────────── */
function Lookbook() {
  const items = [
    { name: "Eternal Gold", desc: "Daily wear, lightweight elegance for the modern Indian woman.", icon: Crown, tone: "var(--gold)", h: "lg:h-[520px]" },
    { name: "Swapna", desc: "Close-set diamonds in 22kt gold, dreamed and crafted in India.", icon: Diamond, tone: "var(--rose)", h: "lg:h-[400px]" },
    { name: "Bridal Bloom", desc: "Wedding and engagement sets that bloom with your love story.", icon: Heart, tone: "var(--lavender)", h: "lg:h-[460px]" },
    { name: "Fusion Edit", desc: "East-meets-West contemporary designs for the global Indian.", icon: Sparkle, tone: "var(--mint)", h: "lg:h-[420px]" },
    { name: "Men's Gold", desc: "Rings, chains and bracelets, crafted for him.", icon: Gem, tone: "var(--gold)", h: "lg:h-[440px]" },
    { name: "Kids' Jewellery", desc: "Safe, pure and beautifully crafted for the little ones.", icon: Baby, tone: "var(--rose)", h: "lg:h-[400px]" },
  ];
  return (
    <section id="lookbook" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose">Lookbook</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Collections that <span className="font-accent text-gradient-bloom">move with your life</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 80}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${it.h}`}
                style={{
                  background: `linear-gradient(160deg, color-mix(in oklab, ${it.tone} 60%, white), color-mix(in oklab, ${it.tone} 25%, white))`,
                }}
              >
                <div className="dark:opacity-90" style={{ background: "transparent" }}>
                  <it.icon className="size-10 text-ink/70" />
                </div>
                <div className="absolute -bottom-10 -right-10 size-48 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-125" style={{ background: it.tone }} />
                <div className="relative">
                  <h3 className="font-accent text-3xl font-bold text-ink">{it.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ink/75">{it.desc}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-all group-hover:gap-4">
                    Shop collection <span>→</span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 9. TESTIMONIALS ─────────────── */
function Testimonials() {
  const cards = [
    { name: "Priya R.", city: "Bengaluru", text: "The diamond solitaire I got is breathtaking. Better than I'd seen in any boutique." },
    { name: "Aanya M.", city: "Delhi", text: "Try at Home is genius. I tried 5 designs and kept the one that felt like me." },
    { name: "Sneha K.", city: "Hyderabad", text: "Quality, finish, packaging — everything felt premium. Worth every rupee." },
  ];
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--blush)" }}>
      <Sparkles count={16} tone="lavender" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">Loved by millions</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Millions of stories. <br /><span className="font-accent text-gradient-bloom">Each one sparkles.</span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="glass-strong relative rounded-3xl p-10 text-center shadow-xl sm:p-16">
              <Sparkle className="absolute left-8 top-8 size-6 text-rose" />
              <Sparkle className="absolute right-8 bottom-8 size-6 text-lavender" />
              <p className="font-accent text-2xl leading-relaxed sm:text-4xl">
                "On Valentine's Day, my husband gifted me a necklace from BlueStone, and I haven't taken it off even once. Everyone asks me where it's from."
              </p>
              <div className="mt-8 flex items-center justify-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Mumbai · Verified Buyer
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="h-full rounded-3xl glass p-7">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed">"{c.text}"</p>
                <p className="mt-6 text-sm font-medium">{c.name} <span className="text-muted-foreground">· {c.city}</span></p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 text-center font-display text-2xl">
            Join <span className="text-gradient-rose font-extrabold">10 Million+</span> happy BlueStone customers
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 10. TRY AT HOME ─────────────── */
function TryAtHome() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-bloom-soft" style={{ animation: "breathe 30s ease-in-out infinite" }} />
      <Sparkles count={20} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">Unique to BlueStone</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Jewellery shopping, <span className="font-accent text-gradient-bloom">reimagined for you</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-10">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-rose opacity-30 blur-3xl" />
              <Home className="size-12 text-rose" />
              <h3 className="mt-8 font-display text-3xl font-bold">Try at Home</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Pick up to 5 designs. We deliver to your door. Try them on. Keep what you love. Return the rest — <span className="font-accent">free</span>.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="tap-feedback mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-foreground px-6 py-4 font-medium text-background transition hover:scale-[1.02] sm:w-auto" style={{ minHeight: 56 }}>
                Book Try at Home →
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-10">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-lavender opacity-40 blur-3xl" />
              <Video className="size-12 text-lavender" />
              <h3 className="mt-8 font-display text-3xl font-bold">Video Call Consultation</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Connect with our jewellery experts live. Get personalised guidance. Book a <span className="font-accent">free 15-minute session</span>.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="tap-feedback mt-8 inline-flex w-full items-center justify-center rounded-2xl border-2 border-foreground/30 px-6 py-4 font-medium transition hover:bg-foreground hover:text-background sm:w-auto" style={{ minHeight: 56 }}>
                Schedule Video Call →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 11. STORY ─────────────── */
function Story() {
  const values = [
    { i: ShieldCheck, t: "Purity First", b: "Every piece BIS Hallmark certified. No exceptions." },
    { i: Sparkle, t: "Design Forward", b: "Monthly new collections from our in-house design team." },
    { i: Heart, t: "You First", b: "30-day returns, lifetime exchange. No questions asked." },
  ];
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--cream)" }}>
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose">Our story</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            We started BlueStone because <span className="font-accent text-gradient-rose">you deserve better</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Founded in 2011, BlueStone was born from a simple belief — every Indian woman deserves access to certified, beautifully designed jewellery at honest prices, without stepping into a store that makes her feel judged.
            </p>
            <p>
              Today, <span className="font-accent text-gradient-rose">10,000+ designs and 200+ stores later</span>, that belief hasn't changed.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card/50 p-5 backdrop-blur">
                <v.i className="size-7 text-rose" />
                <p className="mt-4 font-display text-lg font-bold">{v.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-[3rem] bg-bloom-soft" style={{ animation: "breathe 20s ease-in-out infinite" }} />
            <div className="absolute inset-12 glass-strong flex flex-col items-center justify-center rounded-[2.5rem] p-10 text-center shadow-2xl">
              <svg viewBox="0 0 200 200" className="size-40">
                <defs>
                  <linearGradient id="storyg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--rose)" />
                    <stop offset="50%" stopColor="var(--lavender)" />
                    <stop offset="100%" stopColor="var(--mint)" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#storyg)" strokeWidth="3" />
                <polygon points="100,40 130,80 100,120 70,80" fill="url(#storyg)" />
                <circle cx="100" cy="80" r="5" fill="var(--gold)" />
              </svg>
              <p className="mt-6 font-accent text-2xl">"Honest prices.<br />Heartfelt craft."</p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Est. 2011 · Mumbai</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 12. FAQ ─────────────── */
function FAQ() {
  const faqs = [
    ["Is BlueStone jewellery certified?", "Yes — all our gold is BIS Hallmark certified, and all diamonds are IGI & GIA certified. You get original certificates with every order."],
    ["Can I return jewellery if I don't like it?", "Absolutely. We offer a 30-day free return policy with a 100% refund. No questions asked."],
    ["Do you offer EMI?", "Yes — easy EMI on all major credit cards, debit cards, and payment apps."],
    ["Can I customise a design?", "Yes — choose your gold karat, colour (yellow/white/rose), diamond carat, and size. Our team will guide you."],
    ["Is COD available?", "Yes — Cash on Delivery is available across India for most orders."],
    ["Are your products available offline too?", "Yes — visit any of our 200+ BlueStone stores across India."],
    ["How does Try at Home work?", "Pick up to 5 designs. We deliver them to your door. Try them on at home. Keep what you love. Return the rest — completely free."],
    ["How do I get started?", "The fastest way is to send us a WhatsApp message — our team will guide you within minutes."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "color-mix(in oklab, var(--mint) 25%, white)" }}>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">FAQ</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            Your questions, <span className="font-accent text-gradient-rose">answered</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl glass">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="tap-feedback flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold sm:text-xl">{q}</span>
                    <ChevronDown className={`size-5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className="grid transition-all duration-500"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-foreground/85">
                        {a}
                        {i === faqs.length - 1 && (
                          <>
                            {" "}
                            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-accent text-rose underline-offset-4 hover:underline">
                              Message us on WhatsApp →
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 13. URGENCY ─────────────── */
function Urgency() {
  const [time, setTime] = useState(() => endOfWeekDelta());
  useEffect(() => {
    const i = setInterval(() => setTime(endOfWeekDelta()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <section
      className="relative overflow-hidden py-24 text-white sm:py-32"
      style={{ background: "linear-gradient(135deg, oklch(0.7 0.16 350), oklch(0.6 0.16 320), oklch(0.65 0.13 295))" }}
    >
      <Sparkles count={40} tone="gold" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/85">Limited offer</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-tight">
            Get <span className="font-accent">10% Off</span> Your First<br />BlueStone Order
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Use code <span className="rounded-md bg-white/20 px-3 py-1 font-mono">FIRST10</span> at checkout. Valid this week only.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-6">
            {(["Days", "Hours", "Mins", "Secs"] as const).map((label, idx) => {
              const val = [time.d, time.h, time.m, time.s][idx];
              return (
                <div key={label} className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl sm:p-6">
                  <div className="font-display text-3xl font-extrabold tabular-nums sm:text-5xl">
                    {String(val).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/75 sm:text-xs">{label}</div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="tap-feedback mt-12 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-5 text-lg font-semibold text-ink transition hover:scale-[1.02] sm:w-auto"
            style={{ minHeight: 56 }}
          >
            <MessageCircle className="size-5" />
            Claim Your Offer on WhatsApp
          </a>
          <p className="mt-3 text-sm italic text-white/80">No commitment. Just beautiful jewellery.</p>
        </Reveal>
      </div>
    </section>
  );
}
function endOfWeekDelta() {
  const now = new Date();
  const end = new Date(now);
  const dow = now.getDay();
  const daysToSun = (7 - dow) % 7 || 7;
  end.setDate(now.getDate() + daysToSun);
  end.setHours(23, 59, 59, 999);
  let diff = Math.max(0, end.getTime() - now.getTime());
  const d = Math.floor(diff / 86400000); diff -= d * 86400000;
  const h = Math.floor(diff / 3600000); diff -= h * 3600000;
  const m = Math.floor(diff / 60000); diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  return { d, h, m, s };
}

/* ─────────────── 14. FINAL CTA ─────────────── */
function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-white sm:py-32" style={{ background: "var(--ink)" }}>
      <Sparkles count={30} tone="gold" />
      <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 70% 30%, var(--rose), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-rose">Visit us</p>
          <h2 className="mt-4 text-center font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-tight">
            BlueStone Mumbai — <br /><span className="font-accent text-gradient-rose">Your perfect piece is waiting</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="tap-feedback flex h-full flex-col rounded-3xl p-8 transition hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, var(--rose), oklch(0.72 0.16 340))" }}>
              <MessageCircle className="size-9 text-ink" />
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">WhatsApp Us</h3>
              <p className="mt-2 text-ink/85">The fastest way to reach our team. Reply in minutes.</p>
              <span className="mt-auto pt-6 text-ink">Chat now →</span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a href={PHONE} className="tap-feedback flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10">
              <Phone className="size-9" />
              <h3 className="mt-6 font-display text-2xl font-bold">Call us</h3>
              <p className="mt-2 text-white/80">1800-419-0066 — toll-free, 7 days a week.</p>
              <span className="mt-auto pt-6">Call now →</span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <a href={MAPS} target="_blank" rel="noreferrer" className="tap-feedback flex h-full flex-col rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10">
              <MapPin className="size-9" />
              <h3 className="mt-6 font-display text-2xl font-bold">Find a store</h3>
              <p className="mt-2 text-white/80">200+ stores across India. Visit your nearest one.</p>
              <span className="mt-auto pt-6">Open map →</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/15">
              <iframe
                title="BlueStone Mumbai"
                src="https://www.google.com/maps?q=BlueStone%20Mumbai&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex h-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="font-display text-2xl font-bold">Send us a message</h3>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/70">Your name</label>
                <input required className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose" placeholder="Priya Sharma" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/70">Phone</label>
                <input required type="tel" className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose" placeholder="+91 ••••• •••••" />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/70">What are you looking for?</label>
                <textarea rows={3} className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 outline-none transition focus:border-rose" placeholder="A diamond pendant for my anniversary..." />
              </div>
              <button
                type="submit"
                className="tap-feedback inline-flex items-center justify-center gap-2 rounded-2xl bg-rose px-6 py-4 font-medium text-ink transition hover:scale-[1.02]"
                style={{ minHeight: 56 }}
              >
                {submitted ? <><Check className="size-5" /> We'll be in touch</> : "Send message"}
              </button>
              <p className="text-center text-xs text-white/60">Free. No pressure. Reply in minutes.</p>
            </form>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/80">
            {["BIS Hallmark", "IGI Certified", "30-Day Returns", "Free Shipping"].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-rose" /> {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 15. CLOSING + FOOTER ─────────────── */
function ClosingTicker() {
  const text = "BlueStone Jewellery ✦ Crafted With Love ✦ Certified Always ✦ Delivered Free ✦ 10,000+ Designs ✦ Your Story Starts Here ✦ India's Most Loved Jewellery Brand";
  return (
    <section className="overflow-hidden py-5" style={{ background: "var(--rose)" }}>
      <Marquee text={text} reverse />
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card pt-16 pb-10">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--rose), var(--lavender), var(--mint), transparent)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-extrabold text-gradient-bloom">BlueStone</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">Jewellery</p>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            India's most loved fine jewellery brand. Every piece tells your story.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="tap-feedback flex size-10 items-center justify-center rounded-full border border-border transition hover:border-rose hover:text-rose">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Quick links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[["Collections", "#collections"], ["Promise", "#promise"], ["Lookbook", "#lookbook"], ["Story", "#story"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h} className="text-muted-foreground transition hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Collections</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Gold", "Diamond", "Platinum", "Gemstone", "Bridal", "Everyday"].map((c) => (
              <li key={c}><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Contact</h4>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <li><a href={PHONE} className="hover:text-foreground">1800-419-0066</a></li>
            <li><a href="mailto:cs@bluestone.com" className="hover:text-foreground">cs@bluestone.com</a></li>
            <li><a href={MAPS} target="_blank" rel="noreferrer" className="hover:text-foreground">Store locator →</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-5 pt-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <p>© 2025 BlueStone Jewellery. All rights reserved.</p>
        <p>Website by <a href="#" className="transition hover:text-rose">Pixorra</a></p>
      </div>
    </footer>
  );
}
