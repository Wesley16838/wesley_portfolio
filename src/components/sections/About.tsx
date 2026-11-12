import { about, education } from "@/content/site";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Behind the work">
      <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
        <div className="tile p-6 md:p-10 lg:col-span-7">
          <p className="text-xl font-medium leading-snug tracking-tight text-fg md:text-2xl">
            {about.identity}
          </p>
          <h3 className="label mt-10">Outside of work</h3>
          <p className="mt-3 leading-relaxed text-fg-secondary">
            {about.outside}
          </p>
          <h3 className="label mt-8">Languages</h3>
          <p className="mt-3 text-fg-secondary">
            {about.languages.join(" · ")}
          </p>
        </div>

        <div className="tile p-6 md:p-10 lg:col-span-5">
          <h3 className="label">Education</h3>
          <ul className="mt-2 divide-y divide-border">
            {education.map((edu) => (
              <li key={edu.school} className="py-4 last:pb-0">
                <p className="font-semibold text-fg">{edu.school}</p>
                <p className="mt-1 text-sm text-fg-secondary">{edu.degree}</p>
                <p className="mt-1 font-mono text-xs text-fg-muted">
                  {edu.period}
                  {edu.note ? ` · ${edu.note}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
