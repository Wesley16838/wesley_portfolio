import { experiences } from "@/content/experience";
import type { Experience as ExperienceEntry } from "@/content/experience";
import Lang from "@/components/Lang";
import Section from "@/components/Section";

/** roles with more bullets than this collapse down to VISIBLE_BULLETS */
const COLLAPSE_OVER = 3;
const VISIBLE_BULLETS = 2;

const bulletList =
  "flex list-disc flex-col gap-2 pl-5 leading-relaxed text-fg-secondary marker:text-fg-muted";

// employment and self-started ventures are listed apart, as on the resume
const groups: { title: string; items: ExperienceEntry[] }[] = [
  {
    title: "Work experience",
    items: experiences.filter((exp) => exp.kind === "work"),
  },
  {
    title: "Startups & ventures",
    items: experiences.filter((exp) => exp.kind === "venture"),
  },
];

function Entry({ exp }: { exp: ExperienceEntry }) {
  return (
    <li className="grid gap-4 py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
      <div>
        <h4 className="text-xl font-semibold tracking-tight text-fg">
          <Lang>{exp.company}</Lang>
        </h4>
        {exp.location && <p className="label mt-2">{exp.location}</p>}
      </div>

      <div className="flex flex-col gap-8">
        {exp.roles.map((role) => {
          // hiding a single bullet isn't worth a click
          const cut =
            role.bullets.length > COLLAPSE_OVER
              ? VISIBLE_BULLETS
              : role.bullets.length;
          const shown = role.bullets.slice(0, cut);
          const hidden = role.bullets.slice(cut);
          return (
            <div key={role.title}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h5 className="font-semibold text-fg">{role.title}</h5>
                <p className="shrink-0 font-mono text-xs text-fg-muted">
                  {role.period}
                </p>
              </div>
              <ul className={`mt-3 max-w-2xl ${bulletList}`}>
                {shown.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {hidden.length > 0 && (
                <details className="group mt-2 max-w-2xl">
                  <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-full text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">
                      Show {hidden.length} more
                    </span>
                    <span className="hidden group-open:inline">Show less</span>
                  </summary>
                  <ul className={`mt-1 ${bulletList}`}>
                    {hidden.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          );
        })}
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built">
      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <div key={group.title} data-reveal>
            <h3 className="label mb-4">{group.title}</h3>
            <ol className="tile divide-y divide-border px-6 md:px-8">
              {group.items.map((exp) => (
                <Entry key={exp.company} exp={exp} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
