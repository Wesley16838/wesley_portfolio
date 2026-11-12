import { stackGroups } from "@/content/site";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

export default function TechnicalStack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Tools I reach for">
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {stackGroups.map((group) => (
          <div key={group.name} className="tile p-6 md:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              {group.name}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
