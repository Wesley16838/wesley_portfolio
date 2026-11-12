import Image from "next/image";
import type { WorkImage } from "@/content/case-studies";

const aspectClass: Record<NonNullable<WorkImage["aspect"]>, string> = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  // full-height phone screenshot (1290×2796)
  phone: "aspect-[1290/2796]",
};

/** phone shots ship with rounded transparent corners — match that radius */
const radiusClass: Record<NonNullable<WorkImage["aspect"]>, string> = {
  wide: "rounded-2xl",
  square: "rounded-2xl",
  portrait: "rounded-2xl",
  phone: "rounded-[8.5%/3.93%]",
};

type ImageFrameProps = {
  image: WorkImage;
  /** brand gradient used as the placeholder canvas */
  gradient?: string;
  className?: string;
  sizes?: string;
  showCaption?: boolean;
};

/**
 * Renders a real image when `src` is set; otherwise an art-directed
 * placeholder frame on the study's brand gradient. Swap in real work shots
 * by dropping files into public/work/<slug>/ and filling `src`.
 */
export default function ImageFrame({
  image,
  gradient,
  className,
  sizes,
  showCaption = true,
}: ImageFrameProps) {
  const aspect = aspectClass[image.aspect ?? "wide"];
  const radius = radiusClass[image.aspect ?? "wide"];
  // intrinsic size wins over the aspect preset, so screenshots are never cropped
  const exactRatio =
    image.width && image.height
      ? { aspectRatio: `${image.width} / ${image.height}` }
      : undefined;
  const background = !image.src
    ? gradient
    : image.backdrop === "light"
      ? "linear-gradient(160deg, #f4f1ea 0%, #dcd6c8 100%)"
      : image.backdrop
        ? gradient
        : undefined;

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden border border-border ${radius} ${exactRatio ? "" : aspect}`}
        style={{
          ...(background ? { background } : {}),
          ...exactRatio,
        }}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
            className={image.backdrop ? "object-contain p-[6%]" : "object-cover"}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              [ image ]
            </span>
            <span className="max-w-[85%] font-display text-lg italic leading-snug text-white/70 md:text-xl">
              {image.alt}
            </span>
          </div>
        )}
      </div>
      {showCaption && image.caption && (
        <figcaption className="mt-3 font-mono text-xs text-fg-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
