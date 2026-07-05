import { experiences } from "@/content/experience";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="(03) — Experience"
      heading={
        <>
          Where I&rsquo;ve <em>built</em>
        </>
      }
    >
      <div className="border-t border-border">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={Math.min(i, 3) * 70}>
            <div className="grid gap-4 border-b border-border py-10 md:grid-cols-[240px_1fr] md:gap-8">
              <div>
                <h3 className="font-display text-2xl tracking-tight text-fg">
                  {exp.company}
                </h3>
                {exp.location && (
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                    {exp.location}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-8">
                {exp.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="font-medium text-fg">{role.title}</h4>
                      <p className="font-mono text-xs text-fg-muted">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-3 flex flex-col gap-2">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="max-w-2xl text-sm leading-relaxed text-fg-secondary"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
