import { ArrowUpRight } from "lucide-react";

const dossiers = [
  {
    code: "01",
    name: "NEET",
    full: "National Eligibility cum Entrance Test",
    aspirants: "24L+",
    color: "bg-vermillion",
    fg: "text-paper",
    subjects: ["Physics", "Chemistry", "Biology"],
    pieces: "1,240 notes · 86 mocks",
  },
  {
    code: "02",
    name: "JEE",
    full: "Joint Entrance Examination — Main & Advanced",
    aspirants: "13L+",
    color: "bg-indigo-deep",
    fg: "text-paper",
    subjects: ["Maths", "Physics", "Chemistry"],
    pieces: "1,580 notes · 112 mocks",
  },
  {
    code: "03",
    name: "CUET",
    full: "Common University Entrance Test",
    aspirants: "15L+",
    color: "bg-mustard",
    fg: "text-ink",
    subjects: ["Domain", "Language", "GT"],
    pieces: "920 notes · 64 mocks",
  },
  {
    code: "04",
    name: "CBSE",
    full: "Boards · Class 10 & 12 · All streams",
    aspirants: "38L+",
    color: "bg-forest",
    fg: "text-paper",
    subjects: ["Sci", "Com", "Hum"],
    pieces: "2,100 notes · sample papers",
  },
];

export function ExamDossiers() {
  return (
    <section className="border-b-2 border-ink bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-vermillion">§ 02 — The Shelves</div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Every exam,<br />
              <span className="italic font-light">its own</span> dossier.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-right md:text-lg">
            We don't dump 10,000 PDFs and call it a "library". Each exam is curated like a case file —
            with what to study, when, and from whom.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {dossiers.map((d) => (
            <a
              key={d.code}
              href="#"
              className="group relative block border-2 border-ink bg-card transition-all hover:-translate-y-1 hover:shadow-brutal"
            >
              <div className={`flex items-center justify-between border-b-2 border-ink ${d.color} ${d.fg} px-4 py-3`}>
                <span className="font-mono text-[11px] uppercase tracking-widest opacity-80">File · {d.code}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </div>
              <div className="p-5">
                <div className="font-display text-5xl font-black leading-none">{d.name}</div>
                <div className="mt-2 text-xs leading-snug text-muted-foreground">{d.full}</div>

                <div className="my-5 h-px w-full border-t border-dashed border-ink/30" />

                <div className="space-y-2 font-mono text-[11px] uppercase tracking-wider">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Aspirants/yr</span>
                    <span className="font-bold">{d.aspirants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subjects</span>
                    <span className="font-bold">{d.subjects.join(" · ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">In stock</span>
                    <span className="font-bold text-forest">{d.pieces}</span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-ink px-4 py-2.5 text-xs font-semibold">
                Open the dossier <span className="float-right opacity-50 group-hover:opacity-100">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
