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
                className="group flex items-start justify-between gap-6 py-5 transition-transform duration-200 hover:translate-x-1"
              >
                <span className="min-w-0">
                  <span className="font-medium text-fg">{project.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-fg-secondary">
                    {project.description}
                  </span>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted md:hidden">
                    {project.context}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-4">
                  <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted md:inline">
                    {project.context}
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-fg-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
