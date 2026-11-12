import { caseStudies } from "@/content/case-studies";
import { impactMetrics } from "@/content/site";
import Section from "@/components/Section";
import WorkTile from "@/components/WorkTile";

const [lead, ...rest] = caseStudies;
const featured = rest.slice(0, 2);
const more = rest.slice(2);

/** five tiles read best as two wide + three regular; otherwise four across */
const moreSpan = (index: number) =>
  more.length === 5
    ? index < 2
      ? "lg:col-span-6"
      : "lg:col-span-4"
    : "lg:col-span-3";

export default function SelectedWork() {
  return (
    <Section id="work" eyebrow="Work" title="Selected work">
      {/* lead tile spans two rows; the next two stack beside it */}
      <ul className="grid gap-4 md:gap-5 lg:grid-cols-12 lg:grid-rows-2">
        <li
          className="enter [--enter-delay:550ms] lg:col-span-8 lg:row-span-2"
          data-reveal="scale"
        >
          <WorkTile study={lead} variant="feature" />
        </li>
        {featured.map((study, i) => (
          <li
            key={study.slug}
            className="enter lg:col-span-4"
            style={{ "--enter-delay": `${620 + i * 70}ms` } as React.CSSProperties}
            data-reveal="scale"
          >
            <WorkTile study={study} />
          </li>
        ))}
      </ul>

      <dl className="mt-4 grid grid-cols-2 gap-4 md:mt-5 md:gap-5 lg:grid-cols-4">
        {impactMetrics.map((metric) => (
          <div
            key={metric.label}
            className="tile flex flex-col-reverse justify-end p-6"
            data-reveal
          >
            <dt className="mt-2 text-sm leading-snug text-fg-secondary">
              {metric.label}
            </dt>
            <dd className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <h3 className="label mt-14" data-reveal>
        More work
      </h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-12">
        {more.map((study, i) => (
          <li
            key={study.slug}
            // an odd count would orphan the last tile at two columns
            className={`${moreSpan(i)} ${
              more.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""
            }`}
            data-reveal="scale"
          >
            <WorkTile study={study} as="h4" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
