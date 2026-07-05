import { ArrowRightIcon } from "@/components/icons";

type PipelineDiagramProps = {
  stages: string[];
  accent: string;
};

export default function PipelineDiagram({ stages, accent }: PipelineDiagramProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface p-6 md:p-8">
      <ol className="flex min-w-max flex-col gap-2 md:min-w-0 md:flex-row md:flex-wrap md:items-center md:gap-y-4">
        {stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span
              className="whitespace-nowrap rounded-lg border bg-surface-2 px-3 py-2 font-mono text-xs text-fg"
              style={{ borderColor: `color-mix(in srgb, ${accent} 40%, transparent)` }}
            >
              {stage}
            </span>
            {i < stages.length - 1 && (
              <ArrowRightIcon className="h-4 w-4 shrink-0 rotate-90 text-fg-muted md:mr-2 md:rotate-0" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
