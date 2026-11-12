import Image from "next/image";
import { careerPhotos } from "@/content/site";
import { LightboxProvider, ZoomButton } from "@/components/Lightbox";
import Section from "@/components/Section";

/** Career snapshots as a masonry collage — every photo opens in the lightbox. */
export default function Photos() {
  return (
    <Section id="snapshots" eyebrow="Snapshots" title="Along the way">
      <LightboxProvider images={careerPhotos}>
        <ul className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
          {careerPhotos.map((photo, i) => (
            <li key={photo.src} className="mb-4 break-inside-avoid md:mb-5">
              <figure>
                <ZoomButton index={i} label={photo.alt}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 270px, (min-width: 768px) 33vw, 50vw"
                    className="h-auto w-full rounded-2xl border border-border"
                  />
                </ZoomButton>
                {photo.caption && (
                  <figcaption className="mt-2 text-sm text-fg-secondary">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </LightboxProvider>
    </Section>
  );
}
