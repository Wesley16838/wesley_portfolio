type TickerEntry = {
  system: string;
  stat: string;
};

const entries: TickerEntry[] = [
  { system: "Blitz Code", stat: "6K+ employees" },
  { system: "Tap NFC", stat: "global stages" },
  { system: "Youmi", stat: "0→1 AI pipeline" },
  { system: "VPDS", stat: "4 frameworks, one system" },
  { system: "Armoury Crate", stat: "millions of users" },
  { system: "Patent", stat: "inclusive design" },
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {entries.map((entry) => (
        <span
          key={entry.system}
          className="flex items-center whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em]"
        >
          <span className="text-fg">{entry.system}</span>
          <span className="px-2 text-fg-muted">—</span>
          <span className="text-fg-secondary">{entry.stat}</span>
          <span aria-hidden="true" className="px-6 text-accent">
            ▸
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Slow data ticker — the seam between the ivory spread and the charcoal
 * gallery. Airport-departures energy, not a carnival marquee.
 */
export default function SystemTicker() {
  return (
    <div className="overflow-hidden border-b border-border py-3.5">
      <span className="sr-only">
        Blitz Code: 6K+ employees. Tap NFC: global stages. Youmi: zero-to-one
        AI pipeline. VPDS: four frameworks, one system. Armoury Crate:
        millions of users. Patent: inclusive design.
      </span>
      <div aria-hidden="true" className="flex w-max animate-[marquee_70s_linear_infinite]">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
