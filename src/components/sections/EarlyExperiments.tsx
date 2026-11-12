import { archiveProjects } from "@/content/projects";
import NewTab from "@/components/NewTab";
import Section from "@/components/Section";
import { ArrowUpRightIcon } from "@/components/icons";

export default function EarlyExperiments() {
  return (
    <Section id="archive" eyebrow="Archive" title="Earlier experiments">
      <p
        className="-mt-4 mb-8 max-w-xl leading-relaxed text-fg-secondary"
        data-reveal
      >
        Hackathon builds and side projects from earlier years - where the
        map-based, real-time product instincts started.
      </p>
      <ul className="tile divide-y divide-border overflow-hidden" data-reveal>
        {archiveProjects.map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-surface-2 md:px-8"
            >
              <span className="min-w-0">
                <span className="block font-semibold text-fg">
                  {project.name}
                  <NewTab />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-fg-secondary">
                  {project.description}
                </span>
                <span className="mt-2 block font-mono text-xs text-fg-muted">
                  {project.context}
                </span>
              </span>
              <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-fg-muted transition-[translate] duration-[var(--motion-fast)] ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
