import type { WorkImage } from "@/content/case-studies";
import ImageFrame from "@/components/ImageFrame";

const railWidth: Record<NonNullable<WorkImage["aspect"]>, string> = {
  wide: "w-[80vw] md:w-[560px]",
  square: "w-[70vw] md:w-[400px]",
  portrait: "w-[60vw] md:w-[320px]",
};

type GalleryProps = {
  images: WorkImage[];
  gradient?: string;
};

/**
 * Horizontal scroll-snap rail with mixed aspect ratios — editorial rhythm,
 * no JS. The last card peeks past the container edge to invite scrolling.
 */
export default function Gallery({ images, gradient }: GalleryProps) {
  return (
    <div className="gallery-rail -mx-6 snap-x snap-mandatory overflow-x-auto px-6">
      <div className="flex w-max items-start gap-5 pb-2">
        {images.map((image) => (
          <ImageFrame
            key={image.alt}
            image={image}
            gradient={gradient}
            sizes="(min-width: 768px) 560px, 80vw"
            className={`snap-start ${railWidth[image.aspect ?? "wide"]} shrink-0`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Magazine split: one large image + two stacked — for image-rich studies.
 */
export function ImageGrid({ images, gradient }: GalleryProps) {
  const [lead, ...rest] = images;
  if (!lead) return null;
  return (
    <div className="grid gap-5 md:grid-cols-[1.6fr_1fr]">
      <ImageFrame
        image={{ ...lead, aspect: "wide" }}
        gradient={gradient}
        sizes="(min-width: 768px) 60vw, 100vw"
      />
      <div className="flex flex-col gap-5">
        {rest.slice(0, 2).map((image) => (
          <ImageFrame
            key={image.alt}
            image={{ ...image, aspect: "wide" }}
            gradient={gradient}
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}
