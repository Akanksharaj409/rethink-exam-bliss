type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 border-ink bg-ink text-paper ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-3 text-sm font-medium tracking-wider uppercase">
            <span className="font-mono text-primary">★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
