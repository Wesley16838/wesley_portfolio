import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
          © {new Date().getFullYear()} {site.shortName} — Austin, TX
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fg-secondary transition-colors hover:text-fg"
          >
            <GitHubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fg-secondary transition-colors hover:text-fg"
          >
            <LinkedInIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${site.links.email}`}
            aria-label="Email"
            className="text-fg-secondary transition-colors hover:text-fg"
          >
            <MailIcon className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
