import Avatar from "@/components/Avatar";
import NewTab from "@/components/NewTab";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import { now, site } from "@/content/site";

/** Opening bento row: who Wesley is (intro tile) and what he's doing (now tile). */
export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="grid gap-4 md:gap-5 lg:grid-cols-12"
    >
      <div className="tile p-6 md:p-10 lg:col-span-8">
        <div className="flex items-center gap-5">
          <Avatar className="enter-scale avatar-tilt h-24 w-24 shrink-0 [--enter-delay:100ms] md:h-36 md:w-36" />
          <p className="label enter max-w-xs [--enter-delay:120ms]">
            {site.headline}
          </p>
        </div>

        {/* The headline and intro are the largest things on screen, so they only
            rise into place - they are readable from the very first frame.
            Everything around them fades in on a stagger. */}
        <h1 className="enter-rise mt-8 text-4xl font-semibold leading-[1.08] tracking-tight text-fg md:text-5xl">
          {site.greeting}{" "}
          <span className="block text-fg-muted">{site.heroTitle}</span>
        </h1>
        <p className="enter-rise mt-6 max-w-2xl text-lg leading-relaxed text-fg-secondary [--enter-delay:80ms]">
          {site.heroBody}
        </p>

        <div className="enter mt-8 flex flex-wrap items-center gap-3 [--enter-delay:350ms]">
          <a href="#work" className="btn btn-primary">
            See my work
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Résumé
            <NewTab />
          </a>
          <ul className="flex items-center">
            <li>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <GitHubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                <NewTab />
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
              >
                <LinkedInIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
                <NewTab />
              </a>
            </li>
            <li>
              <a href={`mailto:${site.links.email}`} className="icon-btn">
                <MailIcon className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tile enter flex flex-col p-6 [--enter-delay:450ms] md:p-8 lg:col-span-4">
        <p className="label flex items-center gap-2">
          <span
            aria-hidden="true"
            className="animate-pulse-dot h-2 w-2 rounded-full bg-accent"
          />
          Now
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-fg">
          {now.role}
        </h2>
        <p className="mt-1 text-fg-secondary">{now.org}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {now.focus.map((item) => (
            <li
              key={item}
              className="rounded-2xl bg-surface-2 px-4 py-3 text-sm leading-relaxed text-fg"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-fg-secondary">
          <MapPinIcon className="h-4 w-4" />
          {now.location}
        </p>
      </div>
    </section>
  );
}
