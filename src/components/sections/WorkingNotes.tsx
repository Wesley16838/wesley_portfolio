import { principles } from "@/content/site";
import Section from "@/components/Section";

export default function WorkingNotes() {
  return (
    <Section id="notes" eyebrow="Approach" title="How I work">
      <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
        {principles.map((principle, i) => (
          <li key={principle.title} className="tile p-6 md:p-8">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-semibold text-accent"
            >
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-fg">
              {principle.title}
            </h3>
            <p className="mt-3 leading-relaxed text-fg-secondary">
              {principle.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
