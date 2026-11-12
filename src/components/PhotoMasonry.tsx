import Image from "next/image";
import { ZoomButton } from "@/components/Lightbox";

export type MasonryPhoto = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  /** position of this photo in the surrounding LightboxProvider's images */
  index: number;
};

type PhotoMasonryProps = {
  photos: MasonryPhoto[];
  /** column classes - defaults to 2 / 3 / 4 columns as the viewport grows */
  columns?: string;
  sizes?: string;
};

/**
 * Masonry collage: portrait and landscape photos keep their own ratio, and
 * each one opens in the lightbox. Must render inside a LightboxProvider.
 */
export default function PhotoMasonry({
  photos,
  columns = "columns-2 md:columns-3 lg:columns-4",
  sizes = "(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw",
}: PhotoMasonryProps) {
  return (
    <ul className={`gap-4 md:gap-5 ${columns}`}>
      {photos.map((photo) => (
        <li key={photo.src} className="mb-4 break-inside-avoid md:mb-5">
          <figure>
            <ZoomButton index={photo.index} label={photo.alt}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={sizes}
                className="h-auto w-full rounded-2xl border border-border"
              />
            </ZoomButton>
            {photo.caption && (
              <figcaption className="mt-2 text-sm leading-snug text-fg-secondary">
                {photo.caption}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
