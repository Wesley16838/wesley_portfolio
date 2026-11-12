import { ArrowRightIcon } from "@/components/icons";

/** Ordered pipeline stages. Wraps instead of scrolling, so nothing is hidden. */
export default function PipelineDiagram({ stages }: { stages: string[] }) {
  return (
    <div className="tile p-5 md:p-6">
      <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-y-3">
        {stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span className="rounded-xl bg-surface-2 px-3 py-2 font-mono text-xs text-fg">
              <span className="text-fg-muted">{i + 1}.</span> {stage}
            </span>
            {i < stages.length - 1 && (
              <ArrowRightIcon className="hidden h-4 w-4 shrink-0 text-fg-muted md:block" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
