import CopyEmail from "@/components/CopyEmail";
import NewTab from "@/components/NewTab";
import { site } from "@/content/site";

const pill =
  "btn border-current bg-transparent text-current hover:bg-on-accent/10";

/** Closing accent tile — the one place the site asks for something. */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="tile tile-accent mt-20 p-8 md:mt-28 md:p-14"
    >
      <p className="font-mono text-xs uppercase tracking-[0.1em]">Contact</p>
      <h2
        id="contact-heading"
        className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl"
      >
        Let&rsquo;s build something.
      </h2>
      <p className="mt-5 max-w-md text-lg leading-relaxed">
        Open to conversations about AI product systems, frontend architecture,
        and building from zero.
      </p>
      <a
        href={`mailto:${site.links.email}`}
        className="mt-8 inline-block break-all text-xl font-semibold underline decoration-2 underline-offset-8 md:text-3xl"
      >
        {site.links.email}
      </a>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <CopyEmail email={site.links.email} />
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          LinkedIn
          <NewTab />
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          GitHub
          <NewTab />
        </a>
        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          Résumé
          <NewTab />
        </a>
      </div>
    </section>
  );
}
