import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import ImageFrame from "@/components/ImageFrame";
import { ArrowRightIcon } from "@/components/icons";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

/** Oversized editorial deck card — designed to be stacked with position:sticky. */
export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const heroImage = study.images?.[0] ?? { alt: study.title, aspect: "wide" as const };

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-border-strong md:p-12"
    >
      {/* brand glow, strengthens on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(90% 90% at 100% 0%, ${study.brand.accentDim} 0%, transparent 55%)`,
        }}
      />
      {/* giant index watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-6 font-display text-[9rem] italic leading-none text-fg/[0.05] md:text-[13rem]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
            {study.company} · {study.timeline}
          </p>
          <h3 className="mt-4 flex items-baseline gap-3 font-display text-3xl tracking-tight text-fg md:text-5xl">
            {study.title}
            <ArrowRightIcon className="h-6 w-6 shrink-0 self-center text-fg-muted transition-transform duration-300 group-hover:translate-x-1.5" />
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-fg-secondary">
            {study.cardCopy}
          </p>
          <div className="mt-8 flex gap-10">
            {study.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p
                  className="font-display text-2xl italic md:text-3xl"
                  style={{ color: study.brand.accent }}
                >
                  {m.value}
                </p>
                <p className="mt-1 max-w-28 text-xs leading-snug text-fg-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
            {study.tags.join(" · ")}
          </p>
        </div>
        <ImageFrame
          image={heroImage}
          gradient={study.brand.gradient}
          showCaption={false}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
    </Link>
  );
}
