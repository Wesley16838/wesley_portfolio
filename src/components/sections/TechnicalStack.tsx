import { stackGroups } from "@/content/site";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

export default function TechnicalStack() {
  return (
    <Section
      id="stack"
      eyebrow="(04) — Stack"
      heading={
        <>
          Tools I <em>reach for</em>
        </>
      }
    >
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
        {stackGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 70}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
              {group.name}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
