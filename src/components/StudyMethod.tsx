const steps = [
  {
    no: "I.",
    title: "Pick your exam",
    body: "Tell us what you're cracking and when. We map the syllabus to your timeline.",
  },
  {
    no: "II.",
    title: "Get a real plan",
    body: "Not a generic PDF — a week-by-week study plan personalised to your weak spots.",
  },
  {
    no: "III.",
    title: "Study with the source",
    body: "Curated notes, NCERT-aligned, no SEO-spun nonsense. Plus annotated PYQs.",
  },
  {
    no: "IV.",
    title: "Mock. Revise. Repeat.",
    body: "Adaptive mocks find the gaps, your dashboard tracks the streak. Walk in calm.",
  },
];

export function StudyMethod() {
  return (
    <section className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-vermillion">§ 04 — The method</div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              How students<br />
              <span className="italic font-light">actually</span> use us.
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5 md:text-lg">
            Most exam sites optimise for ad impressions. We optimise for the four months
            before your paper — the ones that actually decide everything.
          </p>
        </div>

        <ol className="grid gap-px border-2 border-ink bg-ink md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.no} className="group relative bg-paper p-8 transition-colors hover:bg-mustard/30">
              <div className="font-display text-7xl font-black leading-none text-vermillion">{s.no}</div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 font-mono text-2xl text-ink/30 lg:block">→</div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
