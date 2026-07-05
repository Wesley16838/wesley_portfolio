import { impactMetrics } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function ImpactMetrics() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-6 py-16 md:grid-cols-4 md:divide-x md:divide-border md:py-20">
        {impactMetrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 90} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <p className="font-display text-5xl italic tracking-tight text-fg md:text-6xl">
              {metric.value}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
              {metric.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
