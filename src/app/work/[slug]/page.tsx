import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import Gallery, { ImageGrid } from "@/components/Gallery";
import PipelineDiagram from "@/components/PipelineDiagram";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    openGraph: {
      title: `${study.title} — Wesley Wong`,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((cs) => cs.slug === study.slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];
  const galleryImages = study.images ?? [];
  // image-rich studies get an extra magazine-grid spread after the sections
  const gridImages = galleryImages.length > 3 ? galleryImages.slice(1) : [];

  return (
    <div
      className="zone-dark zone-grain brand-scope"
      style={
        {
          "--brand-accent": study.brand.accent,
          "--brand-accent-dim": study.brand.accentDim,
        } as React.CSSProperties
      }
    >
      <main>
        <article className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
            Work
          </Link>

          <header className="mt-12">
            <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
              ({String(index + 1).padStart(2, "0")}) — Case Study ·{" "}
              {study.company}
            </p>
            <h1 className="animate-fade-up mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-fg [animation-delay:120ms] md:text-7xl">
              {study.title}
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-fg-secondary [animation-delay:240ms]">
              {study.tagline}
            </p>
            {study.externalLink && (
              <a
                href={study.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-up mt-8 inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors duration-200 [animation-delay:320ms] hover:border-accent"
              >
                Visit
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </header>

          <div className="animate-fade-up mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 [animation-delay:360ms] md:grid-cols-4">
            {[
              { label: "Role", value: study.role },
              { label: "Company", value: study.company },
              { label: "Timeline", value: study.timeline },
              { label: "Focus", value: study.tags.join(" · ") },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 border-y border-border py-12 sm:grid-cols-3 sm:divide-x sm:divide-border">
            {study.metrics.map((metric, i) => (
              <Reveal
                key={metric.label}
                delay={i * 90}
                className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p className="font-display text-4xl italic tracking-tight text-accent md:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                  {metric.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <section className="mt-20 max-w-3xl">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Overview
              </h2>
              <p className="mt-6 font-display text-2xl leading-snug tracking-tight text-fg md:text-3xl">
                {study.overview}
              </p>
              {study.note && (
                <p className="mt-6 font-mono text-xs text-fg-muted">
                  {study.note}
                </p>
              )}
            </section>
          </Reveal>

          {galleryImages.length > 0 && (
            <Reveal>
              <section className="mt-20">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Gallery
                </h2>
                <div className="mt-8">
                  <Gallery
                    images={galleryImages}
                    gradient={study.brand.gradient}
                  />
                </div>
              </section>
            </Reveal>
          )}

          {study.pipeline && (
            <Reveal>
              <section className="mt-20">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Architecture
                </h2>
                <div className="mt-8">
                  <PipelineDiagram
                    stages={study.pipeline}
                    accent={study.brand.accent}
                  />
                </div>
              </section>
            </Reveal>
          )}

          {study.sections.map((section) => (
            <Reveal key={section.heading}>
              <section className="mt-20 max-w-3xl">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  {section.heading}
                </h2>
                <div className="mt-6 flex flex-col gap-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="leading-relaxed text-fg-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          {gridImages.length > 0 && (
            <Reveal>
              <section className="mt-20">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  In detail
                </h2>
                <div className="mt-8">
                  <ImageGrid
                    images={gridImages}
                    gradient={study.brand.gradient}
                  />
                </div>
              </section>
            </Reveal>
          )}

          <nav className="mt-24 grid gap-px border-t border-border pt-10 md:grid-cols-2">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="group py-4 md:pr-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
                  ← Previous
                </p>
                <p className="mt-3 font-display text-2xl tracking-tight text-fg transition-colors duration-200 group-hover:text-accent md:text-3xl">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group py-4 text-right md:pl-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
                  Next →
                </p>
                <p className="mt-3 font-display text-2xl tracking-tight text-fg transition-colors duration-200 group-hover:text-accent md:text-3xl">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
