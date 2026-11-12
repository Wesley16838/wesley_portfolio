import Image from "next/image";
import type { WorkImage } from "@/content/case-studies";

/** a WorkImage that actually has a file behind it */
export type Shot = WorkImage & { src: string };

export function hasSrc(image: WorkImage): image is Shot {
  return Boolean(image.src);
}

const aspectClass: Record<NonNullable<WorkImage["aspect"]>, string> = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  // full-height phone screenshot (1290×2796)
  phone: "aspect-[1290/2796]",
};

/** phone shots ship with rounded transparent corners — match that radius */
const PHONE_RADIUS = "rounded-[8.5%/3.93%]";

const LIGHT_BACKDROP = "linear-gradient(160deg, #f4f1ea 0%, #dcd6c8 100%)";

/** Panel colour behind a transparent device mockup, or undefined for none. */
export function backdropFor(
  image: Pick<WorkImage, "backdrop">,
  gradient?: string,
): string | undefined {
  if (image.backdrop === "light") return LIGHT_BACKDROP;
  if (image.backdrop) return gradient;
  return undefined;
}

type ImageFrameProps = {
  image: Shot;
  /** brand gradient: the panel behind transparent mockups and phone thumbs */
  gradient?: string;
  /**
   * Force a frame ratio (e.g. "16 / 10") for thumbnails and hero slots.
   * Without it the image keeps its own ratio and is never cropped.
   */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * One image, three behaviours:
 * - transparent mockup (`backdrop`): floats, uncropped, on a panel
 * - phone screenshot in a fixed-ratio slot: peeks up from a tinted panel
 * - anything else: fills the frame
 */
export default function ImageFrame({
  image,
  gradient,
  ratio,
  sizes,
  priority,
  className,
}: ImageFrameProps) {
  const isPhone = image.aspect === "phone";
  const peek = Boolean(ratio) && isPhone;
  const intrinsic =
    image.width && image.height
      ? `${image.width} / ${image.height}`
      : undefined;
  const aspectRatio = ratio ?? intrinsic;
  const background = peek ? gradient : backdropFor(image, gradient);
  const radius = isPhone && !ratio ? PHONE_RADIUS : "rounded-2xl";

  return (
    <div
      className={`relative overflow-hidden border border-border ${radius} ${
        aspectRatio ? "" : aspectClass[image.aspect ?? "wide"]
      } ${className ?? ""}`}
      style={{ aspectRatio, background }}
    >
      {peek ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={1290}
          height={2796}
          sizes="220px"
          priority={priority}
          className={`absolute left-1/2 top-[10%] w-[40%] max-w-none -translate-x-1/2 shadow-2xl ${PHONE_RADIUS}`}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
          priority={priority}
          className={image.backdrop ? "object-contain p-[6%]" : "object-cover"}
        />
      )}
    </div>
  );
}
