import Image from "next/image";
import { about, aboutPhoto, education } from "@/content/site";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Behind the work">
      <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
        <figure className="tile flex flex-col overflow-hidden lg:col-span-5">
          <div className="relative min-h-80 flex-1">
            <Image
              src={aboutPhoto.src}
              alt={aboutPhoto.alt}
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              // keep Wesley in frame when the landscape photo crops to a tall tile
              className="object-cover object-[45%_center]"
            />
          </div>
          <figcaption className="px-6 py-4 text-sm text-fg-secondary">
            {aboutPhoto.caption}
          </figcaption>
        </figure>

        <div className="tile p-6 md:p-10 lg:col-span-7">
          <p className="text-xl font-medium leading-snug tracking-tight text-fg md:text-2xl">
            {about.identity}
          </p>
          <h3 className="label mt-10">Outside of work</h3>
          <p className="mt-3 leading-relaxed text-fg-secondary">
            {about.outside}
          </p>
          <h3 className="label mt-8">Languages</h3>
          <p className="mt-3 text-fg-secondary">
            {about.languages.join(" · ")}
          </p>
        </div>

        <div className="tile p-6 md:p-8 lg:col-span-12">
          <h3 className="label">Education</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {education.map((edu) => (
              <li key={edu.school}>
                <p className="font-semibold leading-snug text-fg">{edu.school}</p>
                <p className="mt-1 text-sm leading-snug text-fg-secondary">
                  {edu.degree}
                </p>
                <p className="mt-2 font-mono text-xs text-fg-muted">
                  {edu.period}
                  {edu.note ? ` · ${edu.note}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
