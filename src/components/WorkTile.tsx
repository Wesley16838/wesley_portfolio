import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import ImageFrame, { hasSrc } from "@/components/ImageFrame";
import Lang from "@/components/Lang";
import { ArrowRightIcon } from "@/components/icons";

type WorkTileProps = {
  study: CaseStudy;
  /** "feature" is the large lead tile: bigger type, wider image, metrics */
  variant?: "feature" | "compact";
  /** heading level for the title, so tiles nest correctly under any section */
  as?: "h3" | "h4";
};

/** Brand colour is decoration only — it tints the tile, text stays on tokens. */
export function brandTint(study: CaseStudy) {
  return `color-mix(in srgb, ${study.brand.accent} 12%, var(--color-surface))`;
}

/**
 * Case-study tile. With a cover image it shows the image; without one it
 * becomes a brand-tinted typographic tile with metrics — never a placeholder.
 */
export default function WorkTile({
  study,
  variant = "compact",
  as: Heading = "h3",
}: WorkTileProps) {
  const cover = study.images?.find(hasSrc);
  const feature = variant === "feature";
  const showMetrics = feature || !cover;

  return (
    <Link
      href={`/work/${study.slug}`}
      className="tile tile-link flex h-full flex-col overflow-hidden"
      style={cover ? undefined : { backgroundColor: brandTint(study) }}
    >
      {cover && (
        <div className="p-2 pb-0">
          <ImageFrame
            image={cover}
            gradient={study.brand.gradient}
            ratio={feature ? "4 / 3" : "16 / 10"}
            sizes={
              feature
                ? "(min-width: 1024px) 720px, 100vw"
                : "(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            }
            priority={feature}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-fg-secondary">
          <Lang>{study.company}</Lang> · {study.timeline}
        </p>
        <Heading
          className={`mt-2 font-semibold tracking-tight text-fg ${
            feature ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {study.title}
        </Heading>
        <p className="mt-2 leading-relaxed text-fg-secondary">
          {study.cardCopy}
        </p>
        {showMetrics && (
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {study.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className="max-w-32 text-xs leading-snug text-fg-secondary">
                  {metric.label}
                </dt>
                <dd className="text-2xl font-semibold tracking-tight text-fg">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
        <p className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
          Read case study
          <ArrowRightIcon className="h-4 w-4" />
        </p>
      </div>
    </Link>
  );
}
