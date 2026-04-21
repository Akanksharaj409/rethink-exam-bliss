import { useEffect, useState } from "react";

const exams = [
  { name: "JEE Main Session 2", date: "2026-04-02" },
  { name: "NEET UG", date: "2026-05-03" },
  { name: "CUET UG", date: "2026-05-15" },
  { name: "CBSE Class 12", date: "2026-02-15" },
];

function daysUntil(date: string) {
  const diff = new Date(date).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function CountdownBar() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-b-2 border-ink bg-mustard/40">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 py-2.5">
        <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="h-2 w-2 animate-blink rounded-full bg-vermillion" />
          Countdown
        </div>
        <div className="flex items-center gap-6" key={tick}>
          {exams.map((e) => (
            <div key={e.name} className="flex shrink-0 items-center gap-2 text-sm">
              <span className="font-mono text-lg font-bold text-vermillion tabular-nums">
                {String(daysUntil(e.date)).padStart(3, "0")}d
              </span>
              <span className="font-medium">{e.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
