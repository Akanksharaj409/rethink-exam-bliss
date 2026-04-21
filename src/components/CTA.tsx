export function CTA() {
  return (
    <section className="border-b-2 border-ink bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-mustard">§ 06 — Last word</div>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight">
          Stop hoarding tabs.<br />
          <span className="italic font-light text-mustard">Start</span> revising.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-paper/70">
          Free to start. No credit card. No "premium concept" trap. The first 30 days unlock everything.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="group flex items-center gap-3 border-2 border-paper bg-vermillion px-8 py-4 font-semibold text-paper shadow-[6px_6px_0_0_oklch(0.78_0.15_85)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
            Create my study plan
            <span className="font-mono">→</span>
          </button>
          <button className="border-2 border-paper/40 px-8 py-4 font-semibold text-paper transition-colors hover:bg-paper hover:text-ink">
            Browse without signing up
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 font-mono text-[11px] uppercase tracking-widest text-paper/50">
          <span>· no ads ·</span>
          <span>· no popups ·</span>
          <span>· no app downloads ·</span>
        </div>
      </div>
    </section>
  );
}
