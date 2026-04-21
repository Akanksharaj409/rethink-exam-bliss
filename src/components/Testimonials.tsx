const quotes = [
  {
    body: "I cancelled my coaching subscription after a month here. The annotated PYQs alone are worth ten times the price.",
    name: "Rohan M.",
    meta: "JEE Adv. '25 · AIR 1,204",
    rotate: "-rotate-1",
    bg: "bg-mustard",
  },
  {
    body: "Found a 3-page note on Coordination Compounds that replaced 6 hours of YouTube. Saving brain cells.",
    name: "Pari D.",
    meta: "NEET '26 aspirant",
    rotate: "rotate-2",
    bg: "bg-paper",
  },
  {
    body: "The countdown bar on top is genuinely scary in a good way. It keeps me honest.",
    name: "Karthik S.",
    meta: "CUET '26 · DU aspirant",
    rotate: "-rotate-2",
    bg: "bg-forest text-paper",
  },
  {
    body: "Finally, no popup asking me to download an app every five seconds. Refreshing.",
    name: "Meher J.",
    meta: "Class 12 · CBSE",
    rotate: "rotate-1",
    bg: "bg-paper",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-vermillion">§ 05 — Field reports</div>
          <h2 className="max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
            What students <span className="italic font-light">say</span> when no one's asking.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className={`${q.bg} ${q.rotate} border-2 border-ink p-6 shadow-brutal-sm transition-transform hover:rotate-0 hover:scale-[1.03]`}
            >
              <div className="font-display text-5xl leading-none opacity-30">"</div>
              <blockquote className="-mt-3 font-display text-base leading-snug">
                {q.body}
              </blockquote>
              <figcaption className="mt-5 border-t-2 border-current/30 pt-3 font-mono text-[10px] uppercase tracking-widest">
                <div className="font-bold not-italic">{q.name}</div>
                <div className="opacity-70">{q.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
