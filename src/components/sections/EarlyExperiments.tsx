import { archiveProjects } from "@/content/projects";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { ArrowUpRightIcon } from "@/components/icons";

export default function EarlyExperiments() {
  return (
    <Section
      id="experiments"
      eyebrow="(05) — Early Experiments"
      heading={
        <>
          Selected <em>archives</em>
        </>
      }
    >
      <p className="-mt-4 mb-10 max-w-xl text-sm leading-relaxed text-fg-muted">
        Hackathon builds and side projects from earlier years — where the
        map-based, real-time product instincts started.
      </p>
      <Reveal>
        <ul className="border-t border-border">
          {archiveProjects.map((project) => (
            <li key={project.name} className="border-b border-border">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-5 transition-transform duration-200 hover:translate-x-1 md:grid-cols-[1.2fr_1.6fr_auto] md:items-baseline md:gap-6"
              >
                <span className="flex items-baseline justify-between gap-3 font-medium text-fg">
                  {project.name}
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 self-center text-fg-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:hidden" />
                </span>
                <span className="text-sm leading-relaxed text-fg-secondary">
                  {project.description}
                </span>
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                    {project.context}
                  </span>
                  <ArrowUpRightIcon className="hidden h-4 w-4 shrink-0 text-fg-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
