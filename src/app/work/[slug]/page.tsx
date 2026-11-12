import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import type { CaseStudy } from "@/content/case-studies";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import ImageFrame, { backdropFor, hasSrc } from "@/components/ImageFrame";
import Lang from "@/components/Lang";
import { LightboxProvider, ZoomButton } from "@/components/Lightbox";
import NewTab from "@/components/NewTab";
import PhotoMasonry from "@/components/PhotoMasonry";
import PipelineDiagram from "@/components/PipelineDiagram";
import SectionNav from "@/components/SectionNav";
import Tag from "@/components/Tag";
import { brandTint } from "@/components/WorkTile";
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
    alternates: { canonical: `/work/${study.slug}` },
    // setting openGraph here replaces the root layout's, so repeat the shared
    // fields; the image comes from this folder's opengraph-image.tsx
    openGraph: {
      title: `${study.title} - Wesley Wong`,
      description: study.tagline,
      url: `/work/${study.slug}`,
      siteName: "Wesley Wong",
      locale: "en_US",
      type: "article",
    },
  };
}

const toId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const sectionLabel = "label";
const prose = "max-w-2xl text-lg leading-relaxed text-fg-secondary";

function NeighbourLink({
  study,
  direction,
}: {
  study: CaseStudy;
  direction: "Previous" | "Next";
}) {
  const cover = study.images?.find(hasSrc);
  const next = direction === "Next";
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`tile tile-link flex items-center gap-4 p-4 ${
        next ? "flex-row-reverse text-right md:col-start-2" : ""
      }`}
      style={cover ? undefined : { backgroundColor: brandTint(study) }}
    >
      {cover && (
        <ImageFrame
          image={{ ...cover, alt: "" }}
          gradient={study.brand.gradient}
          ratio="4 / 3"
          sizes="112px"
          className="w-28 shrink-0"
        />
      )}
      <span className="min-w-0 flex-1 px-2">
        <span className="label block text-fg-secondary">{direction}</span>
        <span className="mt-1 block text-xl font-semibold tracking-tight text-fg">
          {study.title}
        </span>
      </span>
      <ArrowRightIcon
        className={`h-5 w-5 shrink-0 text-fg-muted ${
          next ? "arrow-nudge" : "arrow-nudge-back rotate-180"
        }`}
      />
    </Link>
  );
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

  // only images with a real file - placeholders never render
  const shots = (study.images ?? []).filter(hasSrc);
  const phones = shots.length > 0 && shots.every((s) => s.aspect === "phone");
  // desktop shots: the first is the hero, the rest fill the Screens grid
  const gridShots = phones ? [] : shots.slice(1);
  // photo-led studies tag images with an event; those render as one masonry
  // per event instead of a flat grid
  const groups = [...new Set(gridShots.flatMap((s) => (s.group ? [s.group] : [])))];
  const galleryTitle = study.galleryTitle ?? "Screens";
  // the phone hero already shows up to three screens - only add the carousel
  // when there are more to see
  const showScreens = phones ? shots.length > 3 : gridShots.length > 0;
  const gradient = study.brand.gradient;

  const navItems = [
    { id: "overview", label: "Overview" },
    ...(study.pipeline ? [{ id: "architecture", label: "Architecture" }] : []),
    ...study.sections.map((s) => ({ id: toId(s.heading), label: s.heading })),
    ...(showScreens ? [{ id: "screens", label: galleryTitle }] : []),
  ];

  return (
    <>
      <main
        id="main"
        className="mx-auto max-w-6xl px-4 pb-20 pt-6 md:px-6 md:pb-28 md:pt-10"
      >
        <LightboxProvider
          images={shots.map((shot) => ({
            src: shot.src,
            alt: shot.alt,
            caption: shot.caption,
            panel: backdropFor(shot, gradient),
          }))}
        >
          <article>
            <Link
              href="/#work"
              className="enter inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-fg-secondary transition-colors hover:text-fg"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              All work
            </Link>

            <header className="mt-4 max-w-4xl">
              <p className="label enter flex items-center gap-2 [--enter-delay:60ms]">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: study.brand.accent }}
                />
                <span>
                  Case study · <Lang>{study.company}</Lang>
                </span>
              </p>
              <h1 className="enter-rise mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-6xl">
                {study.title}
              </h1>
              <p className="enter mt-5 max-w-2xl text-lg leading-relaxed text-fg-secondary [--enter-delay:200ms] md:text-xl">
                {study.tagline}
              </p>
              <dl className="enter mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm [--enter-delay:270ms]">
                <div>
                  <dt className="label">Role</dt>
                  <dd className="mt-1 font-medium text-fg">{study.role}</dd>
                </div>
                <div>
                  <dt className="label">Timeline</dt>
                  <dd className="mt-1 font-medium text-fg">{study.timeline}</dd>
                </div>
              </dl>
              <ul
                className="enter mt-5 flex flex-wrap gap-2 [--enter-delay:330ms]"
                aria-label="Focus areas"
              >
                {study.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
              {study.externalLink && (
                <a
                  href={study.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary enter mt-6 [--enter-delay:390ms]"
                >
                  {study.externalLabel ?? "Visit live site"}
                  <ArrowUpRightIcon className="arrow-diag h-4 w-4" />
                  <NewTab />
                </a>
              )}
            </header>

            {/* hero visual: three phones for app flows, one wide shot otherwise */}
            {phones && (
              <ul
                className="tile enter-rise mt-10 flex items-start justify-center gap-3 overflow-hidden px-4 py-8 sm:gap-6 md:gap-10 md:py-12"
                style={{ backgroundColor: brandTint(study) }}
              >
                {shots.slice(0, 3).map((shot, i) => (
                  <li key={shot.src} className="w-[30%] max-w-56">
                    <ZoomButton index={i} label={shot.alt}>
                      <ImageFrame
                        image={shot}
                        sizes="(min-width: 768px) 224px, 30vw"
                        priority
                      />
                    </ZoomButton>
                  </li>
                ))}
              </ul>
            )}
            {!phones && shots[0] && (
              <div className="enter-rise mt-10">
                <ZoomButton index={0} label={shots[0].alt}>
                  <ImageFrame
                    image={shots[0]}
                    gradient={gradient}
                    ratio="16 / 9"
                    sizes="(min-width: 1152px) 1104px, 100vw"
                    priority
                  />
                </ZoomButton>
              </div>
            )}

            {/* one compact row per metric on phones, three tiles from sm up */}
            <dl
              className={`grid gap-3 sm:grid-cols-3 md:gap-5 ${
                shots.length > 0 ? "mt-4 md:mt-5" : "mt-10"
              }`}
            >
              {study.metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="tile enter flex flex-row-reverse items-baseline justify-end gap-4 px-6 py-4 sm:flex-col-reverse sm:items-stretch sm:gap-0 sm:p-6"
                  style={
                    { "--enter-delay": `${500 + i * 70}ms` } as React.CSSProperties
                  }
                  data-reveal
                >
                  <dt className="text-sm leading-snug text-fg-secondary sm:mt-2">
                    {metric.label}
                  </dt>
                  <dd className="shrink-0 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
              <SectionNav items={navItems} />

              <div className="flex min-w-0 flex-col gap-16">
                <section
                  id="overview"
                  aria-labelledby="overview-heading"
                  data-reveal
                >
                  <h2 id="overview-heading" className={sectionLabel}>
                    Overview
                  </h2>
                  <p className="mt-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
                    <Lang>{study.overview}</Lang>
                  </p>
                  {study.note && (
                    <p className="mt-5 text-sm text-fg-muted">{study.note}</p>
                  )}
                </section>

                {study.pipeline && (
                  <section
                    id="architecture"
                    aria-labelledby="architecture-heading"
                    data-reveal
                  >
                    <h2 id="architecture-heading" className={sectionLabel}>
                      Architecture
                    </h2>
                    <div className="mt-4">
                      <PipelineDiagram stages={study.pipeline} />
                    </div>
                  </section>
                )}

                {study.sections.map((section) => {
                  const id = toId(section.heading);
                  return (
                    <section
                      key={id}
                      id={id}
                      aria-labelledby={`${id}-heading`}
                      data-reveal
                    >
                      <h2 id={`${id}-heading`} className={sectionLabel}>
                        {section.heading}
                      </h2>
                      <div className="mt-4 flex flex-col gap-5">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className={prose}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  );
                })}

                {showScreens && (
                  <section id="screens" aria-labelledby="screens-heading">
                    <h2
                      id="screens-heading"
                      className={sectionLabel}
                      data-reveal
                    >
                      {galleryTitle}
                    </h2>
                    <p className="mt-2 text-sm text-fg-secondary">
                      Select any image to view it larger.
                    </p>

                    {phones ? (
                      <div className="mt-4">
                        <Carousel label={`${study.title} screens`}>
                          {shots.map((shot, i) => (
                            <li
                              key={shot.src}
                              className="w-[58vw] max-w-60 shrink-0 snap-start"
                            >
                              <figure>
                                <ZoomButton index={i} label={shot.alt}>
                                  <ImageFrame
                                    image={shot}
                                    sizes="(min-width: 768px) 240px, 58vw"
                                  />
                                </ZoomButton>
                                {shot.caption && (
                                  <figcaption className="mt-3 text-sm leading-snug text-fg-secondary">
                                    {shot.caption}
                                  </figcaption>
                                )}
                              </figure>
                            </li>
                          ))}
                        </Carousel>
                      </div>
                    ) : groups.length > 0 ? (
                      groups.map((group) => (
                        <div key={group} className="mt-8">
                          <h3
                            className="mb-4 text-lg font-semibold tracking-tight text-fg"
                            data-reveal
                          >
                            {group}
                          </h3>
                          <PhotoMasonry
                            columns="columns-2 lg:columns-3"
                            sizes="(min-width: 1024px) 270px, 50vw"
                            photos={shots.flatMap((shot, index) =>
                              index > 0 &&
                              shot.group === group &&
                              shot.width &&
                              shot.height
                                ? [
                                    {
                                      src: shot.src,
                                      alt: shot.alt,
                                      caption: shot.caption,
                                      width: shot.width,
                                      height: shot.height,
                                      index,
                                    },
                                  ]
                                : [],
                            )}
                          />
                        </div>
                      ))
                    ) : (
                      <ul className="mt-6 grid gap-5 md:grid-cols-2">
                        {gridShots.map((shot, i) => (
                          <li
                            key={shot.src}
                            // an odd count leads with one full-width image
                            className={
                              gridShots.length % 2 === 1 && i === 0
                                ? "md:col-span-2"
                                : undefined
                            }
                            data-reveal
                          >
                            <figure>
                              <ZoomButton index={i + 1} label={shot.alt}>
                                <ImageFrame
                                  image={shot}
                                  gradient={gradient}
                                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                                />
                              </ZoomButton>
                              {shot.caption && (
                                <figcaption className="mt-3 text-sm leading-snug text-fg-secondary">
                                  {shot.caption}
                                </figcaption>
                              )}
                            </figure>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                )}
              </div>
            </div>
          </article>

          <nav
            aria-label="More case studies"
            className="mt-20 grid gap-4 md:mt-28 md:grid-cols-2 md:gap-5"
            data-reveal
          >
            {prev && <NeighbourLink study={prev} direction="Previous" />}
            {next && <NeighbourLink study={next} direction="Next" />}
          </nav>
        </LightboxProvider>
      </main>
      <Footer />
    </>
  );
}
