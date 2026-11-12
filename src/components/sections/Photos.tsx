import { careerPhotos } from "@/content/site";
import { LightboxProvider } from "@/components/Lightbox";
import PhotoMasonry from "@/components/PhotoMasonry";
import Section from "@/components/Section";

/** Career snapshots as a masonry collage - every photo opens in the lightbox. */
export default function Photos() {
  return (
    <Section id="snapshots" eyebrow="Snapshots" title="Along the way">
      <LightboxProvider images={careerPhotos}>
        <PhotoMasonry
          photos={careerPhotos.map((photo, index) => ({ ...photo, index }))}
        />
      </LightboxProvider>
    </Section>
  );
}
