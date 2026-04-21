import { BookOpen, FileText, Brain, Trophy, Calendar, Highlighter } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Notes that don't waste your time",
    body: "Concept-first, exam-tagged, and short enough to revise the night before. Written by people who actually cracked the paper.",
    span: "lg:col-span-2",
    accent: "bg-vermillion",
  },
  {
    icon: FileText,
    title: "PYQs · last 15 yrs",
    body: "Sorted by chapter, difficulty and frequency.",
    span: "",
    accent: "bg-mustard",
  },
  {
    icon: Brain,
    title: "Adaptive mocks",
    body: "Tests that get harder where you're weakest. Like a tutor with a stopwatch.",
    span: "",
    accent: "bg-indigo-deep",
  },
  {
    icon: Highlighter,
    title: "Toppers' annotations",
    body: "See the exact margin notes AIR-100s scribbled in their NCERTs. Cult-favourite.",
    span: "lg:col-span-2",
    accent: "bg-forest",
  },
  {
    icon: Trophy,
    title: "Streaks & rituals",
    body: "Build a 30-day study habit. Tiny rewards, zero gamification cringe.",
    span: "",
    accent: "bg-vermillion",
  },
  {
    icon: Calendar,
    title: "Exam calendar",
    body: "One source of truth — dates, registration windows, admit cards.",
    span: "lg:col-span-2",
    accent: "bg-ink",
  },
];

export function ResourceGrid() {
  return (
    <section className="bg-secondary/40 border-b-2 border-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start gap-4">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">§ 03 — What's inside</div>
          <h2 className="max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Six tools. <span className="italic font-light">Zero</span> filler.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            const isDark = it.accent === "bg-ink" || it.accent === "bg-indigo-deep" || it.accent === "bg-forest" || it.accent === "bg-vermillion";
            return (
              <article
                key={i}
                className={`group relative border-2 border-ink bg-card p-6 transition-all hover:shadow-brutal ${it.span}`}
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center border-2 border-ink ${it.accent} ${isDark ? "text-paper" : "text-ink"}`}>
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  · 0{i + 1} / 06
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
