import Image from "next/image";
import type { WorkImage } from "@/content/case-studies";

const aspectClass: Record<NonNullable<WorkImage["aspect"]>, string> = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
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

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-border ${aspect}`}
        style={image.src ? undefined : { background: gradient }}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
            className="object-cover"
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
