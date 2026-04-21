import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const exams = ["NEET", "JEE", "CUET", "CBSE", "UPSC", "Class 10", "Class 12"];

export function Hero() {
  const [active, setActive] = useState("NEET");

  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      {/* Newspaper masthead bar */}
      <div className="border-b border-ink/40 bg-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Vol. XII · Issue 04</span>
          <span className="hidden md:inline">A library disguised as a website</span>
          <span>{new Date().toLocaleDateString("en-IN", { weekday: "long", month: "long", day: "numeric" })}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — display headline */}
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-ink" />
              <span className="font-mono text-xs uppercase tracking-[0.3em]">The Study Press</span>
            </div>

            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.88] tracking-[-0.03em]">
              Pass the exam.<br />
              <span className="italic font-light">Not just</span> the
              <span className="relative inline-block px-3">
                <span className="relative z-10 text-paper">syllabus.</span>
                <span className="absolute inset-0 -rotate-1 bg-vermillion" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A handpicked vault of notes, mock tests, PYQs and toppers' annotations —
              organised the way real students actually study. No fluff. No paywalled basics.
            </p>

            {/* Smart filter */}
            <div className="mt-10 border-2 border-ink bg-card shadow-brutal">
              <div className="flex flex-wrap items-center gap-1 border-b-2 border-ink px-3 py-2">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">I'm preparing for →</span>
                {exams.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setActive(ex)}
                    className={`px-3 py-1 text-xs font-semibold transition-colors ${
                      active === ex
                        ? "bg-ink text-paper"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {ex}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 p-3">
                <input
                  type="text"
                  placeholder={`Search ${active} notes, PYQs, mock tests…`}
                  className="flex-1 bg-transparent px-2 py-3 text-base outline-none placeholder:text-muted-foreground"
                />
                <button className="group flex items-center gap-2 border-2 border-ink bg-vermillion px-5 py-3 font-semibold text-paper transition-transform hover:-translate-y-0.5">
                  Find it
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-dashed border-ink/30 px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
                <Sparkles className="h-3 w-3" />
                <span>Try:</span>
                <button className="hover:text-ink hover:underline">"organic chem in 30 days"</button>
                <span>·</span>
                <button className="hover:text-ink hover:underline">"jee 2024 paper 1"</button>
                <span>·</span>
                <button className="hover:text-ink hover:underline">"ncert physics class 12"</button>
              </div>
            </div>
          </div>

          {/* Right — pull-quote / index card */}
          <aside className="relative lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              {/* Stat card */}
              <div className="border-2 border-ink bg-forest p-6 text-paper shadow-brutal">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">Today, on the platform</div>
                <div className="mt-3 font-display text-6xl font-black leading-none tabular-nums">12,847</div>
                <div className="mt-2 text-sm">students revising · right now</div>
                <div className="mt-5 flex -space-x-2">
                  {[
                    "oklch(0.62 0.21 30)",
                    "oklch(0.78 0.15 85)",
                    "oklch(0.32 0.12 270)",
                    "oklch(0.96 0.018 85)",
                  ].map((c, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-ink" style={{ background: c }} />
                  ))}
                  <div className="flex h-8 items-center rounded-full border-2 border-ink bg-paper px-2 text-xs font-bold text-ink">+12k</div>
                </div>
              </div>

              {/* Pull quote */}
              <figure className="relative border-l-4 border-vermillion pl-5">
                <div className="font-display text-7xl leading-none text-vermillion">"</div>
                <blockquote className="-mt-8 font-display text-xl italic leading-snug">
                  Finally a site that doesn't treat us like clickbait.
                </blockquote>
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  — Aanya R., AIR 412 NEET '25
                </figcaption>
              </figure>
            </div>

            {/* Decorative stamp */}
            <div className="absolute -right-2 -top-8 hidden rotate-12 lg:block">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-[3px] border-vermillion text-vermillion">
                <span className="font-mono text-[9px] tracking-widest">VERIFIED BY</span>
                <span className="font-display text-lg font-black leading-none">Toppers</span>
                <span className="font-mono text-[9px] tracking-widest">·2026·</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
