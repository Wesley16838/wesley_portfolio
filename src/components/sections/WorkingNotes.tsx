import { principles } from "@/content/site";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function WorkingNotes() {
  return (
    <Section
      id="notes"
      eyebrow="(02) — Working Notes"
      heading={
        <>
          How I <em>work</em>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 110}>
            <div className="border-t border-border pt-8">
              <p className="font-display text-4xl italic text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-medium leading-snug text-fg">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                {principle.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
