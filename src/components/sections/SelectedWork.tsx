import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { ArrowRightIcon } from "@/components/icons";

const flagship = caseStudies.slice(0, 3);
const more = caseStudies.slice(3);

export default function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="(01) — Selected Work"
      heading={
        <>
          Shipped <em>systems</em>
        </>
      }
    >
      {/* sticky stacking deck — cards pile up as you scroll (md+) */}
      <div className="flex flex-col gap-8">
        {flagship.map((study, i) => (
          <div
            key={study.slug}
            className="md:sticky"
            style={{ top: `${88 + i * 16}px` }}
          >
            <Reveal>
              <CaseStudyCard study={study} index={i} />
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal>
        <div className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
            More systems
          </p>
          <ul className="mt-6 border-t border-border">
            {more.map((study, i) => (
              <li key={study.slug} className="border-b border-border">
                <Link
                  href={`/work/${study.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-6 transition-transform duration-200 hover:translate-x-1"
                >
                  <span className="flex min-w-0 flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-display text-lg italic text-fg-muted">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl tracking-tight text-fg md:text-3xl">
                      {study.title}
                    </span>
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted md:inline">
                      {study.company} · {study.timeline}
                    </span>
                  </span>
                  <ArrowRightIcon className="h-5 w-5 shrink-0 self-center text-fg-muted transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
