export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-6xl font-black leading-none tracking-tight">
              examwali<span className="text-vermillion">.</span>site
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A library disguised as a website. Built in Bengaluru for every student
              who deserves better than coaching-mafia PDFs.
            </p>
          </div>

          {[
            { h: "Library", l: ["NEET", "JEE", "CUET", "CBSE", "UPSC"] },
            { h: "Tools", l: ["Mock tests", "PYQs", "Calendar", "Streaks"] },
            { h: "Company", l: ["About", "Careers", "Press kit", "Contact"] },
          ].map((col) => (
            <div key={col.h} className="md:col-span-2">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{col.h}</div>
              <ul className="space-y-2 text-sm font-medium">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="hover:underline-squiggle">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Find us</div>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#" className="hover:underline-squiggle">IG</a></li>
              <li><a href="#" className="hover:underline-squiggle">YT</a></li>
              <li><a href="#" className="hover:underline-squiggle">X</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t-2 border-ink pt-6 font-mono text-[11px] uppercase tracking-widest md:flex-row md:items-center md:justify-between">
          <span>© 2026 ExamWaliSite Press · Made on a school night</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-forest" /> All systems go
          </span>
        </div>
      </div>
    </footer>
  );
}
