import { Link } from "@tanstack/react-router";
import { Search, Menu } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-vermillion text-paper font-display text-xl font-black shadow-brutal-sm transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
            E
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-black tracking-tight">examwali<span className="text-vermillion">.</span>site</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">est. 2026 — for the ones who study</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {["Library", "Mock Tests", "Toppers' Notes", "Calendar", "Pricing"].map((item) => (
            <a key={item} href="#" className="px-3 py-2 text-sm font-medium hover:underline-squiggle">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden h-10 w-10 items-center justify-center border-2 border-ink bg-paper hover:bg-secondary md:flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button className="hidden border-2 border-ink bg-paper px-4 py-2 text-sm font-semibold hover:bg-secondary md:block">
            Sign in
          </button>
          <button className="border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper shadow-brutal-vermillion transition-all hover:-translate-x-0.5 hover:-translate-y-0.5">
            Start free →
          </button>
          <button className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper lg:hidden" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
