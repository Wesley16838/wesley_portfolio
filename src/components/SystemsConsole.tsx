import Link from "next/link";
import { consoleSystems, type ConsoleSystem } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

const dotColor: Record<ConsoleSystem["color"], string> = {
  "visa-blue": "bg-visa-blue",
  "visa-gold": "bg-visa-gold",
  "youmi-teal": "bg-youmi-teal",
  accent: "bg-accent",
};

function IndexRow({ system }: { system: ConsoleSystem }) {
  const inner = (
    <>
      <span className="w-10 shrink-0 font-display text-xl italic text-accent">
        {system.number}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
          {system.label}
        </span>
        <span className="flex items-center gap-2 text-sm font-medium text-fg">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColor[system.color]}`}
          />
          {system.name}
        </span>
        {system.detail && (
          <span className="font-mono text-xs text-fg-secondary">
            {system.detail}
          </span>
        )}
      </span>
      {system.href && (
        <ArrowUpRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-fg-muted opacity-0 transition-all duration-200 group-hover/row:translate-x-0.5 group-hover/row:opacity-100" />
      )}
    </>
  );

  const rowClass = "flex items-start py-4 transition-transform duration-200";

  if (system.href) {
    return (
      <Link
        href={system.href}
        className={`${rowClass} group/row hover:translate-x-1`}
      >
        {inner}
      </Link>
    );
  }
  return <div className={rowClass}>{inner}</div>;
}

/** Editorial index card — a data caption for the systems Wesley ships. */
export default function SystemsConsole() {
  return (
    <aside className="rounded-2xl border border-border bg-surface p-6 md:p-7">
      <header className="flex items-center justify-between border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
        <span>Wesley.Systems / Index</span>
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent"
          />
          Shipping
        </span>
      </header>
      <ol className="divide-y divide-border">
        {consoleSystems.map((system) => (
          <li key={system.number}>
            <IndexRow system={system} />
          </li>
        ))}
      </ol>
    </aside>
  );
}
