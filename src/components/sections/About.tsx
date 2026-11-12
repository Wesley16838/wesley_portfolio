import Image from "next/image";
import { about, careerPhotos, education, site } from "@/content/site";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Section
        id="about"
        eyebrow="(06) — About"
        heading={
          <>
            Behind the <em>systems</em>
          </>
        }
      >
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <Reveal>
              {/* builder identity as an editorial pull-quote */}
              <p className="font-display text-2xl leading-snug tracking-tight text-fg md:text-3xl">
                {about.identity}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="mt-14 font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
                Outside the system
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-fg-secondary">
                {about.outside}
              </p>
              <p className="mt-6 font-mono text-xs text-fg-muted">
                {about.languages.join(" · ")}
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
              Education
            </h3>
            <ul className="mt-6 flex flex-col divide-y divide-border">
              {education.map((edu) => (
                <li key={edu.school} className="py-4 first:pt-0">
                  <p className="text-sm font-medium text-fg">{edu.school}</p>
                  <p className="mt-1 text-sm text-fg-secondary">{edu.degree}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                    {edu.period}
                    {edu.note ? ` · ${edu.note}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* career snapshots — a fixed-height filmstrip, no JS */}
        <Reveal delay={120}>
          <h3 className="mt-20 font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
            Along the way
          </h3>
          <div className="gallery-rail -mx-6 mt-6 snap-x overflow-x-auto px-6">
            <ul className="flex w-max items-start gap-4 pb-2">
              {careerPhotos.map((photo) => (
                <li key={photo.src} className="shrink-0 snap-start">
                  {/* w-min keeps a long caption from widening a narrow portrait */}
                  <figure className="w-min">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 768px) 520px, 400px"
                      className="h-56 w-auto max-w-none rounded-xl border border-border md:h-72"
                    />
                    {photo.caption && (
                      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
              Contact
            </p>
            <h2 className="mt-6 font-display text-5xl tracking-tight text-fg md:text-7xl">
              Let&rsquo;s build <em>something.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-fg-secondary">
              Open to conversations about AI product systems, frontend
              architecture, and building from zero.
            </p>
            <a
              href={`mailto:${site.links.email}`}
              className="mt-10 inline-block font-display text-2xl italic text-fg underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-200 hover:text-accent md:text-4xl"
            >
              {site.links.email}
            </a>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { href: site.links.github, label: "GitHub" },
                { href: site.links.linkedin, label: "LinkedIn" },
                { href: site.links.resume, label: "Resume" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-border pb-1 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors duration-200 hover:border-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
